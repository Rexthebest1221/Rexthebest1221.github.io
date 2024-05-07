// mobile.js

// Function to adjust viewport based on device width
function adjustViewport() {
    var viewportWidth = window.innerWidth;
    var initialScale = 0.1; // Adjust this value as needed
    document.querySelector("meta[name=viewport]").setAttribute("content", "width=" + viewportWidth + ", initial-scale=" + initialScale);
}

// Call the function initially and on window resize
adjustViewport();
window.addEventListener("resize", adjustViewport);
