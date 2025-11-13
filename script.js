// Abre o modal da foto
function abrirFoto() {
  const modal = document.getElementById('modal-foto');
  modal.classList.remove('hidden');

  // adiciona uma animação suave de zoom na imagem
  const img = document.getElementById('foto-ampliada');
  img.style.transform = 'scale(1)';
}

// Fecha o modal da foto
function fecharFoto() {
  const modal = document.getElementById('modal-foto');
  modal.classList.add('hidden');
}

// Fecha clicando fora da imagem
document.getElementById('modal-foto').addEventListener('click', (e) => {
  if (e.target.id === 'modal-foto') fecharFoto();
});
