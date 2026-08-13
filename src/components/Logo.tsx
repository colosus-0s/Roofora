import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', light = false }) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* SVG Roofora Roof Icon */}
      <svg
        width="34"
        height="32"
        viewBox="0 0 38 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Main Outer Roof Peak */}
        <path
          d="M19 3L3 17H7.5V29C7.5 30.1046 8.39543 31 9.5 31H28.5C29.6046 31 30.5 30.1046 30.5 29V17H35L19 3Z"
          fill="#1D61E7"
        />
        {/* Inner Accent Roof Peak / Cutout */}
        <path
          d="M19 9.5L11 16.5V27.5H27V16.5L19 9.5Z"
          fill={light ? "#0B1220" : "#FFFFFF"}
        />
        {/* Roof Window Squares */}
        <rect x="14" y="19" width="4" height="4" rx="1" fill="#1D61E7" />
        <rect x="20" y="19" width="4" height="4" rx="1" fill="#1D61E7" />
      </svg>

      {/* Brand Text */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`text-xl font-black tracking-tight ${
            light ? 'text-white' : 'text-[#0B1220]'
          }`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Roofora
        </span>
        <span
          className={`text-[9px] font-bold tracking-[0.22em] uppercase mt-0.5 ${
            light ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          ROOFING
        </span>
      </div>
    </div>
  );
};
