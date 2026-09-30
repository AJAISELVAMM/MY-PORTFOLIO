import React from 'react';
import { Trophy, Star, Award } from 'lucide-react';
import { portfolioConfig } from '../config/portfolioConfig';

export const AchievementsPage = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-header-icon">
          <Trophy size={22} />
        </div>
        <h1 className="page-title">Achievements</h1>
      </div>

      <div className="achievements-list">
        {portfolioConfig.achievements.map((item) => (
          <div key={item.id} className="card achievement-card">
            <div className="achievement-icon-box">
              {item.icon === 'trophy' ? (
                <Trophy size={24} />
              ) : (
                <Star size={24} />
              )}
            </div>
            <div className="achievement-text">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
