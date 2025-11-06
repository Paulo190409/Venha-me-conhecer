// Alternar entre páginas
function showPage(pageId) {
  const pages = ['home', 'familia', 'meu-futuro', 'amigos'];
  pages.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = id === pageId ? 'flex' : 'none';
  });

  // Garantir que a seção Hero fique centralizada
  const hero = document.getElementById('home');
  if (pageId === 'home') {
    hero.style.display = 'flex';
    hero.style.justifyContent = 'center';
    hero.style.alignItems = 'center';
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- ✅ Função da imagem expandida ---
const profileImage = document.getElementById('profileImage');
const modal = document.getElementById('imageModal');
const expandedImg = document.getElementById('expandedImg');
const closeModal = document.getElementById('closeModal');

if (profileImage) {
  profileImage.addEventListener('click', () => {
    modal.style.display = "flex";
    expandedImg.src = profileImage.src;
  });
}

if (closeModal) {
  closeModal.addEventListener('click', () => {
    modal.style.display = "none";
  });
}

if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
}

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") modal.style.display = "none";
});
