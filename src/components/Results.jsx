import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allExams, questions as questionBank } from '../data/questionBank';
import './Results.css';

function Results({ customQuestions }) {
    const { examId } = useParams();
    const navigate = useNavigate();

    // Get exam and answers from localStorage
    const [exam, setExam] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState({});

    useEffect(() => {
        const savedExam = localStorage.getItem('currentExam');
        const savedAnswers = localStorage.getItem('userAnswers');

        if (savedExam && savedAnswers) {
            const examData = JSON.parse(savedExam);
            setExam(examData);
            setUserAnswers(JSON.parse(savedAnswers));

            // Get questions for this exam
            const examQuestions = customQuestions && customQuestions[examId]
                ? customQuestions[examId]
                : questionBank[examId] || [];
            setQuestions(examQuestions);
        } else {
            // If no data, redirect to home
            navigate('/');
        }
    }, [examId, customQuestions, navigate]);

    const [showExplanations, setShowExplanations] = useState(true);
    const [filterSubject, setFilterSubject] = useState('all');
    const [showPdfViewer, setShowPdfViewer] = useState(false);

    const handleReturnHome = () => {
        // Clear localStorage
        localStorage.removeItem('currentExam');
        localStorage.removeItem('userAnswers');
        navigate('/');
    };

    // Calculate results
    const calculateResults = () => {
        let correct = 0;
        let incorrect = 0;
        let unanswered = 0;
        const subjectWise = {};

        questions.forEach((question) => {
            const userAnswer = userAnswers[question.id];
            const isCorrect = userAnswer === question.correctAnswer;

            // Initialize subject if not exists
            if (!subjectWise[question.subject]) {
                subjectWise[question.subject] = {
                    total: 0,
                    correct: 0,
                    incorrect: 0,
                    unanswered: 0,
                };
            }

            subjectWise[question.subject].total++;

            if (userAnswer === undefined) {
                unanswered++;
                subjectWise[question.subject].unanswered++;
            } else if (isCorrect) {
                correct++;
                subjectWise[question.subject].correct++;
            } else {
                incorrect++;
                subjectWise[question.subject].incorrect++;
            }
        });

        const totalQuestions = questions.length;
        const percentage = ((correct / totalQuestions) * 100).toFixed(2);

        return {
            correct,
            incorrect,
            unanswered,
            totalQuestions,
            percentage,
            subjectWise,
        };
    };

    const results = calculateResults();
    const subjects = Object.keys(results.subjectWise);

    const getFilteredQuestions = () => {
        if (filterSubject === 'all') {
            return questions;
        }
        return questions.filter((q) => q.subject === filterSubject);
    };

    const filteredQuestions = getFilteredQuestions();

    // Show loading if data not loaded
    if (!exam || questions.length === 0) {
        return (
            <div className="results-container">
                <div className="loading">Loading results...</div>
            </div>
        );
    }

    return (
        <div className="results-container">
            <div className="results-header fade-in">
                <h1>📊 Test Results</h1>
                <p className="exam-title">{exam.title}</p>
            </div>

            {/* Score Card */}
            <div className="score-card card fade-in">
                <div className="score-main">
                    <div className="score-circle">
                        <svg viewBox="0 0 200 200">
                            <circle
                                cx="100"
                                cy="100"
                                r="90"
                                fill="none"
                                stroke="var(--bg-tertiary)"
                                strokeWidth="12"
                            />
                            <circle
                                cx="100"
                                cy="100"
                                r="90"
                                fill="none"
                                stroke="url(#gradient)"
                                strokeWidth="12"
                                strokeDasharray={`${(results.percentage / 100) * 565.48} 565.48`}
                                strokeLinecap="round"
                                transform="rotate(-90 100 100)"
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="var(--primary)" />
                                    <stop offset="100%" stopColor="var(--secondary)" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="score-text">
                            <div className="score-percentage">{results.percentage}%</div>
                            <div className="score-label">Score</div>
                        </div>
                    </div>

                    <div className="score-details">
                        <div className="score-item correct">
                            <div className="score-icon">✓</div>
                            <div className="score-info">
                                <div className="score-count">{results.correct}</div>
                                <div className="score-name">Correct</div>
                            </div>
                        </div>
                        <div className="score-item incorrect">
                            <div className="score-icon">✗</div>
                            <div className="score-info">
                                <div className="score-count">{results.incorrect}</div>
                                <div className="score-name">Incorrect</div>
                            </div>
                        </div>
                        <div className="score-item unanswered">
                            <div className="score-icon">−</div>
                            <div className="score-info">
                                <div className="score-count">{results.unanswered}</div>
                                <div className="score-name">Unanswered</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subject-wise Performance */}
            <div className="subject-performance card fade-in">
                <h2>📚 Subject-wise Performance</h2>
                <div className="subjects-grid">
                    {subjects.map((subject) => {
                        const data = results.subjectWise[subject];
                        const subjectPercentage = ((data.correct / data.total) * 100).toFixed(1);

                        return (
                            <div key={subject} className="subject-card">
                                <h4>{subject}</h4>
                                <div className="subject-stats">
                                    <div className="subject-bar">
                                        <div
                                            className="subject-bar-fill"
                                            style={{ width: `${subjectPercentage}%` }}
                                        ></div>
                                    </div>
                                    <div className="subject-numbers">
                                        <span className="correct-count">{data.correct}</span>
                                        <span className="total-count">/ {data.total}</span>
                                        <span className="percentage">{subjectPercentage}%</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* PDF Answer Key Section */}
            {exam.answerKeyPdf && (
                <div className="pdf-section card fade-in">
                    <div className="pdf-header">
                        <h2>📄 Answer Key PDF</h2>
                        <div className="pdf-controls">
                            <button
                                className="btn-secondary"
                                onClick={() => setShowPdfViewer(!showPdfViewer)}
                            >
                                {showPdfViewer ? '🔼 Hide PDF' : '🔽 View PDF'}
                            </button>
                            <a
                                href={exam.answerKeyPdf}
                                download
                                className="btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ⬇️ Download PDF
                            </a>
                        </div>
                    </div>

                    {showPdfViewer && (
                        <div className="pdf-viewer">
                            <iframe
                                src={exam.answerKeyPdf}
                                title="Answer Key PDF"
                                width="100%"
                                height="800px"
                                style={{ border: 'none', borderRadius: '8px' }}
                            />
                        </div>
                    )}
                </div>
            )}

            {/* Answer Review */}
            <div className="answer-review card fade-in">
                <div className="review-header">
                    <h2>📝 Answer Review</h2>
                    <div className="review-controls">
                        <label>
                            <input
                                type="checkbox"
                                checked={showExplanations}
                                onChange={(e) => setShowExplanations(e.target.checked)}
                            />
                            Show Explanations
                        </label>
                        <select
                            value={filterSubject}
                            onChange={(e) => setFilterSubject(e.target.value)}
                        >
                            <option value="all">All Subjects</option>
                            {subjects.map((subject) => (
                                <option key={subject} value={subject}>
                                    {subject}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="questions-review">
                    {filteredQuestions.map((question, index) => {
                        const userAnswer = userAnswers[question.id];
                        const isCorrect = userAnswer === question.correctAnswer;
                        const isAnswered = userAnswer !== undefined;

                        return (
                            <div
                                key={question.id}
                                className={`review-question ${isAnswered ? (isCorrect ? 'correct' : 'incorrect') : 'unanswered'
                                    }`}
                            >
                                <div className="review-question-header">
                                    <span className="review-question-number">
                                        Question {questions.indexOf(question) + 1}
                                    </span>
                                    <span className="review-subject-tag">{question.subject}</span>
                                    <span className="review-status">
                                        {isAnswered ? (isCorrect ? '✓ Correct' : '✗ Incorrect') : '− Not Answered'}
                                    </span>
                                </div>

                                <div className="review-question-text">{question.question}</div>

                                <div className="review-options">
                                    {question.options.map((option, optIndex) => {
                                        const isUserAnswer = userAnswer === optIndex;
                                        const isCorrectAnswer = question.correctAnswer === optIndex;

                                        return (
                                            <div
                                                key={optIndex}
                                                className={`review-option ${isCorrectAnswer ? 'correct-answer' : ''
                                                    } ${isUserAnswer && !isCorrect ? 'wrong-answer' : ''}`}
                                            >
                                                <span className="review-option-indicator">
                                                    {String.fromCharCode(65 + optIndex)}
                                                </span>
                                                <span className="review-option-text">{option}</span>
                                                {isCorrectAnswer && <span className="correct-badge">✓ Correct</span>}
                                                {isUserAnswer && !isCorrect && (
                                                    <span className="wrong-badge">Your Answer</span>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                {showExplanations && (
                                    <div className="review-explanation">
                                        <strong>Explanation:</strong> {question.explanation}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Actions */}
            <div className="results-actions fade-in">
                <button className="btn-primary" onClick={onReturnHome}>
                    ← Back to Home
                </button>
            </div>
        </div>
    );
}

export default Results;
