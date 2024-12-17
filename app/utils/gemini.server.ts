// app/utils/gemini.server.ts
import { GenerativeServiceClient } from '@google-ai/generativelanguage';

const client = new GenerativeServiceClient();

async function generateText(prompt: string): Promise<string | null> {
    if (!prompt || prompt.trim() === '') {
        throw new Error("Prompt cannot be empty."); // Throw error if prompt is invalid
    }

    try {
        const [response] = await client.generateContent({ // Added await
            model: 'models/gemini-pro',
            prompt: { text: prompt },
        });

        return response?.candidates?.[0]?.output || null; // Use optional chaining and return null if necessary

    } catch (error) { // IMPORTANT: Correct error handling for Remix server functions
        console.error("Error in generateText:", error);
        if (error instanceof Error) {
            throw new Error(`Gemini API Error: ${error.message}`); // Re-throw with custom message
        } else {
            throw new Error('An unexpected error occurred during text generation.');
        }
    }
}

export { generateText };
