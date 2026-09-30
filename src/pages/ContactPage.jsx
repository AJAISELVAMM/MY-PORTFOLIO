import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, AtSign, CheckCircle2 } from 'lucide-react';
import { portfolioConfig } from '../config/portfolioConfig';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Use mailto-based fallback as explicitly requested
    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Ajai,\n\n${formData.message}\n\n---\nSender Name: ${formData.name}\nSender Email: ${formData.email}`
    );
    
    // Open default mail client with pre-filled content
    window.location.href = `mailto:${portfolioConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-header-icon">
          <Send size={22} />
        </div>
        <h1 className="page-title">Contact Me</h1>
      </div>

      <div className="contact-layout-grid">
        {/* Left Column: Direct Contact Info Cards */}
        <div className="contact-info-cards">
          <div className="card contact-card-box">
            <div className="contact-box-icon">
              <MapPin size={22} />
            </div>
            <div>
              <div className="contact-box-title">Location</div>
              <div className="contact-box-val">{portfolioConfig.location}</div>
            </div>
          </div>

          {/* Email Card with clickable mailto */}
          <a 
            href={`mailto:${portfolioConfig.email}`}
            className="card contact-card-box"
            title={`Email to ${portfolioConfig.email}`}
          >
            <div className="contact-box-icon">
              <Mail size={22} />
            </div>
            <div>
              <div className="contact-box-title">Email</div>
              <div className="contact-box-val" style={{ color: 'var(--primary-purple)' }}>
                {portfolioConfig.email}
              </div>
            </div>
          </a>

          {/* Phone Card with clickable tel */}
          <a 
            href={`tel:${portfolioConfig.phone}`}
            className="card contact-card-box"
            title={`Call ${portfolioConfig.phone}`}
          >
            <div className="contact-box-icon">
              <Phone size={22} />
            </div>
            <div>
              <div className="contact-box-title">Phone</div>
              <div className="contact-box-val">{portfolioConfig.phone}</div>
            </div>
          </a>
        </div>

        {/* Right Column: Send a Message Form */}
        <div className="card contact-form-card">
          <h2 className="contact-form-title">Send a Message</h2>

          {submitted && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '14px 18px',
              borderRadius: '12px',
              background: '#ecfdf5',
              border: '1px solid #a7f3d0',
              color: '#065f46',
              marginBottom: '20px',
              fontSize: '0.92rem'
            }}>
              <CheckCircle2 size={20} style={{ color: '#10b981', flexShrink: 0 }} />
              <span>Mail application opened! You can review and dispatch your message directly to {portfolioConfig.email}.</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="contact-name">Your Name</label>
              <div className="form-input-wrap">
                <User size={18} className="form-input-icon" />
                <input
                  id="contact-name"
                  type="text"
                  required
                  className="form-input"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-email">Your Email</label>
              <div className="form-input-wrap">
                <AtSign size={18} className="form-input-icon" />
                <input
                  id="contact-email"
                  type="email"
                  required
                  className="form-input"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-message">Your Message</label>
              <textarea
                id="contact-message"
                required
                className="form-textarea"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '13px' }}>
              <Send size={18} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
