// ========================
// MODERN EVENT LISTENERS
// ========================
document.addEventListener('DOMContentLoaded', function() {
    initializeCarousel();
    initializeNavigation();
    initializeScrollEffects();
    initializeScrollToTop();
    initializeAOS();
});

// ========================
// IMAGE CAROUSEL FUNCTIONALITY
// ========================
function initializeCarousel() {
    const carousel = document.querySelector('.image-carousel');
    if (!carousel) return;

    const items = carousel.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentIndex = 0;
    let autoplayInterval;

    function showSlide(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        updateButtonStates();
    }

    function updateButtonStates() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === items.length - 1;
    }

    // Navigation buttons
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            showSlide(currentIndex);
            resetAutoplay();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < items.length - 1) {
            currentIndex++;
            showSlide(currentIndex);
            resetAutoplay();
        }
    });

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
            resetAutoplay();
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            currentIndex--;
            showSlide(currentIndex);
            resetAutoplay();
        } else if (e.key === 'ArrowRight' && currentIndex < items.length - 1) {
            currentIndex++;
            showSlide(currentIndex);
            resetAutoplay();
        }
    });

    // Auto-rotate carousel
    function startAutoplay() {
        autoplayInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % items.length;
            showSlide(currentIndex);
        }, 5000);
    }

    function resetAutoplay() {
        clearInterval(autoplayInterval);
        startAutoplay();
    }

    // Pause on hover
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });

    carousel.addEventListener('mouseleave', () => {
        startAutoplay();
    });

    // Touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchStartX - touchEndX > 50 && currentIndex < items.length - 1) {
            currentIndex++;
            showSlide(currentIndex);
            resetAutoplay();
        }
        if (touchEndX - touchStartX > 50 && currentIndex > 0) {
            currentIndex--;
            showSlide(currentIndex);
            resetAutoplay();
        }
    }

    // Initialize
    showSlide(0);
    startAutoplay();
}

// ========================
// NAVIGATION FUNCTIONALITY
// ========================
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id') || 'home';
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href').slice(1);
            if (href === current || (current === '' && link.getAttribute('href') === '#')) {
                link.classList.add('active');
            }
        });
    });

    // Close menu on mobile when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// ========================
// SCROLL EFFECTS & AOS
// ========================
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    const elements = document.querySelectorAll(
        '.service-card, .gallery-item, .package-card, .testimonial-card, .why-us-card, .process-item'
    );
    
    elements.forEach(el => {
        observer.observe(el);
    });
}

function initializeAOS() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                const offset = 80; // navbar height
                const top = target.offsetTop - offset;
                
                window.scrollTo({
                    top: top,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================
// SCROLL TO TOP BUTTON
// ========================
function initializeScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTopBtn');
    if (!scrollBtn) return;

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================
// UTILITY FUNCTIONS
// ========================

// Format currency
function formatCurrency(value) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(value);
}

// Validate email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Validate phone
function validatePhone(phone) {
    const re = /^(\+62|0)[0-9]{9,12}$/;
    return re.test(phone);
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ========================
// COUNTER ANIMATION
// ========================
function animateCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(counter => {
        const target = parseInt(counter.textContent);
        const current = counter.textContent;
        
        if (!isNaN(target)) {
            let count = 0;
            const increment = target / 50;
            
            const timer = setInterval(() => {
                count += increment;
                if (count >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(count);
                }
            }, 30);
        }
    });
}

// Trigger counters on scroll
window.addEventListener('scroll', () => {
    const statsBar = document.querySelector('.stats-bar');
    if (statsBar && !statsBar.classList.contains('animated')) {
        const rect = statsBar.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            animateCounters();
            statsBar.classList.add('animated');
        }
    }
}, { once: true });

// ========================
// GALLERY LIGHTBOX
// ========================
function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            console.log('Gallery item clicked:', index);
            // Could open full-size image in modal
        });
    });
}

// ========================
// PARALLAX EFFECT (Optional)
// ========================
function initParallax() {
    const parallaxElements = document.querySelectorAll('.floating-shape');
    
    window.addEventListener('scroll', throttle(() => {
        parallaxElements.forEach((element, index) => {
            const scrollPos = window.pageYOffset;
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrollPos * speed}px)`;
        });
    }, 16));
}

// Initialize parallax
initParallax();

// ========================
// FORM HELPERS (if needed)
// ========================

// Track clicks on CTA buttons
document.querySelectorAll('.btn-primary, .cta-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        console.log('CTA clicked:', this.textContent.trim());
        // Could send analytics event here
    });
});

// ========================
// PERFORMANCE MONITORING
// ========================

// Log when page is fully loaded
window.addEventListener('load', () => {
    console.log('Page fully loaded and ready!');
    console.log('Aure Design Website initialized successfully');
});

// ========================
// SERVICE WORKER (Optional)
// ========================

// Register service worker for offline support (optional)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {
        console.log('Service Worker registration not available');
    });
}

// ========================
// DARK MODE TOGGLE (Optional)
// ========================

// Check for saved theme preference or default to light
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

// Function to toggle dark mode (can be called from a button)
function toggleDarkMode() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// ========================
// ERROR HANDLING
// ========================

window.addEventListener('error', (event) => {
    console.error('Error occurred:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});

// ========================
// CUSTOM EVENTS
// ========================

// Dispatch custom events for tracking
const AureEvent = {
    trackClick: function(element, action) {
        const event = new CustomEvent('aure-click', {
            detail: { element, action, timestamp: new Date() }
        });
        window.dispatchEvent(event);
    }
};

// Listen for custom events
window.addEventListener('aure-click', (e) => {
    console.log('Aure Event:', e.detail);
});

// ========================
// INITIALIZATION COMPLETE
// ========================

console.log('%c=== Aure\' Design Website ===', 'color: #d4a574; font-size: 16px; font-weight: bold;');
console.log('%cVersion: 2.0 - Modern & Responsive', 'color: #d4a574; font-size: 12px;');
console.log('%cAll systems initialized successfully! ✓', 'color: #2ecc71; font-size: 12px;');
