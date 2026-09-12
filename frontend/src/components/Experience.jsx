import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Globe2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Career History</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Over a decade of progressive impact spanning hands-on robotics engineering, technical leadership, and national program management.
          </p>
        </div>

        <div className="timeline-container">
          {portfolioData.experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                {idx < portfolioData.experiences.length - 1 && <div className="timeline-line"></div>}
              </div>

              <div className="card timeline-card">
                <div className="timeline-header">
                  <div>
                    <span className="timeline-period-badge">
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </span>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <h4 className="timeline-company">{exp.organization}</h4>
                  </div>
                  {exp.location && (
                    <div className="timeline-location">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>

                {/* Sub-Programs for Learning Links Foundation */}
                {exp.programs && (
                  <div className="timeline-programs-list">
                    {exp.programs.map((prog, pIdx) => (
                      <div key={pIdx} className="timeline-subprogram">
                        <div className="subprogram-header">
                          <h5 className="subprogram-title">{prog.name}</h5>
                          <span className="subprogram-partner">
                            Partnership: {prog.partnership} &bull; Supported by {prog.corporate_support}
                          </span>
                        </div>
                        <ul className="subprogram-bullets">
                          {prog.details.map((detail, dIdx) => (
                            <li key={dIdx}>
                              <CheckCircle2 size={15} className="bullet-icon" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Additional Leadership */}
                    {exp.additional_leadership && (
                      <div className="timeline-subprogram additional-leadership-box">
                        <div className="subprogram-header">
                          <h5 className="subprogram-title">
                            <Globe2 size={16} />
                            <span>International &amp; Strategic Initiatives</span>
                          </h5>
                        </div>
                        <ul className="subprogram-bullets">
                          {exp.additional_leadership.map((item, aIdx) => (
                            <li key={aIdx}>
                              <ChevronRight size={15} className="bullet-icon" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Standard Role Details */}
                {exp.details && (
                  <ul className="timeline-standard-bullets">
                    {exp.details.map((item, dIdx) => (
                      <li key={dIdx}>
                        <CheckCircle2 size={15} className="bullet-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
