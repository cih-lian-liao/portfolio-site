# 💻 Cih-Lian Liao's Interactive Portfolio Website

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-Fast-purple?style=for-the-badge&logo=vite)
![Express](https://img.shields.io/badge/Express.js-Backend-black?style=for-the-badge&logo=express)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--3.5--Turbo-green?style=for-the-badge&logo=openai)

**A modern, interactive portfolio website featuring an AI-powered chatbot that provides intelligent conversations about Cih-Lian Liao's professional background, skills, and projects.**

[🌐 **Live Demo**](https://cihlianliao-portfolio.vercel.app) • [📚 **Documentation**](#-documentation) • [🚀 **Quick Start**](#-quick-start)

</div>

---

## 🎯 Overview

This is a comprehensive full-stack portfolio website that goes beyond traditional static portfolios by integrating **LilyGPT**, an intelligent AI chatbot powered by OpenAI's GPT-3.5 Turbo. Visitors can engage in real-time conversations to learn about Cih-Lian Liao's professional background, technical skills, projects, and career aspirations.

### 🌟 Key Features

- **🤖 AI-Powered Chatbot**: Interactive conversations with 6 pre-configured interview-relevant questions
- **📱 Responsive Design**: Mobile-first approach with Tailwind CSS
- **⚡ Performance Optimized**: Built with React 19 and Vite for lightning-fast loading
- **🔧 Full-Stack Architecture**: React frontend with Express.js backend
- **🌐 Multi-Domain Support**: CORS configuration supporting multiple deployment domains
- **🔒 Secure Configuration**: Environment-based settings with API key protection
- **🚀 Automated Deployment**: Seamless Vercel integration with GitHub

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with concurrent features
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Comprehensive icon library

### Backend
- **Express.js** - Fast, unopinionated web framework
- **Node.js** - JavaScript runtime environment
- **CORS** - Cross-origin resource sharing middleware

### AI Integration
- **OpenAI GPT-3.5 Turbo** - Advanced language model
- **OpenRouter API** - Unified API access to various AI models

### Deployment & DevOps
- **Vercel** - Serverless deployment platform
- **GitHub Actions** - Automated CI/CD pipeline
- **Environment Variables** - Secure configuration management

## 📁 Project Structure

```
portfolio-site/
├── 📁 src/                          # React frontend source
│   ├── 📁 components/               # Reusable React components
│   │   ├── 📁 About/               # Personal introduction
│   │   ├── 📁 Skills/              # Technical skills showcase
│   │   ├── 📁 Projects/            # Portfolio projects
│   │   ├── 📁 Education/           # Academic background
│   │   ├── 📁 Experience/          # Professional experience
│   │   ├── 📁 BeyondCode/          # Core beliefs & philosophy
│   │   ├── 📁 Resume/              # Resume download
│   │   ├── 📁 LilyGPT/             # AI chatbot interface
│   │   ├── 📁 Contact/             # Contact information
│   │   ├── 📁 Sidebar/             # Navigation sidebar
│   │   ├── 📁 NavLinks/            # Navigation links
│   │   ├── 📁 DarkModeToggle/      # Dark mode functionality
│   │   └── 📁 LanguageSwitcher/    # Language toggle
│   ├── 📁 assets/                  # Static assets (images, PDFs)
│   ├── 📄 App.jsx                  # Main application component
│   ├── 📄 main.jsx                 # Application entry point
│   └── 📄 index.css                # Global styles
├── 📁 server/                       # Express.js backend
│   ├── 📁 routes/                  # API route handlers
│   │   ├── 📄 api.js               # General API endpoints
│   │   └── 📄 chat.js              # LilyGPT chatbot endpoint
│   ├── 📄 app.js                   # Main server file
│   ├── 📄 config.js                # Server configuration
│   ├── 📄 package.json             # Backend dependencies
│   └── 📄 .env.example             # Environment variables template
├── 📄 package.json                 # Frontend dependencies & scripts
├── 📄 vercel.json                  # Vercel deployment configuration
├── 📄 vite.config.js               # Vite configuration
└── 📄 README.md                    # This documentation
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 16.0.0
- **npm** >= 8.0.0
- **OpenAI API Key** (for LilyGPT functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/cih-lian-liao/portfolio-site.git
   cd portfolio-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   *Backend dependencies will be installed automatically via postinstall script*

3. **Environment Setup** ⚠️ **Security Critical**
   ```bash
   # Copy environment template
   cp server/.env.example server/.env
   
   # Add your OpenRouter API key (NEVER commit this file!)
   echo "OPENROUTER_API_KEY=your_api_key_here" >> server/.env
   echo "NODE_ENV=development" >> server/.env
   echo "PORT=3001" >> server/.env
   ```
   
   **🔒 Security Warning**: The `.env` file contains sensitive information and is automatically excluded from Git. Never commit API keys to version control!

4. **Start development servers**
   ```bash
   # Run both frontend and backend concurrently
   npm run dev:full
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3001/api

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start frontend development server (Vite) |
| `npm run build` | Build frontend for production |
| `npm run server` | Start backend server in production mode |
| `npm run server:dev` | Start backend server in development mode |
| `npm run dev:full` | Start both frontend and backend concurrently |
| `npm start` | Build frontend and start production server |
| `npm run install:server` | Install backend dependencies manually |
| `npm run vercel-build` | Build command for Vercel deployment |

## 🌐 API Endpoints

### General API
- **GET** `/api` - API information and available endpoints
- **GET** `/api/health` - Server health check

### LilyGPT Chatbot
- **POST** `/api/chat` - Send message to LilyGPT
  ```json
  {
    "message": "What are Cih-Lian Liao's strongest technical skills?"
  }
  ```

## 🛡️ API Security Best Practices

### ⚠️ Important Security Notes

**Never expose API keys in client-side code!**

This project follows security best practices:

1. **Server-Side API Handling**
   ```javascript
   // ✅ CORRECT: API key stored in server environment
   // server/.env
   OPENROUTER_API_KEY=your_secret_key_here
   
   // ✅ CORRECT: API calls made from backend
   const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
     headers: {
       'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`
     }
   });
   ```

2. **Client-Side Security**
   ```javascript
   // ❌ WRONG: Never do this in frontend code
   const apiKey = 'sk-or-v1-...'; // Never expose API keys!
   
   // ✅ CORRECT: All API calls go through your backend
   const response = await fetch('/api/chat', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ message: userMessage })
   });
   ```

3. **Environment Configuration**
   ```bash
   # Development
   server/.env
   OPENROUTER_API_KEY=your_development_key
   NODE_ENV=development
   
   # Production (Vercel Environment Variables)
   OPENROUTER_API_KEY=your_production_key
   NODE_ENV=production
   CORS_ORIGIN=https://your-domain.vercel.app
   ```

4. **Git Security**
   ```gitignore
   # .gitignore
   .env*
   server/.env
   *.key
   *.secret
   ```

### Security Checklist

- [ ] API keys stored in environment variables only
- [ ] No API keys in client-side JavaScript
- [ ] CORS properly configured for production domains
- [ ] Environment files excluded from version control
- [ ] Production and development environments separated
- [ ] Error messages don't expose sensitive information

## 🤖 LilyGPT Features

The AI chatbot provides intelligent responses about Cih-Lian Liao's:

- **Professional Background**: Education, experience, and career journey
- **Technical Skills**: Programming languages, frameworks, and tools
- **Project Portfolio**: Detailed information about past and current projects
- **Career Goals**: Internship interests and professional aspirations
- **Unique Background**: Transition from language studies to technology
- **Core Philosophy**: Design principles and professional beliefs

### Pre-configured Questions

1. "What are Cih-Lian Liao's strongest technical skills and expertise?"
2. "Tell me about Cih-Lian Liao's most impressive projects and achievements"
3. "What makes Cih-Lian Liao a unique candidate for software engineering roles?"
4. "What type of internship or role is Cih-Lian Liao currently seeking?"
5. "How has Cih-Lian Liao's background in translation influenced her approach to technology?"
6. "What are Cih-Lian Liao's career goals and interests in software development?"

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Fork this repository**
2. **Connect to Vercel**
   - Import project from GitHub
   - Framework: Vite
   - Build Command: `npm run vercel-build`
   - Output Directory: `dist`

3. **Configure Environment Variables** 🔒 **Critical for Security**
   ```
   OPENROUTER_API_KEY=your_openrouter_api_key
   NODE_ENV=production
   CORS_ORIGIN=https://your-domain.vercel.app
   ```
   
   **⚠️ Important**: 
   - Never use development API keys in production
   - Ensure CORS_ORIGIN matches your actual domain
   - Keep API keys secure and rotate them regularly

4. **Deploy**
   - Vercel will automatically deploy on every push to main branch

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🔧 Configuration

### Environment Variables

Create `server/.env` with the following variables:

```env
# Server Configuration
PORT=3001
NODE_ENV=development

