# accessibility smoke check

Before publishing, navigate with keyboard only, verify focus order and visible focus indicators, check text contrast, respect reduced-motion preferences, and provide meaningful alt text for informative images. Test narrow mobile widths and 200 percent zoom. Do not rely on color alone to identify links. Core content should remain usable if remote fonts, badges, or WebGL effects fail.

## Input modality checks

Verify the site remains usable with touch input and with a keyboard when the custom pointer or WebGL layer is unavailable. Interactive controls must retain native focus behavior and a visible focus indicator. Avoid hover-only actions for navigation or essential information, and check that pointer-following effects do not obscure focused elements or interfere with text selection. Re-test at narrow mobile widths after changing cursor or canvas behavior.
