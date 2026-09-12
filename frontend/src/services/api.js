/**
 * REST API client for interacting with the FastAPI backend.
 */
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';

async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.detail || `HTTP Error ${res.status}: ${res.statusText}`);
    }
    return await res.json();
  } catch (err) {
    // Attempt relative proxy fallback if direct request failed
    if (API_BASE_URL.startsWith('http')) {
      try {
        const fallbackRes = await fetch(`/api${endpoint}`, options);
        if (fallbackRes.ok) {
          return await fallbackRes.json();
        }
      } catch {}
    }
    throw err;
  }
}

export const api = {
  /**
   * Health status check
   */
  async getHealth() {
    return request('/health');
  },

  /**
   * Get verified canonical portfolio details
   */
  async getPortfolio() {
    return request('/portfolio');
  },

  /**
   * Send message to the strictly guarded AI Assistant
   */
  async sendChatMessage(message, conversationHistory = []) {
    return request('/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        conversation_history: conversationHistory,
      }),
    });
  },
};
