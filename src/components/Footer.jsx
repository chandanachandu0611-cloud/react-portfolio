import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-header">
              <div className="brand-icon">
                <Code2 size={20} />
              </div>
              <span className="brand-name">
                Chandana<span className="text-gradient">.dev</span>
              </span>
            </div>
            <p className="footer-tagline">
              Information Science & Technology student crafting performant backend architectures and intelligent software systems.
            </p>
          </div>

          <div className="footer-links-group">
            <span className="footer-links-title">Quick Links</span>
            <ul className="footer-links">
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-social-group">
            <span className="footer-links-title">Connect</span>
            <div className="footer-social-icons">
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
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Chandana T P. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
