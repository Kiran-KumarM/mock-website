import { useState, useEffect } from 'react';
import Home from './components/Home';
import TestInterface from './components/TestInterface';
import Results from './components/Results';
import { examCategories, exams, allExams, questions } from './data/questionBank';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'test', 'results'
  const [selectedExam, setSelectedExam] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [customExams, setCustomExams] = useState([]);
  const [customQuestions, setCustomQuestions] = useState({});

  // Load custom exams from localStorage on mount
  useEffect(() => {
    const savedExams = localStorage.getItem('customExams');
    const savedQuestions = localStorage.getItem('customQuestions');

    if (savedExams) {
      try {
        setCustomExams(JSON.parse(savedExams));
      } catch (error) {
        console.error('Error loading custom exams:', error);
      }
    }

    if (savedQuestions) {
      try {
        setCustomQuestions(JSON.parse(savedQuestions));
      } catch (error) {
        console.error('Error loading custom questions:', error);
      }
    }
  }, []);

  // Save custom exams to localStorage whenever they change
  useEffect(() => {
    if (customExams.length > 0) {
      localStorage.setItem('customExams', JSON.stringify(customExams));
    }
  }, [customExams]);

  // Save custom questions to localStorage whenever they change
  useEffect(() => {
    if (Object.keys(customQuestions).length > 0) {
      localStorage.setItem('customQuestions', JSON.stringify(customQuestions));
    }
  }, [customQuestions]);

  const handleStartExam = (exam) => {
    setSelectedExam(exam);
    setUserAnswers({});
    setCurrentView('test');
  };

  const handleSubmitTest = (answers) => {
    setUserAnswers(answers);
    setCurrentView('results');
  };

  const handleReturnHome = () => {
    setCurrentView('home');
    setSelectedExam(null);
    setUserAnswers({});
  };

  const handleSaveCustomExam = (questions, examMetadata) => {
    // Add to custom exams
    setCustomExams(prev => [...prev, examMetadata]);

    // Add questions
    setCustomQuestions(prev => ({
      ...prev,
      [examMetadata.id]: questions,
    }));
  };

  const handleDeleteCustomExam = (examId) => {
    setCustomExams(prev => prev.filter(exam => exam.id !== examId));
    setCustomQuestions(prev => {
      const updated = { ...prev };
      delete updated[examId];
      return updated;
    });

    // Update localStorage
    const updatedExams = customExams.filter(exam => exam.id !== examId);
    const updatedQuestions = { ...customQuestions };
    delete updatedQuestions[examId];

    localStorage.setItem('customExams', JSON.stringify(updatedExams));
    localStorage.setItem('customQuestions', JSON.stringify(updatedQuestions));
  };

  // Get questions for current exam (either predefined or custom)
  const getCurrentQuestions = () => {
    if (!selectedExam) return [];
    return selectedExam.isCustom
      ? customQuestions[selectedExam.id]
      : questions[selectedExam.id];
  };

  return (
    <div className="app">
      {currentView === 'home' && (
        <Home
          examCategories={examCategories}
          exams={exams}
          customExams={customExams}
          onStartExam={handleStartExam}
          onSaveCustomExam={handleSaveCustomExam}
          onDeleteCustomExam={handleDeleteCustomExam}
        />
      )}

      {currentView === 'test' && selectedExam && (
        <TestInterface
          exam={selectedExam}
          questions={getCurrentQuestions()}
          onSubmit={handleSubmitTest}
        />
      )}

      {currentView === 'results' && selectedExam && (
        <Results
          exam={selectedExam}
          questions={getCurrentQuestions()}
          userAnswers={userAnswers}
          onReturnHome={handleReturnHome}
        />
      )}
    </div>
  );
}

export default App;

