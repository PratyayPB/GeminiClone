/**
 * Gemini API Proxy - Netlify Functions
 * Calls the Netlify serverless function which securely handles the Gemini API key
 */

const BACKEND_URL = '/.netlify/functions/gemini';

async function runPrompt(prompt) {
  try {
    const response = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to get response from AI');
    }

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error('Error calling Gemini API:', error.message);
    throw new Error('Unable to connect to AI service. Please try again later.');
  }
}

export default runPrompt;

