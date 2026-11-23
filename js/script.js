
// ========================================
// SHAMEEDA & MASTHAN VALI WEDDING WEBSITE
// JavaScript Functionality
// ========================================

console.log("Welcome to Shameeda & Masthan Vali Wedding Website!");


// ========================================
// 1. SMOOTH SCROLLING
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function (event) {

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

document.addEventListener("DOMContentLoaded", function () {

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
// Countdown currently targets midnight at the start
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

    if (difference <= 0) {

        if (daysElement) daysElement.textContent = "00";
        if (hoursElement) hoursElement.textContent = "00";
        if (minutesElement) minutesElement.textContent = "00";
        if (secondsElement) secondsElement.textContent = "00";

        return;

    }

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

    if (daysElement) daysElement.textContent = days;
    if (hoursElement) hoursElement.textContent = hours;
    if (minutesElement) minutesElement.textContent = minutes;
    if (secondsElement) secondsElement.textContent = seconds;

}


// Start countdown
updateCountdown();

setInterval(updateCountdown, 1000);


// ========================================
// 4. GUEST WISHES FORM
// ========================================

const wishesForm = document.getElementById("wishesForm");

if (wishesForm) {

    wishesForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const guestName =
            document.getElementById("guestName").value.trim();

        const guestMessage =
            document.getElementById("guestMessage").value.trim();

        const wishStatus =
            document.getElementById("wishStatus");

        if (!guestName || !guestMessage) {

            wishStatus.textContent =
                "Please fill in all fields.";

            return;

        }

        const wish = {
            name: guestName,
            message: guestMessage,
            date: new Date().toLocaleString()
        };

        // Display the submitted wish in the console
        console.log("New Wedding Wish:", wish);

        wishStatus.textContent =
            "Thank you, " + guestName +
            "! May Allah bless you. Your duas mean a lot to us.";

        wishesForm.reset();

    });

}


// ========================================
// 5. WEBSITE LOADED
// ========================================

console.log("Wedding Website JavaScript Loaded Successfully!");
