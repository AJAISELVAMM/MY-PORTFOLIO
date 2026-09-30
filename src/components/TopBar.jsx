import React from 'react';
import { Sun, Moon, Menu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const TopBar = ({ setMobileOpen }) => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="top-bar">
      <div className="top-bar-left">
        <button 
          type="button" 
          className="mobile-menu-toggle"
          onClick={() => setMobileOpen(prev => !prev)}
          aria-label="Toggle navigation menu"
        >
          <Menu size={22} />
        </button>
      </div>

      <div className="top-bar-right">
        {/* Light / Dark Mode Toggle */}
        <div 
          className="theme-switch-btn"
          role="group"
          aria-label="Theme toggle"
        >
          <button
            type="button"
            className={`theme-pill ${theme === 'light' ? 'active' : ''}`}
            onClick={() => setTheme('light')}
            title="Switch to Light Mode"
            aria-label="Light mode"
          >
            <Sun size={17} />
          </button>
          <button
            type="button"
            className={`theme-pill ${theme === 'dark' ? 'active' : ''}`}
            onClick={() => setTheme('dark')}
            title="Switch to Dark Mode"
            aria-label="Dark mode"
          >
            <Moon size={17} />
          </button>
        </div>
      </div>
    </header>
  );
};
