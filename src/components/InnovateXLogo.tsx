import React from 'react';

interface InnovateXLogoProps {
  size?: number | string;
  className?: string;
  withGlow?: boolean;
  alt?: string;
}

/**
 * InnovateX Web Icon & Brand Logo Component
 * Rendered with pure CSS gradient background and scalable vector sparkles
 * Perfectly responsive across mobile and desktop devices for Vercel deployment.
 */
export const InnovateXLogo: React.FC<InnovateXLogoProps> = ({
  size = 36,
  className = '',
  withGlow = false,
  alt = 'InnovateX Logo',
}) => {
  const pixelSize = typeof size === 'number' ? `${size}px` : size;

  return (
    <div
      className={`innovatex-web-icon ${withGlow ? 'innovatex-web-icon-glow' : ''} ${className}`}
      style={{
        width: pixelSize,
        height: pixelSize,
      }}
      role="img"
      aria-label={alt}
    >
      <svg
        viewBox="0 0 512 512"
        width="100%"
        height="100%"
        className="w-full h-full p-[6%]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Center 4-Point Organic Star */}
        <path
          d="M 240 126
             C 246 194, 256 210, 316 230
             C 334 236, 334 256, 316 262
             C 256 282, 246 298, 240 366
             C 234 298, 224 282, 164 262
             C 146 256, 146 236, 164 230
             C 224 210, 234 194, 240 126 Z"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="28"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#logoGlow)"
        />

        {/* Top-Right Secondary Sparkle */}
        <path
          d="M 370 148
             C 372 165, 376 169, 393 171
             C 397 172, 397 178, 393 179
             C 376 181, 372 185, 370 202
             C 368 185, 364 181, 347 179
             C 343 178, 343 172, 347 171
             C 364 169, 368 165, 370 148 Z"
          fill="#FFFFFF"
        />

        {/* Bottom-Left Satellite Dot */}
        <circle cx="166" cy="346" r="22" fill="#FFFFFF" />
      </svg>
    </div>
  );
};
