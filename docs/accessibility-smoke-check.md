# accessibility smoke check

Before publishing, navigate with keyboard only, verify focus order and visible focus indicators, check text contrast, respect reduced-motion preferences, and provide meaningful alt text for informative images. Test narrow mobile widths and 200 percent zoom. Do not rely on color alone to identify links. Core content should remain usable if remote fonts, badges, or WebGL effects fail.

## Input modality checks

Verify the site remains usable with touch input and with a keyboard when the custom pointer or WebGL layer is unavailable. Interactive controls must retain native focus behavior and a visible focus indicator. Avoid hover-only actions for navigation or essential information, and check that pointer-following effects do not obscure focused elements or interfere with text selection. Re-test at narrow mobile widths after changing cursor or canvas behavior.

## Semantic structure and link purpose

Check that each page has one clear primary heading and that subsequent headings follow a logical hierarchy. Use landmarks for navigation, main content, and footer where appropriate. Link text should identify its destination or action instead of relying on "click here"; icon-only links need an accessible name. Decorative canvas and background effects should not be announced as content, and important information must remain available in the document when those effects are disabled.
