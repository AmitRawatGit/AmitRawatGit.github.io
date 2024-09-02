document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar');
    const scrollUpBtn = document.querySelector('.scroll-up-btn');
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.navbar .menu');
    const menuLinks = document.querySelectorAll('.navbar .menu li a');

    // Sticky navbar and scroll-up button visibility
    window.addEventListener('scroll', function () {
        navbar.classList.toggle("sticky", window.scrollY > 20);
        scrollUpBtn.classList.toggle("show", window.scrollY > 500);
    });

    // Scroll-up button click event
    scrollUpBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Smooth scroll behavior for menu links
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            document.documentElement.style.scrollBehavior = 'smooth';
        });
    });

    // Toggle menu/navbar script
    menuBtn.addEventListener('click', function () {
        menu.classList.toggle("active");
        menuBtn.querySelector('i').classList.toggle("active");
    });

    // Typing text animation script
    new Typed(".typing", {
        strings: ["Data Scientist", "Data Analyst", "Python Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    new Typed(".typing-2", {
        strings: ["Data Scientist", "Data Analyst", "Python Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl carousel initialization
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    // Resume download button event
    document.getElementById('downloadButton').addEventListener('click', function () {
        const a = document.createElement('a');
        a.href = 'documents/Amit_Rawat.pdf'; // Update with actual path
        a.download = 'Amit Rawat.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });

    // Set current year
    document.getElementById('year').innerText = new Date().getFullYear();
});

// Form validation and reset
function validateForm(event) {
    event.preventDefault();
    document.getElementById('contactForm').reset();
    return true;
}
