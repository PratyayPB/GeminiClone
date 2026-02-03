# Vercel Deployment Guide

## Quick Start

Deploy your GeminiClone app to Vercel in 5 simple steps:

### 1. Get Your API Key
- Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
- Click "Get API key" → "Create API key"
- Copy the key (you'll add it to Vercel later)

### 2. Push to GitHub
```bash
git add .
git commit -m "Migrate to Vercel serverless"
git push origin main
```

### 3. Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel auto-detects Vite settings
5. Click "Deploy"

### 4. Add Environment Variable
1. Go to Project Settings → Environment Variables
2. Add variable:
   - **Name**: `GEMINI_API_KEY`
   - **Value**: Your API key from step 1
3. Click "Save"

### 5. Redeploy
1. Go to Deployments tab
2. Click the three dots (⋯) → "Redeploy"
3. Wait for build to complete
4. Visit your site and test!

## What Changed from Netlify

✅ **Removed**: `netlify/` folder, `netlify.toml`, Netlify Functions  
✅ **Added**: `api/gemini.js` (Vercel serverless function), `vercel.json`  
✅ **Updated**: Frontend calls `/api/gemini` instead of `/.netlify/functions/gemini`  
✅ **Secured**: API key managed by Vercel environment variables

## Local Testing (Optional)

```bash
# Install Vercel CLI
npm install -g vercel

# Set API key locally
$env:GEMINI_API_KEY="your_api_key"  # Windows
export GEMINI_API_KEY=your_api_key   # macOS/Linux

# Run dev server
vercel dev
```

Visit `http://localhost:3000` to test locally.

## Support

- [Vercel Functions Docs](https://vercel.com/docs/functions)
- [Google Gemini API](https://ai.google.dev/)
- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)
