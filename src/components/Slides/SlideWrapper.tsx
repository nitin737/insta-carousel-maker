import React, { ReactNode } from 'react';

/**
 * SlideWrapper encapsulates the common layout for slides:
 * - Responsive/actual size styling wrapper
 * - Float download button
 * - Slide inner content container with background image
 * - Top header (optional)
 * - Bottom footer (handle & action indicator)
 */
interface SlideWrapperProps {
  slideNumber: number;
  isScalingActive: boolean;
  exportSingleSlide: (slideNumber: number) => void;
  backgroundImage: string;
  showHeader?: boolean;
  badgeText?: string;
  badgeClass?: string;
  handle?: string;
  footerAction?: string;
  totalSlides?: number;
  children?: ReactNode;
}

export default function SlideWrapper({
  slideNumber,
  isScalingActive,
  exportSingleSlide,
  backgroundImage,
  showHeader = true,
  badgeText = '',
  badgeClass = 'badge-go',
  handle = '@golang_verse',
  footerAction = 'Swipe →',
  totalSlides = 5,
  children
}: SlideWrapperProps) {
  return (
    <div 
      className={`slide-wrapper ${!isScalingActive ? 'actual-size' : ''}`} 
      id={`slide-${slideNumber}-wrap`}
    >
      <button 
        className="slide-download-btn" 
        onClick={() => exportSingleSlide(slideNumber)} 
        title={`Download Slide ${slideNumber} as JPEG`}
        aria-label={`Download Slide ${slideNumber} as JPEG`}
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
      </button>
      
      <div 
        className="slide-inner" 
        id={`slide-${slideNumber}`} 
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        {showHeader && (
          <div className="slide-header">
            <div className={`slide-badge ${badgeClass}`}>{badgeText}</div>
            <div className="footer-page">{slideNumber} / {totalSlides}</div>
          </div>
        )}
        
        {children}
        
        <div className="slide-footer">
          <div className="footer-handle">{handle}</div>
          <div className="footer-action">{footerAction}</div>
        </div>
      </div>
    </div>
  );
}
