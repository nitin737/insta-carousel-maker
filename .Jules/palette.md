## 2024-06-30 - Form Validation Accessibility
**Learning:** The JSON configuration textarea had a visual error state but was completely silent for screen reader users when invalid JSON was entered, which is a common accessibility trap for dynamic form validation.
**Action:** Always ensure dynamic form errors use `aria-invalid`, `aria-describedby`, and have a `role="alert"` on the error message itself so the feedback is universally available.
