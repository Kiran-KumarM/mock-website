import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PDFUpload from './PDFUpload';
import './Home.css';

function Home({ examCategories, customExams, onSaveCustomExam, onDeleteCustomExam }) {
    const [showPDFUpload, setShowPDFUpload] = useState(false);
    const navigate = useNavigate();

    const handleCategorySelect = (category) => {
        navigate(`/category/${category.id}`);
    };

    const handleExamSelect = (exam) => {
        navigate(`/instructions/${exam.id}`);
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
                <h1>🎓 Banking Exam Portal</h1>
                <p className="subtitle">Prepare for IBPS, SBI, RRB & Other Banking Exams</p>
            </div>

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
                            View Exams →
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
