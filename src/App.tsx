import React, { useState, ChangeEvent } from 'react';
import html2canvas from 'html2canvas';
import { jsonrepair } from 'jsonrepair';

// Constants
import { presets } from './constants/presets';
import { generateSystemPrompt } from './constants/prompt';

// Subcomponents
import Header from './components/Header';
import EditorPanel from './components/EditorPanel';

// Slides
import Slide1 from './components/Slides/Slide1';
import Slide2 from './components/Slides/Slide2';
import Slide3 from './components/Slides/Slide3';
import Slide4 from './components/Slides/Slide4';
import Slide5 from './components/Slides/Slide5';

const getFormattedDate = () => {
  const d = new Date();
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
};

export default function App() {
  const [selectedPreset, setSelectedPreset] = useState("cobra");
  const [jsonInput, setJsonInput] = useState(() => JSON.stringify(presets.cobra, null, 2));
  const [data, setData] = useState(presets.cobra);
  const [isPromptCopied, setIsPromptCopied] = useState(false);
  const [handle, setHandle] = useState("@golang_verse");
  const [repoLink, setRepoLink] = useState("");
  const [headerTheme, setHeaderTheme] = useState("classic");
  const [isScalingActive, setIsScalingActive] = useState(true);
  const [viewMode, setViewMode] = useState("grid");
  const [activeSlide, setActiveSlide] = useState(1);
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [customFileName, setCustomFileName] = useState("");
  const [isExported, setIsExported] = useState(false);

  const handleJsonInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setJsonInput(value);
    try {
      // Use jsonrepair to automatically fix common JSON errors 
      // like unescaped newlines, missing quotes, or trailing commas
      const repaired = jsonrepair(value);
      const parsed = JSON.parse(repaired);
      setData(parsed);
      setJsonError(null);
    } catch (err: any) {
      setJsonError(err.message);
    }
  };

  const handlePresetChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const presetKey = e.target.value;
    setSelectedPreset(presetKey);
    const presetsRecord = presets as Record<string, any>;
    if (presetsRecord[presetKey]) {
      const presetData = presetsRecord[presetKey];
      setJsonInput(JSON.stringify(presetData, null, 2));
      setData(presetData);
      setJsonError(null);
    }
  };

  const toggleScaling = () => {
    setIsScalingActive(!isScalingActive);
  };

  const copyPromptToClipboard = () => {
    const textToCopy = generateSystemPrompt(repoLink);
    navigator.clipboard.writeText(textToCopy).then(() => {
      setIsPromptCopied(true);
      setTimeout(() => setIsPromptCopied(false), 500);
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  };

  const exportSingleSlide = (slideIndex: number) => {
    const id = `slide-${slideIndex}`;
    const el = document.getElementById(id);
    if (!el) return;

    const wrapper = el.parentElement;
    if (!wrapper) return;
    const hadFocused = wrapper.classList.contains('focused');
    wrapper.classList.remove('focused');

    html2canvas(el, {
      scale: 1,
      useCORS: true,
      backgroundColor: '#0B0F19',
      width: 1080,
      height: 1080,
      onclone: (clonedDoc) => {
        const clonedEl = clonedDoc.getElementById(id);
        if (clonedEl && clonedEl.parentElement) {
          clonedEl.parentElement.classList.add('actual-size');
        }
      }
    }).then(canvas => {
      const url = canvas.toDataURL('image/jpeg', 0.95);
      const a = document.createElement('a');
      a.href = url;

      const dateStr = getFormattedDate();
      const defaultRepoName = data?.slide1?.repo || data?.topic || "carousel";
      const sanitizedRepoName = defaultRepoName.replace(/[/\\?%*:|"<>\s]+/g, "_").toLowerCase();
      const baseName = customFileName.trim() ? customFileName.trim().replace(/[/\\?%*:|"<>\s]+/g, "_") : sanitizedRepoName;

      a.download = `${baseName}_slide_${slideIndex}_${dateStr}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      if (hadFocused) {
        wrapper.classList.add('focused');
      }
    }).catch(err => {
      console.error("Error exporting slide " + slideIndex, err);
      alert("Failed to export slide: " + err.message);
      if (hadFocused) {
        wrapper.classList.add('focused');
      }
    });
  };

  const exportAllSlides = () => {
    const slideIds = ['slide-1', 'slide-2', 'slide-3', 'slide-4', 'slide-5'];
    let completedCount = 0;

    slideIds.forEach((id, index) => {
      const el = document.getElementById(id);
      const wrapper = el?.parentElement;
      if (wrapper) {
        wrapper.classList.remove('focused');
      }

      if (el) {
        html2canvas(el, {
          scale: 1,
          useCORS: true,
          backgroundColor: '#0B0F19',
          width: 1080,
          height: 1080,
          onclone: (clonedDoc) => {
            const clonedEl = clonedDoc.getElementById(id);
            if (clonedEl && clonedEl.parentElement) {
              clonedEl.parentElement.classList.add('actual-size');
            }
          }
        }).then(canvas => {
        const url = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = url;

        const dateStr = getFormattedDate();
        const defaultRepoName = data?.slide1?.repo || data?.topic || "carousel";
        const sanitizedRepoName = defaultRepoName.replace(/[/\\?%*:|"<>\s]+/g, "_").toLowerCase();
        const baseName = customFileName.trim() ? customFileName.trim().replace(/[/\\?%*:|"<>\s]+/g, "_") : sanitizedRepoName;

        a.download = `${baseName}_slide_${index + 1}_${dateStr}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        completedCount++;
        if (completedCount === slideIds.length) {
          setIsExported(true);
          setTimeout(() => setIsExported(false), 2000);
        }
      }).catch(err => {
        console.error("Error exporting slide " + (index + 1), err);
      });
      }
    });
  };

  if (!data) {
    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif', color: '#fff' }}>
        Loading configuration…
      </div>
    );
  }

  return (
    <>
      <Header
        exportAllSlides={exportAllSlides}
        isExported={isExported}
      />

      <div className="main-container">
        <EditorPanel
          copyPromptToClipboard={copyPromptToClipboard}
          isPromptCopied={isPromptCopied}
          handle={handle}
          setHandle={setHandle}
          repoLink={repoLink}
          setRepoLink={setRepoLink}
          selectedPreset={selectedPreset}
          handlePresetChange={handlePresetChange}
          headerTheme={headerTheme}
          setHeaderTheme={setHeaderTheme}
          jsonInput={jsonInput}
          handleJsonInputChange={handleJsonInputChange}
          jsonError={jsonError}
          customFileName={customFileName}
          setCustomFileName={setCustomFileName}
        />

        <div className="preview-area">
          <div className="preview-header">
            <div className="preview-title">Slides Preview (5 Slide System)</div>

            {/* View Mode Selector */}
            <div className="view-mode-selector">
              <button
                className={`btn-toggle ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                Grid View
              </button>
              <button
                className={`btn-toggle ${viewMode === 'simulator' ? 'active' : ''}`}
                onClick={() => setViewMode('simulator')}
              >
                Instagram Swiper
              </button>
            </div>

            <div className="view-controls" style={{ gap: '12px' }}>
              <select
                id="download-single-select"
                className="btn"
                aria-label="Download single slide"
                style={{
                  backgroundColor: 'var(--color-secondary)',
                  color: 'var(--color-neutral-bright)',
                  fontFamily: 'var(--font-headings)',
                  padding: '8px 12px',
                  cursor: 'pointer',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 'var(--rounded-sm)',
                  fontSize: '0.9rem'
                }}
                onChange={(e) => {
                  if (e.target.value) {
                    exportSingleSlide(parseInt(e.target.value));
                    e.target.value = '';
                  }
                }}
              >
                <option value="">📥 Download Single Slide (JPEG)…</option>
                <option value="1">Slide 1 (GitHub Repo Card)</option>
                <option value="2">Slide 2 (What & Why)</option>
                <option value="3">Slide 3 (Trust & Ecosystem)</option>
                <option value="4">Slide 4 (Code in Action)</option>
                <option value="5">Slide 5 (CTA Summary)</option>
              </select>
              <button className="btn btn-sm" id="btn-scale-toggle" onClick={toggleScaling}>
                {isScalingActive ? (
                  <><span>🔍</span> Toggle Actual Size (1080x1080)</>
                ) : (
                  <><span>📱</span> Toggle Fit to Screen</>
                )}
              </button>
            </div>
          </div>

          {viewMode === 'simulator' ? (
            <div className="simulator-navigation">
              <button
                className="btn-nav"
                disabled={activeSlide === 1}
                onClick={() => setActiveSlide(prev => Math.max(1, prev - 1))}
              >
                <span>←</span> Prev Slide
              </button>
              <span className="simulator-indicator">
                Slide {activeSlide} of 5
              </span>
              <button
                className="btn-nav"
                disabled={activeSlide === 5}
                onClick={() => setActiveSlide(prev => Math.min(5, prev + 1))}
              >
                Next Slide <span>→</span>
              </button>
            </div>
          ) : null}

          <div className={`carousel-grid ${viewMode === 'simulator' ? 'simulator-layout' : 'grid-layout'}`} id="carousel-container">
            <div className={`slide-slot ${viewMode === 'simulator' && activeSlide !== 1 ? 'hidden-slide' : ''}`}>
              <Slide1
                slideData={data.slide1}
                headerTheme={headerTheme}
                handle={handle}
                isScalingActive={isScalingActive}
                exportSingleSlide={exportSingleSlide}
              />
            </div>

            <div className={`slide-slot ${viewMode === 'simulator' && activeSlide !== 2 ? 'hidden-slide' : ''}`}>
              <Slide2
                slideData={data.slide2}
                handle={handle}
                isScalingActive={isScalingActive}
                exportSingleSlide={exportSingleSlide}
              />
            </div>

            <div className={`slide-slot ${viewMode === 'simulator' && activeSlide !== 3 ? 'hidden-slide' : ''}`}>
              <Slide3
                slideData={data.slide3}
                handle={handle}
                isScalingActive={isScalingActive}
                exportSingleSlide={exportSingleSlide}
              />
            </div>

            <div className={`slide-slot ${viewMode === 'simulator' && activeSlide !== 4 ? 'hidden-slide' : ''}`}>
              <Slide4
                slideData={data.slide4}
                handle={handle}
                isScalingActive={isScalingActive}
                exportSingleSlide={exportSingleSlide}
              />
            </div>

            <div className={`slide-slot ${viewMode === 'simulator' && activeSlide !== 5 ? 'hidden-slide' : ''}`}>
              <Slide5
                slideData={data.slide5}
                handle={handle}
                isScalingActive={isScalingActive}
                exportSingleSlide={exportSingleSlide}
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
