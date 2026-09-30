import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

export const ProjectCard = ({ project }) => {
  const isDeployedUrlValid = 
    project.deployedUrl && 
    !project.deployedUrl.startsWith('PASTE_') && 
    project.deployedUrl.trim() !== '';

  return (
    <div className="card project-card">
      <div className="project-card-media">
        <span className="project-num-badge">{project.number}</span>
        <img
          src={project.image}
          alt={project.title}
          className="project-img"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = project.fallbackImage;
          }}
        />
      </div>

      <div className="project-card-info">
        <h2 className="project-title">{project.title}</h2>
        <div className="project-event">{project.event}</div>
        
        <p className="project-desc">{project.description}</p>

        <div className="project-tech-tags">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-pill">{tech}</span>
          ))}
        </div>

        <div className="project-card-actions">
          {/* Internal View Details Link */}
          <Link 
            to={`/projects/${project.slug}`} 
            className="btn-primary"
            style={{ padding: '9px 18px', fontSize: '0.88rem' }}
          >
            <span>View Details</span>
            <ArrowRight size={16} />
          </Link>

          {/* External Deployed Website Link */}
          {isDeployedUrlValid ? (
            <a
              href={project.deployedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ padding: '8px 18px', fontSize: '0.88rem' }}
            >
              <span>Open My Project</span>
              <ExternalLink size={15} />
            </a>
          ) : (
            <button
              type="button"
              className="btn-outline"
              style={{ 
                padding: '8px 18px', 
                fontSize: '0.85rem', 
                opacity: 0.75, 
                cursor: 'default',
                borderColor: 'var(--border-color)' 
              }}
              title="Configure deployed URL in src/config/portfolioConfig.js"
            >
              <span>Deployment Link Coming Soon</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
