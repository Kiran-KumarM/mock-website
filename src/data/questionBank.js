// Question Bank for Indian Banking Exams
// Organized by exam type and year

import { ibpsPoPre2025Aug24Questions } from './ibps-po-pre-2025-aug-24';
import { ibpsPoPreOct192024Questions } from './ibps-po-pre-oct-19-2024';

export const examCategories = [
  {
    id: 'ibps-po-prelims',
    title: 'IBPS PO Prelims',
    icon: '📘',
    description: 'Preliminary examination for IBPS PO',
  },
  {
    id: 'ibps-po-mains',
    title: 'IBPS PO Mains',
    icon: '📗',
    description: 'Main examination for IBPS PO',
  },
];

export const examYears = [2026, 2025, 2024, 2023, 2022];

export const exams = {
  'ibps-po-prelims': [
    {
      id: 'ibps-po-prelims-2025-aug-24-shift-1',
      categoryId: 'ibps-po-prelims',
      year: 2025,
      title: 'IBPS PO Prelims 2025 (Aug 24 - Shift 1)',
      duration: 60,
      totalQuestions: 100,
      description: 'Memory-based paper: Reasoning Ability (35), English Language (30), Quantitative Aptitude (35)',
      difficulty: 'Medium',
      sections: [
        { name: 'Reasoning Ability', questions: 35 },
        { name: 'English Language', questions: 30 },
        { name: 'Quantitative Aptitude', questions: 35 }
      ],
      answerKeyPdf: '/pdfs/ibps-po-prelims-2025-aug-24-shift-1.pdf',
    },
    {
      id: 'ibps-po-prelims-2024-oct-19-shift-1',
      categoryId: 'ibps-po-prelims',
      year: 2024,
      title: 'IBPS PO Prelims 2024 (Oct 19 - Shift 1)',
      duration: 60,
      totalQuestions: 100,
      description: 'Memory-based paper: Reasoning Ability (35), English Language (30), Quantitative Aptitude (35)',
      difficulty: 'Medium',
      sections: [
        { name: 'Reasoning Ability', questions: 35 },
        { name: 'English Language', questions: 30 },
        { name: 'Quantitative Aptitude', questions: 35 }
      ],
      answerKeyPdf: '/pdfs/ibps-po-prelims-2024-oct-19-shift-1.pdf',
    },
    {
      id: 'ibps-po-prelims-2025-aug-23-shift-1',
      categoryId: 'ibps-po-prelims',
      year: 2025,
      title: 'IBPS PO Prelims 2025 (Aug 23 - Shift 1)',
      duration: 60,
      totalQuestions: 100,
      description: 'Memory-based paper: Reasoning Ability (35), English Language (30), Quantitative Aptitude (35)',
      difficulty: 'Medium',
      answerKeyPdf: '/pdfs/ibps-po-prelims-2025-aug-23-shift-1.pdf',
    },
  ],
  'ibps-po-mains': [],
};

// Flatten all exams into a single array for easy access
export const allExams = [
  ...exams['ibps-po-prelims'],
  ...exams['ibps-po-mains'],
];

// Map exam IDs to their question sets
export const questions = {};

// Assign IBPS PO Pre 2025 (Aug 24 - Shift 1) questions
questions['ibps-po-prelims-2025-aug-24-shift-1'] = ibpsPoPre2025Aug24Questions;

// Assign IBPS PO Pre 2024 (Oct 19 - Shift 1) questions
questions['ibps-po-prelims-2024-oct-19-shift-1'] = ibpsPoPreOct192024Questions;

// Note: Aug 23 exam questions need to be added when available
questions['ibps-po-prelims-2025-aug-23-shift-1'] = [];
