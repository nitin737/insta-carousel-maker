import React from 'react';

export default function Header({ copyPromptToClipboard, exportAllSlides, isPromptCopied, isExported }) {
  return (
    <header>
      <div className="logo-container">
        <div className="logo-badge">GO-AI</div>
        <h1 className="app-title">Instagram Carousel Builder</h1>
      </div>

      <div className="header-actions">
        <button
          className="btn"
          onClick={copyPromptToClipboard}
          style={{ transition: 'all 0.3s ease' }}
        >
          <span>{isPromptCopied ? '✅' : '📋'}</span> {isPromptCopied ? 'Copied!' : 'Copy Prompt'}
        </button>
        <button 
          className="btn btn-primary" 
          onClick={exportAllSlides}
          style={{ transition: 'all 0.3s ease' }}
        >
          <span>{isExported ? '✅' : '📥'}</span> {isExported ? 'Downloaded!' : 'Export Slides (PNG)'}
        </button>
      </div>
    </header>
  );
}
