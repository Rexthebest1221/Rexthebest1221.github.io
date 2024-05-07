// mobile.js

// Function to adjust viewport based on device width
function adjustViewport() {
    var viewportWidth = window.innerWidth;
    // Set the initial scale based on the device width
    var initialScale = viewportWidth / 1024; // Assuming content designed for a width of 1024px
    // Limit the minimum scale to avoid excessive zoom out
    initialScale = Math.max(initialScale, 0.5); // Minimum scale of 0.5
    document.querySelector("meta[name=viewport]").setAttribute("content", "width=device-width, initial-scale=" + initialScale);
}

// Call the function initially and on window resize
adjustViewport();
window.addEventListener("resize", adjustViewport);
