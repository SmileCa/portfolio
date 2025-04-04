// Toggle popup visibility
function togglePopup(popupId, show = true) {
    const popup = document.getElementById(popupId);
    const overlay = document.getElementById('overlay');
    if (!popup || !overlay) return;

    popup.classList.toggle('show', show);
    overlay.style.display = show ? 'block' : 'none';
    overlay.style.opacity = show ? '1' : '0';
    document.body.classList.toggle('popup-open', show);
}

function togglePopup(popupId) {
    const popup = document.getElementById(popupId);
    const overlay = document.getElementById('overlay');
    if (!popup || !overlay) return;

    const isVisible = popup.classList.contains('show');
    popup.classList.toggle('show', !isVisible);
    overlay.style.display = isVisible ? 'none' : 'block';
    overlay.style.opacity = isVisible ? '0' : '1';
    document.body.classList.toggle('popup-open', !isVisible);
}

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
});
