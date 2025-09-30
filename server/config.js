// 確保在開發和生產環境都載入 .env
require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3001,
  nodeEnv: process.env.NODE_ENV || 'development',
  corsOrigins: process.env.NODE_ENV === 'production' 
    ? [
        'https://cihlianliao-portfolio.vercel.app',
        'https://portfolio-site-alpha-eight-25.vercel.app',
        process.env.CORS_ORIGIN
      ].filter(Boolean) // 移除 undefined 值
    : ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:4173'],
  openrouterApiKey: process.env.OPENROUTER_API_KEY
};
