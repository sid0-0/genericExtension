export default defineContentScript({
  matches: ["*://gemini.google.com/*"],
  main() {
    const observer = new MutationObserver(() => {
      const selectors = [".conversation-container", ".table-block"];
      selectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => {
          const htmlEl = el as HTMLElement;
          if (htmlEl.style.maxWidth !== "none") {
            htmlEl.style.maxWidth = "none";
            console.log(`Gemini: Applied ${selector} max-width removal`);
          }
        });
      });
    });

    observer.observe(document, { childList: true, subtree: true });
  },
});
