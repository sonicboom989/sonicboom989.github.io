
(function(){
  const saved = localStorage.getItem('theme-dark');
  const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = saved ? saved === 'true' : prefers;
  document.documentElement.classList.toggle('dark', isDark);
  function setDark(v){ document.documentElement.classList.toggle('dark', v); localStorage.setItem('theme-dark', v); }
  window.toggleTheme = function(){ setDark(!document.documentElement.classList.contains('dark')); }
  document.addEventListener('DOMContentLoaded', ()=>{ document.getElementById('year').textContent = new Date().getFullYear(); });
})();
