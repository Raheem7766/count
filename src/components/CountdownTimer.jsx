import React, { useState, useEffect } from 'react';
import { CONFIG } from '../config';
import logo from '../assets/SlashWhite.png'; 

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLaunched, setIsLaunched] = useState(false);

  useEffect(() => {
    // 🎯 Fixed target date = 2 October 2025
    const targetDate = new Date("2025-10-02T00:00:00");

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
      }

      setIsLaunched(true);
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());
    setIsLoaded(true);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center w-full">
      <div className="countdown-card rounded-2xl p-4 sm:p-6 w-full max-w-[120px] text-center transform hover:scale-105 transition-all duration-300">
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-stake-green glow-text mb-2">
          {value.toString().padStart(2, '0')}
        </div>
        <div className="text-stake-text-secondary text-xs sm:text-sm md:text-base font-medium uppercase tracking-wider">
          {label}
        </div>
      </div>
    </div>
  );

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-stake-green"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stake-dark flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 relative">
      {/* ✅ Navbar with only Logo */}
      <div className="absolute top-0 left-0 w-full flex justify-center md:justify-start md:pl-[10%] px-4 sm:px-6 py-3 sm:py-4 bg-transparent z-20">
        <img src={logo} alt="Logo" className="h-8 sm:h-10 md:h-12 w-auto object-contain" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-stake-green rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-32 sm:w-48 h-32 sm:h-48 bg-stake-blue rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 sm:w-24 h-16 sm:h-24 bg-stake-green rounded-full blur-2xl animate-pulse-slow delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto flex flex-col items-center justify-center mt-16 sm:mt-24 md:mt-28">
        {/* Header */}
        <div className="mb-8 sm:mb-12 px-2">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-stake-text-primary mb-4 animate-bounce-slow">
            {CONFIG.APP_TITLE}
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-stake-text-secondary mb-6 sm:mb-8 max-w-2xl mx-auto">
            {CONFIG.APP_DESCRIPTION}
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-12 w-full max-w-4xl">
          {isLaunched ? (
            <div className="text-center">
              <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-stake-green glow-text mb-6 sm:mb-8 animate-bounce-slow">
                {CONFIG.LAUNCH_TITLE}
              </h2>
              <p className="text-base sm:text-xl md:text-2xl text-stake-text-primary mb-4 sm:mb-6">
                {CONFIG.LAUNCH_MESSAGE}
              </p>
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-stake-green to-stake-blue text-stake-dark font-bold text-sm sm:text-lg rounded-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-stake-green/25">
                {CONFIG.LAUNCH_BUTTON_TEXT}
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-stake-text-primary mb-6 sm:mb-8">
                Launch Countdown
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-8 justify-center">
                <TimeUnit value={timeLeft.days} label="Days" />
                <TimeUnit value={timeLeft.hours} label="Hours" />
                <TimeUnit value={timeLeft.minutes} label="Minutes" />
                <TimeUnit value={timeLeft.seconds} label="Seconds" />
              </div>
            </>
          )}
        </div>

        {/* Progress Bar */}
        {!isLaunched && (
          <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 w-full max-w-2xl">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 mb-4">
              <span className="text-stake-text-primary font-medium text-sm sm:text-base">Progress to Launch</span>
              <span className="text-stake-green font-bold text-sm sm:text-base">
                {(() => {
                  const today = new Date();
                  const targetDate = new Date("2025-10-02T00:00:00");
                  const totalDays = Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24)) + timeLeft.days;
                  const remainingDays = timeLeft.days;
                  const progress = Math.max(0, Math.min(100, ((totalDays - remainingDays) / totalDays) * 100));
                  return Math.round(progress);
                })()}%
              </span>
            </div>
            <div className="w-full bg-stake-dark-tertiary rounded-full h-2 sm:h-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-stake-green to-stake-blue rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${(() => {
                    const today = new Date();
                    const targetDate = new Date("2025-10-02T00:00:00");
                    const totalDays = Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24)) + timeLeft.days;
                    const remainingDays = timeLeft.days;
                    const progress = Math.max(0, Math.min(100, ((totalDays - remainingDays) / totalDays) * 100));
                    return progress;
                  })()}%`
                }}
              ></div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 px-2 text-center">
        <p className="text-stake-text-secondary text-xs sm:text-sm">
          {CONFIG.FOOTER_TEXT}
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
