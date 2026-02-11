// Utility functions for PDF parsing and AI-powered question extraction

/**
 * Extract text from PDF file using pdfjs-dist (browser-compatible)
 * @param {File} file - PDF file object
 * @returns {Promise<string>} - Extracted text content
 */
export async function extractTextFromPDF(file) {
    try {
        // Dynamically import pdfjs-dist
        const pdfjsLib = await import('pdfjs-dist');

        // Import the worker as a URL
        const pdfjsWorker = await import('pdfjs-dist/build/pdf.worker.mjs?url');

        // Set worker source to the imported worker
        pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker.default;

        // Read file as ArrayBuffer
        const arrayBuffer = await file.arrayBuffer();

        // Load PDF document
        const loadingTask = pdfjsLib.getDocument({
            data: arrayBuffer,
            verbosity: 0 // Suppress warnings
        });
        const pdf = await loadingTask.promise;

        let fullText = '';

        // Extract text from each page
        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum);
            const textContent = await page.getTextContent();
            const pageText = textContent.items.map(item => item.str).join(' ');
            fullText += pageText + '\n';
        }

        if (!fullText || fullText.trim().length < 10) {
            throw new Error('The PDF appears to be empty or contains only images. Please use a text-based PDF.');
        }

        return fullText;
    } catch (error) {
        console.error('Error extracting text from PDF:', error);

        // Provide more specific error messages
        if (error.message.includes('empty') || error.message.includes('images')) {
            throw error;
        }

        throw new Error('Failed to extract text from PDF. Please ensure the file is a valid, text-based PDF.');
    }
}

/**
 * Parse questions from text using Google Gemini AI
 * @param {string} text - Extracted PDF text
 * @param {string} apiKey - Google Gemini API key
 * @returns {Promise<Array>} - Array of parsed questions
 */
export async function parseQuestionsWithAI(text, apiKey) {
    try {
        const { GoogleGenerativeAI } = await import('@google/generative-ai');
        const genAI = new GoogleGenerativeAI(apiKey);

        // Try different model names in order of preference
        // v1beta API doesn't support -latest suffix
        const modelNames = [
            'gemini-1.5-pro',
            'gemini-1.5-flash',
            'gemini-pro'
        ];

        let model = null;
        let lastError = null;

        // Try each model until one works
        for (const modelName of modelNames) {
            try {
                model = genAI.getGenerativeModel({ model: modelName });
                // Test if model is accessible with a simple prompt
                await model.generateContent('test');
                console.log(`✅ Using model: ${modelName}`);
                break;
            } catch (error) {
                console.log(`❌ Model ${modelName} not accessible:`, error.message);
                lastError = error;
                model = null;
            }
        }

        if (!model) {
            throw new Error(`None of the Gemini models are accessible with your API key. Please:\n1. Visit https://aistudio.google.com/app/apikey\n2. Create a NEW API key\n3. Make sure "Generative Language API" is enabled\n\nLast error: ${lastError?.message || 'Unknown'}`);
        }

        const prompt = `
You are a question parser. Extract all multiple-choice questions from the following text and return them in a structured JSON format.

For each question, extract:
- question: The question text
- options: An array of exactly 4 option strings (A, B, C, D)
- correctAnswer: The index (0-3) of the correct answer
- subject: The subject/topic (if mentioned, otherwise use "General")
- explanation: Brief explanation of the answer (if provided, otherwise use empty string)

Rules:
1. Return ONLY valid JSON array, no markdown formatting or code blocks
2. Each question must have exactly 4 options
3. correctAnswer must be a number from 0 to 3
4. If the correct answer is marked as A, use 0; B use 1; C use 2; D use 3
5. Clean up any formatting issues in the text
6. If you cannot find clear questions, return an empty array []

Text to parse:
${text}

Return format example:
[
  {
    "question": "What is 2+2?",
    "options": ["2", "3", "4", "5"],
    "correctAnswer": 2,
    "subject": "Mathematics",
    "explanation": "2+2 equals 4"
  }
]
`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        let responseText = response.text();

        // Clean up response - remove markdown code blocks if present
        responseText = responseText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

        // Parse JSON
        const questions = JSON.parse(responseText);

        if (!Array.isArray(questions)) {
            throw new Error('AI response is not an array');
        }

        return questions;
    } catch (error) {
        console.error('Error parsing questions with AI:', error);

        // Check if it's a model not found error
        if (error.message && error.message.includes('not found')) {
            throw new Error('The Gemini model is not accessible with your API key. Please ensure:\n1. Your API key is valid\n2. You have enabled the Gemini API in Google AI Studio\n3. Try generating a new API key at https://makersuite.google.com/app/apikey');
        }

        throw new Error(`Failed to parse questions: ${error.message}`);
    }
}

/**
 * Generate unique IDs for questions
 * @param {Array} questions - Array of questions without IDs
 * @returns {Array} - Questions with unique IDs
 */
export function assignQuestionIds(questions) {
    return questions.map((q, index) => ({
        ...q,
        id: Date.now() + index,
    }));
}
