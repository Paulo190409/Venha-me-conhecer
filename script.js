const defaultConfig = {
  background_color: '#0f172a',
  surface_color: '#1e293b',
  text_color: '#f1f5f9',
  primary_action_color: '#60a5fa',
  font_family: 'Inter',
  font_size: 16
};

// Navegação
function showPage(pageId) {
  const pages = ['home', 'familia', 'meu-futuro', 'amigos'];
  pages.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = id === pageId ? 'block' : 'none';
  });
  document.getElementById('nav').classList.remove('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Menu mobile
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('nav').classList.toggle('active');
});
