import React from 'react';
import { FolderGit2 } from 'lucide-react';
import { portfolioConfig } from '../config/portfolioConfig';
import { ProjectCard } from '../components/ProjectCard';

export const ProjectsPage = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-header-icon">
          <FolderGit2 size={22} />
        </div>
        <h1 className="page-title">My Projects</h1>
      </div>

      <div className="projects-list">
        {portfolioConfig.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
