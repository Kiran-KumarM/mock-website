import { useState } from 'react';
import PDFUpload from './PDFUpload';
import './Home.css';

function Home({ onStartExam, examCategories, exams, customExams, onSaveCustomExam, onDeleteCustomExam }) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedExam, setSelectedExam] = useState(null);
    const [showInstructions, setShowInstructions] = useState(false);
    const [showPDFUpload, setShowPDFUpload] = useState(false);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setSelectedExam(null);
        setShowInstructions(false);
    };

    const handleExamSelect = (exam) => {
        setSelectedExam(exam);
        setShowInstructions(true);
    };

    const handleStartTest = () => {
        if (selectedExam) {
            onStartExam(selectedExam);
        }
    };

    const handleBack = () => {
        if (showInstructions) {
            setShowInstructions(false);
            setSelectedExam(null);
        } else if (selectedCategory) {
            setSelectedCategory(null);
        }
    };

    const handleSavePDFQuestions = (questions, examMetadata) => {
        onSaveCustomExam(questions, examMetadata);
        setShowPDFUpload(false);
        alert(`✅ Custom exam "${examMetadata.title}" created successfully with ${questions.length} questions!`);
    };

    const handleDeleteExam = (examId) => {
        if (confirm('Are you sure you want to delete this custom exam?')) {
            onDeleteCustomExam(examId);
        }
    };



    return (
        <div className="home-container">
            <div className="home-header fade-in">
                <h1>🎓 Banking how to Exam Portal</h1>
                <p className="subtitle">Prepare for IBPS, SBI, RRB & Other Banking Exams</p>
            </div>

            {!selectedCategory && !showInstructions && (
                <>
                    <div className="category-grid fade-in">
                        {examCategories.map((category, index) => (
                            <div
                                key={category.id}
                                className="category-card card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="category-icon">{category.icon}</div>
                                <h3>{category.title}</h3>
                                <p className="category-description">{category.description}</p>

                                <button
                                    className="btn-primary"
                                    onClick={() => handleCategorySelect(category)}
                                >
                                    View Years →
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Custom Exams Section */}
                    {customExams && customExams.length > 0 && (
                        <div className="custom-exams-section fade-in">
                            <h2>📚 Your Custom Exams</h2>
                            <div className="custom-exams-grid">
                                {customExams.map((exam, index) => (
                                    <div
                                        key={exam.id}
                                        className="custom-exam-card card"
                                        style={{ animationDelay: `${index * 0.05}s` }}
                                    >
                                        <div className="custom-badge">Custom</div>
                                        <h4>{exam.title}</h4>
                                        <div className="exam-details">
                                            <div className="detail-item">
                                                <span className="detail-icon">⏱️</span>
                                                <span>{exam.duration} minutes</span>
                                            </div>
                                            <div className="detail-item">
                                                <span className="detail-icon">📊</span>
                                                <span>{exam.totalQuestions} questions</span>
                                            </div>
                                        </div>
                                        <div className="custom-exam-actions">
                                            <button
                                                className="btn-primary"
                                                onClick={() => handleExamSelect(exam)}
                                            >
                                                Start Exam
                                            </button>
                                            <button
                                                className="btn-delete"
                                                onClick={() => handleDeleteExam(exam.id)}
                                            >
                                                🗑️
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Upload PDF Button */}
                    <div className="upload-section fade-in">
                        <button
                            className="btn-upload"
                            onClick={() => setShowPDFUpload(true)}
                        >
                            📄 Upload Question PDF
                        </button>
                        <p className="upload-hint">Create custom tests from your own PDF files</p>
                    </div>
                </>
            )}

            {selectedCategory && !showInstructions && (
                <div className="years-container fade-in">
                    <button className="btn-secondary back-button" onClick={handleBack}>
                        ← Back to Categories
                    </button>

                    <div className="years-header">
                        <h2>{selectedCategory.icon} {selectedCategory.title}</h2>
                        <p>{selectedCategory.description}</p>
                    </div>

                    <div className="years-grid">
                        {exams[selectedCategory.id].map((exam, index) => (
                            <div
                                key={exam.id}
                                className="year-card card"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <div className="year-badge">{exam.year}</div>
                                <h4>{exam.title}</h4>

                                <div className="exam-details">
                                    <div className="detail-item">
                                        <span className="detail-icon">⏱️</span>
                                        <span>{exam.duration} minutes</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-icon">📊</span>
                                        <span>{exam.totalQuestions} questions</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-icon">🎯</span>
                                        <span>{exam.difficulty}</span>
                                    </div>
                                </div>

                                <p className="exam-description">{exam.description}</p>

                                <button
                                    className="btn-primary"
                                    onClick={() => handleExamSelect(exam)}
                                >
                                    Start Exam
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {showInstructions && (
                <div className="instructions-container fade-in">
                    <div className="card instructions-card">
                        <h2>📋 Exam Instructions</h2>
                        <div className="instructions-content">
                            <div className="instruction-section">
                                <h3>General Instructions</h3>
                                <ul>
                                    <li>Total Duration: <strong>{selectedExam.duration} minutes</strong></li>
                                    <li>Total Questions: <strong>{selectedExam.totalQuestions}</strong></li>
                                    <li>Each question carries equal marks</li>
                                    <li>There is no negative marking</li>
                                    <li>The test will auto-submit when time expires</li>
                                </ul>
                            </div>

                            <div className="instruction-section">
                                <h3>Navigation & Controls</h3>
                                <ul>
                                    <li>Use the question palette to navigate between questions</li>
                                    <li>Click on question numbers to jump to specific questions</li>
                                    <li>You can mark questions for review and revisit them later</li>
                                    <li>Answered questions will be highlighted in green</li>
                                    <li>Questions marked for review will be highlighted in orange</li>
                                </ul>
                            </div>

                            <div className="instruction-section">
                                <h3>Important Points</h3>
                                <ul>
                                    <li>Make sure you have a stable internet connection</li>
                                    <li>Do not refresh the page during the exam</li>
                                    <li>Click "Submit Test" when you're done</li>
                                    <li>You can review your answers after submission</li>
                                </ul>
                            </div>

                            <div className="exam-info-box">
                                <h4>Selected Exam: {selectedExam.title}</h4>
                                <p>{selectedExam.description}</p>
                            </div>
                        </div>

                        <div className="instructions-actions">
                            <button
                                className="btn-secondary"
                                onClick={handleBack}
                            >
                                ← Back
                            </button>
                            <button
                                className="btn-success"
                                onClick={handleStartTest}
                            >
                                Start Test →
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="features-section fade-in">
                <h2>Why Choose Our Platform?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">⚡</div>
                        <h4>Real Exam Experience</h4>
                        <p>Simulate actual banking exam conditions with timed tests</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📈</div>
                        <h4>Performance Analytics</h4>
                        <p>Detailed analysis of your performance by subject</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">💡</div>
                        <h4>Detailed Solutions</h4>
                        <p>Comprehensive explanations for every question</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🎯</div>
                        <h4>Year-wise Practice</h4>
                        <p>Practice with exams from the last 5 years</p>
                    </div>
                </div>
            </div>

            {/* PDF Upload Modal */}
            {showPDFUpload && (
                <PDFUpload
                    onSaveQuestions={handleSavePDFQuestions}
                    onClose={() => setShowPDFUpload(false)}
                />
            )}
        </div>
    );
}

export default Home;
