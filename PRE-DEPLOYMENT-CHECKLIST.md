# Pre-Deployment Checklist ✅

Complete this checklist before deploying to production.

## 1. Environment Setup

- [ ] `.env` file created with all Firebase credentials
- [ ] All environment variables tested locally
- [ ] `.env` is in `.gitignore` (should already be there)
- [ ] `.env.example` contains all required variables

## 2. Firebase Configuration

- [ ] Firebase project created
- [ ] Authentication enabled (Email/Password)
- [ ] Firebase credentials added to `.env`
- [ ] Firebase security rules configured (if using Firestore/Storage)
- [ ] Authorized domains added in Firebase Console (for production URL)

## 3. Local Testing

- [ ] `npm install` completes without errors
- [ ] `npm run dev` starts successfully
- [ ] Application loads at http://localhost:5173
- [ ] All pages/routes work correctly:
  - [ ] Home page (/)
  - [ ] About page (/about)
  - [ ] Contact page (/contact)
  - [ ] Cart page (/cart)
  - [ ] Login page (/login)
  - [ ] Signup page (/signup)
  - [ ] Restaurant menu (/restaurants/:id)
  - [ ] Grocery page (/grocery)
- [ ] Authentication works (login/signup)
- [ ] Cart functionality works (add/remove items)
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] No console errors in browser

## 4. Build Testing

- [ ] `npm run build` completes successfully
- [ ] No build warnings or errors
- [ ] Build size is reasonable (check terminal output)
- [ ] `npm run preview` works and serves the built app
- [ ] Test all features in preview mode

## 5. Code Quality

- [ ] No hardcoded sensitive data (API keys, passwords)
- [ ] No console.log statements in production code
- [ ] All components are properly imported
- [ ] No unused dependencies
- [ ] ESLint/Prettier configured (optional but recommended)

## 6. Performance

- [ ] Images are optimized
- [ ] Lazy loading is working for routes
- [ ] Bundle size is acceptable
- [ ] No memory leaks in components

## 7. Git Repository

- [ ] Code pushed to GitHub/GitLab/Bitbucket
- [ ] `.gitignore` configured correctly
- [ ] README.md is updated
- [ ] No sensitive files committed

## 8. Deployment Platform Setup

### For Vercel:
- [ ] Vercel account created
- [ ] Repository connected to Vercel
- [ ] Environment variables added in Vercel dashboard
- [ ] Build settings configured (should auto-detect)

### For Netlify:
- [ ] Netlify account created
- [ ] Repository connected to Netlify
- [ ] Build command: `npm run build`
- [ ] Publish directory: `dist`
- [ ] Environment variables added in Netlify dashboard

### For Other Platforms:
- [ ] Platform-specific requirements met
- [ ] Build configuration correct
- [ ] Environment variables configured

## 9. Firebase Setup for Production

- [ ] Production URL added to Firebase authorized domains:
  - Go to Firebase Console → Authentication → Settings → Authorized domains
  - Add your production URL (e.g., your-app.vercel.app)

## 10. Post-Deployment Testing

- [ ] Site loads successfully at production URL
- [ ] All routes work (test by navigating to each)
- [ ] Authentication works (signup/login)
- [ ] Cart functionality works
- [ ] No console errors
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Test on mobile devices
- [ ] Check loading speed

## 11. SEO & Meta Tags (Optional)

- [ ] Page title is set
- [ ] Meta description added
- [ ] Open Graph tags added (for social sharing)
- [ ] Favicon configured

## 12. Analytics & Monitoring (Optional)

- [ ] Google Analytics configured
- [ ] Error tracking set up (Sentry, LogRocket, etc.)
- [ ] Performance monitoring enabled

## 13. Security

- [ ] HTTPS enabled (automatic on most platforms)
- [ ] Security headers configured
- [ ] CORS policy set if needed
- [ ] Rate limiting considered for API calls
- [ ] Firebase security rules reviewed

## 14. Documentation

- [ ] README.md complete and accurate
- [ ] DEPLOYMENT.md reviewed
- [ ] API documentation (if applicable)
- [ ] Comments in complex code sections

## Quick Test Commands

Run these before deploying:

```bash
# Install fresh dependencies
rm -rf node_modules package-lock.json
npm install

# Test build
npm run build

# Preview build
npm run preview

# Run tests (if configured)
npm test
```

## Common Issues & Solutions

### Build fails
- Check Node.js version (use v16+)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`
- Check for TypeScript errors

### Environment variables not working
- Ensure variables start with `VITE_`
- Restart dev server after changing `.env`
- Variables must be set in deployment platform dashboard

### Routes return 404
- Check `vercel.json` or `netlify.toml` is configured
- Ensure SPA routing is enabled

### Firebase authentication fails
- Check Firebase credentials
- Verify production URL is in authorized domains
- Check browser console for specific errors

## Ready to Deploy?

If all items are checked, you're ready to deploy! 🚀

Choose your deployment method from DEPLOYMENT.md and follow the instructions.

## Post-Deployment

After deployment:
1. Test the production site thoroughly
2. Monitor for errors (check deployment platform logs)
3. Set up automated backups (if needed)
4. Plan for updates and maintenance
5. Share your awesome app with the world! 🎉

---

**Last Updated:** Add today's date when you complete this checklist
**Deployed By:** Your name
**Deployment Date:** Date of deployment
**Production URL:** Your production URL
