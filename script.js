let isDarkMode = false;
let currentSection = 'home';

// Configuração do SDK
const defaultConfig = {
    nome_principal: "Paulo",
    qualidade_1: "Dinâmico",
    qualidade_2: "Alegre",
    qualidade_3: "Esforçado",
    descricao_pessoal: "Olá! Sou uma pessoa apaixonada pela vida...",
    texto_familia: "A família é o alicerce da minha vida...",
    texto_futuro: "Olho para o futuro com otimismo...",
    texto_amigos: "Os amigos são a família que escolhemos..."
};

async function onConfigChange(config) {
    document.getElementById('nome-principal').textContent = config.nome_principal || defaultConfig.nome_principal;
    document.getElementById('qualidade-1').textContent = config.qualidade_1 || defaultConfig.qualidade_1;
    document.getElementById('qualidade-2').textContent = config.qualidade_2 || defaultConfig.qualidade_2;
    document.getElementById('qualidade-3').textContent = config.qualidade_3 || defaultConfig.qualidade_3;
    document.getElementById('descricao-pessoal').textContent = config.descricao_pessoal || defaultConfig.descricao_pessoal;
    document.getElementById('texto-familia').textContent = config.texto_familia || defaultConfig.texto_familia;
    document.getElementById('texto-futuro').textContent = config.texto_futuro || defaultConfig.texto_futuro;
    document.getElementById('texto-amigos').textContent = config.texto_amigos || defaultConfig.texto_amigos;
}

function mapToCapabilities(config) {
    return {
        recolorables: [],
        borderables: [],
        fontEditable: undefined,
        fontSizeable: undefined
    };
}

function mapToEditPanelValues(config) {
    return new Map([
        ["nome_principal", config.nome_principal || defaultConfig.nome_principal],
        ["qualidade_1", config.qualidade_1 || defaultConfig.qualidade_1],
        ["qualidade_2", config.qualidade_2 || defaultConfig.qualidade_2],
        ["qualidade_3", config.qualidade_3 || defaultConfig.qualidade_3],
        ["descricao_pessoal", config.descricao_pessoal || defaultConfig.descricao_pessoal],
        ["texto_familia", config.texto_familia || defaultConfig.texto_familia],
        ["texto_futuro", config.texto_futuro || defaultConfig.texto_futuro],
        ["texto_amigos", config.texto_amigos || defaultConfig.texto_amigos]
    ]);
}

// Inicializar SDK
if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
    });
}

// Funções de interação
function toggleTheme() {
    isDarkMode = !isDarkMode;
    const body = document.body;
    const button = document.querySelector('.theme-toggle');
    
    if (isDarkMode) {
        body.classList.add('dark-mode');
        button.textContent = '☀️ Modo Claro';
    } else {
        body.classList.remove('dark-mode');
        button.textContent = '🌙 Modo Escuro';
    }
}

function showSection(section) {
    document.getElementById('home').style.display = 'none';
    document.querySelectorAll('.content-section').forEach(el => el.classList.remove('active'));
    document.getElementById(section + '-section').classList.add('active');
    currentSection = section;
}

function showHome() {
    document.querySelectorAll('.content-section').forEach(el => el.classList.remove('active'));
    document.getElementById('home').style.display = 'block';
    currentSection = 'home';
}

function openImageModal() { document.getElementById('imageModal').classList.add('active'); }
function closeImageModal() { document.getElementById('imageModal').classList.remove('active'); }

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeImageModal();
});
