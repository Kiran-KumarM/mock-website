import { useState } from 'react';
import { validateQuestion } from '../utils/questionValidator';
import './QuestionEditor.css';

function QuestionEditor({ questions: initialQuestions, onSave, onCancel }) {
    const [questions, setQuestions] = useState(initialQuestions);
    const [examTitle, setExamTitle] = useState('Custom Mock Test');
    const [duration, setDuration] = useState(60);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleQuestionChange = (index, field, value) => {
        const updated = [...questions];
        updated[index] = { ...updated[index], [field]: value };
        setQuestions(updated);
    };

    const handleOptionChange = (questionIndex, optionIndex, value) => {
        const updated = [...questions];
        updated[questionIndex].options[optionIndex] = value;
        setQuestions(updated);
    };

    const handleDeleteQuestion = (index) => {
        const updated = questions.filter((_, i) => i !== index);
        setQuestions(updated);
    };

    const handleAddQuestion = () => {
        const newQuestion = {
            id: Date.now(),
            question: '',
            options: ['', '', '', ''],
            correctAnswer: 0,
            subject: 'General',
            explanation: '',
        };
        setQuestions([...questions, newQuestion]);
        setEditingIndex(questions.length);
    };

    const handleSave = () => {
        // Validate all questions
        const invalidQuestions = questions.filter((q, index) => {
            const validation = validateQuestion(q);
            if (!validation.valid) {
                console.warn(`Question ${index + 1} has errors:`, validation.errors);
                return true;
            }
            return false;
        });

        if (invalidQuestions.length > 0) {
            alert(`${invalidQuestions.length} question(s) have validation errors. Please fix them before saving.`);
            return;
        }

        if (questions.length === 0) {
            alert('Please add at least one question');
            return;
        }

        const examMetadata = {
            id: `custom-${Date.now()}`,
            title: examTitle,
            duration: parseInt(duration),
            totalQuestions: questions.length,
            description: 'Custom exam from uploaded PDF',
            difficulty: 'Medium',
            isCustom: true,
            createdAt: new Date().toISOString(),
        };

        onSave(questions, examMetadata);
    };

    return (
        <div className="question-editor">
            <div className="editor-header">
                <h2>📝 Review & Edit Questions</h2>
                <p className="question-count">{questions.length} questions found</p>
            </div>

            <div className="exam-metadata">
                <div className="metadata-field">
                    <label>Exam Title</label>
                    <input
                        type="text"
                        value={examTitle}
                        onChange={(e) => setExamTitle(e.target.value)}
                        placeholder="Enter exam title"
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
                {questions.map((q, qIndex) => {
                    const validation = validateQuestion(q);
                    const isEditing = editingIndex === qIndex;

                    return (
                        <div key={q.id} className={`question-card ${!validation.valid ? 'invalid' : ''}`}>
                            <div className="question-card-header">
                                <span className="question-number">Question {qIndex + 1}</span>
                                <div className="question-actions">
                                    <button
                                        className="btn-icon"
                                        onClick={() => setEditingIndex(isEditing ? null : qIndex)}
                                    >
                                        {isEditing ? '✓' : '✏️'}
                                    </button>
                                    <button
                                        className="btn-icon delete"
                                        onClick={() => handleDeleteQuestion(qIndex)}
                                    >
                                        🗑️
                                    </button>
                                </div>
                            </div>

                            {!validation.valid && (
                                <div className="validation-errors">
                                    {validation.errors.map((err, i) => (
                                        <p key={i} className="error-text">⚠️ {err}</p>
                                    ))}
                                </div>
                            )}

                            <div className="question-field">
                                <label>Subject</label>
                                <input
                                    type="text"
                                    value={q.subject || ''}
                                    onChange={(e) => handleQuestionChange(qIndex, 'subject', e.target.value)}
                                    disabled={!isEditing}
                                />
                            </div>

                            <div className="question-field">
                                <label>Question</label>
                                <textarea
                                    value={q.question}
                                    onChange={(e) => handleQuestionChange(qIndex, 'question', e.target.value)}
                                    disabled={!isEditing}
                                    rows="3"
                                />
                            </div>

                            <div className="options-field">
                                <label>Options</label>
                                {q.options.map((option, oIndex) => (
                                    <div key={oIndex} className="option-input-row">
                                        <span className="option-label">{String.fromCharCode(65 + oIndex)}.</span>
                                        <input
                                            type="text"
                                            value={option}
                                            onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                                            disabled={!isEditing}
                                        />
                                        <input
                                            type="radio"
                                            name={`correct-${qIndex}`}
                                            checked={q.correctAnswer === oIndex}
                                            onChange={() => handleQuestionChange(qIndex, 'correctAnswer', oIndex)}
                                            disabled={!isEditing}
                                            title="Mark as correct answer"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="question-field">
                                <label>Explanation (Optional)</label>
                                <textarea
                                    value={q.explanation || ''}
                                    onChange={(e) => handleQuestionChange(qIndex, 'explanation', e.target.value)}
                                    disabled={!isEditing}
                                    rows="2"
                                    placeholder="Add explanation for the answer"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="editor-actions">
                <button className="btn-secondary" onClick={handleAddQuestion}>
                    ➕ Add Question
                </button>
                <div className="action-buttons">
                    <button className="btn-secondary" onClick={onCancel}>
                        Cancel
                    </button>
                    <button className="btn-success" onClick={handleSave}>
                        Save & Create Test ({questions.length} questions)
                    </button>
                </div>
            </div>
        </div>
    );
}

export default QuestionEditor;
