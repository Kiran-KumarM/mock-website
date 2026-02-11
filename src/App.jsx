import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import CategoryPage from './components/CategoryPage';
import InstructionsPage from './components/InstructionsPage';
import TestInterface from './components/TestInterface';
import Results from './components/Results';
import { examCategories } from './data/questionBank';
import './App.css';

function App() {
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

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          {/* Home page - shows exam categories */}
          <Route
            path="/"
            element={
              <Home
                examCategories={examCategories}
                customExams={customExams}
                onSaveCustomExam={handleSaveCustomExam}
                onDeleteCustomExam={handleDeleteCustomExam}
              />
            }
          />

          {/* Category page - shows exams for a category */}
          <Route path="/category/:categoryId" element={<CategoryPage />} />

          {/* Instructions page - shows test instructions */}
          <Route path="/instructions/:examId" element={<InstructionsPage />} />

          {/* Test page - the actual exam */}
          <Route
            path="/test/:examId"
            element={<TestInterface customQuestions={customQuestions} />}
          />

          {/* Results page - shows results after exam */}
          <Route
            path="/results/:examId"
            element={<Results customQuestions={customQuestions} />}
          />

          {/* 404 - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
