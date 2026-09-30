import React from 'react';
import { Code2, Globe, Database, Palette, Cpu } from 'lucide-react';
import { portfolioConfig } from '../config/portfolioConfig';
import { TechIcon } from '../components/Icons';

export const SkillsPage = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-header-icon">
          <Code2 size={22} />
        </div>
        <h1 className="page-title">My Skills</h1>
      </div>

      <div className="skills-grid">
        {/* Programming Languages */}
        <div className="card skills-category-card">
          <div className="skills-cat-header">
            <Code2 size={20} className="skills-cat-header-icon" />
            <span>Programming Languages</span>
          </div>
          <div className="skills-items-row">
            {portfolioConfig.skills.programming.map((skill) => (
              <div key={skill.name} className="skill-item-badge">
                <div className="skill-logo-wrap">
                  <TechIcon name={skill.icon} size={36} />
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Web Technologies */}
        <div className="card skills-category-card">
          <div className="skills-cat-header">
            <Globe size={20} className="skills-cat-header-icon" />
            <span>Web Technologies</span>
          </div>
          <div className="skills-items-row">
            {portfolioConfig.skills.web.map((skill) => (
              <div key={skill.name} className="skill-item-badge">
                <div className="skill-logo-wrap">
                  <TechIcon name={skill.icon} size={36} />
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Database */}
        <div className="card skills-category-card">
          <div className="skills-cat-header">
            <Database size={20} className="skills-cat-header-icon" />
            <span>Database</span>
          </div>
          <div className="skills-items-row">
            {portfolioConfig.skills.database.map((skill) => (
              <div key={skill.name} className="skill-item-badge">
                <div className="skill-logo-wrap">
                  <TechIcon name={skill.icon} size={36} />
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* UI/UX Design */}
        <div className="card skills-category-card">
          <div className="skills-cat-header">
            <Palette size={20} className="skills-cat-header-icon" />
            <span>UI/UX Design</span>
          </div>
          <div className="skills-items-row">
            {portfolioConfig.skills.design.map((skill) => (
              <div key={skill.name} className="skill-item-badge">
                <div className="skill-logo-wrap">
                  <TechIcon name={skill.icon} size={36} />
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Core Concepts */}
        <div className="card skills-category-card" style={{ gridColumn: '1 / -1' }}>
          <div className="skills-cat-header">
            <Cpu size={20} className="skills-cat-header-icon" />
            <span>Core Concepts</span>
          </div>
          <div className="skills-items-row">
            {portfolioConfig.skills.core.map((skill) => (
              <div key={skill.name} className="skill-item-badge" style={{ minWidth: '160px' }}>
                <div className="skill-logo-wrap">
                  <TechIcon name={skill.icon} size={36} />
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
