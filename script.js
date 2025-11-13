// Função para ampliar a foto
function ampliarFoto(img) {
  const modal = document.getElementById('modal-foto');
  const fotoAmpliada = document.getElementById('foto-ampliada');
  fotoAmpliada.src = img.src;
  modal.classList.remove('hidden');
  setTimeout(() => modal.classList.add('show'), 10); // animação suave

  // Fechar modal ao clicar fora da imagem
  modal.addEventListener('click', function fechar(e) {
    if (e.target === modal) {
      modal.classList.remove('show');
      setTimeout(() => modal.classList.add('hidden'), 200);
      modal.removeEventListener('click', fechar);
    }
  });
}
