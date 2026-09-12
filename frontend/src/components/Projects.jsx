import React from 'react';
import { Cpu, Radio, ShieldAlert, Disc, Bot, ExternalLink, Clock } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Projects() {
  const projectIcons = {
    'self-balancing-robot': Bot,
    'wifi-robot': Radio,
    'gsm-panic-button': ShieldAlert,
    'cnc-plotter': Disc,
    'robin-robot': Cpu,
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Engineering Showcase</span>
          <h2 className="section-title">Robotics &amp; Hardware Projects</h2>
          <p className="section-subtitle">
            Hands-on prototypes and robotic systems engineered across embedded computing, control algorithms, and IoT telematics.
          </p>
        </div>

        <div className="projects-grid">
          {portfolioData.projects.map((proj) => {
            const Icon = projectIcons[proj.id] || Cpu;
            return (
              <div key={proj.id} className="card project-card">
                <div className="project-card-header">
                  <div className="project-icon-box">
                    <Icon size={24} />
                  </div>
                  <span className="project-category-badge">{proj.category}</span>
                </div>

                <h3 className="project-card-title">{proj.title}</h3>
                
                {proj.client && (
                  <div className="project-client-badge">
                    <span>Client: <strong>{proj.client}</strong></span>
                  </div>
                )}

                <p className="project-card-desc">{proj.description}</p>

                <div className="project-role-row">
                  <span className="project-role-label">Role:</span>
                  <span className="project-role-val">{proj.role}</span>
                </div>

                <div className="project-tech-tags">
                  {proj.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-card-footer">
                  <span className="project-link-placeholder">
                    <Clock size={13} />
                    <span>{proj.link_status}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
