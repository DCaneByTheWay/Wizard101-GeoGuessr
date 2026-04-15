// pixels from cursor to follow
const FOLLOW_RADIUS = 45;
import { getTransform } from "./ZoomController.js";
const spiral = document.getElementById("Spiral");
window.addEventListener("mousemove", (e) => {
    const rect = spiral?.getBoundingClientRect();
    if (!rect)
        return;
    // mouse position relative to container
    const screenX = e.clientX - rect.left;
    const screenY = e.clientY - rect.top;
    // convert to content (unscaled) pos
    const { scale, tx, ty } = getTransform();
    const mouseX = (screenX - tx) / scale;
    const mouseY = (screenY - ty) / scale;
    const worldIcons = document.querySelectorAll(".world-icon");
    for (const icon of worldIcons) {
        // icon home pos in content pos
        const homeX = icon.offsetLeft;
        const homeY = icon.offsetTop;
        const dx = mouseX - homeX;
        const dy = mouseY - homeY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < FOLLOW_RADIUS) {
            icon?.style.setProperty("--offsetX", `${dx}px`);
            icon?.style.setProperty("--offsetY", `${dy}px`);
        }
        else {
            icon?.style.setProperty("--offsetX", `0px`);
            icon?.style.setProperty("--offsetY", `0px`);
        }
    }
});
//# sourceMappingURL=mouse-tracking.js.map