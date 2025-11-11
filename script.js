// ... (Seu código defaultConfig e showPage function) ...

// Função de navegação
function showPage(pageId) {
    const pages = ['home', 'familia', 'meu-futuro', 'amigos'];
    pages.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            // Usa classes para controle de transição/animação
            if (id === pageId) {
                 element.classList.add('show');
                 element.style.display = 'block'; // Fallback
            } else {
                 element.classList.remove('show');
                 element.style.display = 'none'; // Fallback
            }
        }
    });
    // Remove o bloco de fechar menu mobile, pois o menu hamburguer foi removido

    // Rolar para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// --- 1. MODAL DA IMAGEM ---
const profileImage = document.getElementById('profileImage');
const modal = document.getElementById('imageModal');
const expandedImg = document.getElementById('expandedImg');
const closeModalBtn = document.getElementById('closeModal');

if (profileImage && modal) {
    profileImage.onclick = function() {
        modal.classList.add('show-modal');
        expandedImg.src = this.src;
        expandedImg.alt = this.alt;
        closeModalBtn.focus();
    };

    closeModalBtn.onclick = function() {
        modal.classList.remove('show-modal');
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.classList.remove('show-modal');
        }
    };
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('show-modal')) {
            modal.classList.remove('show-modal');
        }
    });
}


// --- 2. MODO CLARO/ESCURO COM ANIMAÇÃO ---
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const storageKey = 'themeMode';

function applyTheme(isLightMode) {
    if (isLightMode) {
        body.classList.add('light-mode');
        darkModeToggle.checked = true; 
    } else {
        body.classList.remove('light-mode');
        darkModeToggle.checked = false;
    }
}

// Inicia o tema ao carregar
document.addEventListener('DOMContentLoaded', () => {
    // Garante que a HOME esteja visível ao carregar
    showPage('home');

    const savedTheme = localStorage.getItem(storageKey);
    // Verifica se o tema salvo é 'light' ou se a preferência do sistema é 'light'
    const prefersLight = savedTheme === 'light' || (savedTheme === null && window.matchMedia('(prefers-color-scheme: light)').matches);
    
    applyTheme(prefersLight);
});

// Listener para o clique no switch
if (darkModeToggle) {
    darkModeToggle.addEventListener('change', (event) => {
        const isLightMode = event.target.checked;
        
        applyTheme(isLightMode);

        // Salva a preferência
        localStorage.setItem(storageKey, isLightMode ? 'light' : 'dark');
    });
}


// ... (O restante do seu código JS do SDK) ...