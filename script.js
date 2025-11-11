const defaultConfig = {
    background_color: '#0f172a',
    surface_color: '#1e293b',
    text_color: '#f1f5f9',
    primary_action_color: '#60a5fa',
    secondary_action_color: '#3b82f6',
    font_family: 'Inter',
    font_size: 16,
    nome_do_herói: 'PAULO',
    hero_identity: 'DINÂMICO. ALEGRE. ESFORÇADO.',
    hero_description: 'Venha-me conhecer. São Paulo, alguém que valoriza ideias,conexões e benefícios.',
    familia_title: 'FAMÍLIA',
    familia_subtitle_1: 'Minha Base',
    familia_text_1: 'A família é o alicerce da minha vida. Aqui compartilho sobre as pessoas que me formaram e continuam sendo minha fonte de força e inspiração.',
    futuro_title: 'MEU FUTURO',
    futuro_subtitle_1: 'Sonhos e Aspirações',
    futuro_text_1: 'Aqui compartilho meus sonhos, planos e aspirações. Os caminhos que pretendem trilhar e as metas que me motivam a crescer cada dia mais.',
    amigos_title: 'AMIGOS',
    amigos_subtitle_1: 'Conexões Especiais',
    amigos_text_1: 'As pessoas especiais que fazem parte da minha vida. Conexões verdadeiras que me inspiram, apoiam e tornam uma jornada mais significativa.'
};

// Função de navegação
function showPage(pageId) {
    const pages = ['home', 'familia', 'meu-futuro', 'amigos'];
    pages.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            // A classe 'active' ou 'show' deve ser usada para animação no CSS, 
            // mas 'display' é usada aqui para controle básico de visualização
            element.style.display = id === pageId ? 'block' : 'none'; 
        }
    });

    // Fechar menu mobile
    const nav = document.getElementById('nav');
    if (nav) {
        nav.classList.remove('active');
    }

    // Rolar para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Alternar menu mobile
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Implementação do SDK do Element
async function onConfigChange(config) {
    const customFont = config.font_family || defaultConfig.font_family;
    const baseSize = config.font_size || defaultConfig.font_size;
    const baseFontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

    // Aplicar cores
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.background = `linear-gradient(135deg, ${config.surface_color || defaultConfig.surface_color} 0%, ${config.background_color || defaultConfig.background_color} 50%, #1e3a8a 100%)`;
    }
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.background = `linear-gradient(135deg, ${config.background_color || defaultConfig.background_color} 0%, ${config.surface_color || defaultConfig.surface_color} 100%)`;
    });
    
    const heroName = document.getElementById('heroName');
    if (heroName) { 
        // A lógica do heroName foi corrigida e movida para dentro do seu escopo correto
        heroName.textContent = config.nome_do_herói || defaultConfig.nome_do_herói;
        heroName.style.fontFamily = `${customFont}, ${baseFontStack}`;
        heroName.style.fontSize = `${baseSize * 3.125}px`; // Exemplo de escala para 5rem (5 * 16px = 80px)

        const heroIdentity = document.getElementById('heroIdentity');
        if (heroIdentity) {
            heroIdentity.style.color = config.primary_action_color || defaultConfig.primary_action_color;
            heroIdentity.style.fontFamily = `${customFont}, ${baseFontStack}`;
            heroIdentity.style.fontSize = `${baseSize * 1.25}px`;
            heroIdentity.textContent = config.hero_identity || defaultConfig.hero_identity;
        }

        const heroDescription = document.getElementById('heroDescription');
        if (heroDescription) {
            heroDescription.style.color = '#cbd5e1';
            heroDescription.style.fontFamily = `${customFont}, ${baseFontStack}`;
            heroDescription.style.fontSize = `${baseSize * 1.1}px`;
            heroDescription.textContent = config.hero_description || defaultConfig.hero_description;
        }
    }


    // Aplicar a todos os títulos de página
    const pageTitles = document.querySelectorAll('.page-content h1');
    pageTitles.forEach(title => {
        title.style.color = config.text_color || defaultConfig.text_color;
        title.style.fontFamily = `${customFont}, ${baseFontStack}`;
        title.style.fontSize = `${baseSize * 2.1875}px`;
    });

    // Aplicar a todos os subtítulos
    const subtitles = document.querySelectorAll('.content-area h3');
    subtitles.forEach(subtitle => {
        subtitle.style.color = config.primary_action_color || defaultConfig.primary_action_color;
        subtitle.style.fontFamily = `${customFont}, ${baseFontStack}`;
        subtitle.style.fontSize = `${baseSize * 1.75}px`;
    });

    // Aplicar a todos os parágrafos
    const paragraphs = document.querySelectorAll('.content-area p');
    paragraphs.forEach(p => {
        p.style.fontFamily = `${customFont}, ${baseFontStack}`;
        p.style.fontSize = `${baseSize * 1.1}px`;
    });

    // Aplicar aos botões
    const buttons = document.querySelectorAll('.back-btn');
    buttons.forEach(btn => {
        btn.style.color = config.primary_action_color || defaultConfig.primary_action_color;
        btn.style.fontFamily = `${customFont}, ${baseFontStack}`;
        btn.style.fontSize = `${baseSize * 0.95}px`;
    });

    // Aplicar aos links de navegação
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.style.fontFamily = `${customFont}, ${baseFontStack}`;
        link.style.fontSize = `${baseSize * 0.95}px`;
    });

    // Atualizar conteúdo de texto
    const familiaTitle = document.getElementById('familiaTitle');
    if (familiaTitle) familiaTitle.textContent = config.familia_title || defaultConfig.familia_title;
    
    const familiaSubtitle1 = document.getElementById('familiaSubtitle1');
    if (familiaSubtitle1) familiaSubtitle1.textContent = config.familia_subtitle_1 || defaultConfig.familia_subtitle_1;
    
    const familiaText1 = document.getElementById('familiaText1');
    if (familiaText1) familiaText1.textContent = config.familia_text_1 || defaultConfig.familia_text_1;
    
    const futuroTitle = document.getElementById('futuroTitle');
    if (futuroTitle) futuroTitle.textContent = config.futuro_title || defaultConfig.futuro_title;
    
    const futuroSubtitle1 = document.getElementById('futuroSubtitle1');
    if (futuroSubtitle1) futuroSubtitle1.textContent = config.futuro_subtitle_1 || defaultConfig.futuro_subtitle_1;
    
    const futuroText1 = document.getElementById('futuroText1');
    if (futuroText1) futuroText1.textContent = config.futuro_text_1 || defaultConfig.futuro_text_1;
    
    const amigosTitle = document.getElementById('amigosTitle');
    if (amigosTitle) amigosTitle.textContent = config.amigos_title || defaultConfig.amigos_title;
    
    const amigosSubtitle1 = document.getElementById('amigosSubtitle1');
    if (amigosSubtitle1) amigosSubtitle1.textContent = config.amigos_subtitle_1 || defaultConfig.amigos_subtitle_1;
    
    const amigosText1 = document.getElementById('amigosText1');
    if (amigosText1) amigosText1.textContent = config.amigos_text_1 || defaultConfig.amigos_text_1;
}

