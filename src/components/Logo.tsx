import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', light = false }) => {
  return (
    <div className={`flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      {/* Premium Custom SVG Roofora Double-Peak Architectural Logo Mark */}
      <svg
        width="42"
        height="38"
        viewBox="0 0 44 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transform group-hover:scale-105 transition-transform duration-300"
      >
        {/* Main Left Roof Gable (Primary Dark Navy / White) */}
        <path
          d="M15 3L2 15H7.5V34H21.5V15H27L15 3Z"
          fill={light ? "#FFFFFF" : "#0B1220"}
        />
        
        {/* Overlapping Right Roof Gable (Roofora Electric Blue #1D61E7) */}
        <path
          d="M30 7L17 18.5H22V34H38V18.5H43L30 7Z"
          fill="#1D61E7"
        />

        {/* Architectural Window Grid inside Primary Left Structure */}
        <rect x="11.5" y="21" width="3.5" height="3.5" rx="0.5" fill="#1D61E7" />
        <rect x="16" y="21" width="3.5" height="3.5" rx="0.5" fill="#1D61E7" />
        <rect x="11.5" y="25.5" width="3.5" height="3.5" rx="0.5" fill="#1D61E7" />
        <rect x="16" y="25.5" width="3.5" height="3.5" rx="0.5" fill="#1D61E7" />

        {/* Secondary Window Accent inside Blue Peak */}
        <rect x="26" y="23" width="3" height="3" rx="0.5" fill="#FFFFFF" />
        <rect x="30" y="23" width="3" height="3" rx="0.5" fill="#FFFFFF" />
      </svg>

      {/* Premium Brand Typography */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`text-2xl font-black tracking-tight ${
            light ? 'text-white' : 'text-[#0B1220]'
          }`}
        >
          Roofora
        </span>
        <span
          className={`text-[9px] font-black tracking-[0.28em] uppercase mt-1 ${
            light ? 'text-blue-300' : 'text-slate-400'
          }`}
        >
          ROOFING
        </span>
      </div>
    </div>
  );
};
