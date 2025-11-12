// Alterna entre seções
function showSection(sectionId) {
  document.getElementById('home').classList.add('hidden');
  const sections = ['familia-section', 'futuro-section', 'amigos-section'];
  sections.forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });
  document.getElementById(sectionId).classList.remove('hidden');
}

function showHome() {
  document.getElementById('home').classList.remove('hidden');
  const sections = ['familia-section', 'futuro-section', 'amigos-section'];
  sections.forEach(id => document.getElementById(id).classList.add('hidden'));
}

// Modo escuro / claro
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  const btn = document.querySelector('.theme-toggle');
  if (body.classList.contains('dark-mode')) {
    btn.textContent = "☀️ Modo Claro";
  } else {
    btn.textContent = "🌙 Modo Escuro";
  }
}

// Modal de imagem
function openImageModal(src) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  modalImg.src = src;
  modal.classList.add('active');
}

function closeImageModal() {
  document.getElementById('imageModal').classList.remove('active');
}
