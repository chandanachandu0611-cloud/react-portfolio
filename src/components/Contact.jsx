import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    state: 'idle', // 'idle' | 'loading' | 'success' | 'error'
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ state: 'loading', message: 'Sending your message...' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '74eefa8b-3372-4489-82e4-6b689943bf94',
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Contact Form Message',
          message: formData.message,
          from_name: 'Portfolio Contact Form',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({
          state: 'success',
          message: 'Thank you! Your message has been sent successfully. I will get back to you soon.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus({
          state: 'error',
          message: result.message || 'Something went wrong. Please try again or reach out on LinkedIn.',
        });
      }
    } catch (err) {
      setFormStatus({
        state: 'error',
        message: 'Network error occurred. Please check your connection or reach out directly via LinkedIn.',
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="subheading">Let's Connect</span>
          <h2>Contact <span className="text-gradient">Me</span></h2>
          <p>Have a project in mind, an opportunity, or want to discuss backend architectures? Feel free to reach out!</p>
        </div>

        <div className="contact-grid">
          {/* Contact Details & Socials */}
          <div className="contact-info-panel glass-panel">
            <h3>Get in Touch</h3>
            <p className="contact-intro">
              I am actively seeking backend engineering internships, collaborative AI projects, and opportunities to build high-scale solutions.
            </p>

            <div className="contact-info-items">
              <div className="contact-info-item">
                <div className="contact-icon-wrapper">
                  <Mail size={20} className="text-cyan" />
                </div>
                <div>
                  <span className="contact-label">Response Time</span>
                  <span className="contact-value">Within 24 Hours</span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-wrapper">
                  <MapPin size={20} className="text-indigo" />
                </div>
                <div>
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Bengaluru, India (IST)</span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-wrapper">
                  <GithubIcon size={20} className="text-purple" />
                </div>
                <div>
                  <span className="contact-label">GitHub</span>
                  <a
                    href="https://github.com/Chandanachandu0611-cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    @Chandanachandu0611-cloud
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-wrapper">
                  <LinkedinIcon size={20} className="text-blue" />
                </div>
                <div>
                  <span className="contact-label">LinkedIn</span>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    Chandana T P on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-availability-box">
              <span className="pulse-dot"></span>
              <span>Available for Internship & Full-time Roles</span>
            </div>
          </div>

          {/* Contact Form with Web3Forms */}
          <div className="contact-form-panel glass-panel">
            <form onSubmit={handleSubmit} className="contact-form-inner" id="portfolio-contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name <span className="req">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Alex Smith"
                    disabled={formStatus.state === 'loading'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email <span className="req">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="alex@example.com"
                    disabled={formStatus.state === 'loading'}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration / Internship Opportunity"
                  disabled={formStatus.state === 'loading'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message <span className="req">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project, idea, or opportunity..."
                  disabled={formStatus.state === 'loading'}
                ></textarea>
              </div>

              {/* Status Alert Banner */}
              {formStatus.state === 'success' && (
                <div className="alert-message success animate-fade-in" role="alert">
                  <CheckCircle2 size={20} />
                  <span>{formStatus.message}</span>
                </div>
              )}

              {formStatus.state === 'error' && (
                <div className="alert-message error animate-fade-in" role="alert">
                  <AlertCircle size={20} />
                  <span>{formStatus.message}</span>
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={formStatus.state === 'loading'}
              >
                {formStatus.state === 'loading' ? (
                  <>
                    <Loader2 size={18} className="spinner" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
