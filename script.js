document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Menu Open/Close Toggle Action
    const toggleBtn = document.getElementById("nav-toggle");
    const menuPanel = document.getElementById("nav-menu");
    const mobileLinks = document.querySelectorAll(".mobile-nav-link");

    if (toggleBtn && menuPanel) {
        toggleBtn.addEventListener("click", () => {
            menuPanel.classList.toggle("hidden");
        });

        // Close panel when choosing an option link on mobile
        mobileLinks.forEach(link => {
            link.addEventListener("click", () => {
                menuPanel.classList.add("hidden");
            });
        });
    }

    // 2. Active Section Spy (Navigation Highlighting)
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    function scrollSpy() {
        const scrollY = window.scrollY;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 80; // offset header height
            const sectionId = current.getAttribute("id");
            const correspondingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

            if (correspondingLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove("active-link"));
                    correspondingLink.classList.add("active-link");
                } else {
                    correspondingLink.classList.remove("active-link");
                }
            }
        });
    }
    window.addEventListener("scroll", scrollSpy);

    // 3. Lightweight Reveal Animation System using Intersection Observer
    const revealElements = document.querySelectorAll(".reveal");
    
    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target); // Trigger animation once
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback for older legacy browsers
        revealElements.forEach(el => el.classList.add("active"));
    }

    // 4. Clean Contact Form Submission Logic
    const contactForm = document.getElementById("contactForm");
    const submitBtn = document.getElementById("submitBtn");

    if (submitBtn && contactForm) {
        submitBtn.addEventListener("click", (e) => {
            e.preventDefault();
            
            // Perform form validation
            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email");
            const messageInput = document.getElementById("message");

            if (nameInput.value.trim() !== "" && emailInput.value.trim() !== "" && messageInput.value.trim() !== "") {
                // Actions can be executed here prior to reset (e.g. AJAX/Fetch post requests)
                contactForm.reset();
            } else {
                alert("Please fill in all standard fields.");
            }
        });
    }

    // 5. Update Year automatically
    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
