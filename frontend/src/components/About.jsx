import React from 'react';
import { Layers, Bot, Cpu, Cloud, Users2, Landmark } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function About() {
  const highlights = [
    {
      title: 'Innovation Program Architecture',
      desc: 'Designing and executing multi-stage entrepreneurship pipelines from discovery to investor-ready pitch sessions.',
      icon: Layers,
    },
    {
      title: 'AI & Emerging Technologies',
      desc: 'Hands-on exploration in applied AI software, Python tools, IoT networks, and technology capacity building.',
      icon: Bot,
    },
    {
      title: 'Robotics & Embedded Systems',
      desc: 'Strong engineering roots in PID control algorithms, Arduino microcontrollers, and custom motor driver design.',
      icon: Cpu,
    },
    {
      title: 'Digital Transformation',
      desc: 'Architecting cloud learning ecosystems, LMS workflows, UAT procedures, and operational reporting dashboards.',
      icon: Cloud,
    },
    {
      title: 'Ecosystem Development',
      desc: 'Engaging 300+ innovators annually, orchestrating mentor panels, review committees, and technical feasibility reviews.',
      icon: Users2,
    },
    {
      title: 'Government & Corporate Partnerships',
      desc: 'Spearheading strategic initiatives supported by national bodies including AIM–NITI Aayog and Dell Technologies.',
      icon: Landmark,
    },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Professional Journey</span>
          <h2 className="section-title">Bridging Technical Depth with Scalable Innovation</h2>
          <p className="section-subtitle">
            A 12+ year journey evolving from robotics laboratory engineering to architecting national-level innovation ecosystems.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Narrative */}
          <div className="about-narrative">
            <h3 className="narrative-heading">Engineering Mindset. Ecosystem Leadership.</h3>
            
            <p className="narrative-p">
              I am an <strong>Innovation Programs and Ecosystem Development professional</strong> with over 12 years of multidisciplinary experience spanning engineering design, product prototyping, and nationwide innovation program architecture.
            </p>

            <p className="narrative-p">
              My engineering career originated in <strong>robotics R&amp;D and embedded systems prototyping</strong>, designing control algorithms, motor controllers, and sensor telemetry. Over the past decade, this foundational technical background has powered my evolution into architecting high-impact digital pathways and technology-enabled learning initiatives.
            </p>

            <p className="narrative-p">
              Currently at <strong>Learning Links Foundation</strong>, I lead flagship initiatives supported by <strong>AIM–NITI Aayog</strong> and <strong>Dell Technologies</strong>—including the <em>ShePreneur</em> and <em>Emerging Technologies Programs</em>. In this capacity, I design structured funnels that take 300+ participants annually through Design Thinking, prototyping, mentored validation, and patent enablement.
            </p>

            <div className="narrative-quote-box">
              <p className="narrative-quote">
                &ldquo;I work at the convergence of technology understanding, program strategy, and ecosystem orchestration to transform early-stage concepts into validated, scalable solutions.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: 6 Highlight Cards */}
          <div className="about-highlights-grid">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="card highlight-card">
                  <div className="highlight-card-header">
                    <div className="highlight-icon-wrap">
                      <Icon size={20} />
                    </div>
                    <h4 className="highlight-card-title">{item.title}</h4>
                  </div>
                  <p className="highlight-card-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
