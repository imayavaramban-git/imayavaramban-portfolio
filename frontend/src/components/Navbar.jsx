import React, { useState, useEffect } from 'react';
import { Bot, Menu, X, Sparkles, Terminal } from 'lucide-react';

export default function Navbar({ onOpenChat }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Impact', href: '#impact' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Programs', href: '#programs' },
    { name: 'Projects', href: '#projects' },
    { name: 'Platforms', href: '#digital-ops' },
    { name: 'Credentials', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#hero" className="nav-brand">
          <div className="nav-brand-icon">
            <Terminal size={18} />
          </div>
          <div className="nav-brand-text">
            <span className="nav-brand-name">Imayavaramban S</span>
            <span className="nav-brand-title">AI &amp; Innovation</span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-item">
              {link.name}
            </a>
          ))}
          <button onClick={onOpenChat} className="nav-ai-btn">
            <Bot size={16} />
            <span>Ask AI</span>
            <span className="ai-pulse-dot"></span>
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="nav-mobile-toggle">
          <button onClick={onOpenChat} className="nav-ai-btn mobile-ai-btn" aria-label="Open AI Assistant">
            <Bot size={16} />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="nav-mobile-drawer">
          <div className="container mobile-drawer-content">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat();
              }}
              className="btn-primary mobile-chat-cta"
            >
              <Bot size={18} />
              <span>Ask AI Portfolio Assistant</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
