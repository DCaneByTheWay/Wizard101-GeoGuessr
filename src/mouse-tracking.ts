// pixels from cursor to follow
const FOLLOW_RADIUS = 45;

const spiral = document.getElementById("Spiral");
const worldIcons = document.querySelectorAll<HTMLElement>(".world-icon");

window.addEventListener("mousemove", (e) => {
  const rect = spiral?.getBoundingClientRect();
  if (!rect) return;

  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  for (const icon of worldIcons) {
    // icon home pos
    const homeX = icon.offsetLeft;
    const homeY = icon.offsetTop;

    const dx = mouseX - homeX;
    const dy = mouseY - homeY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < FOLLOW_RADIUS) {
      icon?.style.setProperty("--offsetX", `${dx}px`);
      icon?.style.setProperty("--offsetY", `${dy}px`);
    } else {
      icon?.style.setProperty("--offsetX", `0px`);
      icon?.style.setProperty("--offsetY", `0px`);
    }
  }
});
