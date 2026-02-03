import { GoogleGenerativeAI } from '@google/generative-ai';

/**
 * Vercel Serverless Function - Gemini API Proxy
 * Handles POST requests to generate AI responses using Google Gemini
 */
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS for CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse and validate request body
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ 
        error: 'Invalid request. Prompt is required and must be a string.' 
      });
    }

    if (prompt.trim().length === 0) {
      return res.status(400).json({ 
        error: 'Prompt cannot be empty.' 
      });
    }

    // Check for API key
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('GEMINI_API_KEY is not configured');
      return res.status(500).json({ 
        error: 'Server configuration error. Please contact support.' 
      });
    }

    // Initialize Gemini AI
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

    // Generate content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Return success response
    return res.status(200).json({ text });

  } catch (error) {
    console.error('Gemini API Error:', error);

    // Handle API key errors
    if (error.message?.includes('API key') || error.message?.includes('api key')) {
      return res.status(500).json({ 
        error: 'Server configuration error. Please contact support.' 
      });
    }

    // Generic error response
    return res.status(500).json({ 
      error: 'Failed to generate response. Please try again.' 
    });
  }
}
