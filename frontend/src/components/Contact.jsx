import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, ExternalLink, Bot } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Contact({ onOpenChat }) {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(personal.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Direct Collaboration</span>
          <h2 className="section-title">Let&apos;s Connect</h2>
          <p className="section-subtitle">
            Open for discussions regarding <strong>AI Software Engineer</strong> and <strong>Senior Manager / Innovation Leader</strong> opportunities, ecosystem advisory, and technological partnerships.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="card contact-details-card">
            <h3 className="contact-card-title">Professional Information</h3>
            <p className="contact-card-sub">
              Reach out directly via email or phone for exploratory conversations and recruiter inquiries.
            </p>

            <div className="contact-methods-list">
              <div className="contact-method-item">
                <div className="method-icon-box">
                  <Mail size={20} />
                </div>
                <div className="method-info">
                  <span className="method-label">Direct Email</span>
                  <a href={`mailto:${personal.email}`} className="method-value">
                    {personal.email}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="btn-copy-small"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check size={15} className="copied-check" /> : <Copy size={15} />}
                </button>
              </div>

              <div className="contact-method-item">
                <div className="method-icon-box">
                  <Phone size={20} />
                </div>
                <div className="method-info">
                  <span className="method-label">Phone &amp; WhatsApp</span>
                  <a href={`tel:${personal.phone.replace(/\s+/g, '')}`} className="method-value">
                    {personal.phone}
                  </a>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="method-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="method-info">
                  <span className="method-label">Location</span>
                  <span className="method-value text-static">{personal.location}</span>
                </div>
              </div>
            </div>

            <div className="social-placeholders-row">
              <div className="social-pill-placeholder">
                <span>LinkedIn: <em>{personal.linkedin_url}</em></span>
              </div>
              <div className="social-pill-placeholder">
                <span>GitHub: <em>{personal.github_url}</em></span>
              </div>
            </div>
          </div>

          {/* AI Assistant Quick Launcher Card */}
          <div className="card contact-ai-card">
            <div className="ai-card-glow"></div>
            <div className="ai-card-inner">
              <div className="ai-avatar-circle">
                <Bot size={32} />
              </div>
              <h3 className="ai-cta-title">Have Questions About My Experience?</h3>
              <p className="ai-cta-desc">
                My interactive AI Portfolio Assistant is primed with verified facts regarding my 12+ years in robotics, ShePreneur cohorts, patent filings, and applied AI competencies.
              </p>

              <button onClick={onOpenChat} className="btn-primary ai-launch-btn">
                <Bot size={18} />
                <span>Launch Imayavaramban AI</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
