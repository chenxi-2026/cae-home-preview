(() => {
  const target = document.querySelector('#visitor-stats');
  if (!target) return;

  const namespace = 'chenxi-2026';
  const date = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric', month: '2-digit', day: '2-digit'
  }).format(new Date());
  const badge = key => `https://hits.dwyl.com/${namespace}/${encodeURIComponent(key)}.svg?style=flat`;
  const daily = badge(`cae-home-preview-${date}`);
  const total = badge('cae-home-preview-total');
  target.innerHTML = `今日第 <img class="visitor-badge" src="${daily}" alt="今日访问序号"> 位访问 · 累计访问 <img class="visitor-badge" src="${total}" alt="累计访问人数"> 人`;
  target.querySelectorAll('img').forEach(image => {
    image.addEventListener('error', () => image.replaceWith(document.createTextNode('—')), { once: true });
  });
})();
