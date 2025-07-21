import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics 4 Event Tracking Hook
export const useAnalytics = () => {
  const location = useLocation();

  // Track page views automatically when route changes
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_referrer: document.referrer
      });
    }
  }, [location.pathname]);

  // Track custom events
  const trackEvent = useCallback((eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        ...parameters,
        page_title: document.title,
        page_location: window.location.href
      });
    }
  }, []);

  // Track timer events
  const trackTimerEvent = useCallback((action: string, duration?: number, preset?: string) => {
    trackEvent('timer_interaction', {
      action,
      duration_seconds: duration,
      preset_name: preset,
      page_path: location.pathname
    });
  }, [trackEvent, location.pathname]);

  // Track alarm events
  const trackAlarmEvent = useCallback((action: string, time?: string, sound?: string) => {
    trackEvent('alarm_interaction', {
      action,
      alarm_time: time,
      sound_name: sound,
      page_path: location.pathname
    });
  }, [trackEvent, location.pathname]);

  // Track stopwatch events
  const trackStopwatchEvent = useCallback((action: string, duration?: number) => {
    trackEvent('stopwatch_interaction', {
      action,
      duration_seconds: duration,
      page_path: location.pathname
    });
  }, [trackEvent, location.pathname]);

  // Track world clock events
  const trackWorldClockEvent = useCallback((action: string, city?: string, region?: string) => {
    trackEvent('world_clock_interaction', {
      action,
      city_name: city,
      region_name: region,
      page_path: location.pathname
    });
  }, [trackEvent, location.pathname]);

  // Track feature usage
  const trackFeatureUsage = useCallback((feature: string, action: string, details?: Record<string, any>) => {
    trackEvent('feature_usage', {
      feature_name: feature,
      action,
      ...details,
      page_path: location.pathname
    });
  }, [trackEvent, location.pathname]);

  return {
    trackEvent,
    trackTimerEvent,
    trackAlarmEvent,
    trackStopwatchEvent,
    trackWorldClockEvent,
    trackFeatureUsage
  };
};

// TypeScript declarations for global gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
} 