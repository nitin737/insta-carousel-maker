import React from 'react';
import SlideWrapper from './SlideWrapper';

export interface Slide7Props {
  slideData?: any;
  headerTheme?: string;
  handle?: string;
  isScalingActive: boolean;
  exportSingleSlide: (slideNumber: number) => void;
}

export default function Slide7({

  slideData,
  handle,
  isScalingActive,
  exportSingleSlide

}: Slide7Props) {
  const title = slideData?.title || "Run AI Natively at Scale.";
  const cta1 = slideData?.cta1 || "";
  const cta2 = slideData?.cta2 || "";
  const backgroundImage = slideData?.backgroundImage || "src/assets/background.png";

  const renderSlide7Title = () => {
    const words = title.split(" ");
    if (words.length >= 3) {
      const mid = Math.floor(words.length / 2);
      const firstPart = words.slice(0, mid).join(" ");
      const secondPart = words[mid];
      const lastPart = words.slice(mid + 1).join(" ");
      return (
        <>
          {firstPart} <span className="highlight-cyan">{secondPart}</span><br />at <span className="highlight-violet">{lastPart}</span>
        </>
      );
    }
    return title;
  };

  return (
    <SlideWrapper
      slideNumber={7}
      isScalingActive={isScalingActive}
      exportSingleSlide={exportSingleSlide}
      backgroundImage={backgroundImage}
      badgeText="GET STARTED"
      badgeClass="badge-go"
      handle={handle}
      footerAction="Save Post 🔖"
    >
      <div className="glow-accent-1"></div>
      
      <div className="slide-content" style={{ gap: '40px' }}>
        <h2 className="slide-title-h1" style={{ fontSize: '3.8rem', textAlign: 'center' }}>
          {renderSlide7Title()}
        </h2>

        <div className="cta-card">
          <div className="cta-item highlight">
            <span className="cta-icon">⭐</span>
            <span>{cta1}</span>
          </div>
          <div className="cta-item highlight2">
            <span className="cta-icon">⚡</span>
            <span>{cta2}</span>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
