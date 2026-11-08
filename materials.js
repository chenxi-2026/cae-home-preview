const materialProperties = [
  {name:'弹性模量', unit:'GPa', si:'N/m²', scale:1e9},
  {name:'泊松比', unit:'无量纲', si:'无量纲', scale:1},
  {name:'质量密度', unit:'kg/m³', si:'kg/m³', scale:1},
  {name:'剪切模量（原表：抗剪模量）', unit:'GPa', si:'N/m²', scale:1e9},
  {name:'抗拉强度（原表：张力强度）', unit:'MPa', si:'N/m²', scale:1e6},
  {name:'屈服强度', unit:'MPa', si:'N/m²', scale:1e6},
  {name:'热膨胀系数（原表：热扩张系数）', unit:'K⁻¹', si:'K⁻¹', scale:1},
  {name:'比热容', unit:'J/(kg·K)', si:'J/(kg·K)', scale:1},
  {name:'热导率', unit:'W/(m·K)', si:'W/(m·K)', scale:1}
];

function mountMaterialsHandbook() {
  const host = document.createElement('section');
  host.className = 'card materials-handbook';
  host.id = 'materials-handbook';
  host.setAttribute('aria-labelledby', 'materials-heading');
  host.innerHTML = `<div class="materials-heading"><div><div class="eyebrow">MATERIAL PROPERTIES / 工程材料</div><h2 id="materials-heading">04 / 常用材料属性手册</h2></div><span class="materials-count">${materialsData.records.length} 条记录 · ${materialsData.sources.length} 份资料</span></div>
    <p class="materials-intro">按材料名称或国内外牌号查询物性与牌号对照，保留不同标准、规格和热处理状态。</p>
    <label for="materials-query">材料名称 / 牌号</label>
    <div class="materials-search"><input id="materials-query" type="search" placeholder="例如：Q235、6061、AISI 304、橡胶" autocomplete="off" aria-describedby="materials-status"><button id="materials-clear" type="button">清空</button></div>
    <label for="materials-source-filter">资料来源</label><select id="materials-source-filter"><option value="all">全部来源</option></select>
    <p id="materials-status" role="status"></p>
    <div class="materials-layout"><div class="materials-browser"><div id="materials-list" aria-label="匹配的材料"></div><div class="materials-pager"><button type="button" id="materials-prev" aria-label="材料列表上一页">上一页</button><span id="materials-page"></span><button type="button" id="materials-next" aria-label="材料列表下一页">下一页</button><form id="materials-jump" class="materials-jump"><input id="materials-jump-page" type="number" min="1" step="1" required inputmode="numeric" aria-label="跳转页码"><button type="submit" id="materials-jump-button">跳转</button></form></div></div>
    <div id="materials-detail"><div class="materials-detail-head"><h3 id="materials-name"></h3><label for="materials-units">显示单位<select id="materials-units"><option value="engineering">常用工程单位</option><option value="si">SI 单位</option><option value="source">原表数值 / 单位</option></select></label></div><p id="materials-origin"></p><div id="materials-warning" class="materials-warning"></div><table class="materials-table"><caption class="materials-sr">所选材料的属性（未提供项单独标明）</caption><thead><tr><th scope="col">属性</th><th scope="col">数值</th><th scope="col">单位</th></tr></thead><tbody></tbody></table><p class="materials-precision"></p></div></div>
    <p class="materials-source"></p>`;
  document.querySelector('.plastic-handbook').after(host);
  const el = id => host.querySelector('#materials-' + id);
  const input = el('query'), list = el('list'), detail = el('detail');
  const crosswalk = document.createElement('div'); crosswalk.className = 'materials-crosswalk';
  host.querySelector('.materials-table').after(crosswalk);
  const sources = new Map(materialsData.sources.map(source => [source.id, source]));
  host.querySelector('.materials-source').textContent = '来源：' + materialsData.sources.map(source => `《${source.name}》（${source.count} 条）`).join('、') + '。不同来源、不同表的记录独立保留，范围不取平均，未提供项不推算。原表零值保留，使用前请核实其含义；空白标为“未提供”。';
  for (const source of materialsData.sources) {
    const option = document.createElement('option'); option.value = source.id;
    option.textContent = `${source.name}（${source.count} 条）`; el('source-filter').append(option);
  }
  const normalize = text => text.normalize('NFKC').toLowerCase().replace(/[\s\-()（）]/g, '');
  let matches = materialsData.records, page = 0, selected = matches[0];
  const pageSize = 10;
  function renderDetail() {
    detail.hidden = !selected;
    if (!selected) return;
    el('name').textContent = selected.name;
    const source = sources.get(selected.sourceId);
    const location = selected.location || (selected.page ? `第 ${selected.page} 页 · 表 ${selected.table}` : `${source.sheet} · 第 ${selected.row} 行`);
    el('origin').textContent = `来源：${source.name} · ${location}${selected.note ? '；说明：' + selected.note : ''}${source.note ? '；' + source.note : ''}`;
    if (source.url) {
      const link = document.createElement('a'); link.href = source.url; link.target = '_blank'; link.rel = 'noopener'; link.textContent = ' 查看原始 PDF ↗'; el('origin').append(link);
    }
    const isCrosswalk = selected.kind === 'crosswalk';
    el('units').disabled = isCrosswalk || !!source.rawOnly;
    if (source.rawOnly) el('units').value = 'source';
    el('units').parentElement.hidden = isCrosswalk;
    host.querySelector('.materials-table').hidden = isCrosswalk;
    host.querySelector('.materials-precision').hidden = isCrosswalk;
    crosswalk.hidden = !isCrosswalk; crosswalk.replaceChildren();
    if (isCrosswalk) {
      el('warning').hidden = true;
      const table = document.createElement('table'); table.className = 'materials-grade-table';
      const caption = document.createElement('caption'); caption.textContent = '国内外钢材牌号对照（按原表）'; table.append(caption);
      const head = document.createElement('thead'); head.innerHTML = '<tr><th scope="col">国家 / 标准</th><th scope="col">牌号</th></tr>'; table.append(head);
      const body = document.createElement('tbody');
      for (const item of selected.gradeMap) {
        const row = document.createElement('tr'); const th = document.createElement('th'); th.scope = 'row'; th.textContent = item.standard;
        const td = document.createElement('td'); td.textContent = item.grade || '原表未提供'; row.append(th, td); body.append(row);
      }
      table.append(body); crosswalk.append(table); return;
    }
    const warnings = [];
    if (selected.sourceWarning) warnings.push(selected.sourceWarning);
    if (selected.values.some(v => v === 0)) warnings.push('此记录含原表零值，请核实其含义后使用。');
    if (!source.rawOnly && !selected.propertyNames?.[4] && typeof selected.values[4] === 'number' && typeof selected.values[5] === 'number' && selected.values[4] > 0 && selected.values[5] > selected.values[4]) warnings.push('原表屈服强度大于抗拉强度，数据待核实。');
    el('warning').textContent = warnings.join(' ');
    el('warning').hidden = !warnings.length;
    const mode = el('units').value;
    const tbody = host.querySelector('tbody'); tbody.replaceChildren();
    materialProperties.forEach((property, index) => {
      const raw = selected.values[index];
      const format = value => mode === 'engineering' ? String(Number((value / property.scale).toPrecision(6))) : String(value);
      const unit = mode === 'engineering' ? property.unit : mode === 'source' && source.originalUnits ? source.originalUnits[index] : property.si;
      const value = raw === null ? '未提供' : mode === 'source' && selected.originalValues ? selected.originalValues[index] : Array.isArray(raw) ? raw.map(format).join('～') : format(raw);
      const tr = document.createElement('tr');
      const th = document.createElement('th'); th.scope = 'row'; th.textContent = selected.propertyNames?.[index] || property.name; tr.append(th);
      const td = document.createElement('td'); td.textContent = value; td.title = raw === null ? '原表未提供' : selected.originalValues ? `原表：${selected.originalValues[index]} ${source.originalUnits[index]}` : `原表：${raw} ${property.si}`;
      if (raw === 0) { const note = document.createElement('small'); note.textContent = '原表为 0'; td.append(note); }
      tr.append(td);
      const unitCell = document.createElement('td'); unitCell.textContent = raw === null ? '—' : unit; tr.append(unitCell); tbody.append(tr);
    });
    for (const property of selected.extraProperties || []) {
      const format = value => String(Number((mode === 'si' ? value * property.siScale : value).toPrecision(12)));
      const value = property.value === null ? '未提供' : mode === 'source' ? property.original : Array.isArray(property.value) ? property.value.map(format).join('～') : format(property.value);
      const tr = document.createElement('tr');
      const th = document.createElement('th'); th.scope = 'row'; th.textContent = property.name; tr.append(th);
      const td = document.createElement('td'); td.textContent = value; tr.append(td);
      const unit = document.createElement('td'); unit.textContent = property.value === null ? '—' : mode === 'si' ? property.si : property.unit; tr.append(unit);
      tbody.append(tr);
    }
    host.querySelector('.materials-precision').textContent = mode === 'source' ? '保留原表数值与范围写法，单位符号统一规范书写。' : mode === 'si' ? '统一为 SI 单位：GPa × 10⁹、MPa × 10⁶ → N/m²；10⁻⁶/℃ × 10⁻⁶ → K⁻¹；伸长率 % ÷ 100 → 无量纲。范围两端分别换算。' : '最多显示 6 位有效数字；切换“原表数值 / 单位”可查看原始数值。范围与未提供项按原表保留。';
    if (source.rawOnly) host.querySelector('.materials-precision').textContent = '原文未注明单位，已锁定原始数值展示，暂不换算。';
  }
  function renderList() {
    list.replaceChildren();
    for (const material of matches.slice(page * pageSize, (page + 1) * pageSize)) {
      const button = document.createElement('button'); button.type = 'button';
      button.className = 'materials-item'; button.dataset.row = material.row; button.dataset.id = material.id;
      button.textContent = material.name; button.title = material.name;
      if (material.table) {
        const label = document.createElement('small'); label.textContent = `性质参数 PDF · 表 ${material.table} · 第 ${material.page} 页`; button.append(label);
      }
      if (material.kind === 'crosswalk') {
        const label = document.createElement('small'); label.textContent = '国内外牌号对照 · 原表（' + (material.sourceId === 'grades1' ? '1' : '6') + '）'; button.append(label);
      }
      button.setAttribute('aria-pressed', String(material.id === selected?.id));
      button.onclick = () => { selected = material; renderList(); renderDetail(); };
      list.append(button);
    }
    el('page').textContent = matches.length ? `${page + 1} / ${Math.ceil(matches.length / pageSize)}` : '0 / 0';
    const pageCount = Math.ceil(matches.length / pageSize);
    el('jump-page').max = String(Math.max(1, pageCount));
    el('jump-page').value = matches.length ? String(page + 1) : '';
    el('jump-page').disabled = el('jump-button').disabled = !matches.length;
    el('prev').disabled = page === 0;
    el('next').disabled = (page + 1) * pageSize >= matches.length;
    el('status').textContent = matches.length ? `找到 ${matches.length} 条材料，点击名称查看属性。` : '未找到匹配材料，请尝试其他牌号、英文名称或清空搜索。';
  }
  function search() {
    const query = normalize(input.value);
    matches = materialsData.records.filter(m => (el('source-filter').value === 'all' || m.sourceId === el('source-filter').value) && [m.name, ...(m.gradeMap || []).map(item => item.grade || '')].some(value => normalize(value).includes(query)));
    const exact = matches.find(m => normalize(m.name) === query);
    if (exact) matches = [exact, ...matches.filter(m => m !== exact)];
    page = 0; selected = matches[0]; renderList(); renderDetail();
  }
  input.addEventListener('input', search);
  el('clear').onclick = () => { input.value = ''; el('source-filter').value = 'all'; search(); input.focus(); };
  el('source-filter').onchange = search;
  el('units').onchange = renderDetail;
  function changePage(delta) {
    page += delta; selected = matches[page * pageSize]; renderList(); renderDetail();
  }
  el('prev').onclick = () => changePage(-1);
  el('next').onclick = () => changePage(1);
  el('jump').onsubmit = event => {
    event.preventDefault();
    if (!matches.length || !el('jump-page').reportValidity()) return;
    const target = Number(el('jump-page').value);
    if (!Number.isInteger(target) || target < 1 || target > Math.ceil(matches.length / pageSize)) return;
    changePage(target - 1 - page);
    list.scrollTop = 0;
  };
  search();

  // The handbooks are long: provide direct access from the tool-page introduction.
  const shortcuts = document.createElement('div'); shortcuts.className = 'tools-shortcuts';
  for (const [label, target] of [['LS-DYNA 材料工具', '#dynamat-tool'], ['常用塑料手册', '.plastic-handbook'], ['常用材料属性手册', '.materials-handbook']]) {
    const button = document.createElement('button'); button.type = 'button'; button.className = 'chip'; button.textContent = label;
    button.onclick = () => {
      const section = document.querySelector(target); section.scrollIntoView({behavior:'smooth', block:'start'});
      const focus = section.querySelector('input'); focus?.focus({preventScroll:true});
    };
    shortcuts.append(button);
  }
  document.querySelector('.page-intro').append(shortcuts);
}
