// Alterna tema
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const btn = document.querySelector('.theme-toggle');
  btn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Modo Claro' : '🌙 Modo Escuro';
}

// Mostrar seção
function showSection(id) {
  document.getElementById('home').classList.add('hidden');
  ['familia', 'futuro', 'amigos'].forEach(section => {
    document.getElementById(section).classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
}

function showHome() {
  document.getElementById('home').classList.remove('hidden');
  ['familia', 'futuro', 'amigos'].forEach(section => {
    document.getElementById(section).classList.add('hidden');
  });
}

// Modal de imagem
function openModal(src) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  modalImg.src = src;
  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('imageModal').style.display = 'none';
}
