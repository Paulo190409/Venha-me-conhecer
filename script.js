let isDarkMode = false;
let currentSection = 'home';

const defaultConfig = {
  nome_principal: "Paulo",
  qualidade_1: "Dinâmico",
  qualidade_2: "Alegre", 
  qualidade_3: "Esforçado",
  descricao_pessoal: "Olá! Sou uma pessoa apaixonada pela vida, sempre em busca de novos desafios e experiências. Acredito que cada dia é uma oportunidade de crescer, aprender e fazer a diferença na vida das pessoas ao meu redor. Minha jornada é marcada pela determinação, alegria e um constante desejo de evolução pessoal e profissional.",
  texto_familia: "A família é o alicerce da minha vida. É onde encontro amor incondicional, apoio e os valores que me guiam. Cada momento compartilhado com meus familiares é precioso, desde as conversas calorosas até as celebrações especiais. Eles são minha fonte de inspiração e força para enfrentar qualquer desafio que a vida apresente.",
  texto_futuro: "Olho para o futuro com otimismo e determinação. Tenho grandes planos e sonhos que pretendo realizar, sempre focado no crescimento pessoal e profissional. Acredito que com dedicação, esforço e uma mentalidade positiva, posso alcançar qualquer objetivo que me proponha. O futuro é cheio de possibilidades e estou pronto para abraçá-las.",
  texto_amigos: "Os amigos são a família que escolhemos. Tenho a sorte de ter pessoas incríveis ao meu lado, que compartilham momentos de alegria, me apoiam nos momentos difíceis e tornam a vida mais colorida e divertida. Cada amizade é única e especial, construída com base na confiança, respeito e carinho mútuo."
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

// Inicializar SDK
if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities: () => ({recolorables:[],borderables:[],fontEditable:undefined,fontSizeable:undefined}),
    mapToEditPanelValues: (config) => new Map(Object.entries(config))
  });
}

function toggleTheme() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode', isDarkMode);
  document.querySelector('.theme-toggle').textContent = isDarkMode ? '☀️ Modo Claro' : '🌙 Modo Escuro';
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

function openImageModal() {
  document.getElementById('imageModal').classList.add('active');
}

function closeImageModal() {
  document.getElementById('imageModal').classList.remove('active');
}

document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeImageModal(); });
