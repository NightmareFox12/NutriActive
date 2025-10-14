const html = document.documentElement;

const syncDarkClass = () => {
  const theme = html.getAttribute('data-theme');
  html.classList.toggle('dark', theme === 'dark');
};

syncDarkClass();

new MutationObserver(syncDarkClass).observe(html, {
  attributes: true,
  attributeFilter: ['data-theme'],
});
