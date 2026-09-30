import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  GraduationCap, 
  Code2, 
  FolderGit2, 
  Award, 
  Trophy, 
  Mail, 
  Download
} from 'lucide-react';
import { portfolioConfig } from '../config/portfolioConfig';
import { 
  GitHubBrandIcon, 
  LinkedInBrandIcon, 
  HackerRankBrandIcon, 
  LeetCodeBrandIcon 
} from './Icons';

export const Sidebar = ({ mobileOpen, setMobileOpen }) => {
  const closeMobile = () => {
    if (setMobileOpen) setMobileOpen(false);
  };

  const navLinks = [
    { to: "/about", label: "About", icon: Home },
    { to: "/education", label: "Education", icon: GraduationCap },
    { to: "/skills", label: "Skills", icon: Code2 },
    { to: "/projects", label: "Projects", icon: FolderGit2 },
    { to: "/certifications", label: "Certifications", icon: Award },
    { to: "/achievements", label: "Achievements", icon: Trophy },
    { to: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <>
      {mobileOpen && (
        <div 
          className="sidebar-backdrop" 
          onClick={closeMobile}
          aria-label="Close navigation overlay"
        />
      )}
      <aside className={`sidebar ${mobileOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand-name">
            AJAI SELVAM <span className="brand-accent">M</span>
          </div>
          <div className="sidebar-brand-sub">
            B.Tech Information Technology<br />Student
          </div>
        </div>

        <nav className="sidebar-nav">
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMobile}
                className={({ isActive }) => 
                  `sidebar-nav-item ${isActive ? 'active' : ''}`
                }
              >
                <div className="sidebar-nav-icon">
                  <Icon size={19} />
                </div>
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-social-links">
            <a 
              href={portfolioConfig.social.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="sidebar-social-btn"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GitHubBrandIcon size={17} />
            </a>
            <a 
              href={portfolioConfig.social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="sidebar-social-btn"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedInBrandIcon size={17} />
            </a>
            <a 
              href={portfolioConfig.social.hackerrank} 
              target="_blank" 
              rel="noopener noreferrer"
              className="sidebar-social-btn"
              title="HackerRank Profile"
              aria-label="HackerRank Profile"
            >
              <HackerRankBrandIcon size={17} />
            </a>
            <a 
              href={portfolioConfig.social.leetcode} 
              target="_blank" 
              rel="noopener noreferrer"
              className="sidebar-social-btn"
              title="LeetCode Profile"
              aria-label="LeetCode Profile"
            >
              <LeetCodeBrandIcon size={17} />
            </a>
          </div>

          <a 
            href={portfolioConfig.resume || portfolioConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-resume-btn"
            id="sidebar-download-resume-btn"
          >
            <Download size={16} />
            <span>Download Resume</span>
          </a>
        </div>
      </aside>
    </>
  );
};
