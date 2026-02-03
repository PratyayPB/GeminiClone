# Netlify Deployment Guide

## Quick Start

Deploy your GeminiClone app to Netlify in 5 steps:

### 1. Get a New API Key
Your current API key is expired. Generate a new one:
- Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
- Click "Get API key" → "Create API key"
- Copy the key (you'll add it to Netlify later)

### 2. Push to GitHub
```bash
git add .
git commit -m "Migrate to Netlify serverless"
git push origin main
```

### 3. Deploy on Netlify
1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect GitHub and select your repository
4. Netlify will auto-detect settings from `netlify.toml`
5. Click "Deploy site"

### 4. Add Environment Variable
1. Go to Site settings → Environment variables
2. Add variable:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: Your new API key from step 1
3. Save

### 5. Redeploy
1. Go to Deploys tab
2. Click "Trigger deploy" → "Clear cache and deploy site"
3. Wait for build to complete
4. Visit your site and test!

## What Changed

✅ **Removed**: Express backend (`backend/` folder excluded from deployment)  
✅ **Added**: Netlify serverless function (`netlify/functions/gemini.js`)  
✅ **Updated**: Frontend calls `/.netlify/functions/gemini` instead of localhost  
✅ **Secured**: API key managed by Netlify environment variables

## Local Testing (Optional)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Set API key
$env:GEMINI_API_KEY="your_api_key"  # Windows
export GEMINI_API_KEY=your_api_key   # macOS/Linux

# Run dev server
netlify dev
```

Visit `http://localhost:8888` to test locally.

## Support

- [Netlify Functions Docs](https://docs.netlify.com/functions/overview/)
- [Google Gemini API](https://ai.google.dev/)
- [Netlify Environment Variables](https://docs.netlify.com/environment-variables/overview/)
