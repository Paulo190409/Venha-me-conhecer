// Configuração padrão
const defaultConfig = {
  background_color: '#0f172a',
  surface_color: '#1e293b',
  text_color: '#f1f5f9',
  primary_action_color: '#60a5fa',
  secondary_action_color: '#3b82f6',
  font_family: 'Inter',
  font_size: 16,
  hero_name: 'PAULO',
  hero_identity: 'DINÂMICO. ALEGRE. ESFORÇADO.',
  hero_description: 'Venha me conhecer. Sou Paulo, alguém que valoriza ideias, conexões e benefícios.',
  familia_title: 'FAMÍLIA',
  familia_subtitle_1: 'Minha Base',
  familia_text_1: 'A família é o alicerce da minha vida.',
  futuro_title: 'MEU FUTURO',
  futuro_subtitle_1: 'Sonhos e Aspirações',
  futuro_text_1: 'Aqui compartilho meus sonhos e metas.',
  amigos_title: 'AMIGOS',
  amigos_subtitle_1: 'Conexões Especiais',
  amigos_text_1: 'As pessoas especiais que fazem parte da minha vida.'
};

// Função de navegação
function showPage(pageId) {
  const pages = ['home', 'familia', 'meu-futuro', 'amigos'];
  pages.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = id === pageId ? 'block' : 'none';
  });
  document.getElementById('nav').classList.remove('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Alternar menu mobile
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('nav').classList.toggle('active');
});

// (SDK) — inicialização simulada
if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange: (config) => console.log('Config alterada:', config)
  });
}

