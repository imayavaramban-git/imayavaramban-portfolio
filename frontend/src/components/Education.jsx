import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle2, BookmarkCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Education() {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="section credentials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Academic &amp; Professional Growth</span>
          <h2 className="section-title">Education &amp; Certifications</h2>
          <p className="section-subtitle">
            Formal engineering foundation paired with continuous professional certifications in artificial intelligence, Python, data analytics, and augmented reality.
          </p>
        </div>

        <div className="credentials-grid">
          {/* Degree Card */}
          <div className="card degree-card">
            <div className="degree-header">
              <div className="degree-icon-box">
                <GraduationCap size={28} />
              </div>
              <span className="degree-year-badge">Class of {education.completed_year}</span>
            </div>

            <h3 className="degree-title">{education.degree}</h3>
            <h4 className="degree-major">{education.major}</h4>
            <p className="degree-institution">{education.institution}</p>
            <p className="degree-university">{education.university}</p>

            <div className="degree-grade-badge">
              <span>Overall Score: <strong>{education.percentage}</strong></span>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="card certs-card">
            <div className="certs-header">
              <div className="certs-icon-box">
                <Award size={24} />
              </div>
              <h3 className="certs-card-title">Verified Certifications</h3>
            </div>

            <div className="certs-list">
              {certifications.map((cert, idx) => (
                <div key={idx} className="cert-item">
                  <div className="cert-item-icon">
                    <BookmarkCheck size={18} />
                  </div>
                  <div className="cert-item-details">
                    <h4 className="cert-title">{cert.title}</h4>
                    <div className="cert-meta">
                      <span className="cert-issuer">{cert.issuer}</span>
                      <span className="cert-sep">&bull;</span>
                      <span className="cert-date">{cert.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
