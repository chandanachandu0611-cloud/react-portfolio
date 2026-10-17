import React, { useState } from 'react';
import { Layout, Server, Wrench, Brackets } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'backend', label: 'Backend & Data' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'tools', label: 'Tools & Cloud' },
  ];

  const skillGroups = [
    {
      categoryId: 'backend',
      title: 'Backend & Databases',
      icon: <Server size={22} className="text-cyan" />,
      description: 'Core backend development, API design, and data persistence layers.',
      skills: [
        { name: 'Python', level: 'Advanced', highlight: true },
        { name: 'MongoDB', level: 'Intermediate', highlight: true },
        { name: 'Google BigQuery', level: 'Intermediate', highlight: true },
        { name: 'SQL & Relational DBs', level: 'Proficient' },
        { name: 'RESTful API Design', level: 'Proficient' },
      ],
    },
    {
      categoryId: 'frontend',
      title: 'Frontend Development',
      icon: <Layout size={22} className="text-indigo" />,
      description: 'Building responsive, accessible, and high-performance user interfaces.',
      skills: [
        { name: 'HTML5 Semantic Web', level: 'Proficient', highlight: true },
        { name: 'CSS3 & Modern Layouts', level: 'Proficient', highlight: true },
        { name: 'JavaScript (ES6+)', level: 'Proficient' },
        { name: 'React & Vite', level: 'Intermediate', highlight: true },
        { name: 'Responsive Web Design', level: 'Proficient' },
      ],
    },
    {
      categoryId: 'tools',
      title: 'Tools, Languages & Cloud',
      icon: <Wrench size={22} className="text-purple" />,
      description: 'Development environment, version control, AI APIs, and deployment.',
      skills: [
        { name: 'Git & GitHub', level: 'Proficient', highlight: true },
        { name: 'Google Gemini API', level: 'Proficient', highlight: true },
        { name: 'Cloud Run & Vercel', level: 'Intermediate' },
        { name: 'C / C++', level: 'Core Foundations' },
        { name: 'VS Code & CLI Tools', level: 'Advanced' },
      ],
    },
  ];

  const filteredGroups = activeTab === 'all'
    ? skillGroups
    : skillGroups.filter(g => g.categoryId === activeTab);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="subheading">Technical Expertise</span>
          <h2>My <span className="text-gradient">Skills</span></h2>
          <p>Technologies, languages, and platforms I work with to bring ideas to reality.</p>
        </div>

        {/* Filter Tabs */}
        <div className="skills-tabs" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeTab === cat.id}
              className={`skills-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredGroups.map((group, idx) => (
            <div key={idx} className="skill-card glass-panel">
              <div className="skill-card-header">
                <div className="skill-icon-box">{group.icon}</div>
                <div>
                  <h3>{group.title}</h3>
                  <p className="skill-card-desc">{group.description}</p>
                </div>
              </div>

              <div className="skills-pill-list">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`skill-pill skill-item ${skill.highlight ? 'skill-pill-highlight' : ''}`}
                  >
                    <div className="skill-item-content">
                      <Brackets size={16} className="bracket-icon pill-check" />
                      <div className="text-container">
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    </div>
                    <span className="skill-badge-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
