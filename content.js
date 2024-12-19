function removeTargetDiv() {
  const targetClass = "copilotPreview__container";
  const elements = document.querySelectorAll(`.${targetClass}`);
  elements.forEach((element) => {
    element.remove();
  });
}

removeTargetDiv();

const observer = new MutationObserver(() => {
  removeTargetDiv();
});

observer.observe(document.body, { childList: true, subtree: true });
