import React from 'react';
import { GraduationCap, School, Landmark } from 'lucide-react';
import { portfolioConfig } from '../config/portfolioConfig';

export const EducationPage = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-header-icon">
          <GraduationCap size={22} />
        </div>
        <h1 className="page-title">Education</h1>
      </div>

      <div className="education-timeline">
        {portfolioConfig.education.map((item) => (
          <div key={item.id} className="education-item">
            <div className="education-dot" />
            
            <div className="card education-card">
              <div className="education-left">
                <div className={`education-icon-box ${item.type}`}>
                  {item.type === 'college' ? (
                    <Landmark size={26} />
                  ) : (
                    <School size={26} />
                  )}
                </div>
                <div>
                  <h2 className="education-title">{item.institution}</h2>
                  <div className="education-sub">{item.degree}</div>
                  <div className="education-year">{item.period}</div>
                </div>
              </div>

              <div className="education-badge">
                <div className="badge-label">{item.scoreType}</div>
                <div className="badge-value">{item.score}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
