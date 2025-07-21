import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Mobile performance optimizations
const initApp = () => {
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    console.error('Root element not found');
    return;
  }

  // Mobile-specific optimizations
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(() => {
      console.log('Service Worker ready');
    });
  }

  // Disable zoom on double tap for better mobile UX
  let lastTouchEnd = 0;
  document.addEventListener('touchend', (event) => {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);

  const root = createRoot(rootElement);
  
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

// Use requestIdleCallback for better performance, fallback to immediate execution
if ('requestIdleCallback' in window) {
  requestIdleCallback(initApp, { timeout: 1000 });
} else {
  // Fallback for browsers that don't support requestIdleCallback
  setTimeout(initApp, 0);
}
