# Deploying SafeSpeak to Render

This project is configured for easy deployment on [Render](https://render.com).

## Prerequisites
1.  A GitHub account with this repository pushed to it.
2.  A [Render](https://render.com) account.

## Steps to Deploy

1.  **Log in to Render**: Go to [dashboard.render.com](https://dashboard.render.com).
2.  **New Web Service**: Click the "New +" button and select **"Static Site"**.
3.  **Connect GitHub**:
    *   If you haven't already, connect your GitHub account.
    *   Search for your repository (`safespeak_reporting_FINAL`) and click **"Connect"**.
4.  **Configure**:
    *   **Name**: Give your site a name (e.g., `safespeak-reporting`).
    *   **Branch**: Select `main`.
    *   **Build Command**: `npm install && npm run build` (should be auto-filled).
    *   **Publish Directory**: `dist` (should be auto-filled).
5.  **Environment Variables** (Optional but Recommended):
    *   If you are using Firebase, you usually don't need to set server-side env vars for a static site, as the config is in your code. However, ensure your `src/lib/firebase.ts` has the correct config.
6.  **Deploy**: Click **"Create Static Site"**.

## Automatic Deploys
Since we have a `render.yaml` file, Render might automatically detect the configuration. If it asks, you can confirm the settings.

Every time you push code to the `main` branch, Render will automatically rebuild and deploy your site!
