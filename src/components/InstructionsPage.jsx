import { useParams, useNavigate } from 'react-router-dom';
import { allExams, questions } from '../data/questionBank';
import './InstructionsPage.css';

function InstructionsPage() {
    const { examId } = useParams();
    const navigate = useNavigate();

    // Find the exam
    const exam = allExams.find(e => e.id === examId);

    if (!exam) {
        return (
            <div className="instructions-page">
                <div className="error-message">
                    <h2>Exam not found</h2>
                    <button className="btn-primary" onClick={() => navigate('/')}>
                        Go Home
                    </button>
                </div>
            </div>
        );
    }

    const handleStartTest = () => {
        // Save exam to localStorage
        localStorage.setItem('currentExam', JSON.stringify(exam));
        // Navigate to test page
        navigate(`/test/${examId}`);
    };

    return (
        <div className="instructions-page">
            <div className="instructions-container fade-in">
                <div className="card instructions-card">
                    <h2>📋 Exam Instructions</h2>
                    <div className="instructions-content">
                        <div className="instruction-section">
                            <h3>General Instructions</h3>
                            <ul>
                                <li>Total Duration: <strong>{exam.duration} minutes</strong></li>
                                <li>Total Questions: <strong>{exam.totalQuestions}</strong></li>
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
                            <h4>Selected Exam: {exam.title}</h4>
                            <p>{exam.description}</p>
                        </div>
                    </div>

                    <div className="instructions-actions">
                        <button
                            className="btn-secondary"
                            onClick={() => navigate(`/category/${exam.categoryId}`)}
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
        </div>
    );
}

export default InstructionsPage;
