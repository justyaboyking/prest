/* Tactical Guardian - Core Interactions */

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('nav');
    const hero = document.querySelector('header');
    
    // Navbar Scroll Logic
    const mainNav = document.getElementById('main-nav');
    const brandName = document.getElementById('brand-name');
    const navLinks = mainNav.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('mobile-menu-toggle');

    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 50) {
            mainNav.classList.add('bg-white/95', 'backdrop-blur-2xl', 'shadow-md', 'border-b', 'border-slate-200');
            mainNav.classList.remove('bg-transparent', 'py-4');
            mainNav.classList.add('py-2');
            brandName.classList.remove('text-white');
            brandName.classList.add('text-primary');
            menuToggle.classList.remove('text-white');
            menuToggle.classList.add('text-primary');
            navLinks.forEach(link => {
                link.classList.add('text-primary');
                link.classList.remove('text-white');
            });
        } else {
            mainNav.classList.remove('bg-white/95', 'backdrop-blur-2xl', 'shadow-md', 'border-b', 'border-slate-200', 'py-2');
            mainNav.classList.add('bg-transparent', 'py-4');
            brandName.classList.add('text-white');
            brandName.classList.remove('text-primary');
            menuToggle.classList.add('text-white');
            menuToggle.classList.remove('text-primary');
            navLinks.forEach(link => {
                link.classList.remove('text-primary');
                link.classList.add('text-white');
            });
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Mobile Menu Logic
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const mobileMenuContent = document.getElementById('mobile-menu-content');
    
    const toggleMobileMenu = (open) => {
        if (open) {
            mobileMenu.classList.remove('hidden');
            // Small timeout to allow the transition to trigger correctly
            setTimeout(() => {
                mobileMenu.classList.remove('invisible');
                mobileMenu.classList.remove('translate-x-full');
                mobileMenuContent.classList.remove('translate-y-10', 'opacity-0');
                document.body.classList.add('overflow-hidden');
            }, 10);
        } else {
            mobileMenu.classList.add('translate-x-full');
            mobileMenuContent.classList.add('translate-y-10', 'opacity-0');
            document.body.classList.remove('overflow-hidden');
            
            // Wait for transition to finish before hiding it from layout entirely
            setTimeout(() => {
                mobileMenu.classList.add('invisible');
                mobileMenu.classList.add('hidden');
            }, 500); 
        }
    };

    mobileMenuToggle.addEventListener('click', () => toggleMobileMenu(true));
    mobileMenuClose.addEventListener('click', () => toggleMobileMenu(false));
    
    // Close menu when clicking a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => toggleMobileMenu(false));
    });

    // Tactical Text Scramble Effect
    const scrambleText = (el) => {
        const originalText = el.innerText;
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
        let iteration = 0;
        
        const interval = setInterval(() => {
            el.innerText = originalText
                .split("")
                .map((char, index) => {
                    if (index < iteration) return originalText[index];
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join("");

            if (iteration >= originalText.length) clearInterval(interval);
            iteration += 1 / 3;
        }, 30);
    };

    // Intersection Observer for Scroll Reveals
    const observerOptions = {
        threshold: 0.01,
        rootMargin: '0px 0px 100px 0px' // Trigger 100px before reaching viewport for "instant" feel
    };

    // Stats Count-Up Logic
    const animateValue = (el, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            
            // Format output based on target
            if (end === 100) el.innerText = value + '%';
            else if (end === 2) el.innerText = value + 'u';
            else if (end === 10000) el.innerText = (value / 1000).toFixed(0) + 'k+';
            else el.innerText = value;

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                
                // Trigger text scramble if applicable
                const textReveal = entry.target.querySelector('.animate-text-reveal');
                if (textReveal) {
                    setTimeout(() => scrambleText(textReveal), 50); // Faster trigger
                }

                // Trigger stats count-up if applicable
                const counter = entry.target.querySelector('.stats-counter');
                if (counter) {
                    const target = parseInt(counter.getAttribute('data-target'));
                    setTimeout(() => animateValue(counter, 0, target, 1200), 50); // Faster count-up
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Sticky CTA Visibility
    const stickyBar = document.getElementById('mobile-cta');
    const handleStickyBar = () => {
        if (window.scrollY > 300) {
            stickyBar.classList.add('visible');
        } else {
            stickyBar.classList.remove('visible');
        }
    };
    window.addEventListener('scroll', handleStickyBar);

    // Booking Form Submission
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = bookingForm.querySelector('button');
            const originalText = submitBtn.innerText;
            
            submitBtn.innerText = 'Versturen...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('Aanvraag succesvol verzonden. We nemen binnen 15 minuten contact met u op.');
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
                bookingForm.reset();
            }, 1000);
        });
    }
});
