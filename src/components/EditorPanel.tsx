import React, { ChangeEvent } from 'react';

interface EditorPanelProps {
  copyPromptToClipboard: () => void;
  isPromptCopied: boolean;
  handle: string;
  setHandle: (handle: string) => void;
  repoLink: string;
  setRepoLink: (repoLink: string) => void;
  selectedPreset: string;
  handlePresetChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  headerTheme: string;
  setHeaderTheme: (theme: string) => void;
  jsonInput: string;
  handleJsonInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  jsonError: string | null;
  customFileName: string;
  setCustomFileName: (name: string) => void;
}

export default function EditorPanel({
  copyPromptToClipboard,
  isPromptCopied,
  handle,
  setHandle,
  repoLink,
  setRepoLink,
  selectedPreset,
  handlePresetChange,
  headerTheme,
  setHeaderTheme,
  jsonInput,
  handleJsonInputChange,
  jsonError,
  customFileName,
  setCustomFileName
}: EditorPanelProps) {
  return (
    <div className="editor-panel">
      <div className="panel-section">
        <label className="section-title" htmlFor="handle-input">Developer Handle</label>
        <input 
          type="text" 
          id="handle-input" 
          className="channel-handle-input" 
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
          placeholder="@golang_verse…"
          autoComplete="off"
        />
      </div>

      <div className="highlight-box">
        <label className="section-title" htmlFor="repo-link-input">Target GitHub Repo or Topic</label>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input 
            type="text" 
            id="repo-link-input" 
            className="channel-handle-input" 
            value={repoLink}
            onChange={(e) => setRepoLink(e.target.value)}
            placeholder="e.g. github.com/spf13/cobra"
            autoComplete="off"
            style={{ flex: 1 }}
          />
          <button
            className="btn"
            onClick={copyPromptToClipboard}
            style={{ transition: 'all 0.3s ease', whiteSpace: 'nowrap' }}
          >
            <span>{isPromptCopied ? '✅' : '📋'}</span> {isPromptCopied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>

      <div className="panel-section">
        <label className="section-title" htmlFor="preset-select">Select Preset</label>
        <select 
          id="preset-select" 
          className="channel-handle-input" 
          value={selectedPreset}
          onChange={handlePresetChange}
          style={{ cursor: 'pointer' }}
        >
          <option value="cobra">Cobra — Go CLI Framework</option>
          <option value="Carbonyl">Carbonyl — Terminal Browser</option>
          <option value="chromem-go">Chromem-go — Embeddable Vector DB</option>
        </select>
      </div>

      <div className="panel-section">
        <label className="section-title" htmlFor="header-theme-select">Header Theme Style</label>
        <select 
          id="header-theme-select" 
          className="channel-handle-input" 
          value={headerTheme}
          onChange={(e) => setHeaderTheme(e.target.value)}
          style={{ cursor: 'pointer' }}
        >
          <option value="classic">Classic Dark Pill</option>
          <option value="cyber-glass">Cyber-Glass Floating Island</option>
          <option value="terminal">Command-Line Prompt</option>
          <option value="brutalist">Neo-Brutalist Border</option>
          <option value="minimal-nav">Minimalist IDE Navbar</option>
        </select>
      </div>

      <div className="panel-section">
        <label className="section-title" htmlFor="filename-input">Custom Export Filename (Optional)</label>
        <input 
          type="text" 
          id="filename-input" 
          className="channel-handle-input" 
          value={customFileName}
          onChange={(e) => setCustomFileName(e.target.value)}
          placeholder="e.g. my_awesome_carousel"
          autoComplete="off"
        />
      </div>

      <div className="panel-section">
        <label className="section-title" htmlFor="json-input">
          Slide Data (JSON)
          {jsonError && <span style={{ color: '#ff4d4f', marginLeft: '10px', fontSize: '0.8rem', fontWeight: 'bold' }}>Invalid JSON</span>}
        </label>
        <textarea 
          id="json-input" 
          className="textarea-json" 
          spellCheck="false" 
          style={{ borderColor: jsonError ? '#ff4d4f' : undefined }}
          value={jsonInput}
          onChange={handleJsonInputChange}
          aria-invalid={jsonError ? "true" : "false"}
          aria-describedby={jsonError ? "json-error-message" : undefined}
        />
        {jsonError && <div id="json-error-message" role="alert" style={{ color: '#ff4d4f', fontSize: '0.75rem', marginTop: '6px' }}>Error: {jsonError}</div>}
      </div>

      <div className="help-banner">
        <strong>💡 Pro-Tip Workflow:</strong>
        <ol style={{ marginLeft: '20px', marginTop: '4px' }}>
          <li>Click <code>Copy Gemini Prompt</code>.</li>
          <li>Paste it into Gemini and ask it to write about your library.</li>
          <li>Paste Gemini's JSON output above.</li>
          <li>Preview, customize, and click <code>Export Slides (PNG)</code>!</li>
        </ol>
      </div>

      <div style={{ fontSize: '0.8rem', textAlign: 'center', color: 'var(--color-neutral-muted)', marginTop: 'auto' }}>
        Go-AI Design System — version alpha
      </div>
    </div>
  );
}
