document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       THEME TOGGLE
    ========================= */

    const themeButton = document.getElementById("themeButton");

    // Load saved theme
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light") {
        document.body.classList.add("light");
    }

    // Update icon
    function updateThemeIcon() {
        if (!themeButton) return;

        if (document.body.classList.contains("light")) {
            themeButton.textContent = "🌙";
            themeButton.title = "Switch to Dark Mode";
        } else {
            themeButton.textContent = "☀️";
            themeButton.title = "Switch to Light Mode";
        }
    }

    updateThemeIcon();

    // Toggle theme
    if (themeButton) {
        themeButton.addEventListener("click", () => {

            document.body.classList.toggle("light");

            const currentTheme =
                document.body.classList.contains("light")
                    ? "light"
                    : "dark";

            localStorage.setItem("portfolio-theme", currentTheme);

            updateThemeIcon();
        });
    }


    /* =========================
       MOBILE MENU
    ========================= */

    const menuButton = document.getElementById("menuButton");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", () => {
            navLinks.classList.toggle("show");
        });

        // Close menu after clicking a link
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("show");
            });
        });
    }


    /* =========================
       CONTACT FORM VALIDATION
    ========================= */

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            const formMessage =
                document.getElementById("formMessage");

            // Empty field validation
            if (!name || !email || !subject || !message) {

                event.preventDefault();

                formMessage.textContent =
                    "Please fill in all fields.";

                formMessage.style.color = "#f87171";

                return;
            }

            // Email validation
            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                event.preventDefault();

                formMessage.textContent =
                    "Please enter a valid email address.";

                formMessage.style.color = "#f87171";

                return;
            }

            formMessage.textContent = "Sending...";
            formMessage.style.color = "#22d3ee";
        });
    }


    /* =========================
       SCROLL REVEAL ANIMATION
    ========================= */

    const revealElements =
        document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                        observer.unobserve(entry.target);
                    }
                });

            },
            {
                threshold: 0.15
            }
        );

        revealElements.forEach(element => {
            observer.observe(element);
        });
    }


    /* =========================
       TYPING EFFECT
    ========================= */

    const typingElement =
        document.getElementById("typingText");

    if (typingElement) {

        const roles = [
            "Software Developer",
            "Full Stack Developer",
            "AI & ML Explorer",
            "Creative Problem Solver"
        ];

        let roleIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentRole = roles[roleIndex];

            if (!deleting) {

                typingElement.textContent =
                    currentRole.substring(0, charIndex + 1);

                charIndex++;

                if (charIndex === currentRole.length) {

                    deleting = true;

                    setTimeout(typeEffect, 1500);

                    return;
                }

            } else {

                typingElement.textContent =
                    currentRole.substring(0, charIndex - 1);

                charIndex--;

                if (charIndex === 0) {

                    deleting = false;

                    roleIndex =
                        (roleIndex + 1) % roles.length;
                }
            }

            setTimeout(
                typeEffect,
                deleting ? 50 : 90
            );
        }

        typeEffect();
    }


    /* =========================
       CURRENT YEAR
    ========================= */

    const yearElement =
        document.getElementById("year");

    if (yearElement) {
        yearElement.textContent =
            new Date().getFullYear();
    }

});