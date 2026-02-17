# Quick Start Guide 🚀

Get your Food Villa app up and running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

Or use the setup script:
```bash
./setup.sh
```

## Step 2: Configure Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use an existing one
3. Go to Project Settings → General
4. Scroll down to "Your apps" and click the web icon (</>)
5. Register your app and copy the configuration

## Step 3: Set Environment Variables

Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Edit `.env` and add your Firebase credentials:
```env
VITE_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXX
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:xxxxx
VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Step 4: Enable Authentication in Firebase

1. In Firebase Console, go to Authentication
2. Click "Get Started"
3. Enable "Email/Password" sign-in method
4. Save changes

## Step 5: Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Step 6: Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Testing the Build

```bash
npm run preview
```

## Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm test` | Run tests |
| `npm run watch-test` | Run tests in watch mode |

## Project Structure

```
food-villa-vite/
├── src/
│   ├── components/         # React components
│   │   ├── Header.js      # Navigation header
│   │   ├── Body.js        # Main restaurant list
│   │   ├── Cart.js        # Shopping cart
│   │   ├── Login.js       # Login page
│   │   └── ...
│   ├── utils/             # Utilities
│   │   ├── firebase.js    # Firebase config
│   │   ├── appStore.js    # Redux store
│   │   ├── cartSlice.js   # Cart reducer
│   │   └── ...
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── vite.config.js         # Vite config
└── package.json           # Dependencies
```

## Features

✅ Restaurant browsing
✅ Menu viewing
✅ Cart management
✅ User authentication
✅ Responsive design
✅ Dark mode support
✅ Lazy loading
✅ Code splitting

## Troubleshooting

### Port already in use
```bash
# Kill the process on port 5173
npx kill-port 5173
# Or use a different port
npm run dev -- --port 3000
```

### Module not found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build fails
```bash
# Check Node version (needs 16+)
node --version

# Update to latest dependencies
npm update
```

### Firebase not working
- Check if environment variables are set correctly
- Verify Firebase project is active
- Check browser console for errors
- Ensure authentication is enabled in Firebase Console

## Next Steps

1. ✅ Customize the UI/UX
2. ✅ Add more features
3. ✅ Deploy to production (see DEPLOYMENT.md)
4. ✅ Set up CI/CD
5. ✅ Add analytics


Happy Coding! 🎉
