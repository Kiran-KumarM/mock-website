import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { exams, questions } from '../data/questionBank';
import './InstructionsPage.css';

function InstructionsPage() {
    const { examId } = useParams();
    const navigate = useNavigate();

    // Subject selection state
    const [selectedSubjects, setSelectedSubjects] = useState({
        'Reasoning Ability': true,
        'English Language': true,
        'Quantitative Aptitude': true
    });

    // Find the exam from all categories
    let exam = null;
    for (const categoryExams of Object.values(exams)) {
        exam = categoryExams.find(e => e.id === examId);
        if (exam) break;
    }

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

    const handleSubjectToggle = (subject) => {
        setSelectedSubjects(prev => ({
            ...prev,
            [subject]: !prev[subject]
        }));
    };

    const handleStartTest = () => {
        // Check if at least one subject is selected
        const hasSelection = Object.values(selectedSubjects).some(val => val);
        if (!hasSelection) {
            alert('Please select at least one subject to practice!');
            return;
        }

        // Save exam and selected subjects to localStorage
        localStorage.setItem('currentExam', JSON.stringify(exam));
        localStorage.setItem('selectedSubjects', JSON.stringify(selectedSubjects));
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

                        <div className="instruction-section">
                            <h3>📚 Select Subjects to Practice</h3>
                            <div className="subject-selection">
                                {Object.keys(selectedSubjects).map(subject => (
                                    <label key={subject} className="subject-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={selectedSubjects[subject]}
                                            onChange={() => handleSubjectToggle(subject)}
                                        />
                                        <span className="checkbox-label">{subject}</span>
                                    </label>
                                ))}
                            </div>
                            <p className="subject-hint">
                                💡 Select the subjects you want to practice. Questions will be filtered accordingly.
                            </p>
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
