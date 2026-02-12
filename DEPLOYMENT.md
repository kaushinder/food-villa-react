# Deployment Guide for Food Villa

This guide covers deployment to various platforms.

## Prerequisites

1. Build succeeds locally: `npm run build`
2. Firebase credentials are set in environment variables
3. Git repository is initialized

## Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables in Vercel dashboard:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`
   - `VITE_FIREBASE_MEASUREMENT_ID`
6. Click "Deploy"

**Via CLI:**
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Add environment variables (same as Vercel)
7. Click "Deploy"

**Via CLI:**
```bash
npm i -g netlify-cli
netlify login
npm run build
netlify deploy --prod --dir=dist
```

### Option 3: GitHub Pages

1. Update `vite.config.js`:
```js
export default defineConfig({
  base: '/food-villa-vite/', // Replace with your repo name
  plugins: [react()],
})
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add to `package.json` scripts:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4. Deploy:
```bash
npm run deploy
```

**Note:** GitHub Pages doesn't support environment variables easily. You'll need to use a different authentication method or hardcode values (not recommended for production).

### Option 4: Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
firebase login
```

2. Initialize Firebase:
```bash
firebase init hosting
```

3. Select options:
   - Public directory: `dist`
   - Single-page app: Yes
   - Set up automatic builds: No

4. Build and deploy:
```bash
npm run build
firebase deploy
```

### Option 5: Render

1. Push code to GitHub
2. Go to [render.com](https://render.com)
3. Click "New +" → "Static Site"
4. Connect GitHub repository
5. Settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
6. Add environment variables
7. Create Static Site

## Environment Variables Setup

For all deployment platforms, you need to set these variables:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## Troubleshooting

### Build Fails

1. Check Node version: `node --version` (should be 16+)
2. Clear cache: `rm -rf node_modules package-lock.json && npm install`
3. Check for TypeScript errors if any

### Routes Don't Work (404 on Refresh)

- Make sure `vercel.json` or `netlify.toml` is configured for SPA routing
- All deployment configs are included in the project

### Firebase Not Working

1. Verify environment variables are set
2. Check Firebase console for correct credentials
3. Ensure Firebase project is active
4. Check browser console for errors

### Tailwind Styles Missing

1. Ensure `postcss.config.js` is present
2. Check `tailwind.config.js` content paths
3. Verify `index.css` has Tailwind directives

## Performance Tips

1. **Enable gzip/brotli compression** (automatically handled by Vercel/Netlify)
2. **Use CDN** (automatic with most platforms)
3. **Enable caching** (configured in vercel.json/netlify.toml)
4. **Monitor bundle size**: `npm run build` shows bundle analysis

## Security Checklist

- ✅ Environment variables not committed to Git
- ✅ `.gitignore` includes `.env` files
- ✅ Firebase security rules configured
- ✅ CORS settings configured if needed
- ✅ HTTPS enabled (automatic on all platforms)

## Post-Deployment

1. Test all routes
2. Test authentication flow
3. Test cart functionality
4. Check mobile responsiveness
5. Run Lighthouse audit
6. Set up monitoring (Vercel Analytics, etc.)

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS

## CI/CD (Automatic Deployments)

All platforms support automatic deployments from GitHub:

1. **Vercel/Netlify**: Automatically deploy on push to main branch
2. **Configure branch deployments** for staging/production
3. **Preview deployments** for pull requests

## Support

If you encounter issues:
1. Check platform-specific documentation
2. Review build logs
3. Check environment variables
4. Test locally first: `npm run build && npm run preview`

Happy Deploying! 🚀
