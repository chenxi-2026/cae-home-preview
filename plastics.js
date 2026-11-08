// Material names and aliases are searchable; handbook content is rendered as text.
function mountPlasticsHandbook() {
  const host = document.createElement('section');
  host.className = 'card plastic-handbook';
  host.setAttribute('aria-labelledby', 'plastic-heading');
  host.innerHTML = `<div class="plastic-heading"><div><div class="eyebrow">MATERIAL REFERENCE / 材料速查</div><h2 id="plastic-heading">03 / 常用塑料手册</h2></div><span class="plastic-count">20 种材料</span></div>
    <p>输入材料名称，即时查看应用范围、注塑工艺与材料特性。</p>
    <label for="plastic-query">材料名称 / 英文缩写</label>
    <div class="plastic-search"><input id="plastic-query" type="search" placeholder="例如：ABS、聚碳酸酯、尼龙、HDPE" autocomplete="off" aria-describedby="plastic-status"><button type="button" id="plastic-clear">清空</button></div>
    <p id="plastic-status" role="status"></p><div id="plastic-choices" class="plastic-choices" aria-label="选择材料"></div>
    <div id="plastic-detail"></div>
    <p class="plastic-source">资料来源：《常用塑料手册（20种）》。内容按原文收录，工艺参数供参考，实际加工请以具体牌号的供应商资料为准。</p>`;
  document.querySelector('.tools-grid').after(host);
  const query = host.querySelector('#plastic-query');
  const choices = host.querySelector('#plastic-choices');
  const detail = host.querySelector('#plastic-detail');
  const status = host.querySelector('#plastic-status');
  const normalize = value => value.normalize('NFKC').toLowerCase().replace(/[\s/\-（）()]/g, '');
  let selected = 'ABS';
  function show(material) {
    selected = material.code;
    choices.querySelectorAll('button').forEach(button => {
      button.classList.toggle('active', button.dataset.code === selected);
      button.setAttribute('aria-pressed', String(button.dataset.code === selected));
    });
    detail.replaceChildren();
    const heading = document.createElement('h3');
    heading.textContent = `${material.code} · ${material.name}`;
    detail.append(heading);
    if (['PEI', 'PPE', 'SA'].includes(material.code)) {
      const note = document.createElement('p');
      note.className = 'plastic-source';
      note.textContent = '名称按手册原文保留；查询别名：' + material.aliases.join('、') + '。';
      detail.append(note);
    }
    for (const [key, title] of [['application','典型应用范围'], ['process','注塑模工艺条件'], ['properties','化学和物理特性']]) {
      const section = document.createElement('section');
      section.className = 'plastic-section';
      const h = document.createElement('h4'); h.textContent = title; section.append(h);
      for (const line of material[key].split('\n').filter(Boolean)) {
        const p = document.createElement('p'); p.textContent = line; section.append(p);
      }
      detail.append(section);
    }
  }
  function search() {
    const value = normalize(query.value);
    const matches = plasticsData.filter(m => [m.code, m.name, ...m.aliases].some(s => normalize(s).includes(value)));
    choices.replaceChildren();
    status.textContent = value ? `找到 ${matches.length} 种材料${matches.length ? '，点击名称可切换详情。' : '。请尝试其他名称或英文缩写。'}` : '已收录 20 种材料，输入名称或点击下方材料即可查看。';
    if (!matches.length) { detail.replaceChildren(); return; }
    for (const material of matches) {
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'chip'; button.dataset.code = material.code;
      button.textContent = material.code; button.title = material.name;
      button.onclick = () => show(material); choices.append(button);
    }
    const exact = matches.find(m => [m.code, m.name, ...m.aliases].some(s => normalize(s) === value));
    show(exact || matches.find(m => m.code === selected) || matches[0]);
  }
  query.addEventListener('input', search);
  host.querySelector('#plastic-clear').onclick = () => { query.value = ''; selected = 'ABS'; search(); query.focus(); };
  search();
}
