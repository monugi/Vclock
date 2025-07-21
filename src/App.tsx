import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import Holidays from './components/Holidays';

// Lazy load all components for better performance
const AlarmClock = lazy(() => import('./components/AlarmClock'));
const Timer = lazy(() => import('./components/Timer'));
const Stopwatch = lazy(() => import('./components/Stopwatch'));
const WorldClock = lazy(() => import('./components/WorldClock'));
const CustomTimer = lazy(() => import('./components/CustomTimer'));
const CustomWorldClock = lazy(() => import('./components/CustomWorldClock'));
const Contacts = lazy(() => import('./components/Contacts'));
const TermsOfUse = lazy(() => import('./components/TermsOfUse'));
const Privacy = lazy(() => import('./components/Privacy'));
const AboutUs = lazy(() => import('./components/AboutUs'));

// Debug component to log current route
// const RouteDebugger = () => {
//   const location = useLocation();
//   console.log('Current route:', location.pathname);
//   return null;
// };

// Loading component with better UX
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

// ErrorBoundary component
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error: any }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }
  componentDidCatch(error: any, errorInfo: any) {
    // Optionally log error
    // console.error('ErrorBoundary caught:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center p-8">
          <h1 className="text-3xl font-bold mb-4 text-red-600">Something went wrong</h1>
          <p className="mb-2 text-gray-700 dark:text-gray-200">An unexpected error occurred. Please try refreshing the page.</p>
          <pre className="bg-gray-200 dark:bg-gray-800 rounded p-4 text-xs text-left overflow-x-auto max-w-xl mx-auto">
            {String(this.state.error)}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <HelmetProvider>
      <Helmet>
        <meta name="keywords" content="alarm clock, online alarm, timer, stopwatch, world clock, vclock, set alarm, productivity, time management, reminders, wake up, digital clock, free clock app" />
      </Helmet>
      <Router>
        <ErrorBoundary>
          <div className={`min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900${darkMode ? ' dark' : ''} overflow-x-hidden`}>
            <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(dm => !dm)} />
            <div className="flex flex-1 flex-row">
              <Sidebar />
              <main className="flex-1 px-0 sm:px-1 md:px-2 lg:px-4 xl:px-8 pt-0 sm:pt-2 md:pt-4 lg:pt-8">
                <Suspense fallback={<div className="flex justify-center items-center h-full text-lg">Loading...</div>}>
                  <Routes>
                    <Route path="/" element={<AlarmClock />} />
                    <Route path="/alarm" element={<AlarmClock />} />
                    <Route path="/timer" element={<Timer />} />
                    <Route path="/stopwatch" element={<Stopwatch />} />
                    <Route path="/time" element={<WorldClock />} />
                    <Route path="/time/:city" element={<CustomWorldClock />} />
                    <Route path="/time/:city/:region" element={<CustomWorldClock />} />
                    <Route path="/test-timer" element={<CustomTimer />} />
                    <Route path="/holidays" element={<Holidays />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/terms" element={<TermsOfUse />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="*" element={<CustomTimer />} />
                  </Routes>
                </Suspense>
              </main>
            </div>
            <Footer />
          </div>
        </ErrorBoundary>
      </Router>
    </HelmetProvider>
  );
}

export default App;