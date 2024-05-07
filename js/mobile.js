
function adjustViewport() {
    var viewportWidth = window.innerWidth;
    var initialScale = viewportWidth / 1024; 
    initialScale = Math.max(initialScale, 0.5);
    document.querySelector("meta[name=viewport]").setAttribute("content", "width=device-width, initial-scale=" + initialScale);
}

adjustViewport();
window.addEventListener("resize", adjustViewport);
