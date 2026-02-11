import { useState } from 'react';
import './ManualQuestionEntry.css';

function ManualQuestionEntry({ onSave, onCancel, pdfText }) {
    const [questions, setQuestions] = useState([createEmptyQuestion()]);
    const [examTitle, setExamTitle] = useState('Custom Mock Test');
    const [duration, setDuration] = useState(60);
    const [copySuccess, setCopySuccess] = useState(false);

    function createEmptyQuestion() {
        return {
            id: Date.now() + Math.random(),
            question: '',
            options: ['', '', '', ''],
            correctAnswer: 0,
            subject: 'General',
            explanation: '',
        };
    }

    const handleCopyText = async () => {
        try {
            await navigator.clipboard.writeText(pdfText);
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        } catch (err) {
            console.error('Failed to copy text:', err);
            alert('Failed to copy text to clipboard');
        }
    };

    const handleAddQuestion = () => {
        setQuestions([...questions, createEmptyQuestion()]);
    };

    const handleDeleteQuestion = (index) => {
        if (questions.length === 1) {
            alert('You must have at least one question');
            return;
        }
        setQuestions(questions.filter((_, i) => i !== index));
    };

    const handleQuestionChange = (index, field, value) => {
        const updated = [...questions];
        updated[index] = { ...updated[index], [field]: value };
        setQuestions(updated);
    };

    const handleOptionChange = (qIndex, oIndex, value) => {
        const updated = [...questions];
        updated[qIndex].options[oIndex] = value;
        setQuestions(updated);
    };

    const handleSave = () => {
        // Validate
        const invalid = questions.filter(q =>
            !q.question.trim() ||
            q.options.some(opt => !opt.trim())
        );

        if (invalid.length > 0) {
            alert(`Please fill in all questions and options. ${invalid.length} question(s) are incomplete.`);
            return;
        }

        const examMetadata = {
            id: `custom-${Date.now()}`,
            title: examTitle,
            duration: parseInt(duration),
            totalQuestions: questions.length,
            description: 'Custom exam - manually entered',
            difficulty: 'Medium',
            isCustom: true,
            createdAt: new Date().toISOString(),
        };

        onSave(questions, examMetadata);
    };

    return (
        <div className="manual-entry-container">
            <div className="manual-entry-header">
                <h2>✏️ Manual Question Entry</h2>
                <p>Enter your questions manually (extracted text shown below for reference)</p>
            </div>

            {pdfText && (
                <div className="pdf-text-reference">
                    <div className="pdf-text-header">
                        <h3>📄 Extracted PDF Text (for reference)</h3>
                        <button
                            className={`btn-copy ${copySuccess ? 'copied' : ''}`}
                            onClick={handleCopyText}
                            title="Copy to clipboard"
                        >
                            {copySuccess ? '✓ Copied!' : '📋 Copy Text'}
                        </button>
                    </div>
                    <div className="pdf-text-content">{pdfText}</div>
                </div>
            )}

            <div className="exam-metadata">
                <div className="metadata-field">
                    <label>Exam Title</label>
                    <input
                        type="text"
                        value={examTitle}
                        onChange={(e) => setExamTitle(e.target.value)}
                    />
                </div>
                <div className="metadata-field">
                    <label>Duration (minutes)</label>
                    <input
                        type="number"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        min="1"
                        max="300"
                    />
                </div>
            </div>

            <div className="questions-list">
                {questions.map((q, qIndex) => (
                    <div key={q.id} className="question-card">
                        <div className="question-header">
                            <span className="question-number">Question {qIndex + 1}</span>
                            <button
                                className="btn-delete-small"
                                onClick={() => handleDeleteQuestion(qIndex)}
                            >
                                🗑️
                            </button>
                        </div>

                        <div className="form-field">
                            <label>Subject</label>
                            <input
                                type="text"
                                value={q.subject}
                                onChange={(e) => handleQuestionChange(qIndex, 'subject', e.target.value)}
                            />
                        </div>

                        <div className="form-field">
                            <label>Question</label>
                            <textarea
                                value={q.question}
                                onChange={(e) => handleQuestionChange(qIndex, 'question', e.target.value)}
                                rows="3"
                                placeholder="Enter the question text"
                            />
                        </div>

                        <div className="options-field">
                            <label>Options</label>
                            {q.options.map((option, oIndex) => (
                                <div key={oIndex} className="option-row">
                                    <span className="option-label">{String.fromCharCode(65 + oIndex)}.</span>
                                    <input
                                        type="text"
                                        value={option}
                                        onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                                        placeholder={`Option ${String.fromCharCode(65 + oIndex)}`}
                                    />
                                    <input
                                        type="radio"
                                        name={`correct-${qIndex}`}
                                        checked={q.correctAnswer === oIndex}
                                        onChange={() => handleQuestionChange(qIndex, 'correctAnswer', oIndex)}
                                        title="Mark as correct"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="form-field">
                            <label>Explanation (Optional)</label>
                            <textarea
                                value={q.explanation}
                                onChange={(e) => handleQuestionChange(qIndex, 'explanation', e.target.value)}
                                rows="2"
                                placeholder="Explain the correct answer"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="entry-actions">
                <button className="btn-secondary" onClick={handleAddQuestion}>
                    ➕ Add Another Question
                </button>
                <div className="action-buttons">
                    <button className="btn-secondary" onClick={onCancel}>
                        Cancel
                    </button>
                    <button className="btn-success" onClick={handleSave}>
                        Save Test ({questions.length} questions)
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ManualQuestionEntry;
