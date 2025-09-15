const express = require('express');
const cors = require('cors');
const path = require('path');
const config = require('./config');

// Import routes
const apiRoutes = require('./routes/api');
const chatRoutes = require('./routes/chat');

const app = express();
const PORT = config.port;

// Middleware
app.use(cors({
  origin: config.corsOrigins,
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '../dist')));

// API Routes
app.use('/api', apiRoutes);
app.use('/api/chat', chatRoutes);

// Catch all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
  console.log(`🔗 API: http://localhost:${PORT}/api`);
  console.log(`📱 Frontend (Vite): http://localhost:5173`);
  console.log(`📄 Production build served from: http://localhost:${PORT}`);
});

module.exports = app;
