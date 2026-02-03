import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Gemini AI with API key from environment
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Vite dev server
  credentials: true,
}));
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend server is running' });
});

// Main Gemini API endpoint
app.post('/api/gemini', async (req, res) => {
  try {
    const { prompt } = req.body;

    // Validate input
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

    // Call Gemini API - matching the original frontend usage
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,  // Changed from object to string
    });

    // Log success
    console.log('✅ Gemini API call successful');

    // Return only the text response
    res.json({ text: response.text });

  } catch (error) {
    console.error('Gemini API Error:', error);
    console.error('Error details:', JSON.stringify(error, null, 2));
    
    // Handle specific error types
    if (error.message?.includes('API key') || error.message?.includes('api key')) {
      return res.status(500).json({ 
        error: 'Server configuration error. Please contact support.' 
      });
    }

    res.status(500).json({ 
      error: 'Failed to generate response. Please try again.' 
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ 
    error: 'Internal server error' 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
  console.log(`📡 Ready to receive requests from frontend`);
});
