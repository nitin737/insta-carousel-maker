import React from 'react';
import SlideWrapper from './SlideWrapper';

export interface Slide2Props {
  slideData?: any;
  headerTheme?: string;
  handle?: string;
  isScalingActive: boolean;
  exportSingleSlide: (slideNumber: number) => void;
}

export default function Slide2({

  slideData,
  handle,
  isScalingActive,
  exportSingleSlide

}: Slide2Props) {
  const headline = slideData?.headline || "";
  const pain = slideData?.pain || "";
  const cure = slideData?.cure || "";
  const features = Array.isArray(slideData?.features) ? slideData.features : [];
  const backgroundImage = slideData?.backgroundImage || "src/assets/background.png";

  return (
    <SlideWrapper
      slideNumber={2}
      isScalingActive={isScalingActive}
      exportSingleSlide={exportSingleSlide}
      backgroundImage={backgroundImage}
      badgeText="THE PROBLEM & THE SOLUTION"
      badgeClass="badge-go"
      handle={handle}
      footerAction="Swipe →"
    >
      <div className="s2-glow-red" />
      <div className="s2-glow-cyan" />

      <div className="s2-content">
        <div className="s2-heading-row">
          <h2 className="s2-heading-title">{headline}</h2>
        </div>

        <div className="s2-compare-stack">
          {/* THE PAIN */}
          <div className="s2-card s2-card--before">
            <div className="s2-card-accent s2-card-accent--before"></div>
            <div className="s2-card-header">
              <div className="s2-card-icon s2-card-icon--before">⚠️</div>
              <span className="s2-card-label s2-card-label--before">THE PAIN</span>
            </div>
            <div className="s2-point-text" style={{ marginTop: '4px', color: 'rgba(248, 250, 252, 0.85)' }}>{pain}</div>
          </div>

          <div className="s2-divider">
            <div className="s2-divider-line"></div>
            <div className="s2-divider-badge">VS</div>
            <div className="s2-divider-line"></div>
          </div>

          {/* THE CURE */}
          <div className="s2-card s2-card--after">
            <div className="s2-card-accent s2-card-accent--after"></div>
            <div className="s2-card-header">
              <div className="s2-card-icon s2-card-icon--after">✨</div>
              <span className="s2-card-label s2-card-label--after">THE CURE</span>
            </div>
            <div className="s2-point-text" style={{ marginTop: '4px', color: 'rgba(248, 250, 252, 0.85)' }}>{cure}</div>
            
            <ul className="s2-checkpoint-list" style={{ marginTop: '16px' }}>
              {features.map((pt: any, i: number) => (
                <li key={i} className="s2-checkpoint-item" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span className="s2-checkpoint-icon">✅</span>
                  <span className="s2-checkpoint-text" style={{ fontSize: '1.1rem', color: '#cbd5e1' }}>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
