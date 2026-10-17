import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon, YoutubeIcon } from './Icons';

export default function Projects() {
  const projects = [
    {
      id: 'agentflow',
      title: 'Agentflow AI',
      subtitle: 'Multi-Agent Autonomous Workflow Engine',
      description:
        'An automated multi-agent workflow engine built with Python, MongoDB, and integrated with Google Gemini AI. Allows autonomous agent chains to coordinate, decompose complex queries, and persist states efficiently.',
      image: '/images/agentflow.jpg',
      tags: ['Python', 'MongoDB', 'Gemini AI', 'Multi-Agent Systems', 'REST API'],
      features: [
        'Dynamic agent orchestration and tool execution graph',
        'Stateful session logging & task persistence in MongoDB',
        'Powered by Google Gemini generative AI reasoning',
      ],
      githubUrl: 'https://github.com/Chandanachandu0611-cloud',
      liveUrl: 'https://developer-profile-sooty.vercel.app/',
      highlightBadge: 'Featured Project',
    },
    {
      id: 'voice-coding',
      title: 'Realtime Voice Coding Assistant',
      subtitle: 'Voice-Driven Code Generation & Analytics',
      description:
        'A real-time voice-driven coding assistant application powered by Python, MongoDB, and BigQuery data processing. Listens to speech commands, synthesizes code solutions, and benchmarks performance analytics.',
      image: '/images/voice-coding.jpg',
      tags: ['Python', 'BigQuery', 'MongoDB', 'Voice Recognition', 'Data Pipelines'],
      features: [
        'Real-time audio processing to semantic code snippets',
        'Analytical pipeline storing coding telemetries in BigQuery',
        'MongoDB caching for sub-second intent retrieval',
      ],
      githubUrl: 'https://github.com/Chandanachandu0611-cloud',
      videoUrl: 'https://youtu.be/5SjDfNOpRjo',
      highlightBadge: 'Video Demo Available',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="subheading">Selected Works</span>
          <h2>Featured <span className="text-gradient">Projects</span></h2>
          <p>Real-world applications showcasing backend engineering, data systems, and AI integration.</p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article key={project.id} className="project-feature-card glass-panel">
              <div className="project-media-col">
                <div className="project-img-wrapper">
                  <img
                    src={project.image}
                    alt={`${project.title} Preview Screenshot`}
                    className="project-banner-img"
                    loading="lazy"
                  />
                  <div className="project-badge-overlay">
                    <span className="badge">
                      <Sparkles size={12} /> {project.highlightBadge}
                    </span>
                  </div>
                </div>
              </div>

              <div className="project-info-col">
                <div className="project-heading-area">
                  <span className="project-subtitle">{project.subtitle}</span>
                  <h3 className="project-title">{project.title}</h3>
                </div>

                <p className="project-desc">{project.description}</p>

                <div className="project-features-list">
                  <span className="feature-list-title">Key Capabilities:</span>
                  <ul>
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx}>{feat}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-action-buttons">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline project-btn"
                    >
                      <GithubIcon size={16} />
                      <span>View on GitHub</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary project-btn"
                    >
                      <ExternalLink size={16} />
                      <span>Live Preview</span>
                    </a>
                  )}

                  {project.videoUrl && (
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline project-btn text-cyan"
                    >
                      <YoutubeIcon size={16} />
                      <span>Watch Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Video Feature Highlight Card */}
        <div className="video-spotlight-card glass-panel">
          <div className="video-spotlight-content">
            <div className="spotlight-icon-box">
              <YoutubeIcon size={32} className="text-purple" />
            </div>
            <div>
              <h4>Watch the Portfolio & Project Video Walkthrough</h4>
              <p>See the live walkthrough and implementation breakdown of the projects on YouTube.</p>
            </div>
          </div>
          <a
            href="https://youtu.be/5SjDfNOpRjo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <YoutubeIcon size={18} />
            <span>Watch on YouTube</span>
          </a>
        </div>
      </div>
    </section>
  );
}
