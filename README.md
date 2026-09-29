# Gemini Clone

**A lightweight, responsive web interface for interacting with Google's Gemini AI.**

[Live Demo](https://gemini-clone-dun-nine.vercel.app/) · [Report an Issue](https://github.com/PratyayPB/GeminiClone/issues)

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Screenshots / Demo](#screenshots--demo)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Overview

### What is the project?
Gemini Clone is a web application that mimics the user interface of Google's Gemini, allowing users to interact with the Gemini AI model seamlessly. It features a responsive chat interface, a clean design using Tailwind CSS, and a secure backend using Vercel Serverless Functions to handle API keys.

### Problem Statement
Building a front-end interface that directly interacts with third-party AI APIs often exposes sensitive API keys to the client. Additionally, creating a UI that accurately reflects modern chat applications requires careful state management and styling.

### Solution
This project solves these issues by acting as a proxy through a Vercel Serverless Function, keeping the Gemini API key hidden from the client. The frontend is built with React and Tailwind CSS to ensure a responsive, modern, and beautiful user interface.

---

## Key Features

- **Responsive UI** — A clean, modern chat interface built with Tailwind CSS that works on both desktop and mobile.
- **Secure API Key Handling** — Uses Vercel Serverless Functions to securely proxy requests to the Google Gemini API, ensuring your API key is never exposed to the client.
- **Fast Streaming Responses** — Delivers quick and formatted text generation from the Gemini 2.5 Flash model.
- **State Management** — Efficiently handles conversation history, loading states (with skeleton animations), and recent prompts using React Context API.

---

## Screenshots / Demo

### Application Preview

![Gemini Clone Dashboard](https://ik.imagekit.io/ulycoljug/Portfolio-resources/gemini-clone/Screenshot%202026-09-29%20221944.png?updatedAt=1790700696995)
![Chat Interface](https://ik.imagekit.io/ulycoljug/Portfolio-resources/gemini-clone/Screenshot%202026-09-29%20221938.png?updatedAt=1790700696930)
![Mobile View](https://ik.imagekit.io/ulycoljug/Portfolio-resources/gemini-clone/Screenshot%202026-09-29%20221953.png?updatedAt=1790700696936)

**Live Application:** [https://gemini-clone-dun-nine.vercel.app/](https://gemini-clone-dun-nine.vercel.app/)

---

## Tech Stack

### Frontend

- **Library:** React 19
- **Framework (Build tool):** Vite
- **Styling:** Tailwind CSS v4
- **State Management:** React Context API

### Backend / API

- **Infrastructure:** Vercel Serverless Functions (`api/gemini.js`)
- **AI SDK:** `@google/generative-ai` (Google Gemini 2.5 Flash model)

---

## Architecture

The application is split into a static React frontend and a single serverless proxy endpoint. 

- **Client Layer:** A React application where users enter prompts. The UI updates optimistically with a loading state.
- **API Layer:** When a prompt is submitted, the frontend makes a POST request to `/api/gemini`.
- **External Services:** The serverless function `/api/gemini` appends the secure `GEMINI_API_KEY` from environment variables, forwards the request to Google's Gemini API, and returns the response to the client.

---

## Getting Started

### Prerequisites

Make sure the following are installed:
- Node.js (v18+)
- npm

### Clone the Repository

```bash
git clone https://github.com/PratyayPB/GeminiClone.git
cd GeminiClone
```

### Install Dependencies

```bash
npm install
```

### Run the Development Server

For local development, you need to use Vercel CLI to simulate serverless functions locally. 

```bash
npm i -g vercel
vercel dev
```

Application will run at:
```text
http://localhost:3000
```

*(Note: Running `npm run dev` directly will start Vite on port 5173, but API calls to `/api/gemini` will fail without the Vercel dev server running)*

---

## Environment Variables

To run this project locally, you will need to add the following environment variables. Create a `.env.local` file in the root directory.

```env
GEMINI_API_KEY=your_google_gemini_api_key_here
```

**Never commit real secrets, API keys, credentials, or private tokens to the repository.**

---

## Deployment

The project is configured for seamless deployment on **Vercel**. 

1. Push your code to a GitHub repository.
2. Import the project in Vercel.
3. Add the `GEMINI_API_KEY` in the Vercel Environment Variables settings.
4. Deploy. Vercel will automatically build the Vite app and deploy the `api/gemini.js` as a serverless function.

---

## Contributing

Contributions are welcome. Feel free to open a Pull Request or an Issue.

---

## License

This project is for educational purposes only and is not affiliated with Gemini.

---

## Author

**Pratyay Pratim Borah**

- GitHub: [@PratyayPB](https://github.com/PratyayPB)
- LinkedIn: [Pratyay Pratim Borah](https://www.linkedin.com/in/pratyaypratimborah/)
- Portfolio: [https://portfolio-pratyay.vercel.app/](https://portfolio-pratyay.vercel.app/)
