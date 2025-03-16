
import React from 'react';

const LoadingGlobe: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-airport-light bg-opacity-90 backdrop-blur-sm">
      <div className="relative w-32 h-32">
        {/* Globe */}
        <div className="absolute inset-0 rounded-full border-2 border-airport-primary animate-globe-spin">
          <div className="absolute inset-0 rounded-full border border-airport-accent opacity-30" />
        </div>
        {/* Flight paths */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border border-white opacity-10"
            style={{
              transform: `rotate(${i * 30}deg)`,
              animation: `globe ${8 + i * 2}s linear infinite`,
            }}
          />
        ))}
        {/* Animated dots representing flights */}
        <div className="absolute inset-0 animate-globe-spin">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.sin((i * Math.PI) / 4) * 50 + 50}%`,
                left: `${Math.cos((i * Math.PI) / 4) * 50 + 50}%`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingGlobe;
