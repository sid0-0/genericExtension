# Quick Tweaks

This extension provides a collection of small enhancements for your daily web workflow.

## List of features:
1. ChatGPT  
    a. Reject non-essential cookies.    
    b. Stay logged out of your account. 
2. Gemini
    a. Remove chat width restrictions.
3. GitHub
    a. Add copy button to items in summaries.
## How to use:

### Option 1: Download Pre-built Release (Recommended)
1. Go to the [Releases](https://github.com/yodel/genericExtension/releases) page.
2. Download the latest `Quick-Tweaks-Chrome.zip` (or Firefox version).
3. Extract the ZIP file on your computer.
4. Open your browser's extension page:
    - **Chrome**: `chrome://extensions/`
    - **Firefox**: `about:debugging#/runtime/this-firefox`
5. Enable **Developer mode** (top right in Chrome).
6. Click **Load unpacked** and select the extracted folder.
7. [Optional] Go to extension `Details` and enable `Allow in Incognito`.

### Option 2: Build from Source
1. Clone the repository.
2. Run `pnpm install`.
3. Run `npm run build`.
4. Follow steps 4-7 from Option 1, selecting the `dist/chrome-mv3` (or `dist/firefox-mv2`) folder.
