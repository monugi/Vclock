import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = React.memo(() => {
  return (
    <footer className="text-white py-2 sm:py-3 md:py-4 px-2 sm:px-3 md:px-6" style={{ backgroundColor: '#1A1A1A' }}>
      <div className="flex items-center justify-center text-xs sm:text-sm">
        <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-2 md:space-x-4 text-center">
          <Link to="/about" className="hover:text-gray-300 transition-colors text-xs sm:text-sm">About</Link>
          <span className="hidden sm:inline">|</span>
          <Link to="/contacts" className="hover:text-gray-300 transition-colors text-xs sm:text-sm">Contacts</Link>
          <span className="hidden sm:inline">|</span>
          <Link to="/terms" className="hover:text-gray-300 transition-colors text-xs sm:text-sm">Terms of use</Link>
          <span className="hidden sm:inline">|</span>
          <Link to="/privacy" className="hover:text-gray-300 transition-colors text-xs sm:text-sm">Privacy</Link>
          <span className="hidden sm:inline">|</span>
          <span className="text-xs sm:text-sm">© 2025 VClock.App</span>
        </div>
      </div>
    </footer>
  );
});

export default Footer;