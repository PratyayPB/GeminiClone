import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyDBrQMkEeVA5wkaAdpXIl1xLecxliRf7rE",
});

async function runPrompt(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `${prompt}`,
  });
  console.log(response.text);
  return response.text
}

export default runPrompt;
