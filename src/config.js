// Configuration file for the countdown timer
// Change these values to customize your countdown

export const CONFIG = {
  // Launch date in ISO format (UTC timezone)
  // Format: YYYY-MM-DDTHH:mm:ssZ
  // Example: '2025-01-01T12:00:00Z' = January 1, 2025 at 12:00 PM UTC
  LAUNCH_DATE: '2025-01-01T12:00:00Z',
  
  // Total countdown duration in days (for progress bar calculation)
  TOTAL_COUNTDOWN_DAYS: 15,
  
  // App title and description
  APP_TITLE: 'Slash Casino Coming Soon',
  APP_DESCRIPTION: 'Something amazing is brewing. Get ready for an experience that will change everything.',
  
  // Launch message
  LAUNCH_TITLE: '🚀 LAUNCHED! 🚀',
  LAUNCH_MESSAGE: "We're live! Welcome to the future.",
  LAUNCH_BUTTON_TEXT: 'Get Started Now',
  
  // Footer text
  FOOTER_TEXT: '© 2025 Coming Soon. All rights reserved.',
};

// Helper function to get launch date
export const getLaunchDate = () => {
  return new Date(CONFIG.LAUNCH_DATE);
};

// Helper function to check if launched
export const isLaunched = () => {
  return new Date().getTime() >= getLaunchDate().getTime();
};
