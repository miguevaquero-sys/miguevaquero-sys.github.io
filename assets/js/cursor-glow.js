(() => {
  const glow = document.getElementById("cursor-glow");
  const enabled = window.matchMedia(
    "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
  );

  document.addEventListener("pointermove", (event) => {
    if (!enabled.matches || event.pointerType !== "mouse") return;
    glow.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    glow.classList.add("is-visible");
  }, { passive: true });

  const hide = () => glow.classList.remove("is-visible");
  document.documentElement.addEventListener("pointerleave", hide);
  window.addEventListener("blur", hide);
  enabled.addEventListener("change", hide);
})();