# API Keys
OPENROUTER_API_KEY=your_openrouter_api_key

# CORS Configuration
CORS_ORIGIN=https://your-domain.vercel.app
```

### CORS Setup

The application supports multiple domains for CORS:

```javascript
// server/config.js
corsOrigins: [
  'https://cihlianliao-portfolio.vercel.app',
  'https://portfolio-site-alpha-eight-25.vercel.app',
  // Add your custom domains here
]
```

## 🎨 Customization

### Adding New Sections

1. Create component in `src/components/`
2. Add navigation link in `src/components/NavLinks/NavLinks.jsx`
3. Import and render in `src/App.jsx`

### Updating LilyGPT Context

Modify the comprehensive context in `server/routes/chat.js`:

```javascript
const lilyContext = `You are LilyGPT, an AI assistant that answers questions about Cih-Lian Liao...`;
```

### Styling

The project uses Tailwind CSS for styling. Key configuration files:
- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - Global styles and Tailwind imports

## 📱 Responsive Design

The portfolio is fully responsive with:
- **Mobile-first approach** using Tailwind CSS
- **Flexible grid layouts** for different screen sizes
- **Touch-friendly interactions** for mobile devices
- **Optimized images** for various resolutions

## 🔒 Security Features

### API Security
- **Environment variables** for sensitive data (API keys, secrets)
- **Server-side API key handling** - Never expose API keys to client-side
- **CORS configuration** for secure cross-origin requests
- **Input validation** for chatbot interactions
- **Rate limiting** protection (handled by OpenRouter)
- **Error handling** without exposing sensitive information

### Data Protection
- **No client-side API key storage** - All API calls go through backend
- **Secure environment configuration** with `.env` files
- **Git ignore patterns** to prevent accidental API key commits
- **Production vs Development** environment separation

## 📊 Performance

- **React 19** with concurrent features for better UX
- **Vite** for fast development and optimized builds
- **Code splitting** for reduced bundle size
- **Lazy loading** for improved initial load times

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👩‍💻 About the Developer

**Cih-Lian Liao**
- 🎓 Master's Student in Information Systems at Northeastern University
- 💻 Frontend Developer & UX Enthusiast
- 🤖 AI Explorer & Technology Innovator
- 🌍 Multilingual (Mandarin, Korean, English)

**Contact:**
- 📧 Email: [cihlianliao@gmail.com](mailto:cihlianliao@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/cihlianliao](https://linkedin.com/in/cihlianliao)
- 🐙 GitHub: [github.com/cih-lian-liao](https://github.com/cih-lian-liao)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Cih-Lian Liao](https://github.com/cih-lian-liao)

</div>