import React from 'react';
import { Bot, ArrowDown, Cpu, Sparkles, Network, Award, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Hero({ onOpenChat }) {
  const { personal } = portfolioData;

  const highlights = [
    { label: '12+ Years of Experience', icon: Award },
    { label: 'AI & Emerging Technologies', icon: Sparkles },
    { label: 'Innovation Programs', icon: Network },
    { label: 'Robotics & Engineering', icon: Cpu },
  ];

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-glow"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <ShieldCheck size={14} className="badge-icon" />
            <span>Verified Portfolio &bull; Learning Links Foundation</span>
          </div>

          <h1 className="hero-name">{personal.name}</h1>
          <h2 className="hero-title">{personal.hero_title}</h2>

          <p className="hero-tagline">
            {personal.hero_tagline}
          </p>

          <p className="hero-positioning">
            {personal.positioning_subtext}
          </p>

          <div className="hero-actions">
            <a href="#about" className="btn-primary">
              <span>Explore My Work</span>
              <ArrowDown size={16} />
            </a>
            <button onClick={onOpenChat} className="btn-secondary hero-ai-btn">
              <Bot size={18} className="ai-icon-anim" />
              <span>Ask My AI Assistant</span>
            </button>
          </div>

          {/* Highlights Row */}
          <div className="hero-highlights">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="highlight-pill">
                  <Icon size={14} className="highlight-icon" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Abstract Technology Visual */}
        <div className="hero-visual-wrapper">
          <div className="abstract-network-graphic" aria-hidden="true">
            <svg viewBox="0 0 500 500" className="network-svg">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#818cf8" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Central glowing rings */}
              <circle cx="250" cy="250" r="160" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5" strokeDasharray="6 6" />
              <circle cx="250" cy="250" r="110" fill="none" stroke="rgba(99,102,241,0.15)" strokeWidth="1.5" />
              <circle cx="250" cy="250" r="60" fill="url(#glowGrad)" />

              {/* Connecting Nodes and Lines */}
              <line x1="250" y1="250" x2="140" y2="160" stroke="rgba(99,102,241,0.4)" strokeWidth="1.5" />
              <line x1="250" y1="250" x2="360" y2="170" stroke="rgba(6,182,212,0.4)" strokeWidth="1.5" />
              <line x1="250" y1="250" x2="340" y2="340" stroke="rgba(99,102,241,0.4)" strokeWidth="1.5" />
              <line x1="250" y1="250" x2="150" y2="330" stroke="rgba(6,182,212,0.4)" strokeWidth="1.5" />
              <line x1="140" y1="160" x2="250" y2="90" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <line x1="360" y1="170" x2="410" y2="280" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <line x1="150" y1="330" x2="90" y2="240" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <line x1="340" y1="340" x2="250" y2="400" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

              {/* Outer Interconnects */}
              <polygon points="140,160 360,170 340,340 150,330" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

              {/* Nodes */}
              <circle cx="250" cy="250" r="16" fill="#101726" stroke="#6366f1" strokeWidth="3" />
              <circle cx="140" cy="160" r="10" fill="#101726" stroke="#06b6d4" strokeWidth="2.5" />
              <circle cx="360" cy="170" r="10" fill="#101726" stroke="#818cf8" strokeWidth="2.5" />
              <circle cx="340" cy="340" r="10" fill="#101726" stroke="#06b6d4" strokeWidth="2.5" />
              <circle cx="150" cy="330" r="10" fill="#101726" stroke="#6366f1" strokeWidth="2.5" />

              {/* Minor Peripherals */}
              <circle cx="250" cy="90" r="6" fill="#6366f1" />
              <circle cx="410" cy="280" r="6" fill="#06b6d4" />
              <circle cx="250" cy="400" r="6" fill="#818cf8" />
              <circle cx="90" cy="240" r="6" fill="#06b6d4" />
            </svg>

            {/* Visual Centerpiece Crest */}
            <div className="network-center-crest">
              <span className="crest-initials">IS</span>
              <span className="crest-sub">AI &bull; TECH</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
