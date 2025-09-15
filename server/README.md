# Portfolio Site Backend

Express.js backend server for Lily's personal portfolio website.

## Features

- **Express.js** server with RESTful API endpoints
- **CORS** configuration for frontend-backend communication
- **Static file serving** for the built React application
- **Health check** endpoint for monitoring
- **Modular routing** structure

## API Endpoints

### Home/Info Endpoint
- **GET** `/api` - Returns API information and available endpoints

### Health Check
- **GET** `/api/health` - Returns server health status and metrics

## Development

### Prerequisites
- Node.js >= 16.0.0
- npm

### Installation
```bash
npm install
```

### Running the Server

#### Development Mode (with auto-reload)
```bash
npm run dev
```

#### Production Mode
```bash
npm start
```

### Environment Variables

Create a `.env` file in the server directory:
```
PORT=3001
NODE_ENV=development
```

## Project Structure

```
server/
├── app.js              # Main Express application
├── config.js           # Configuration settings
├── package.json        # Server dependencies
├── routes/
│   └── api.js          # API routes
└── README.md           # This file
```

## Deployment

The server is configured to serve the built React application from the `../dist` directory. Make sure to build the frontend before starting the server in production:

```bash
# From the root directory
npm run build
npm run server
```
