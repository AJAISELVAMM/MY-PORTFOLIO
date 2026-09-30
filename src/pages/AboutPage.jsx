import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Download, 
  MessageSquare, 
  MapPin, 
  Mail, 
  Phone, 
  User, 
  Link2, 
  GraduationCap, 
  Code2, 
  FolderGit2, 
  ChevronRight 
} from 'lucide-react';
import { portfolioConfig, PROFILE_IMAGE_URL, getAssetUrl } from '../config/portfolioConfig';
import { 
  GitHubBrandIcon, 
  LinkedInBrandIcon, 
  HackerRankBrandIcon, 
  LeetCodeBrandIcon 
} from '../components/Icons';

export const AboutPage = () => {
  return (
    <div className="page-container about-page-wrapper">
      {/* Top Main Section: Hero Card on Left + Personal Info & Quick Links on Right */}
      <div className="about-hero-grid">
        {/* Left: Big Hero Card with Integrated Circular Profile Graphic */}
        <div className="card about-main-hero-card">
          <div className="hero-card-inner">
            {/* Left Column: Greeting, Name, Role, Bio & Action Buttons */}
            <div className="hero-content-col">
              <div className="about-eyebrow">
                <span className="about-eyebrow-line"></span>
                <span>About Me</span>
              </div>

              <div className="about-greeting">Hi, I'm</div>
              <h1 className="about-name">
                AJAI SELVAM <span className="brand-accent">M</span>
              </h1>
              <div className="about-role">
                B.Tech Information Technology Student
              </div>

              <p className="about-bio">
                Motivated and enthusiastic B.Tech Information Technology student at Bannari Amman Institute of Technology with a strong interest in software development, web technologies, problem solving, and UI/UX design. Possess working knowledge of C, C++, Python, Java, HTML, CSS, JavaScript, SQL, and MySQL. Experienced in developing academic and hackathon projects, contributing to frontend development, interface design, system planning, and solution presentation. Seeking internship opportunities to apply technical knowledge, strengthen industry skills, and contribute to real-world software projects.
              </p>

              <div className="about-actions">
                <a 
                  href={portfolioConfig.resume || portfolioConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary hero-btn-resume"
                  id="about-download-resume-btn"
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </a>

                <Link to="/contact" className="btn-outline hero-btn-connect">
                  <MessageSquare size={18} />
                  <span>Let's Connect</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Profile Area with Orbital Ring & Lavender Cloud */}
            <div className="hero-avatar-col">
              <div className="avatar-composition-wrap">
                {/* Decorative floating dots grid (bottom-left of circle) */}
                <div className="avatar-dot-grid" aria-hidden="true">
                  {[...Array(20)].map((_, i) => (
                    <span key={i} className="dot-node" />
                  ))}
                </div>

                {/* Soft ambient purple glow blob */}
                <div className="avatar-ambient-glow" aria-hidden="true" />

                {/* Fine circular orbital ring */}
                <div className="avatar-orbit-ring" aria-hidden="true">
                  {/* Purple orbital planet beads */}
                  <span className="orbit-bead bead-top-left" />
                  <span className="orbit-bead bead-bottom-right" />
                </div>

                {/* Sparkle accents */}
                <span className="avatar-sparkle sparkle-1" aria-hidden="true">✦</span>
                <span className="avatar-sparkle sparkle-2" aria-hidden="true">•</span>

                {/* Profile Image Circle */}
                <div className="avatar-img-circle-wrap">
                  <img 
                    src={PROFILE_IMAGE_URL}
                    alt={portfolioConfig.name}
                    className="avatar-img-circle"
                    onError={(e) => {
                      // Prevent infinite loop if fallback fails
                      if (e.currentTarget.dataset.fallbackTried === 'primary') {
                        e.currentTarget.onerror = null;
                        // Clean SVG avatar data URI that always renders
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Crect width='128' height='128' rx='64' fill='%23ede9fe'/%3E%3Cpath d='M64 64a20 20 0 1 0 0-40 20 20 0 0 0 0 40zm0 12c-20 0-38 12-40 28h80c-2-16-20-28-40-28z' fill='%237c3aed'/%3E%3C/svg%3E";
                      } else {
                        e.currentTarget.dataset.fallbackTried = 'primary';
                        e.currentTarget.src = portfolioConfig.profileImageFallback || getAssetUrl("/images/ajai-profile.jpg");
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Personal Information & Quick Links Cards */}
        <div className="about-side-panel">
          {/* Card 1: Personal Information */}
          <div className="card side-meta-card personal-info-card">
            <div className="side-card-header">
              <div className="side-card-icon-wrap user-icon-wrap">
                <User size={19} />
              </div>
              <h2 className="side-card-title">Personal Information</h2>
            </div>

            <div className="info-pills-list">
              <div className="info-pill-item">
                <div className="info-pill-icon">
                  <MapPin size={17} />
                </div>
                <div className="info-pill-text">
                  <span className="info-pill-label">Location</span>
                  <span className="info-pill-value">{portfolioConfig.location}</span>
                </div>
              </div>

              <a 
                href={`mailto:${portfolioConfig.email}`}
                className="info-pill-item clickable-pill"
                title={`Send email to ${portfolioConfig.email}`}
              >
                <div className="info-pill-icon">
                  <Mail size={17} />
                </div>
                <div className="info-pill-text">
                  <span className="info-pill-label">Email</span>
                  <span className="info-pill-value">{portfolioConfig.email}</span>
                </div>
              </a>

              <a 
                href={`tel:${portfolioConfig.phone}`}
                className="info-pill-item clickable-pill"
                title={`Call ${portfolioConfig.phone}`}
              >
                <div className="info-pill-icon">
                  <Phone size={17} />
                </div>
                <div className="info-pill-text">
                  <span className="info-pill-label">Phone</span>
                  <span className="info-pill-value">{portfolioConfig.phone}</span>
                </div>
              </a>
            </div>
          </div>

          {/* Card 2: Quick Links */}
          <div className="card side-meta-card quick-links-card">
            {/* Corner decorative watermark radar effect */}
            <div className="quick-links-radar" aria-hidden="true">
              <div className="radar-circle radar-1" />
              <div className="radar-circle radar-2" />
              <div className="radar-circle radar-3" />
            </div>

            <div className="side-card-header">
              <div className="side-card-icon-wrap link-icon-wrap">
                <Link2 size={19} />
              </div>
              <h2 className="side-card-title">Quick Links</h2>
            </div>

            <div className="quick-links-row">
              <a 
                href={portfolioConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-link-circle-btn github-btn"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <GitHubBrandIcon size={20} />
              </a>

              <a 
                href={portfolioConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-link-circle-btn linkedin-btn"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <LinkedInBrandIcon size={19} />
              </a>

              <a 
                href={portfolioConfig.social.hackerrank}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-link-circle-btn hackerrank-btn"
                title="HackerRank Profile"
                aria-label="HackerRank Profile"
              >
                <HackerRankBrandIcon size={19} />
              </a>

              <a 
                href={portfolioConfig.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-link-circle-btn leetcode-btn"
                title="LeetCode Profile"
                aria-label="LeetCode Profile"
              >
                <LeetCodeBrandIcon size={19} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: 3 Summary Cards (Education, Skills, Projects) */}
      <div className="about-summary-row">
        {/* Education Summary Card */}
        <div className="card summary-card">
          <div className="summary-card-icon-box">
            <GraduationCap size={24} />
          </div>
          <div className="summary-card-body">
            <h3 className="summary-card-title">Education</h3>
            <div className="summary-card-sub">B.Tech Information Technology</div>
            <div className="summary-card-meta">
              Bannari Amman Institute of Technology<br />
              2024 – 2028
            </div>
          </div>
          <Link to="/education" className="summary-card-arrow" aria-label="Navigate to Education">
            <ChevronRight size={18} />
          </Link>
        </div>

        {/* Skills Summary Card */}
        <div className="card summary-card">
          <div className="summary-card-icon-box">
            <Code2 size={24} />
          </div>
          <div className="summary-card-body">
            <h3 className="summary-card-title">Skills</h3>
            <div className="summary-card-sub">C, C++, Python, Java</div>
            <div className="summary-card-meta">
              Web, Database, UI/UX &amp; More
            </div>
          </div>
          <Link to="/skills" className="summary-card-arrow" aria-label="Navigate to Skills">
            <ChevronRight size={18} />
          </Link>
        </div>

        {/* Projects Summary Card */}
        <div className="card summary-card">
          <div className="summary-card-icon-box">
            <FolderGit2 size={24} />
          </div>
          <div className="summary-card-body">
            <h3 className="summary-card-title">Projects</h3>
            <div className="summary-card-sub">Academic &amp; Hackathon Projects</div>
            <div className="summary-card-meta">
              Full-stack, AI/ML, Web Development
            </div>
          </div>
          <Link to="/projects" className="summary-card-arrow" aria-label="Navigate to Projects">
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
