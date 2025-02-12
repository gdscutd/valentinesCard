// hides our regular cursor
document.body.style.cursor = "none";

// Create a custom heart cursor
const heartCursor = document.createElement("div");
heartCursor.classList.add("heart-cursor");
document.body.appendChild(heartCursor);

// Detect if the device is mobile or not based on if it is touch-enabled
const isTouchDevice = () => {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
};

// Update heart cursor position
document.addEventListener(isTouchDevice() ? "touchmove" : "mousemove", (e) => {
    let mouseX = isTouchDevice() ? e.touches[0].pageX : e.pageX;
    let mouseY = isTouchDevice() ? e.touches[0].pageY : e.pageY;

    // Move the heart cursor
    heartCursor.style.left = `${mouseX}px`;
    heartCursor.style.top = `${mouseY}px`;
});

// Hide cursor on mouse leave
document.addEventListener("mouseout", () => {
    heartCursor.style.opacity = "0";
});

// Show cursor on mouse enter
document.addEventListener("mouseover", () => {
    heartCursor.style.opacity = "1";
});
