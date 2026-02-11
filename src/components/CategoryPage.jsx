import { useParams, useNavigate } from 'react-router-dom';
import { exams } from '../data/questionBank';
import './CategoryPage.css';

function CategoryPage() {
    const { categoryId } = useParams();
    const navigate = useNavigate();

    // Find the category
    const categoryMap = {
        'ibps-po-prelims': {
            id: 'ibps-po-prelims',
            title: 'IBPS PO Prelims',
            icon: '🏦',
            description: 'Prelims examination for IBPS PO recruitment'
        },
        'ibps-po-mains': {
            id: 'ibps-po-mains',
            title: 'IBPS PO Mains',
            icon: '📊',
            description: 'Mains examination for IBPS PO recruitment'
        }
    };

    const category = categoryMap[categoryId];
    const categoryExams = exams[categoryId] || [];

    if (!category) {
        return (
            <div className="category-page">
                <div className="error-message">
                    <h2>Category not found</h2>
                    <button className="btn-primary" onClick={() => navigate('/')}>
                        Go Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="category-page">
            <div className="category-container">
                <button className="btn-secondary back-button" onClick={() => navigate('/')}>
                    ← Back to Categories
                </button>

                <div className="category-header fade-in">
                    <div className="category-icon-large">{category.icon}</div>
                    <h1>{category.title}</h1>
                    <p className="category-description">{category.description}</p>
                </div>

                <div className="exams-grid fade-in">
                    {categoryExams.map((exam, index) => (
                        <div
                            key={exam.id}
                            className="exam-card card"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="exam-year-badge">{exam.year}</div>
                            <h3>{exam.title}</h3>

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
                                onClick={() => navigate(`/instructions/${exam.id}`)}
                            >
                                View Instructions →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CategoryPage;
