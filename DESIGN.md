---
name: Go-AI Tech Neon
version: alpha
colors:
  primary: "#0B0F19"      # Deep Matte Tech Obsidian (Background)
  secondary: "#1E293B"    # Charcoal Slate (Card containment / structural frames)
  tertiary: "#00ADD8"     # Go Cyan Accent (Primary focus & code keywords)
  neon-ai: "#8B5CF6"      # Neural Violet (AI/ML context elements)
  neutral-bright: "#F8FAFC" # Frost White (Headers & primary text)
  neutral-muted: "#94A3B8"  # Steel Gray (Subtitles, code annotations, & body text)

typography:
  h1:
    fontFamily: "Space Grotesk"
    fontSize: "4.5rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  h2:
    fontFamily: "Space Grotesk"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.2
  body-md:
    fontFamily: "JetBrains Mono"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  code-text:
    fontFamily: "JetBrains Mono"
    fontSize: "0.9rem"
    fontWeight: 500

rounded:
  sm: "6px"
  md: "16px"
  lg: "32px"

spacing:
  xs: "8px"
  sm: "16px"
  md: "32px"
  lg: "64px"

components:
  carousel-frame:
    backgroundColor: "{colors.primary}"
    width: "1080px"
    height: "1080px" # Premium 1:1 Square aspect ratio
    padding: "{spacing.lg}"
  code-block:
    backgroundColor: "{colors.secondary}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    border: "1px solid {colors.neutral-muted}"
  badge-go:
    backgroundColor: "rgba(0, 173, 216, 0.1)"
    textColor: "{colors.tertiary}"
    rounded: "{rounded.sm}"
  badge-ai:
    backgroundColor: "rgba(139, 92, 246, 0.1)"
    textColor: "{colors.neon-ai}"
    rounded: "{rounded.sm}"
---

## Overview
High-retention tech blogging meets architectural minimalism. The interface replicates an ultra-premium IDE theme. Layouts should emphasize a spacious syntax-highlighted layout over messy graphic elements to instantly command the attention of professional software engineers.

## Colors
The system utilizes deep, high-contrast dark space backgrounds to allow clean neon code blocks and bold typography to jump off the mobile screen.
- **Primary (#0B0F19):** Deep night background prevents eye strain during scrolling.
- **Tertiary (#00ADD8) & Neon-AI (#8B5CF6):** Used selectively for focal points, tags, and key operators. Never use both in a 50/50 split; prioritize one per card depending on context.

## Typography
Monospace font pairing (`JetBrains Mono` and `Space Grotesk`) creates a high-authority developer environment. Headings are intentionally tight and massive.

## Layout & Spacing
- Every card must feature explicit 64px padding (`{spacing.lg}`) as a safe zone.
- Seamless Carousel: Visual cues (like code lines or gradient paths) must break through the right edge of a frame to guide the swipe action into the next card.