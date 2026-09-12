import React, { useState } from 'react';
import { Bot, Code2, Network, Cloud, Share2, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    {
      id: 'all',
      name: 'All Capabilities',
      icon: CheckCircle,
      description: 'Comprehensive overview across engineering, platforms, and innovation.',
    },
    {
      id: 'ai_and_emerging_tech',
      name: 'AI & Emerging Tech',
      icon: Bot,
      description: 'Applied AI software, IoT architectures, robotics, and AR/VR technologies.',
      skills: portfolioData.skills.ai_and_emerging_tech,
    },
    {
      id: 'programming_and_technical',
      name: 'Programming & Hardware',
      icon: Code2,
      description: 'Python development, embedded C++, microcontroller prototyping, and control algorithms.',
      skills: portfolioData.skills.programming_and_technical,
    },
    {
      id: 'innovation_and_leadership',
      name: 'Innovation Leadership',
      icon: Network,
      description: 'Program design, government partnerships, Design Thinking, and ecosystem pipelines.',
      skills: portfolioData.skills.innovation_and_leadership,
    },
    {
      id: 'digital_transformation',
      name: 'Platforms & Cloud Ops',
      icon: Cloud,
      description: 'LMS ecosystem setups, AWS hosting, domain management, UAT, and digital workflows.',
      skills: portfolioData.skills.digital_transformation,
    },
    {
      id: 'collaboration_and_content',
      name: 'Collaboration & Tools',
      icon: Share2,
      description: 'Assessment surveys, virtual workshops, media platforms, and data consolidation tools.',
      skills: portfolioData.skills.collaboration_and_content,
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Technical &amp; Leadership Toolkit</span>
          <h2 className="section-title">Categorized Competencies</h2>
          <p className="section-subtitle">
            A balanced skill matrix uniting applied software engineering with strategic innovation program leadership.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="skills-tab-bar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`skill-tab-btn ${isActive ? 'active' : ''}`}
              >
                <Icon size={16} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Grid Display */}
        <div className="skills-display-area">
          {categories
            .filter((cat) => cat.id !== 'all' && (activeTab === 'all' || activeTab === cat.id))
            .map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.id} className="card skill-category-card">
                  <div className="skill-cat-header">
                    <div className="skill-cat-icon">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="skill-cat-title">{cat.name}</h3>
                      <p className="skill-cat-desc">{cat.description}</p>
                    </div>
                  </div>

                  <div className="skill-tags-cloud">
                    {cat.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
