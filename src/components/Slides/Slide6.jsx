import React from 'react';
import SlideWrapper from './SlideWrapper';

export default function Slide6({
  slideData,
  handle,
  isScalingActive,
  exportSingleSlide
}) {
  const title = slideData?.title || "SECRET PRO TIP";
  const tipText = slideData?.tipText || "";
  const backgroundImage = slideData?.backgroundImage || "src/assets/background.png";

  return (
    <SlideWrapper
      slideNumber={6}
      isScalingActive={isScalingActive}
      exportSingleSlide={exportSingleSlide}
      backgroundImage={backgroundImage}
      badgeText="PRO PERFORMANCE"
      badgeClass="badge-ai"
      handle={handle}
      footerAction="Swipe →"
    >
      <div className="glow-accent-2"></div>
      
      <div className="slide-content">
        <div className="pro-tip-container">
          <div className="pro-tip-title">{title}</div>
          <div className="pro-tip-text">
            {tipText}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
