import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { portfolioConfig } from '../config/portfolioConfig';
import { CiscoLogo, IbmLogo } from '../components/Icons';

export const CertificationsPage = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-header-icon">
          <Award size={22} />
        </div>
        <h1 className="page-title">Certifications</h1>
      </div>

      <div className="certifications-grid">
        {portfolioConfig.certifications.map((cert) => (
          <div key={cert.id} className="card cert-card">
            <div className="cert-header">
              {cert.logo === 'cisco' ? (
                <CiscoLogo />
              ) : (
                <IbmLogo />
              )}
              <h2 className="cert-provider-name">{cert.provider}</h2>
            </div>

            <div className="cert-items-list">
              {cert.items.map((item, index) => (
                <div key={index} className="cert-item-row">
                  <CheckCircle2 size={18} className="cert-check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
