// Botão modo escuro/claro
const modoBtn = document.getElementById('modo-btn');
const body = document.body;

modoBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    modoBtn.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Ampliar foto ao clicar
const foto = document.getElementById('foto');
foto.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = 0;
    modal.style.left = 0;
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.background = 'rgba(0,0,0,0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.cursor = 'zoom-out';

    const imgAmpliada = document.createElement('img');
    imgAmpliada.src = foto.src;
    imgAmpliada.style.maxWidth = '80%';
    imgAmpliada.style.borderRadius = '10px';
    imgAmpliada.style.boxShadow = '0 0 20px rgba(255,255,255,0.3)';
    modal.appendChild(imgAmpliada);

    document.body.appendChild(modal);

    modal.addEventListener('click', () => modal.remove());
});

// Botão voltar para o topo
const homeBtn = document.getElementById('home-btn');
homeBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
