const express = require('express');
const router = express.Router();

// Home page API endpoint
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Lily\'s Portfolio API',
    description: 'This is the backend API for Lily\'s personal portfolio website',
    author: 'Lily (Cihlian Liao)',
    version: '1.0.0',
    features: [
      'Portfolio showcase',
      'Project details',
      'Contact form handling',
      'AI chatbot integration (coming soon)'
    ],
    endpoints: {
      home: '/api',
      health: '/api/health'
    }
  });
});

// Health check
router.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    environment: process.env.NODE_ENV || 'development'
  });
});

module.exports = router;
