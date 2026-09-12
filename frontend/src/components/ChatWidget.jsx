import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, Trash2, Sparkles, AlertCircle, RefreshCw, ChevronDown, CheckCheck } from 'lucide-react';
import { api } from '../services/api';
import { portfolioData } from '../data/portfolio';

export default function ChatWidget({ isOpen, onClose, onOpen }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hi! I'm Imayavaramban's AI Portfolio Assistant. I can help you explore his experience in AI, robotics, innovation programs, digital transformation, and technology leadership.",
      sources: ['Verified Portfolio'],
    },
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  const handleSend = async (textToSend) => {
    const messageText = (textToSend || input).trim();
    if (!messageText || isLoading) return;

    setError(null);
    setInput('');

    // Append user message
    const userMessage = { role: 'user', content: messageText };
    const updatedHistory = [...messages, userMessage];
    setMessages(updatedHistory);
    setIsLoading(true);

    try {
      // Map history for backend (excluding the initial welcome greeting)
      const historyPayload = updatedHistory
        .slice(1, -1)
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await api.sendChatMessage(messageText, historyPayload);

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: res.reply,
          sources: res.sources || ['Verified Portfolio'],
        },
      ]);
    } catch (err) {
      console.error('Chat error:', err);
      setError('Unable to reach the assistant. Please ensure the backend is running.');
      // Keep user message so they don't lose their question
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleClear = () => {
    setMessages([
      {
        role: 'assistant',
        content:
          "Hi! I'm Imayavaramban's AI Portfolio Assistant. I can help you explore his experience in AI, robotics, innovation programs, digital transformation, and technology leadership.",
        sources: ['Verified Portfolio'],
      },
    ]);
    setError(null);
  };

  return (
    <div className="chat-widget-wrapper">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={onOpen}
          className="chat-floating-btn"
          aria-label="Open AI Portfolio Assistant"
          title="Open AI Portfolio Assistant"
        >
          <div className="btn-ai-glow"></div>
          <Bot size={24} className="chat-btn-icon" />
          <span className="chat-btn-label">Ask Imayavaramban AI</span>
          <span className="chat-badge-dot"></span>
        </button>
      )}

      {/* Expandable Chat Panel */}
      {isOpen && (
        <div className="chat-panel card" role="dialog" aria-modal="true" aria-labelledby="chat-title">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">
                <Bot size={20} />
              </div>
              <div>
                <h3 id="chat-title" className="chat-title">Imayavaramban AI</h3>
                <p className="chat-subtitle">Your guide to my professional journey</p>
              </div>
            </div>

            <div className="chat-header-actions">
              <button
                onClick={handleClear}
                className="chat-action-icon"
                title="Clear conversation"
                aria-label="Clear conversation"
              >
                <Trash2 size={16} />
              </button>
              <button
                onClick={onClose}
                className="chat-action-icon"
                title="Close assistant"
                aria-label="Close assistant"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="chat-body">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chat-message ${msg.role === 'user' ? 'message-user' : 'message-assistant'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="message-avatar">
                    <Bot size={15} />
                  </div>
                )}
                <div className="message-bubble">
                  <div className="message-text">
                    {msg.content.split('\n\n').map((paragraph, pIdx) => (
                      <p key={pIdx} className="message-p">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {msg.role === 'assistant' && msg.sources && msg.sources.length > 0 && (
                    <div className="message-source-tag">
                      <CheckCheck size={12} />
                      <span>{msg.sources[0]}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="chat-message message-assistant">
                <div className="message-avatar">
                  <Bot size={15} />
                </div>
                <div className="message-bubble typing-bubble">
                  <div className="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="chat-error-banner">
                <AlertCircle size={15} />
                <span>{error}</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Starter Questions Chips (if user has not sent questions yet) */}
          {messages.length <= 1 && (
            <div className="chat-starter-chips">
              <div className="starter-header">
                <Sparkles size={13} />
                <span>Suggested questions:</span>
              </div>
              <div className="chips-scroller">
                {portfolioData.starter_questions.map((question, qIdx) => (
                  <button
                    key={qIdx}
                    onClick={() => handleSend(question)}
                    className="starter-chip"
                    disabled={isLoading}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Footer */}
          <div className="chat-footer">
            <div className="chat-input-box">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about my AI skills, ShePreneur, robotics..."
                className="chat-textarea"
                rows={1}
                maxLength={1000}
                aria-label="Message to Imayavaramban AI"
                disabled={isLoading}
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                className="chat-send-btn"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
            <div className="chat-disclaimer">
              <span>Strictly scoped to verified professional records &bull; Zero hallucination guardrails</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
