// Alternar páginas
function showPage(pageId) {
  const pages = ['home', 'familia', 'meu-futuro', 'amigos'];
  pages.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = id === pageId ? 'block' : 'none';
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- ✅ Função da imagem expandida ---
const profileImage = document.getElementById('profileImage');
const modal = document.getElementById('imageModal');
const expandedImg = document.getElementById('expandedImg');
const closeModal = document.getElementById('closeModal');

// Ao clicar na imagem: abrir modal
profileImage.addEventListener('click', () => {
  modal.style.display = "block";
  expandedImg.src = profileImage.src;
});

// Fechar modal ao clicar no X
closeModal.addEventListener('click', () => {
  modal.style.display = "none";
});

// Fechar modal ao clicar fora da imagem
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Fechar modal com tecla Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});
