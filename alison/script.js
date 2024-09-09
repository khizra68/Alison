document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.gallary-box');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    items.forEach(item => {
        observer.observe(item);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const mobile_navbar = document.querySelector(".mobile-menu-icons");
    const header_navbar = document.querySelector(".navbar");
    mobile_navbar.addEventListener('click', () => {
        header_navbar.classList.toggle("active");
    });
});
