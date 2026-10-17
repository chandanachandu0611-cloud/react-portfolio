import React from 'react';
import { ArrowRight, Terminal, Sparkles, Database } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge-live animate-fade-in">
            <span className="pulse-dot"></span>
            <span>Open to Opportunities & Internships</span>
          </div>

          <h1 className="hero-title animate-fade-in">
            Hi, I'm <span className="text-gradient">Chandana T P</span>
          </h1>

          <p className="hero-subtitle">
            Information Science & Technology Student <span className="hero-divider">|</span> Python & Backend Developer
          </p>

          <p className="hero-description">
            Passionate about architecting resilient backend systems with Python, orchestrating NoSQL & analytical databases like MongoDB & BigQuery, and building intelligent multi-agent AI solutions.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-outline">
              <span>Contact Me</span>
            </a>
            <div className="hero-social-links">
              <a
                href="https://github.com/Chandanachandu0611-cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>

          <div className="hero-highlights">
            <div className="highlight-item">
              <span className="highlight-num">2+</span>
              <span className="highlight-label">Core AI & Data Projects</span>
            </div>
            <div className="highlight-divider"></div>
            <div className="highlight-item">
              <span className="highlight-num">Python</span>
              <span className="highlight-label">Backend Specialty</span>
            </div>
            <div className="highlight-divider"></div>
            <div className="highlight-item">
              <span className="highlight-num">B.Tech</span>
              <span className="highlight-label">Information Science</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-wrapper">
            <div className="avatar-ambient-glow"></div>
            <div className="avatar-frame">
              <img
                src="/images/avatar.jpg"
                alt="Chandana T P - Developer Portrait"
                className="avatar-img"
              />
            </div>

            {/* Floating tech badges */}
            <div className="floating-badge badge-python">
              <Terminal size={15} />
              <span>Python 3</span>
            </div>

            <div className="floating-badge badge-database">
              <Database size={15} />
              <span>MongoDB & BigQuery</span>
            </div>

            <div className="floating-badge badge-ai">
              <Sparkles size={15} />
              <span>Gemini AI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
