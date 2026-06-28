---
title: Insta-Channel Agents Rules
tags:
  - rules
  - agents
---

# 🤖 Insta-Channel Agents Rules

The following rules apply specifically to the `insta-channel` workspace and must be followed by all agents.

## 1. Adding a New Preset

When adding a new preset to the [presets.js](file:///c:/Users/nitin/Desktop/dev/obsidian-notes/side-hustle/insta-channel/src/constants/presets.js) file, you **must** also add a corresponding `<option>` element to the "Select Preset" dropdown menu.

This ensures that any newly added presets are selectable by the user in the UI.

**Required Steps:**
1. **Add Data:** Add the preset object to the `presets` object in `src/constants/presets.js`.
2. **Update UI:** Add a new `<option value="yourPresetName">Your Preset Label</option>` inside the `<select id="preset-select">` element located in [EditorPanel.jsx](file:///c:/Users/nitin/Desktop/dev/obsidian-notes/side-hustle/insta-channel/src/components/EditorPanel.jsx).
