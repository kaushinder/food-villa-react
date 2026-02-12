# Food Villa 🚀

A modern food delivery application built with React, Redux Toolkit, Firebase Authentication, and Tailwind CSS.

## Features

- 🍔 Browse restaurants and menus
- 🛒 Shopping cart functionality with Redux
- 🔐 Firebase authentication (Login/Signup)
- 📱 Responsive design with Tailwind CSS
- ⚡ Fast performance with Vite
- 🧪 Unit testing with Jest
- 🎨 Modern UI/UX
- 🔄 Real-time data updates

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Authentication**: Firebase Auth
- **Testing**: Jest + React Testing Library
- **Icons**: React Icons

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase account (for authentication)

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd food-villa-vite
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Add your Firebase configuration:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## Development

Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Building for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Testing

Run tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run watch-test
```

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Build the project:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update vite.config.js:
```js
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```

4. Deploy:
```bash
npm run deploy
```

## Environment Variables

Make sure to set these environment variables in your deployment platform:

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_FIREBASE_MEASUREMENT_ID`

## Project Structure

```
food-villa-vite/
├── src/
│   ├── components/      # React components
│   ├── utils/          # Utility functions and configs
│   ├── index.css       # Global styles
│   └── main.jsx        # Entry point
├── public/             # Static assets
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── package.json        # Dependencies
```

## Key Features Implementation

### Redux Store
- Cart management
- Global state management

### Firebase Authentication
- User login
- User signup
- Protected routes

### Lazy Loading
- Code splitting for better performance
- Dynamic imports for routes

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License

## Support

For support, email your-email@example.com or create an issue in the repository.
