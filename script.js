// This line finds the mobile navigation button in the page.
const menuBtn = document.getElementById("menuBtn");
// This line finds the navigation links container in the page.
const navLinks = document.getElementById("navLinks");
// This line opens and closes the mobile navigation when the menu button is clicked.
menuBtn.addEventListener("click", () => {
    // This line toggles the open class that controls mobile navigation visibility.
    navLinks.classList.toggle("open");
});
// This line selects every navigation link inside the navigation menu.
const navItems = document.querySelectorAll(".nav-links a");
// This line loops through every navigation link.
navItems.forEach((item) => {
    // This line closes the mobile navigation after a link is selected.
    item.addEventListener("click", () => {
        // This line removes the open class from the navigation menu.
        navLinks.classList.remove("open");
    });
});
// This line selects all internal section links for a small smooth-scroll enhancement.
const internalLinks = document.querySelectorAll('a[href^="#"]');
// This line loops through each internal section link.
internalLinks.forEach((link) => {
    // This line listens for a click on the internal link.
    link.addEventListener("click", (event) => {
        // This line reads the target section ID from the clicked link.
        const targetId = link.getAttribute("href");
        // This line finds the target section using its ID.
        const target = document.querySelector(targetId);
        // This line checks that the target section exists before scrolling.
        if (target) {
            // This line prevents the browser's default jump behavior.
            event.preventDefault();
            // This line scrolls to the target section smoothly.
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});
// This line confirms in the browser console that the portfolio JavaScript loaded correctly.
console.log("Shaik Ashik Basha portfolio loaded successfully.");
