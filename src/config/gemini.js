/**
 * Gemini API Proxy
 * Calls the backend server which securely handles the Gemini API key
 */

const BACKEND_URL = 'http://localhost:5000';

async function runPrompt(prompt) {
  try {
    const response = await fetch(`${BACKEND_URL}/api/gemini`, {
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
    throw new Error('Unable to connect to AI service. Please ensure the backend server is running.');
  }
}

export default runPrompt;

