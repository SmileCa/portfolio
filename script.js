// Simplified smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.getElementById(anchor.getAttribute('href').substring(1))?.scrollIntoView({ behavior: 'smooth' });
    });
});

// Unified DOMContentLoaded and load events
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu ul');
    document.addEventListener('click', e => {
        if (!menu.contains(e.target)) menu.classList.remove('open');
    });

    const loadingScreen = document.getElementById('loadingScreen');
    window.addEventListener('load', () => {
        loadingScreen?.classList.add('hidden');
        setTimeout(() => loadingScreen?.remove(), 1000);
    });

    // Lazy loading sections
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.classList.add('hidden'); // Initially hide sections
        observer.observe(section);
    });
});
