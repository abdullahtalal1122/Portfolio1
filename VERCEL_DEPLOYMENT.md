# 🚀 Vercel Deployment Guide

## Quick Fix for Environment Variable Error

### The Issue
You're seeing: `Environment Variable "GEMINI_API_KEY" references Secret "gemini_api_key", which does not exist.`

### The Solution

#### Option 1: Add Environment Variables in Vercel Dashboard (Recommended)

1. **Go to your Vercel project dashboard**
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click on your `Portfolio1` project

2. **Navigate to Settings**
   - Click the "Settings" tab
   - Click "Environment Variables" in the sidebar

3. **Add Environment Variables**
   - Click "Add New"
   - **Name**: `GEMINI_API_KEY`
   - **Value**: `AIzaSyCGj46db9cghpHkqMWzZXhgj4uIs8Tgbew`
   - **Environments**: Select "Production", "Preview", and "Development"
   - Click "Save"

4. **Add Site URL**
   - Click "Add New" again
   - **Name**: `NEXT_PUBLIC_SITE_URL`
   - **Value**: `https://your-vercel-app-url.vercel.app` (replace with your actual URL)
   - **Environments**: Select all
   - Click "Save"

5. **Redeploy**
   - Go to "Deployments" tab
   - Click the three dots (⋯) on your latest deployment
   - Click "Redeploy"
   - ✅ Your site should now work!

#### Option 2: Use Vercel CLI

```bash
# Install Vercel CLI if you haven't
npm i -g vercel

# Login to Vercel
vercel login

# Set environment variables
vercel env add GEMINI_API_KEY
# Enter: AIzaSyCGj46db9cghpHkqMWzZXhgj4uIs8Tgbew
# Select: Production, Preview, Development

vercel env add NEXT_PUBLIC_SITE_URL
# Enter your production URL

# Redeploy
vercel --prod
```

## Environment Variables Needed

| Variable Name | Value | Description |
|---------------|-------|-------------|
| `GEMINI_API_KEY` | `AIzaSyCGj46db9cghpHkqMWzZXhgj4uIs8Tgbew` | Google Gemini AI API key |
| `NEXT_PUBLIC_SITE_URL` | `https://your-app.vercel.app` | Your production URL |

## Verification

After adding the environment variables and redeploying:

1. **Visit your deployed site**
2. **Open the AI chat widget** (bottom right corner)
3. **Send a message** like "Hi"
4. **You should get a response** from the AI assistant

If the AI chat works, everything is configured correctly! 🎉

## Troubleshooting

- **Still getting the error?** Make sure to redeploy after adding environment variables
- **AI not responding?** Check that `GEMINI_API_KEY` is exactly as shown above
- **Build failing?** Check the build logs for TypeScript errors

## Next Steps

Once deployed successfully:
1. Update your portfolio links to point to the live site
2. Share your portfolio URL
3. Test all features including the AI chat

Your portfolio will be live at: `https://portfolio1-[your-username].vercel.app`
