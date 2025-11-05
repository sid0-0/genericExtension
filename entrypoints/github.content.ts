import copySvg from "/public/icons/copy.svg";
const createCopyButton = () => {
  const button = document.createElement("button");
  button.style.marginRight = "8px";
  button.style.cursor = "pointer";
  button.style.background = "transparent";
  button.style.border = "none";
  button.setAttribute("data-copy-button", "true");

  const svgImg = document.createElement("img");
  svgImg.src = copySvg;
  svgImg.style.width = "16px";
  svgImg.style.height = "16px";
  svgImg.style.verticalAlign = "middle";
  button.appendChild(svgImg);

  button.onclick = () => {
    const textToCopy = button.previousElementSibling?.textContent || "";
    navigator.clipboard.writeText(textToCopy);
  };

  button.onmouseenter = () => {
    svgImg.style.filter = "brightness(0.7)";
  };
  button.onmouseleave = () => {
    svgImg.style.filter = "none";
  };
  return button;
};

export default defineContentScript({
  matches: ["https://github.com/*"],
  main() {
    const mutationObserver = new MutationObserver(() => {
      const elems = Array.from(
        document.querySelectorAll("summary>div>span .Link--primary")
      );
      elems.forEach((elem) => {
        const targetElem = elem as HTMLElement;
        const siblingElem = targetElem.nextElementSibling;
        if (siblingElem?.getAttribute("data-copy-button") !== "true") {
          targetElem.classList.remove("mr-2");
          targetElem.insertAdjacentElement("afterend", createCopyButton());
        }
      });
      console.log("GitHub Copy Button: Checked for new elements");
    });
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });
  },
});
