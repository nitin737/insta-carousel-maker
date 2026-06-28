import React from 'react';
import SlideWrapper from './SlideWrapper';

export default function Slide4({
  slideData,
  handle,
  isScalingActive,
  exportSingleSlide
}) {
  const headline = slideData?.headline || "";
  const points = Array.isArray(slideData?.points) ? slideData.points : [];
  const backgroundImage = slideData?.backgroundImage || "src/assets/background.png";

  return (
    <SlideWrapper
      slideNumber={4}
      isScalingActive={isScalingActive}
      exportSingleSlide={exportSingleSlide}
      backgroundImage={backgroundImage}
      badgeText="INTEGRATION"
      badgeClass="badge-go"
      handle={handle}
      footerAction="Swipe →"
    >
      <div className="slide-content" style={{ display: 'flex', flexDirection: 'column', gap: '32px', justifyContent: 'center', flex: 1 }}>
        <h2 className="slide-subtitle" style={{ fontSize: '2.8rem', color: '#f8fafc', marginBottom: '10px' }}>{headline}</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
          {points.map((pt, i) => (
            <div key={i} style={{ background: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(0, 173, 216, 0.2)', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px', backdropFilter: 'blur(10px)' }}>
              <div style={{ color: '#00ADD8', fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{pt.title}</div>
              <div style={{ color: '#cbd5e1', fontSize: '1.2rem', lineHeight: '1.5' }}>{pt.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
