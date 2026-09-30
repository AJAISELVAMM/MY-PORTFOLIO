import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, UserCheck, Layers, Sparkles } from 'lucide-react';
import { portfolioConfig } from '../config/portfolioConfig';

export const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = portfolioConfig.projects.find((p) => p.slug === slug);

  const [activeImage, setActiveImage] = useState(project?.image);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const isDeployedUrlValid = 
    project.deployedUrl && 
    !project.deployedUrl.startsWith('PASTE_') && 
    project.deployedUrl.trim() !== '';

  return (
    <div className="page-container">
      <div className="project-details-view">
        <div>
          <Link to="/projects" className="back-btn-link">
            <ArrowLeft size={18} />
            <span>Back to Projects</span>
          </Link>
        </div>

        <div className="card" style={{ padding: '32px' }}>
          <div className="project-details-grid">
            {/* Left: Large Visual & Gallery */}
            <div>
              <div className="project-gallery-main">
                <img
                  src={activeImage || project.image}
                  alt={project.title}
                  className="project-gallery-img"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = project.fallbackImage;
                  }}
                />
              </div>

              {project.gallery && project.gallery.length > 1 && (
                <div className="project-thumbnails-row">
                  {project.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className={`project-thumb ${activeImage === img ? 'active' : ''}`}
                      onClick={() => setActiveImage(img)}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} />
                    </div>
                  ))}
                </div>
              )}

              {/* Live Project Landing-Page Preview Screenshot */}
              {project.previewImage && (
                <div className="project-preview-block">
                  <div className="project-preview-label">
                    <span className="preview-label-dot" />
                    <span>Live Project Preview</span>
                  </div>
                  <div className="project-preview-media">
                    <a
                      href={project.deployedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Open live ${project.title}`}
                      className="project-preview-link"
                    >
                      <img
                        src={project.previewImage}
                        alt={`${project.title} Live Landing Page Preview`}
                        className="project-preview-img"
                      />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Project Meta & Details */}
            <div className="project-meta-details">
              <div>
                <div className="project-event" style={{ marginBottom: '6px' }}>
                  {project.event}
                </div>
                <h1 className="project-title" style={{ fontSize: '1.8rem', marginBottom: '14px' }}>
                  {project.title}
                </h1>

                <div className="project-tech-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="details-section-title">
                  <Layers size={18} style={{ color: 'var(--primary-purple)' }} />
                  <span>About Project</span>
                </h3>
                <p className="project-desc" style={{ fontSize: '0.96rem', lineHeight: '1.7' }}>
                  {project.description}
                </p>
              </div>

              <div className="details-specs-grid">
                {/* Key Features */}
                <div>
                  <h3 className="details-section-title">
                    <Sparkles size={18} style={{ color: 'var(--primary-purple)' }} />
                    <span>Key Features</span>
                  </h3>
                  <ul className="details-bullet-list">
                    {project.keyFeatures.map((feat, i) => (
                      <li key={i} className="details-bullet-item">
                        <CheckCircle2 size={16} className="details-check-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* My Role */}
                <div>
                  <h3 className="details-section-title">
                    <UserCheck size={18} style={{ color: 'var(--primary-purple)' }} />
                    <span>My Role</span>
                  </h3>
                  <ul className="details-bullet-list">
                    {project.role.map((r, i) => (
                      <li key={i} className="details-bullet-item">
                        <span style={{ 
                          width: '6px', 
                          height: '6px', 
                          borderRadius: '50%', 
                          background: 'var(--primary-purple)', 
                          marginTop: '8px', 
                          flexShrink: 0 
                        }} />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="details-actions-bar">
                {isDeployedUrlValid ? (
                  <a
                    href={project.deployedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>Open My Project</span>
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <button
                    type="button"
                    className="btn-primary"
                    style={{ opacity: 0.75, cursor: 'default' }}
                    title="Configure deployed URL in src/config/portfolioConfig.js"
                  >
                    <span>Deployment Link Coming Soon</span>
                  </button>
                )}

                {(project.sourceCodeUrl || project.githubUrl) && (
                  <a
                    href={project.sourceCodeUrl || project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    <Github size={16} />
                    <span>View Source Code</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
