function showPage(pageId) {
  const pages = ['home', 'familia', 'meu-futuro', 'amigos'];

  pages.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.style.display = (id === pageId) ? 'block' : 'none';
    }
  });

  // Garante que a seção principal continue centralizada
  if (pageId === 'home') {
    const hero = document.getElementById('home');
    hero.style.display = 'flex';
    hero.style.justifyContent = 'center';
    hero.style.alignItems = 'center';
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função de imagem expandida
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
