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


document.addEventListener('DOMContentLoaded', () => {
    // 1. Obter o botão e o corpo da página
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;
    
    // Função para aplicar o modo com base no estado salvo (se houver)
    function applySavedMode() {
        const savedMode = localStorage.getItem('siteMode');
        if (savedMode === 'dark') {
            body.classList.add('dark-mode');
            modeToggle.textContent = '☀️'; // Define o ícone como Sol
        } else {
            body.classList.remove('dark-mode');
            modeToggle.textContent = '🌙'; // Define o ícone como Lua
        }
    }

    // Aplica o modo salvo quando a página carrega
    applySavedMode();

    // 2. Função principal para alternar o modo
    function toggleMode() {
        // Alterna a classe 'dark-mode' no <body>
        body.classList.toggle('dark-mode'); 
        
        // 3. Atualiza o ícone e salva a preferência do usuário
        const isDarkMode = body.classList.contains('dark-mode');
        
        if (isDarkMode) {
            modeToggle.textContent = '☀️'; // Se está no modo escuro, mostra o Sol para mudar para Claro
            localStorage.setItem('siteMode', 'dark'); // Salva a preferência
        } else {
            modeToggle.textContent = '🌙'; // Se está no modo claro, mostra a Lua para mudar para Escuro
            localStorage.setItem('siteMode', 'light'); // Salva a preferência
        }
    }

    // Adiciona o evento de clique ao botão
    modeToggle.addEventListener('click', toggleMode);
});