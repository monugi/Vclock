import React, { useState, useRef, useEffect } from 'react';
import { Moon, AlarmClock, Timer, Watch, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = React.memo(({ darkMode, toggleDarkMode }) => {
  const [showToolsDropdown, setShowToolsDropdown] = useState(false);
  const toolsRef = useRef<HTMLDivElement>(null);
  // PWA install prompt state
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Listen for beforeinstallprompt
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    // Listen for appinstalled
    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    });
    // Check if already installed (standalone mode)
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }
    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => {
        setDeferredPrompt(null);
      });
    }
  };

  const toolsMenuItems = [
    {
      icon: AlarmClock,
      label: 'Alarm Clock',
      path: '/alarm'
    },
    {
      icon: Timer,
      label: 'Timer',
      path: '/timer'
    },
    {
      icon: Watch,
      label: 'Stopwatch',
      path: '/stopwatch'
    },
    {
      icon: Clock,
      label: 'Time',
      path: '/time'
    }
  ];

  return (
    <header className="text-white px-2 sm:px-4 md:px-6 py-2 sm:py-3 flex items-center justify-between" style={{ backgroundColor: '#0090DD' }}>
      <div className="flex items-center">
        <Link to="/">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide" style={{ fontFamily: 'Quicksand, Nunito, Poppins, Arial, sans-serif', color: '#fff', letterSpacing: '0.05em' }}>vClock</h1>
        </Link>
      </div>
      
      <nav className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 lg:space-x-6">
        <Link to="/holidays" className="hover:text-blue-100 transition-colors text-xs sm:text-sm md:text-base hidden md:block">Holidays</Link>
        <div className="relative" ref={toolsRef}>
          <button 
            className="flex items-center space-x-1 hover:text-blue-100 transition-colors text-xs sm:text-sm md:text-base"
            onClick={() => setShowToolsDropdown(!showToolsDropdown)}
          >
            <span className="hidden md:inline">Tools</span>
            <span className="md:hidden">•••</span>
            <svg className={`w-3 h-3 sm:w-4 sm:h-4 hidden md:block transition-transform ${showToolsDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Tools Dropdown */}
          {showToolsDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
              <div className="py-1">
                {toolsMenuItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={() => setShowToolsDropdown(false)}
                      className="w-full flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Icon className="w-4 h-4 mr-3" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        {!isInstalled && deferredPrompt && (
          <button
            onClick={handleInstallClick}
            className="ml-2 px-3 py-1 rounded bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm shadow"
            style={{ minWidth: 80 }}
            aria-label="Install VClock"
          >
            Install App
          </button>
        )}
        <button className={`p-1 rounded transition-colors ${darkMode ? 'bg-gray-800' : 'hover:bg-blue-700'}`} onClick={toggleDarkMode} title="Toggle dark mode">
          <Moon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </button>
      </nav>
    </header>
  );
});

export default React.memo(Header);