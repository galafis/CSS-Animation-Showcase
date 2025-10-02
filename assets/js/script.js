document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for scroll animations
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animateOnScrollElements.forEach(element => {
        observer.observe(element);
    });

    // Demo box animation triggers
    const demoBoxes = document.querySelectorAll('.demo-box');
    demoBoxes.forEach(box => {
        box.addEventListener('click', () => {
            // Remove all animation classes
            box.classList.forEach(className => {
                if (className.startsWith('animate-') && className.endsWith('-demo')) {
                    box.classList.remove(className);
                }
            });
            // Re-add the specific animation class after a short delay to re-trigger
            const animationClass = Array.from(box.classList).find(className => className.endsWith('-demo'));
            if (animationClass) {
                setTimeout(() => {
                    box.classList.add(animationClass);
                }, 10);
            }
        });
    });
});

