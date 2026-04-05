import { createIcons, icons } from 'lucide';

// Initialize Lucide Icons
createIcons({ icons });

// Scroll Animations observer
const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Select all elements with the 'reveal-element' utility
document.querySelectorAll('.reveal-element').forEach((el) => {
    observer.observe(el);
});

// Navbar scroll logic
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 20) {
        nav.classList.add('shadow-md');
        // If we were using bg-transparent initially, we would replace it here.
        // But the original code was already using glass-nav.
    } else {
        nav.classList.remove('shadow-md');
    }
});
