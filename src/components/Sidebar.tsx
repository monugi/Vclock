import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AlarmClock, Timer, Watch as Stopwatch, Clock, X, List as ListIcon } from 'lucide-react';

const Sidebar: React.FC = React.memo(() => {
  const location = useLocation();
  const menuItems = [
    { id: 'alarm', icon: AlarmClock, label: 'Alarm Clock', path: '/alarm' },
    { id: 'timer', icon: Timer, label: 'Timer', path: '/timer' },
    { id: 'stopwatch', icon: Stopwatch, label: 'Stopwatch', path: '/stopwatch' },
    { id: 'time', icon: Clock, label: 'Time', path: '/time' },
  ];

  return (
    <aside className="w-16 sm:w-20 md:w-24 lg:w-32 flex flex-col" style={{ backgroundColor: '#3D3C3C' }}>
      {menuItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.id}
            to={item.path}
            className={`flex flex-col items-center justify-center py-3 sm:py-4 md:py-6 px-1 sm:px-2 md:px-3 transition-all duration-200 ${
              isActive 
                ? 'bg-gray-300 text-black' 
                : 'text-white hover:bg-gray-600'
            } ${index > 0 ? 'border-t border-gray-500' : ''}`}
            style={{ textDecoration: 'none' }}
          >
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 mb-1 sm:mb-2 md:mb-3" strokeWidth={1.5} />
            <span className="text-xs sm:text-xs md:text-sm font-medium text-center leading-tight px-1">
              {item.label}
            </span>
          </Link>
        );
      })}
    </aside>
  );
});

export default Sidebar;