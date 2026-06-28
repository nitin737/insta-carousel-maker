import React from 'react';
import SlideWrapper from './SlideWrapper';

export default function Slide1({
  slideData,
  headerTheme,
  handle,
  isScalingActive,
  exportSingleSlide
}) {
  // --- Repo Identity ---
  const {
    owner = "owner",
    repo = "repo",
    stars = "0.0k",
    // --- Content ---
    bigTitle = "Repository",
    highlightedText: highlight = "Go (golang)",
    description = "",
    about = "",
    tags = [],
    license = "MIT",
    activity = "Activity",
    // --- Stats ---
    watchers = 0,
    forks = 0,
    latestRelease = "Latest",
    // --- Contributors ---
    contributorsCount = 7,
    // --- Language ---
    langGoPct = 90.0,
    langOtherPct = 10.0,
    // --- Appearance ---
    backgroundImage = "src/assets/slide1-bg.jpg",
  } = slideData ?? {};

  // Github header depending on styling theme
  const renderGithubHeader = () => {
    if (headerTheme === 'terminal') {
      return (
        <div className="github-pill-header theme-terminal">
          <div className="terminal-left-group">
            <div className="terminal-dots">
              <span className="terminal-dot dot-red"></span>
              <span className="terminal-dot dot-yellow"></span>
              <span className="terminal-dot dot-green"></span>
            </div>
            <div className="terminal-path">
              ~/{owner}/<span className="accent">{repo}</span>
            </div>
          </div>
          <div className="terminal-git-status">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M11.75 2.5a.75.75 0 01.75-.75h1a.75.75 0 01.75.75v1a.75.75 0 01-.75.75h-1a.75.75 0 01-.75-.75v-1zm-6 3a.75.75 0 01.75-.75h5a.75.75 0 01.75.75v5a.75.75 0 01-.75.75h-5a.75.75 0 01-.75-.75v-5z"></path>
            </svg>
            <span>main</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span>★ {stars}</span>
          </div>
        </div>
      );
    }

    const headerClass = `github-pill-header ${headerTheme !== 'classic' ? `theme-${headerTheme}` : ''}`;
    return (
      <div className={headerClass}>
        <div className="github-pill-left">
          <svg viewBox="0 0 16 16" version="1.1" width="22" height="22" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
          </svg>
          <span className="github-pill-repo-owner">{owner}</span>
          <span style={{ color: 'rgba(255,255,255,0.4)' }}>/</span>
          <span className="github-pill-repo-name">{repo}</span>
          <span className="github-pill-public-badge">Public</span>
        </div>
        <div className="github-pill-right">
          <button className="github-btn-star">
            <svg viewBox="0 0 16 16" version="1.1" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694z"></path>
            </svg>
            <span>Star</span>
            <span className="github-star-count">{stars}</span>
          </button>
          <button className="github-btn-arrow" aria-label="Toggle details">
            <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"></path>
            </svg>
          </button>
        </div>
      </div>
    );
  };

  // Highlights specific word in slide description
  const renderSlide1Description = () => {
    if (description.toLowerCase().includes(highlight.toLowerCase())) {
      const regex = new RegExp(`(${highlight.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
      const parts = description.split(regex);
      return (
        <>
          {parts.map((part, i) =>
            part.toLowerCase() === highlight.toLowerCase() ? (
              <span key={i} className="github-description-highlight">{part}</span>
            ) : part
          )}
        </>
      );
    }
    return (
      <>
        <span className="github-description-highlight">{highlight}</span> {description}
      </>
    );
  };

  // Renders the tags
  const renderTags = () => {
    return tags.slice(0, 12).map((tag, i) => (
      <span key={i} className="github-tag">{tag}</span>
    ));
  };

  // Generates contributor avatar stack
  const renderAvatars = () => {
    const avatarUrls = [
      "https://avatars.githubusercontent.com/u/1?v=4",     // mojombo (bearded man)
      "https://avatars.githubusercontent.com/u/583231?v=4", // octocat (black cat)
      "https://avatars.githubusercontent.com/u/2?v=4",      // defunkt (profile picture)
      "https://avatars.githubusercontent.com/u/3?v=4",      // pjhyett (profile picture)
    ];

    const showCount = Math.min(4, contributorsCount);
    const avatars = [];
    for (let i = 0; i < showCount; i++) {
      avatars.push(
        <img
          key={i}
          className="github-avatar"
          src={avatarUrls[i % avatarUrls.length]}
          alt={`Contributor ${i + 1}`}
        />
      );
    }

    if (contributorsCount > 4) {
      avatars.push(
        <div key="more" className="github-contributors-more">
          +{contributorsCount - 4}
        </div>
      );
    }

    return avatars;
  };

  return (
    <SlideWrapper
      slideNumber={1}
      isScalingActive={isScalingActive}
      exportSingleSlide={exportSingleSlide}
      backgroundImage={backgroundImage}
      showHeader={false}
      handle={handle}
      footerAction="Swipe →"
    >
      <div className="glow-accent-1"></div>

      {renderGithubHeader()}

      <div className="github-hero-center">
        <div className="github-logo-title-row">
          <div className="github-logo-circle">
            <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </div>
          <h1 className="github-hero-title">{bigTitle}</h1>
        </div>
        <div className="github-hero-description">
          {renderSlide1Description()}
        </div>

        {/* About — secondary description from preset */}
        {/* {about && (
          <p className="github-about-text">{about}</p>
        )} */}

        <div className="github-stats-grid">
          <div className="github-stat-card">
            <span className="stat-card-icon" aria-hidden="true">👁️</span>
            <span className="stat-card-text">{watchers} watching</span>
          </div>
          <div className="github-stat-card">
            <span className="stat-card-icon" aria-hidden="true">🍴</span>
            <span className="stat-card-text">{forks} forks</span>
          </div>
          <div className="github-stat-card highlight-release">
            <span className="stat-card-icon" aria-hidden="true">🏷️</span>
            <span className="stat-card-text">release: {latestRelease}</span>
          </div>

        </div>
      </div>
      <div className="github-language-horizontal-bar">
        <div className="language-bar-track">
          <div className="language-bar-fill go" style={{ width: `${langGoPct}%` }}></div>
          <div className="language-bar-fill other" style={{ width: `${langOtherPct}%` }}></div>
        </div>
        <div className="language-bar-labels">
          <span className="label-go">
            <span className="indicator go" aria-hidden="true"></span>
            Go {langGoPct}%
          </span>
          <span className="label-other">
            <span className="indicator other" aria-hidden="true"></span>
            Other {langOtherPct}%
          </span>
        </div>
      </div>
      <div className="github-contributors-container">
        <div className="contributors-header">

          <div className="github-contributors-label">
            <span>Contributors</span>
            <span className="github-contributors-badge">{contributorsCount}</span>
          </div>
        </div>
        <div className="github-avatar-row">
          {renderAvatars()}
        </div>

      </div>
    </SlideWrapper>
  );
}
