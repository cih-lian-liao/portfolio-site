import React, { useState, useRef, useEffect } from 'react';
import { FaPaperPlane, FaRobot, FaUser, FaSpinner, FaLightbulb } from 'react-icons/fa';
import "./LilyGPT.css";

export default function LilyGPT() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm LilyGPT 🤖 Ask me anything about Lily - her skills, projects, experience, or background!",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const chatMessagesRef = useRef(null);

  const scrollToBottom = () => {
    setTimeout(() => {
      if (chatMessagesRef.current) {
        chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
      }
    }, 100);
  };

  useEffect(() => {
    // 只在有新消息時滾動，並且延遲一點時間確保 DOM 更新完成
    if (messages.length > 1) {
      scrollToBottom();
    }
  }, [messages]);

  // 當加載狀態改變時也滾動
  useEffect(() => {
    if (!isLoading && messages.length > 1) {
      scrollToBottom();
    }
  }, [isLoading]);

  const sendMessage = async (e) => {
    e.preventDefault();
    
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage })
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      const aiMessage = {
        id: Date.now() + 1,
        text: data.response,
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "Sorry, I'm having trouble connecting right now. Please try again later!",
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestedQuestions = [
    "What specific achievements and quantified results has Lily delivered in her recent roles?",
    "How has Lily's transition from product management to software engineering shaped her approach?",
    "What makes Lily stand out as a frontend developer and what are her strongest technical skills?",
    "Can you tell me about Lily's experience with AI integration and modern web technologies?",
    "How does Lily's multilingual background and cultural sensitivity benefit technical teams?",
    "What type of software engineering internship is Lily seeking for Summer 2026?"
  ];

  const handleSuggestedQuestion = async (question) => {
    if (isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: question,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: question })
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      const aiMessage = {
        id: Date.now() + 1,
        text: data.response,
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "Sorry, I'm having trouble connecting right now. Please try again later!",
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="lily-gpt" className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full mb-6 shadow-lg">
            <span className="text-white text-2xl">🤖</span>
          </div>
          <h2 className="text-4xl font-semibold text-gray-800 mb-4 tracking-wide">
            LilyGPT
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have other questions about me? Chat with my AI assistant <br />to learn about my skills, 
            projects, experience, and background!
          </p>
          <div className="w-40 h-0.5 bg-gray-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Chat Container */}
        <div className="chat-container">
          {/* Chat Header */}
          <div className="chat-header">
            <div className="chat-avatar">
              <span className="text-xl">🤖</span>
            </div>
            <div className="chat-info">
              <h3 className="chat-title">LilyGPT Assistant</h3>
              <p className="chat-status">Online • Ready to help</p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="chat-messages" ref={chatMessagesRef}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message-wrapper ${message.sender === 'user' ? 'user-message' : 'ai-message'}`}
              >
                <div className="message-content">
                  <div className="message-avatar">
                    {message.sender === 'user' ? <FaUser size={16} /> : <FaRobot size={16} />}
                  </div>
                  <div className={`message-bubble ${message.sender === 'user' ? 'user-bubble' : 'ai-bubble'}`}>
                    <p className="message-text">{message.text}</p>
                    <p className="message-time">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Loading indicator */}
            {isLoading && (
              <div className="message-wrapper ai-message">
                <div className="message-content">
                  <div className="message-avatar">
                    <FaRobot size={16} />
                  </div>
                  <div className="message-bubble ai-bubble loading-bubble">
                    <div className="loading-content">
                      <FaSpinner className="loading-spinner" size={14} />
                      <span className="loading-text">LilyGPT is thinking...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          <div className="suggestions-section">
            <div className="suggestions-header">
              <div className="suggestions-icon">
                <FaLightbulb size={16} />
              </div>
              <p className="suggestions-title">Try asking:</p>
            </div>
            <div className="suggestions-grid">
              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => handleSuggestedQuestion(question)}
                  className="suggestion-button"
                  disabled={isLoading}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input Form */}
          <div className="chat-input-section">
            <form onSubmit={sendMessage} className="chat-form">
              <div className="input-container">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask me anything about Lily..."
                  className="message-input"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim() || isLoading}
                  className="send-button"
                >
                  <FaPaperPlane size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Info Footer */}
        <div className="info-footer">
          <p className="info-text">
            Powered by{' '}
            <a 
              href="https://openrouter.ai/openai/gpt-3.5-turbo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="info-link"
            >
              OpenAI GPT-3.5 Turbo
            </a>
            {' '}via OpenRouter • Information based on Lily's portfolio and resume
          </p>
        </div>
      </div>
    </section>
  );
}
