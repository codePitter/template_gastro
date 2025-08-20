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

function matchHeight() {
  const prevDiv = document.querySelector('.prev-div');
  const targetImg = document.querySelector('.target-img');
  if (prevDiv && targetImg) {
    targetImg.style.height = prevDiv.offsetHeight + 'px';
  }
}
window.addEventListener('load', matchHeight);
window.addEventListener('resize', matchHeight);