import React from 'react';
import { Server, Database, Brain, GraduationCap, Compass } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Server className="pillar-icon text-cyan" size={28} />,
      title: 'Backend Engineering',
      desc: 'Developing reliable, clean, and maintainable backend services in Python, focusing on modular structure and efficient execution.',
    },
    {
      icon: <Database className="pillar-icon text-indigo" size={28} />,
      title: 'Databases & Big Data',
      desc: 'Structuring application data with MongoDB and querying large-scale datasets with Google BigQuery.',
    },
    {
      icon: <Brain className="pillar-icon text-purple" size={28} />,
      title: 'AI & Multi-Agent Systems',
      desc: 'Leveraging Google Gemini API and LLM-driven agents to automate multi-step developer workflows and voice coding solutions.',
    },
    {
      icon: <GraduationCap className="pillar-icon text-emerald" size={28} />,
      title: 'Academic Foundations',
      desc: 'Pursuing a B.Tech in Information Science & Technology, continuously mastering algorithms, data structures, and software principles.',
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="subheading">Get to know me</span>
          <h2>About <span className="text-gradient">Me</span></h2>
          <p>Driven by curiosity, engineering discipline, and a desire to build intelligent digital systems.</p>
        </div>

        <div className="about-bio-card glass-panel">
          <div className="bio-text">
            <p className="lead-text">
              Hello! I am an undergraduate student pursuing a <strong>B.Tech in Information Science and Technology</strong>.
            </p>
            <p>
              I have a strong passion for building robust backend solutions with Python, managing production databases like MongoDB and analytical warehouses like BigQuery, and integrating modern artificial intelligence tools into real-world applications.
            </p>
            <p>
              Whether it's designing automated agent pipelines or building speech-driven coding interfaces, I am always eager to learn, build, and collaborate on innovative tech projects that make an impact.
            </p>
          </div>
          <div className="bio-tags">
            <div className="bio-tag"><Compass size={14} /> Problem Solver</div>
            <div className="bio-tag"><Brain size={14} /> AI Enthusiast</div>
            <div className="bio-tag"><Server size={14} /> Backend Focused</div>
          </div>
        </div>

        <div className="about-pillars-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="pillar-card glass-panel">
              <div className="pillar-icon-wrapper">{pillar.icon}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
