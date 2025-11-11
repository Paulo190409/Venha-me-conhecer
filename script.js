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


