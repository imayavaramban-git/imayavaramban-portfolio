import React from 'react';
import { Cloud, Server, Globe, Video, FileSpreadsheet, CheckCircle2, Shield } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function DigitalTransformation() {
  const { digital_transformation } = portfolioData;

  return (
    <section id="digital-ops" className="section digital-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Technology Implementation</span>
          <h2 className="section-title">Digital Transformation &amp; Platform Operations</h2>
          <p className="section-subtitle">
            Coordinating enterprise learning management systems, cloud infrastructure, domain administration, and operational data pipelines.
          </p>
        </div>

        <div className="digital-grid">
          {/* Operational Focus Areas */}
          <div className="card digital-focus-card">
            <h3 className="digital-card-title">
              <Shield size={20} className="digital-title-icon" />
              <span>Core Digital &amp; Operational Workflows</span>
            </h3>
            <ul className="digital-workflow-list">
              {digital_transformation.focus_areas.map((area, idx) => (
                <li key={idx} className="digital-workflow-item">
                  <CheckCircle2 size={16} className="bullet-icon-teal" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms & Infrastructure */}
          <div className="card digital-platforms-card">
            <h3 className="digital-card-title">
              <Server size={20} className="digital-title-icon" />
              <span>Platforms &amp; Infrastructure Managed</span>
            </h3>
            <div className="platforms-grid">
              {digital_transformation.platforms.map((plat, idx) => (
                <div key={idx} className="platform-box">
                  <span className="platform-name">{plat.name}</span>
                  <span className="platform-cat">{plat.category}</span>
                </div>
              ))}
            </div>
            <p className="digital-disclaimer">
              *Demonstrating hands-on platform deployment, administrative coordination, and digital operating models.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
