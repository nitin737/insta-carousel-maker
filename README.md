---
title: Instagram Channel Design System README
tags:
  - design
  - tools
  - cli
  - documentation
aliases:
  - Design README
---

# 🎨 Instagram Channel Design System & Carousel Builder

This directory contains the design system configuration and automation tools for creating high-retaining, visually striking Instagram Carousel slides for **Go-AI library** topics.

---

## 📁 Directory Structure

- `[[DESIGN.md]]`: The primary design token specification containing colors, typography scale (Space Grotesk & JetBrains Mono), spacing, and component definitions.
- `[[carousel-builder.html]]`: An interactive, single-file web application to preview, customize, and export carousel slides directly to PNG format.
- `[[GEMINI_PROMPT.md]]`: A copy-pasteable system prompt to guide Gemini in generating the structured JSON payloads for new carousels.

---

## 🔄 The Carousel Workflow

Create professional 7-slide developer carousels in 4 steps:

### 1. Generate Content via Gemini
Open `[[GEMINI_PROMPT.md]]`, copy the prompt, and paste it into Gemini (e.g. Gemini Advanced or Gemini 1.5 Pro). Provide a library or topic name (e.g. `github.com/tmc/langchaingo`). Gemini will generate a structured JSON payload.

### 2. Open the Builder
Open `[[carousel-builder.html]]` in any web browser.

### 3. Customize & Preview
Paste the JSON payload into the builder's text area. The slides will instantly render in 1080x1080px format following the **Go-AI Tech Neon** spec, showing:
- Slide 1: **Title Hook** (with peeking code)
- Slide 2: **Core Problem** (side-by-side Python vs Go comparison boxes)
- Slide 3: **Introducing the Library** (`go.mod` declaration)
- Slide 4: **Real Implementation Code** (IDE view with custom syntax highlighting)
- Slide 5: **Benchmarks** (interactive memory/speed bar charts)
- Slide 6: **Secret Pro Tip** (high-authority system tuning advice)
- Slide 7: **Outro / Clear CTA** (GitHub stars and follower hooks)

*Tip: You can change the developer handle (e.g. `@golang.ai`) directly in the control panel.*

### 4. Export PNGs
Click **Export Slides (PNG)** to download all 7 slides sequentially in high-resolution, perfectly sized for Instagram's 1:1 square crop.

---

## 🛠️ Design System CLI Reference

We use `@google/design.md` to validate and audit design configurations.

### 🔍 Lint and Validate Design
Validate your design system configuration for broken token references, contrast ratios, and structural integrity:

```bash
npx @google/design.md lint DESIGN.md
```

### ⚖️ Compare Design Changes (Diff)
Compare tokens between two specification files (e.g. if you create an alternative design v2):

```bash
npx @google/design.md diff DESIGN.md DESIGN-v2.md
```
# insta-carousel-maker  
