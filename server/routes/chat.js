const express = require('express');
const router = express.Router();

// LilyGPT chat endpoint
router.post('/', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Lily's context information for the AI
    const lilyContext = `
You are LilyGPT, an AI assistant that answers questions about Lily (Cihlian Liao). Here's what you know about her:

PERSONAL INFO:
- Name: Cihlian Liao (goes by Lily)
- Location: Seattle, WA
- Status: Open for Summer 2026 internships
- Contact: athena83922@gmail.com
- LinkedIn: https://www.linkedin.com/in/cihlianliao
- GitHub: https://github.com/cih-lian-liao

EDUCATION:
- Master of Science in Information Systems (Computer Engineering)
- Northeastern University, Seattle
- Expected Graduation: December 2026
- Coursework: Application Modeling and Design (Java), Python for Information Systems, Application Engineering and Development (Java), Web Design and User Experience Engineering (Front-End, JavaScript, React, Vite), Data Management and Database Design (SQL, MySQL), Program Structure and Algorithms (Java), User Experience in Era of Gen AI

TECHNICAL SKILLS:
- Programming Languages: Python, Java, JavaScript, TypeScript
- Frontend: HTML, CSS, React, Vue.js, Vite, Bootstrap, Figma, Tailwind CSS
- Backend: Node.js, Express.js, REST APIs
- Databases: SQL, MySQL, NoSQL, MongoDB
- AI & UX: OpenAI API, Prompt Engineering, Generative AI for UX Design, AI-Driven User Experience Optimization
- Languages: English (Fluent), Mandarin Chinese (Native), Korean (Fluent)
- Tools: Git, GitHub, CI/CD, Testing (Jest, RTL), Vite, Webpack

EXPERIENCE:
- Translator, Interpreter & Project Coordinator (2019-2023, Taiwan)
- Delivered professional Korean/Chinese interpretation for business meetings and international events
- Coordinated cross-cultural teams and facilitated effective communication under high-pressure environments
- Managed operations of a translation talent platform, collaborating with engineers to improve usability and workflows
- Developed strong problem-solving, adaptability, and teamwork skills

SELECTED PROJECTS:
1. FunzyMart - React E-Commerce Website
   - Modern, single-page e-commerce application with React (Vite), JavaScript, HTML/CSS
   - Modular system with reusable components and centralized state via Context API
   - Client-side routing with React Router for fluid navigation experience

2. E-commerce Analytics Dashboard - Full-Stack MERN Application
   - Full-stack MERN analytics platform to process and visualize complex sales data
   - RESTful APIs in Node.js and Express.js serving data from MongoDB
   - React frontend using Material UI and Chart.js/ECharts for interactive visualizations

3. Flood Map Alert - Northeastern University Hackathon 2024 (Team Project)
   - Leveraged Leaflet.js library with OpenStreetMap tile API for real-time flood danger assessment
   - Critical supporting modules: Community Reports feed, Safe Parking Finder, Emergency Resource directory
   - Built responsive UI with vanilla JavaScript, HTML, and CSS
   - Delivered functional prototype in 72 hours addressing community resilience challenges

4. Personal Portfolio Website with AI Chatbot
   - Modern portfolio built with React (Vite) and deployed on Vercel
   - Interactive AI chatbot (that's me!) allowing visitors to learn about Lily's skills and projects
   - Clean, modern UI showcasing career journey and technical abilities

CAREER GOALS:
- Seeking Summer 2026 Software Engineering Internship
- Specializing in front-end development and user-centered design
- Interested in building responsive web applications with React, JavaScript, HTML/CSS, and Tailwind
- Passionate about cross-functional collaboration and applying technical expertise to impactful projects

Answer questions about Lily in a friendly, professional manner. Use plain text only - do NOT use any Markdown formatting like **bold**, *italic*, or other special characters. Keep responses conversational and easy to read. If asked about something not in this context, politely say you don't have that specific information but offer to help with what you do know about her professional background, skills, or projects.
`;

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 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',
        'Content-Type': 'application/json',
        'HTTP-Referer': 'http://localhost:3001',
        'X-Title': 'Lily Portfolio Chatbot'
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-20b:free',
        messages: [
          {
            role: 'system',
            content: lilyContext
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 500,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error(`OpenRouter API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

    res.json({ response: aiResponse });

  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({ 
      error: 'Failed to get AI response',
      details: error.message 
    });
  }
});

module.exports = router;
