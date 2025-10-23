import "../index.css";
import React from "react";

const Welcome = ({ imageUrl, text, text2 }) => {
  return (
    <div className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        {/* Gradient Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        
        {/* Additional overlay for mobile */}
        <div className="absolute inset-0 bg-black/20 md:bg-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Text */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight sm:leading-tight md:leading-tight lg:leading-tight mb-4 md:mb-6 font-heading1 drop-shadow-2xl animate-fadeIn">
            {text}
          </h1>

          {/* Secondary Text */}
          {text2 && (
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 font-heading3 max-w-3xl mx-auto leading-relaxed drop-shadow-lg animate-fadeInDelay">
              {text2}
            </p>
          )}

          {/* Decorative Element */}
          <div className="mt-8 flex justify-center">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-scrollDown"></div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;