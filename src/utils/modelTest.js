// Test file to check available Gemini models
// This helps debug API key and model access issues

export async function listAvailableModels(apiKey) {
    try {
        const { GoogleGenerativeAI } = await import('@google/generative-ai');
        const genAI = new GoogleGenerativeAI(apiKey);

        // Try different model names that might work
        const modelsToTry = [
            'gemini-pro',
            'gemini-1.5-pro',
            'gemini-1.5-pro-latest',
            'gemini-1.5-flash',
            'gemini-1.5-flash-latest'
        ];

        console.log('Testing available models...');

        for (const modelName of modelsToTry) {
            try {
                const model = genAI.getGenerativeModel({ model: modelName });
                const result = await model.generateContent('Test');
                console.log(`✅ ${modelName} - WORKS`);
                return modelName; // Return first working model
            } catch (error) {
                console.log(`❌ ${modelName} - ${error.message}`);
            }
        }

        throw new Error('No working models found');
    } catch (error) {
        console.error('Error testing models:', error);
        throw error;
    }
}
