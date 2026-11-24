
// ========================================
// SHAMEEDA & MASTHAN VALI WEDDING WEBSITE
// JavaScript Functionality
// ========================================

console.log("Welcome to Shameeda & Masthan Vali Wedding Website!");


// ========================================
// 1. SMOOTH SCROLLING
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(event) {

        const targetId = this.getAttribute('href');

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ========================================
// 2. HERO SECTION ANIMATION
// ========================================

document.addEventListener("DOMContentLoaded", function() {

    const heroContent = document.querySelector(".hero-content");

    if (heroContent) {

        heroContent.style.opacity = "0";
        heroContent.style.transform = "translateY(30px)";

        heroContent.style.transition =
            "opacity 1.2s ease, transform 1.2s ease";

        requestAnimationFrame(() => {

            heroContent.style.opacity = "1";
            heroContent.style.transform = "translateY(0)";

        });

    }

});


// ========================================
// 3. WEDDING COUNTDOWN
// ========================================

// Wedding date: 13 December 2026
// Countdown currently targets midnight at the beginning
// of the date in the visitor's local timezone.
// Update the time when the ceremony timing is confirmed.

const weddingDate = new Date(
    "December 13, 2026 00:00:00"
).getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference = weddingDate - now;

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");


    // Check whether the wedding day has arrived

    if (difference <= 0) {

        if (daysElement) daysElement.textContent = "00";
        if (hoursElement) hoursElement.textContent = "00";
        if (minutesElement) minutesElement.textContent = "00";
        if (secondsElement) secondsElement.textContent = "00";

        return;

    }


    // Calculate remaining time

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    // Display countdown

    if (daysElement) daysElement.textContent = days;
    if (hoursElement) hoursElement.textContent = hours;
    if (minutesElement) minutesElement.textContent = minutes;
    if (secondsElement) secondsElement.textContent = seconds;

}


// Start countdown immediately

updateCountdown();


// Update countdown every second

const countdownInterval = setInterval(updateCountdown, 1000);


// ========================================
// 4. WEDDING LOCATION LINKS
// ========================================

// Nikah Google Maps location
const nikahLocation =
    "https://maps.app.goo.gl/UHwRNa9VWMEN8zhV7";


// Walima Google Maps location
// Currently using the same link supplied earlier.
// Replace it if the Walima venue has a different location.

const walimaLocation =
    "https://maps.app.goo.gl/4MRmD8zJzu9mSnJh6";


console.log("Nikah Location:", nikahLocation);
console.log("Walima Location:", walimaLocation);


// ========================================
// 5. WEDDING WISHES GOOGLE FORM
// ========================================

// The wishes button is an ordinary HTML link.
// It opens the Google Form in a new tab.
//
// IMPORTANT:
// Replace this Maps URL with your actual
// Google Forms sharing link in index.html.

const wishesFormLink =
    "https://maps.app.goo.gl/4MRmD8zJzu9mSnJh6";

console.log("Wedding Wishes Link:", wishesFormLink);


// ========================================
// 6. CHECK QR CODE IMAGES
// ========================================

document.addEventListener("DOMContentLoaded", function() {

    const qrImages = document.querySelectorAll(".qr-frame img");

    qrImages.forEach(function(image) {

        image.addEventListener("error", function() {

            console.error(
                "QR code image could not be loaded:",
                image.getAttribute("src")
            );

        });

        image.addEventListener("load", function() {

            console.log(
                "QR code loaded successfully:",
                image.getAttribute("src")
            );

        });

    });

});


// ========================================
// 7. WEBSITE LOADED SUCCESSFULLY
// ========================================

console.log(
    "Shameeda & Masthan Vali Wedding Website Loaded Successfully!"
);
