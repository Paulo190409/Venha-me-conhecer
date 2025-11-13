// Configuração padrão
const defaultConfig = {
  nome_principal: "Paulo",
  qualidades: "dinâmico, alegre, esforçado",
  apresentacao: "Olá! Sou uma pessoa dinâmica e alegre, sempre em busca de novos desafios.",
  futuro_texto: "Tenho grandes planos para o futuro! Quero continuar crescendo profissionalmente.",
  familia_texto: "Minha família é minha base e minha maior fonte de inspiração.",
  amigos_texto: "Meus amigos são pessoas especiais que escolhi para fazer parte da minha jornada."
};

// --- Funções de Navegação e Tema ---

// Alternar tema claro/escuro
function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');

  if (document.documentElement.classList.contains('dark')) {
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  } else {
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  }
}

// Alternar seções
function showSection(sectionName) {
  const sections = document.querySelectorAll('.section-content');
  sections.forEach(section => section.classList.remove('active'));
  document.getElementById(sectionName).classList.add('active');
}

// --- Funções de Zoom da Imagem ---

// Abrir o modal de zoom
function showZoomImage(imageSrc) {
  const modal = document.getElementById('image-modal');
  const zoomedImage = document.getElementById('zoomed-image');

  zoomedImage.src = imageSrc;
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Desativa o scroll do body
}

// Fechar o modal de zoom
function closeZoomImage() {
  const modal = document.getElementById('image-modal');
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Reativa o scroll do body
}

// Fechar o modal se clicar fora da imagem
document.getElementById('image-modal').addEventListener('click', function(event) {
    // Verifica se o clique foi no fundo do modal, mas não na imagem
    if (event.target === this) {
        closeZoomImage();
    }
});


// --- Funções de Atualização de Conteúdo (SDK) ---

// Atualizar conteúdo dinamicamente
async function onConfigChange(config) {
  document.getElementById('nome-principal').textContent =
    config.nome_principal || defaultConfig.nome_principal;

  const qualidadesElement = document.getElementById('qualidades');
  if (config.qualidades) {
    const qualidadesArray = config.qualidades.split(',').map(q => q.trim());
    qualidadesElement.innerHTML = qualidadesArray.map(q => `<span>${q}</span>`).join(' <span>•</span> ');
  } else {
    const defaultQualidadesArray = defaultConfig.qualidades.split(',').map(q => q.trim());
    qualidadesElement.innerHTML = defaultQualidadesArray.map(q => `<span>${q}</span>`).join(' <span>•</span> ');
  }

  document.getElementById('apresentacao').textContent =
    config.apresentacao || defaultConfig.apresentacao;

  document.getElementById('futuro-texto').textContent =
    config.futuro_texto || defaultConfig.futuro_texto;

  document.getElementById('familia-texto').textContent =
    config.familia_texto || defaultConfig.familia_texto;

  document.getElementById('amigos-texto').textContent =
    config.amigos_texto || defaultConfig.amigos_texto;
}

// Inicialização do SDK
if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig: defaultConfig,
    onConfigChange: onConfigChange,
    mapToCapabilities: (config) => ({
      recolorables: [],
      borderables: [],
      fontEditable: undefined,
      fontSizeable: undefined
    }),
    mapToEditPanelValues: (config) => new Map([
      ["nome_principal", config.nome_principal || defaultConfig.nome_principal],
      ["qualidades", config.qualidades || defaultConfig.qualidades],
      ["apresentacao", config.apresentacao || defaultConfig.apresentacao],
      ["futuro_texto", config.futuro_texto || defaultConfig.futuro_texto],
      ["familia_texto", config.familia_texto || defaultConfig.familia_texto],
      ["amigos_texto", config.amigos_texto || defaultConfig.amigos_texto]
    ])
  });
}