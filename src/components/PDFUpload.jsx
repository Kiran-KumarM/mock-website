import { useState } from 'react';
import { extractTextFromPDF, parseQuestionsWithAI, assignQuestionIds } from '../utils/pdfParser';
import { validateQuestions, sanitizeQuestion } from '../utils/questionValidator';
import QuestionEditor from './QuestionEditor';
import ManualQuestionEntry from './ManualQuestionEntry';
import './PDFUpload.css';

function PDFUpload({ onSaveQuestions, onClose }) {
    const [file, setFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [status, setStatus] = useState('idle'); // idle, extracting, parsing, editing, manual, error
    const [error, setError] = useState('');
    const [extractedText, setExtractedText] = useState('');
    const [parsedQuestions, setParsedQuestions] = useState([]);
    const [apiKey, setApiKey] = useState('');
    const [showApiKeyInput, setShowApiKeyInput] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);

        const droppedFile = e.dataTransfer.files[0];
        handleFileSelection(droppedFile);
    };

    const handleFileInput = (e) => {
        const selectedFile = e.target.files[0];
        handleFileSelection(selectedFile);
    };

    const handleFileSelection = (selectedFile) => {
        if (!selectedFile) return;

        // Validate file type
        if (selectedFile.type !== 'application/pdf') {
            setError('Please upload a PDF file');
            return;
        }

        // Validate file size (max 10MB)
        if (selectedFile.size > 10 * 1024 * 1024) {
            setError('File size must be less than 10MB');
            return;
        }

        setFile(selectedFile);
        setError('');
        setShowApiKeyInput(true);
    };

    const handleExtractAndParse = async () => {
        if (!file) return;

        if (!apiKey.trim()) {
            setError('Please enter your Google Gemini API key');
            return;
        }

        try {
            // Extract text from PDF
            setStatus('extracting');
            setError('');
            const text = await extractTextFromPDF(file);
            setExtractedText(text);

            if (!text || text.trim().length < 50) {
                throw new Error('Could not extract sufficient text from PDF. The PDF might be image-based or empty.');
            }

            // Parse questions using AI
            setStatus('parsing');
            const questions = await parseQuestionsWithAI(text, apiKey);

            if (!questions || questions.length === 0) {
                throw new Error('No questions found in the PDF. Please check the format.');
            }

            // Sanitize and assign IDs
            const sanitizedQuestions = questions.map(sanitizeQuestion);
            const questionsWithIds = assignQuestionIds(sanitizedQuestions);

            // Validate questions
            const validation = validateQuestions(questionsWithIds);

            if (!validation.valid) {
                console.warn('Some questions have validation issues:', validation.invalidQuestions);
                // Still allow editing even if there are issues
            }

            setParsedQuestions(questionsWithIds);
            setStatus('editing');
        } catch (err) {
            console.error('Error processing PDF:', err);
            setError(err.message || 'Failed to process PDF');
            setStatus('error');
        }
    };

    const handleSaveQuestions = (questions, examMetadata) => {
        onSaveQuestions(questions, examMetadata);
    };

    const handleReset = () => {
        setFile(null);
        setStatus('idle');
        setError('');
        setExtractedText('');
        setParsedQuestions([]);
        setShowApiKeyInput(false);
    };

    const handleManualEntry = async () => {
        if (!file) return;

        try {
            // Extract text from PDF
            setStatus('extracting');
            setError('');
            const text = await extractTextFromPDF(file);
            setExtractedText(text);

            // Go directly to manual entry
            setStatus('manual');
        } catch (err) {
            console.error('Error extracting text from PDF:', err);
            setError(err.message || 'Failed to extract text from PDF');
            setStatus('error');
        }
    };

    if (status === 'manual') {
        return (
            <ManualQuestionEntry
                pdfText={extractedText}
                onSave={handleSaveQuestions}
                onCancel={handleReset}
            />
        );
    }

    if (status === 'editing') {
        return (
            <QuestionEditor
                questions={parsedQuestions}
                onSave={handleSaveQuestions}
                onCancel={handleReset}
            />
        );
    }

    return (
        <div className="pdf-upload-modal">
            <div className="pdf-upload-container">
                <div className="upload-header">
                    <h2>📄 Upload Question PDF</h2>
                    <button className="close-btn" onClick={onClose}>✕</button>
                </div>

                {status === 'idle' && !showApiKeyInput && (
                    <>
                        <div
                            className={`drop-zone ${isDragging ? 'dragging' : ''}`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                        >
                            <div className="drop-zone-content">
                                <div className="upload-icon">📁</div>
                                <p className="drop-text">Drag and drop your PDF here</p>
                                <p className="drop-subtext">or</p>
                                <label className="file-input-label">
                                    <input
                                        type="file"
                                        accept=".pdf"
                                        onChange={handleFileInput}
                                        className="file-input"
                                    />
                                    <span className="btn-primary">Browse Files</span>
                                </label>
                                <p className="file-info">PDF files only, max 10MB</p>
                            </div>
                        </div>

                        {error && (
                            <div className="error-message">
                                <span className="error-icon">⚠️</span>
                                {error}
                            </div>
                        )}
                    </>
                )}

                {showApiKeyInput && status === 'idle' && (
                    <div className="api-key-section">
                        <div className="file-selected">
                            <span className="file-icon">📄</span>
                            <span className="file-name">{file?.name}</span>
                            <button className="btn-secondary-small" onClick={handleReset}>
                                Change File
                            </button>
                        </div>

                        <div className="api-key-input-container">
                            <label htmlFor="apiKey">Google Gemini API Key</label>
                            <input
                                type="password"
                                id="apiKey"
                                value={apiKey}
                                onChange={(e) => setApiKey(e.target.value)}
                                placeholder="Enter your API key"
                                className="api-key-input"
                            />
                            <p className="api-key-help">
                                Don't have an API key?{' '}
                                <a
                                    href="https://makersuite.google.com/app/apikey"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Get one free here
                                </a>
                            </p>
                        </div>

                        <div className="button-group">
                            <button
                                className="btn-success"
                                onClick={handleExtractAndParse}
                                disabled={!apiKey.trim()}
                            >
                                🤖 Extract with AI
                            </button>

                            <button
                                className="btn-secondary"
                                onClick={handleManualEntry}
                            >
                                ✏️ Skip AI - Enter Manually
                            </button>
                        </div>

                        {error && (
                            <div className="error-message">
                                <span className="error-icon">⚠️</span>
                                {error}
                            </div>
                        )}
                    </div>
                )}

                {status === 'extracting' && (
                    <div className="processing-status">
                        <div className="spinner"></div>
                        <p>Extracting text from PDF...</p>
                    </div>
                )}

                {status === 'parsing' && (
                    <div className="processing-status">
                        <div className="spinner"></div>
                        <p>Parsing questions with AI...</p>
                        <p className="processing-subtext">This may take a moment</p>
                    </div>
                )}

                {status === 'error' && (
                    <div className="error-state">
                        <div className="error-icon-large">❌</div>
                        <h3>Processing Failed</h3>
                        <p className="error-message">{error}</p>
                        <button className="btn-primary" onClick={handleReset}>
                            Try Again
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PDFUpload;
