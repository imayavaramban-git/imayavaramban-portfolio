import React from 'react';
import { ArrowRight, Award, Compass, Layers, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function InnovationPrograms() {
  const { featured_programs } = portfolioData;
  const shepreneur = featured_programs[0];
  const emergingTech = featured_programs[1];

  const shepreneurStages = [
    { num: '01', title: 'Ideation & Discovery', desc: 'Design Thinking workshops & real-world problem articulation.' },
    { num: '02', title: 'Mentored Validation', desc: 'Feasibility, market novelty, and customer validation reviews.' },
    { num: '03', title: 'Advanced Prototyping', desc: 'Hands-on technical refinement across hardware & software.' },
    { num: '04', title: 'Industry Immersion', desc: 'Mentorship from industry specialists and feasibility checks.' },
    { num: '05', title: 'Investor Pitch', desc: 'Investor-style demo days and patent filing enablement.' },
  ];

  return (
    <section id="programs" className="section programs-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Flagship Initiatives</span>
          <h2 className="section-title">Featured Innovation Programs</h2>
          <p className="section-subtitle">
            Deep-dive into national-scale entrepreneurship pathways and emerging technology capacity building in partnership with AIM–NITI Aayog &amp; Dell Technologies.
          </p>
        </div>

        {/* ShePreneur Card */}
        <div className="card program-spotlight-card">
          <div className="program-badge-row">
            <span className="program-cat-pill">{shepreneur.category}</span>
            <span className="program-partner-pill">{shepreneur.partners}</span>
          </div>

          <h3 className="program-spotlight-title">{shepreneur.title}</h3>
          <p className="program-spotlight-desc">{shepreneur.summary}</p>

          {/* 5-Stage Visual Funnel */}
          <div className="funnel-container">
            <h4 className="funnel-heading">
              <Compass size={16} />
              <span>Structured 5-Stage Digital Innovation Funnel</span>
            </h4>
            <div className="funnel-stages-row">
              {shepreneurStages.map((stage, idx) => (
                <div key={idx} className="funnel-step">
                  <div className="funnel-step-header">
                    <span className="funnel-step-num">{stage.num}</span>
                    {idx < shepreneurStages.length - 1 && <ArrowRight size={14} className="funnel-arrow" />}
                  </div>
                  <h5 className="funnel-step-title">{stage.title}</h5>
                  <p className="funnel-step-desc">{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="program-metric-footer">
            <Award size={18} className="metric-icon" />
            <span><strong>Verified Cohort Impact:</strong> {shepreneur.metrics_highlight}</span>
          </div>
        </div>

        {/* Emerging Tech Program Card */}
        <div className="card program-spotlight-card" style={{ marginTop: '2.5rem' }}>
          <div className="program-badge-row">
            <span className="program-cat-pill">{emergingTech.category}</span>
            <span className="program-partner-pill">{emergingTech.partners}</span>
          </div>

          <h3 className="program-spotlight-title">{emergingTech.title}</h3>
          <p className="program-spotlight-desc">{emergingTech.summary}</p>

          <div className="emerging-tech-domains">
            <span className="tech-domain-pill">Artificial Intelligence</span>
            <span className="tech-domain-pill">Internet of Things (IoT)</span>
            <span className="tech-domain-pill">AR/VR (Augmented Reality)</span>
            <span className="tech-domain-pill">Embedded Systems</span>
            <span className="tech-domain-pill">Web &amp; Mobile App Development</span>
          </div>

          <div className="program-metric-footer">
            <ShieldCheck size={18} className="metric-icon" />
            <span><strong>Operational Scope:</strong> Led curriculum architecture, cloud LMS ecosystem workflows, and a 15-member implementation team.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
