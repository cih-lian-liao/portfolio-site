# Lily's Portfolio Site

A modern full-stack portfolio website built with React (Vite) frontend and Express.js backend.

## 🚀 Features

- **Frontend**: React 19 + Vite + Tailwind CSS
- **Backend**: Express.js RESTful API
- **Responsive Design**: Mobile-first approach
- **Modern UI**: Clean and professional design
- **AI Integration**: Chatbot functionality (coming soon)

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- React Icons

### Backend
- Express.js
- CORS middleware
- Node.js

## 📦 Installation

### Prerequisites
- Node.js >= 16.0.0
- npm

### Setup
```bash
# Clone the repository
git clone <repository-url>
cd portfolio-site

# Install frontend dependencies
npm install

# Install backend dependencies (automatically runs via postinstall)
# Or manually: npm run install:server
```

## 🏃‍♂️ Development

### Run Frontend Only
```bash
npm run dev
```
Frontend will be available at `http://localhost:5173`

### Run Backend Only
```bash
npm run server:dev
```
Backend will be available at `http://localhost:3001`

### Run Both Frontend and Backend
```bash
npm run dev:full
```
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:3001/api`

## 🏗️ Production Build

```bash
# Build frontend and start server
npm start

# Or step by step:
npm run build
npm run server
```

## 📡 API Endpoints

- **GET** `/api` - API information and available endpoints
- **GET** `/api/health` - Server health check

## 📁 Project Structure

```
portfolio-site/
├── src/                    # React frontend source
│   ├── components/         # React components
│   ├── assets/            # Static assets
│   └── ...
├── server/                # Express.js backend
│   ├── app.js            # Main server file
│   ├── routes/           # API routes
│   ├── config.js         # Server configuration
│   └── package.json      # Backend dependencies
├── dist/                 # Built frontend (generated)
├── package.json          # Frontend dependencies & scripts
└── README.md            # This file
```

## 🚀 Deployment

The application is configured for easy deployment to platforms like Vercel, Netlify, or Heroku. The Express server serves the built React application and provides API endpoints.

## 📝 Scripts

- `npm run dev` - Start frontend development server
- `npm run build` - Build frontend for production
- `npm run server` - Start backend server
- `npm run server:dev` - Start backend in development mode
- `npm run dev:full` - Start both frontend and backend concurrently
- `npm start` - Build and start production server
