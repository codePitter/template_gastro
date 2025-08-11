// Año dinámico en el footer
document.getElementById('y').textContent = new Date().getFullYear();

// Animación simple on-scroll
const onScroll = () => {
    document.querySelectorAll('.reveal').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) el.classList.add('show');
    });
};
document.addEventListener('scroll', onScroll); onScroll();