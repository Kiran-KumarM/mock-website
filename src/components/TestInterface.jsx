import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { exams, questions as questionBank } from '../data/questionBank';
import Timer from './Timer';
import './TestInterface.css';

function TestInterface({ customQuestions }) {
    const { examId } = useParams();
    const navigate = useNavigate();

    // Get exam from localStorage (set by InstructionsPage)
    const [exam, setExam] = useState(null);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const savedExam = localStorage.getItem('currentExam');
        const savedSubjects = localStorage.getItem('selectedSubjects');

        if (savedExam) {
            const examData = JSON.parse(savedExam);
            setExam(examData);

            // Get questions for this exam
            let examQuestions = customQuestions && customQuestions[examId]
                ? customQuestions[examId]
                : questionBank[examId] || [];

            // Filter questions by selected subjects
            if (savedSubjects) {
                const selectedSubjects = JSON.parse(savedSubjects);
                const selectedSubjectNames = Object.keys(selectedSubjects).filter(
                    subject => selectedSubjects[subject]
                );

                examQuestions = examQuestions.filter(q =>
                    selectedSubjectNames.includes(q.subject)
                );
            }

            setQuestions(examQuestions);
        } else {
            // If no exam in localStorage, redirect to home
            navigate('/');
        }
    }, [examId, customQuestions, navigate]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [markedForReview, setMarkedForReview] = useState(new Set());
    const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

    const handleAnswer = (questionId, answerIndex) => {
        setAnswers({
            ...answers,
            [questionId]: answerIndex,
        });
    };

    const handleMarkForReview = () => {
        const newMarked = new Set(markedForReview);
        const questionId = questions[currentQuestion].id;

        if (newMarked.has(questionId)) {
            newMarked.delete(questionId);
        } else {
            newMarked.add(questionId);
        }

        setMarkedForReview(newMarked);
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleQuestionJump = (index) => {
        setCurrentQuestion(index);
    };

    const handleSubmit = () => {
        setShowSubmitConfirm(true);
    };

    const confirmSubmit = () => {
        // Save answers to localStorage
        localStorage.setItem('userAnswers', JSON.stringify(answers));
        // Navigate to results
        navigate(`/results/${examId}`);
    };

    const handleTimeUp = () => {
        // Save answers to localStorage
        localStorage.setItem('userAnswers', JSON.stringify(answers));
        // Navigate to results
        navigate(`/results/${examId}`);
    };

    const getQuestionStatus = (question) => {
        const questionId = question.id;
        if (answers[questionId] !== undefined) {
            return 'answered';
        }
        if (markedForReview.has(questionId)) {
            return 'marked';
        }
        return 'not-answered';
    };

    const getStatusCounts = () => {
        const answered = Object.keys(answers).length;
        const marked = markedForReview.size;
        const notAnswered = questions.length - answered;

        return { answered, marked, notAnswered };
    };

    const currentQ = questions[currentQuestion];
    const statusCounts = getStatusCounts();

    // Show loading if exam or questions not loaded
    if (!exam || questions.length === 0) {
        return (
            <div className="test-interface">
                <div className="loading">Loading exam...</div>
            </div>
        );
    }

    return (
        <div className="test-interface">
            {/* Header */}
            <div className="test-header">
                <div className="test-title">
                    <h2>{exam.title}</h2>
                </div>
                <Timer duration={exam.duration} onTimeUp={handleTimeUp} />
            </div>

            <div className="test-content">
                {/* Question Panel */}
                <div className="question-panel">
                    <div className="question-header">
                        <div className="question-number">
                            Question {currentQuestion + 1} of {questions.length}
                        </div>
                        <div className="question-subject">{currentQ.subject}</div>
                    </div>

                    <div className="question-text">
                        {currentQ.question}
                    </div>

                    <div className="options-container">
                        {currentQ.options.map((option, index) => (
                            <div
                                key={index}
                                className={`option ${answers[currentQ.id] === index ? 'selected' : ''
                                    }`}
                                onClick={() => handleAnswer(currentQ.id, index)}
                            >
                                <div className="option-indicator">
                                    {String.fromCharCode(65 + index)}
                                </div>
                                <div className="option-text">{option}</div>
                            </div>
                        ))}
                    </div>

                    <div className="question-actions">
                        <button
                            className={`btn-secondary ${markedForReview.has(currentQ.id) ? 'marked' : ''
                                }`}
                            onClick={handleMarkForReview}
                        >
                            {markedForReview.has(currentQ.id) ? '⭐ Marked' : '☆ Mark for Review'}
                        </button>
                        <div className="navigation-buttons">
                            <button
                                className="btn-secondary"
                                onClick={handlePrevious}
                                disabled={currentQuestion === 0}
                            >
                                ← Previous
                            </button>
                            <button
                                className="btn-secondary"
                                onClick={handleNext}
                                disabled={currentQuestion === questions.length - 1}
                            >
                                Next →
                            </button>
                        </div>
                    </div>
                </div>

                {/* Question Palette */}
                <div className="question-palette-container">
                    <div className="palette-header">
                        <h3>Question Palette</h3>
                    </div>

                    <div className="palette-stats">
                        <div className="stat-item answered">
                            <span className="stat-indicator"></span>
                            <span>Answered: {statusCounts.answered}</span>
                        </div>
                        <div className="stat-item not-answered">
                            <span className="stat-indicator"></span>
                            <span>Not Answered: {statusCounts.notAnswered}</span>
                        </div>
                        <div className="stat-item marked">
                            <span className="stat-indicator"></span>
                            <span>Marked: {statusCounts.marked}</span>
                        </div>
                    </div>

                    <div className="palette-grid">
                        {questions.map((question, index) => (
                            <button
                                key={question.id}
                                className={`palette-button ${getQuestionStatus(question)} ${index === currentQuestion ? 'current' : ''
                                    }`}
                                onClick={() => handleQuestionJump(index)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>

                    <div className="submit-section">
                        <button className="btn-success" onClick={handleSubmit}>
                            Submit Test
                        </button>
                    </div>
                </div>
            </div>

            {/* Submit Confirmation Modal */}
            {showSubmitConfirm && (
                <div className="modal-overlay" onClick={() => setShowSubmitConfirm(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>⚠️ Confirm Submission</h3>
                        <p>Are you sure you want to submit the test?</p>
                        <div className="modal-stats">
                            <p><strong>Answered:</strong> {statusCounts.answered} / {questions.length}</p>
                            <p><strong>Not Answered:</strong> {statusCounts.notAnswered}</p>
                            <p><strong>Marked for Review:</strong> {statusCounts.marked}</p>
                        </div>
                        <p className="modal-warning">You cannot change your answers after submission.</p>
                        <div className="modal-actions">
                            <button
                                className="btn-secondary"
                                onClick={() => setShowSubmitConfirm(false)}
                            >
                                Cancel
                            </button>
                            <button className="btn-success" onClick={confirmSubmit}>
                                Confirm Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TestInterface;
