# Coming Soon Countdown Timer

A beautiful 15-day countdown timer built with React, TypeScript, and Tailwind CSS, inspired by the Stake platform's dark theme design.

## Features

- ⏰ **15-Day Countdown Timer** - Real-time countdown with days, hours, minutes, and seconds
- 🎨 **Stake-Inspired Design** - Dark blue-grey theme with vibrant green accents
- 📱 **Responsive Design** - Works perfectly on desktop and mobile devices
- ✨ **Smooth Animations** - Glowing effects, hover animations, and transitions
- 📊 **Progress Bar** - Visual progress indicator showing launch progress
- 📧 **Email Signup** - Newsletter subscription form for updates
- 🚀 **Modern Tech Stack** - Built with Vite, React 19, TypeScript, and Tailwind CSS

## Color Scheme

- **Primary Background**: `#1A242D` (Dark blue-grey)
- **Secondary Background**: `#212E3B` (Lighter blue-grey)
- **Accent Green**: `#39FF14` (Vibrant green for highlights)
- **Accent Blue**: `#3B82F6` (Medium blue for secondary elements)
- **Text Primary**: `#FFFFFF` (White)
- **Text Secondary**: `#A0AEC0` (Light grey)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd countdown-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
countdown-app/
├── src/
│   ├── components/
│   │   └── CountdownTimer.tsx    # Main countdown component
│   ├── App.tsx                   # Main app component
│   ├── main.tsx                  # App entry point
│   ├── index.css                 # Global styles with Tailwind
│   └── vite-env.d.ts            # Vite type definitions
├── public/
│   └── vite.svg                 # Vite logo
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

## Customization

### Setting Your Launch Date

To set your actual launch date, edit the `src/config.ts` file:

```typescript
export const CONFIG = {
  // Set your launch date here (UTC timezone)
  LAUNCH_DATE: '2025-01-01T12:00:00Z', // Format: YYYY-MM-DDTHH:mm:ssZ
  
  // Total countdown duration for progress bar
  TOTAL_COUNTDOWN_DAYS: 15,
  
  // Customize your app text
  APP_TITLE: 'Coming Soon',
  APP_DESCRIPTION: 'Something amazing is brewing...',
  // ... other settings
};
```

**Important**: The countdown is now based on a **fixed launch date**, not relative to when someone visits the page. This means:
- ✅ When you deploy, it shows the actual remaining time until your launch date
- ✅ If someone visits today, they see the real countdown
- ✅ If someone visits tomorrow, they see one day less
- ✅ No more resetting to 15 days on refresh!

### Customizing Colors

Update the colors in `tailwind.config.js`:

```javascript
colors: {
  'stake-dark': '#1A242D',           // Primary background
  'stake-dark-secondary': '#212E3B', // Secondary background
  'stake-green': '#39FF14',          // Accent green
  'stake-blue': '#3B82F6',           // Accent blue
  // ... add your custom colors
}
```

### Adding Features

The component is modular and easy to extend. You can:

- Add more feature cards in the preview section
- Integrate with an email service for the newsletter signup
- Add social media links
- Include more animations or effects

## Technologies Used

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).