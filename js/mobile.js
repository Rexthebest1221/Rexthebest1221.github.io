// mobile.js

// Function to adjust viewport based on device width
function adjustViewport() {
    var viewportWidth = window.innerWidth;
    document.querySelector("meta[name=viewport]").setAttribute("content", "width=" + viewportWidth + ", initial-scale=1");
}

// Call the function initially and on window resize
adjustViewport();
window.addEventListener("resize", adjustViewport);
