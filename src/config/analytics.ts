// Google Analytics Configuration
export const ANALYTICS_CONFIG = {
  // Replace with your actual Google Analytics 4 Measurement ID
  GA_TRACKING_ID: 'G-21XPGE7YTS',
  
  // Enable/disable analytics (useful for development)
  ENABLED: import.meta.env.PROD,
  
  // Custom dimensions and metrics
  CUSTOM_DIMENSIONS: {
    USER_TYPE: 'user_type',
    FEATURE_USAGE: 'feature_usage',
    PAGE_SECTION: 'page_section'
  },
  
  // Event categories
  EVENT_CATEGORIES: {
    TIMER: 'timer',
    ALARM: 'alarm',
    STOPWATCH: 'stopwatch',
    WORLD_CLOCK: 'world_clock',
    FEATURE: 'feature',
    NAVIGATION: 'navigation'
  },
  
  // Event actions
  EVENT_ACTIONS: {
    START: 'start',
    PAUSE: 'pause',
    STOP: 'stop',
    RESET: 'reset',
    SELECT: 'select',
    CLICK: 'click',
    VIEW: 'view',
    SHARE: 'share',
    SETTINGS: 'settings'
  }
};

// Helper function to check if analytics is enabled
export const isAnalyticsEnabled = (): boolean => {
  return ANALYTICS_CONFIG.ENABLED && typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// Helper function to get tracking ID
export const getTrackingId = (): string => {
  return ANALYTICS_CONFIG.GA_TRACKING_ID;
}; 