function mapToCapabilities(config) {
    return {
        recolorables: [
            {
                get: () => config.background_color || defaultConfig.background_color,
                set: (value) => {
                    if (window.elementSdk) {
                        window.elementSdk.config.background_color = value;
                        window.elementSdk.setConfig({ background_color: value });
                    }
                }
            },
            {
                get: () => config.surface_color || defaultConfig.surface_color,
                set: (value) => {
                    if (window.elementSdk) {
                        window.elementSdk.config.surface_color = value;
                        window.elementSdk.setConfig({ surface_color: value });
                    }
                }
            },
            {
                get: () => config.text_color || defaultConfig.text_color,
                set: (value) => {
                    if (window.elementSdk) {
                        window.elementSdk.config.text_color = value;
                        window.elementSdk.setConfig({ text_color: value });
                    }
                }
            },
            {
                get: () => config.primary_action_color || defaultConfig.primary_action_color,
                set: (value) => {
                    if (window.elementSdk) {
                        window.elementSdk.config.primary_action_color = value;
                        window.elementSdk.setConfig({ primary_action_color: value });
                    }
                }
            }
        ],
        borderables: [],
        fontEditable: {
            get: () => config.font_family || defaultConfig.font_family,
            set: (value) => {
                if (window.elementSdk) {
                    window.elementSdk.config.font_family = value;
                    window.elementSdk.setConfig({ font_family: value });
                }
            }
        },
        fontSizeable: {
            get: () => config.font_size || defaultConfig.font_size,
            set: (value) => {
                if (window.elementSdk) {
                    window.elementSdk.config.font_size = value;
                    window.elementSdk.setConfig({ font_size: value });
                }
            }
        }
    };
}

function mapToEditPanelValues(config) {
    return new Map([
        ['hero_name', config.hero_name || defaultConfig.hero_name],
        ['hero_identity', config.hero_identity || defaultConfig.hero_identity],
        ['hero_description', config.hero_description || defaultConfig.hero_description],
        ['familia_title', config.familia_title || defaultConfig.familia_title],
        ['familia_subtitle_1', config.familia_subtitle_1 || defaultConfig.familia_subtitle_1],
        ['familia_text_1', config.familia_text_1 || defaultConfig.familia_text_1],
        ['futuro_title', config.futuro_title || defaultConfig.futuro_title],
        ['futuro_subtitle_1', config.futuro_subtitle_1 || defaultConfig.futuro_subtitle_1],
        ['futuro_text_1', config.futuro_text_1 || defaultConfig.futuro_text_1],
        ['amigos_title', config.amigos_title || defaultConfig.amigos_title],
        ['amigos_subtitle_1', config.amigos_subtitle_1 || defaultConfig.amigos_subtitle_1],
        ['amigos_text_1', config.amigos_text_1 || defaultConfig.amigos_text_1]
    ]);
}

// Inicializa o SDK do Elemento
if (window.elementSdk) {
    window.elementSdk.init({ defaultConfig, onConfigChange, mapToCapabilities, mapToEditPanelValues });
}