// Validation utilities for question data

/**
 * Validate a single question object
 * @param {Object} question - Question object to validate
 * @returns {Object} - { valid: boolean, errors: string[] }
 */
export function validateQuestion(question) {
    const errors = [];

    // Check required fields
    if (!question.question || typeof question.question !== 'string' || question.question.trim() === '') {
        errors.push('Question text is required');
    }

    // Check options
    if (!Array.isArray(question.options)) {
        errors.push('Options must be an array');
    } else if (question.options.length !== 4) {
        errors.push('Question must have exactly 4 options');
    } else {
        question.options.forEach((option, index) => {
            if (typeof option !== 'string' || option.trim() === '') {
                errors.push(`Option ${index + 1} is invalid`);
            }
        });
    }

    // Check correct answer
    if (typeof question.correctAnswer !== 'number') {
        errors.push('correctAnswer must be a number');
    } else if (question.correctAnswer < 0 || question.correctAnswer > 3) {
        errors.push('correctAnswer must be between 0 and 3');
    }

    // Check subject (optional but should be string if present)
    if (question.subject && typeof question.subject !== 'string') {
        errors.push('Subject must be a string');
    }

    return {
        valid: errors.length === 0,
        errors,
    };
}

/**
 * Validate an array of questions
 * @param {Array} questions - Array of question objects
 * @returns {Object} - { valid: boolean, invalidQuestions: Array }
 */
export function validateQuestions(questions) {
    if (!Array.isArray(questions)) {
        return {
            valid: false,
            invalidQuestions: [],
            error: 'Questions must be an array',
        };
    }

    if (questions.length === 0) {
        return {
            valid: false,
            invalidQuestions: [],
            error: 'No questions found',
        };
    }

    const invalidQuestions = [];

    questions.forEach((question, index) => {
        const validation = validateQuestion(question);
        if (!validation.valid) {
            invalidQuestions.push({
                index,
                question,
                errors: validation.errors,
            });
        }
    });

    return {
        valid: invalidQuestions.length === 0,
        invalidQuestions,
    };
}

/**
 * Sanitize question text
 * @param {string} text - Text to sanitize
 * @returns {string} - Sanitized text
 */
export function sanitizeText(text) {
    if (typeof text !== 'string') return '';
    return text
        .trim()
        .replace(/\s+/g, ' ') // Replace multiple spaces with single space
        .replace(/\n+/g, ' '); // Replace newlines with space
}

/**
 * Sanitize a question object
 * @param {Object} question - Question to sanitize
 * @returns {Object} - Sanitized question
 */
export function sanitizeQuestion(question) {
    return {
        ...question,
        question: sanitizeText(question.question),
        options: question.options.map(opt => sanitizeText(opt)),
        subject: question.subject ? sanitizeText(question.subject) : 'General',
        explanation: question.explanation ? sanitizeText(question.explanation) : '',
    };
}

/**
 * Check for duplicate questions
 * @param {Array} questions - Array of questions
 * @returns {Array} - Array of duplicate indices
 */
export function findDuplicates(questions) {
    const duplicates = [];
    const seen = new Map();

    questions.forEach((question, index) => {
        const key = sanitizeText(question.question).toLowerCase();
        if (seen.has(key)) {
            duplicates.push({
                index,
                duplicateOf: seen.get(key),
            });
        } else {
            seen.set(key, index);
        }
    });

    return duplicates;
}
