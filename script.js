function showPage(pageId) {
  const pages = ['home', 'familia', 'meu-futuro', 'amigos'];
  
  pages.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    if (id === pageId) {
      el.classList.add('show');
      if (id === 'home') {
        el.classList.add('active');
        el.style.display = 'flex';
      } else {
        el.style.display = 'block';
      }
    } else {
      el.classList.remove('show', 'active');
      el.style.display = 'none';
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Imagem ampliada
const profileImage = document.getElementById('profileImage');
const modal = document.getElementById('imageModal');
const expandedImg = document.getElementById('expandedImg');
const closeModal = document.getElementById('closeModal');

profileImage.addEventListener('click', () => {
  modal.style.display = "flex";
  expandedImg.src = profileImage.src;
});

closeModal.addEventListener('click', () => modal.style.display = "none");
modal.addEventListener('click', e => { if (e.target === modal) modal.style.display = "none"; });
window.addEventListener('keydown', e => { if (e.key === "Escape") modal.style.display = "none"; });
