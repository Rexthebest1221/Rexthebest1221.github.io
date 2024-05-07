// mobile.js

// Function to adjust viewport based on device width
function adjustViewport() {
    var viewportWidth = window.innerWidth;
    // You can adjust the initial-scale value to zoom out more (e.g., 0.5 for half the original scale)
    var initialScale = 0.1; // Adjust this value as needed
    document.querySelector("meta[name=viewport]").setAttribute("content", "width=" + viewportWidth + ", initial-scale=" + initialScale);
}

// Call the function initially and on window resize
adjustViewport();
window.addEventListener("resize", adjustViewport);
