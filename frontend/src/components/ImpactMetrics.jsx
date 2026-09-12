import React from 'react';
import { Users, Lightbulb, Wrench, FileCheck2, Compass, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function ImpactMetrics() {
  const icons = [Users, Lightbulb, Wrench, FileCheck2, Compass, ShieldCheck];

  return (
    <section id="impact" className="section impact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Measurable Outcomes</span>
          <h2 className="section-title">Proven Scale &amp; Program Impact</h2>
          <p className="section-subtitle">
            Demonstrated track record of orchestrating national innovation funnels, accelerating prototypes, and enabling intellectual property creation.
          </p>
        </div>

        <div className="impact-grid">
          {portfolioData.impact_metrics.map((item, idx) => {
            const Icon = icons[idx] || Users;
            return (
              <div key={idx} className="card impact-card">
                <div className="impact-card-top">
                  <span className="impact-number">{item.metric}</span>
                  <div className="impact-icon-badge">
                    <Icon size={18} />
                  </div>
                </div>
                <h3 className="impact-label">{item.label}</h3>
                <p className="impact-desc">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="impact-guarantee-note">
          <ShieldCheck size={16} />
          <span>All metrics reflect verified program outputs and audited cohort milestones under AIM–NITI Aayog &amp; Dell Technologies initiatives.</span>
        </div>
      </div>
    </section>
  );
}
