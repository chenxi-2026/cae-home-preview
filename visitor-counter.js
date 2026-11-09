(() => {
  const target = document.querySelector('#visitor-stats');
  if (!target) return;

  const namespace = 'cae-home-preview';
  const date = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric', month: '2-digit', day: '2-digit'
  }).format(new Date());
  const endpoint = key => `https://api.counterapi.dev/v1/${namespace}/${encodeURIComponent(key)}/up`;
  const request = async key => {
    const response = await fetch(endpoint(key), { cache: 'no-store' });
    if (!response.ok) throw new Error(`counter ${response.status}`);
    const data = await response.json();
    if (!Number.isFinite(Number(data.count))) throw new Error('invalid counter response');
    return Number(data.count);
  };

  Promise.all([request(`daily-${date}`), request('total')])
    .then(([daily, total]) => {
      target.textContent = `今日第 ${daily.toLocaleString('zh-CN')} 位访问 · 累计访问 ${total.toLocaleString('zh-CN')} 人`;
    })
    .catch(() => {
      target.textContent = '访问统计暂不可用';
    });
})();
