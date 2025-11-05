export default defineContentScript({
  matches: ["*://*.chat.openai.com/*", "*://*.chatgpt.com/*"],
  main() {
    const functionalities = {
      rejectCookies: {
        executed: false,
      },
      refuseLoginPrompt: {
        executed: false,
      },
    };
    const observer = new MutationObserver(() => {
      if (!functionalities.rejectCookies.executed) {
        const rejectCookiesButton = Array.from(
          document.querySelectorAll("button>div")
        ).filter((x) => x.innerHTML === "Reject non-essential")[0];
        if (rejectCookiesButton) {
          (rejectCookiesButton as HTMLElement)?.click();
          console.log("Rejected cookies");
          functionalities.rejectCookies.executed = true;
        }
      }
      if (!functionalities.refuseLoginPrompt.executed) {
        const refuseLoginButton = Array.from(
          document.querySelectorAll("div>a")
        ).filter((x) => x.innerHTML === "Stay logged out")[0];
        if (refuseLoginButton) {
          (refuseLoginButton as HTMLElement)?.click();
          console.log("Refused login prompt");
          functionalities.refuseLoginPrompt.executed = true;
        }
      }
      const allFunctionsExecuted = Object.values(functionalities).every(
        (x) => x.executed
      );
      if (allFunctionsExecuted) {
        observer.disconnect();
      }
    });

    observer.observe(document, { childList: true, subtree: true });
  },
});
