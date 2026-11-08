const dynaElements = {'0':'实体','1h':'Hughes–Liu 梁','1b':'Belytchko 梁','1i':'积分梁','1t':'桁架','1d':'离散梁','1sw':'点焊','2':'壳','3a':'厚壳（形式 1、2、6）','3c':'厚壳（形式 3、5、7）','4':'气囊壳','5':'SPH','6':'声学','7':'黏聚','8':'多材料 ALE','8a':'多材料 ALE（8A）','8b':'多材料 ALE（8B）'};
const dynaClasses = {gn:'通用',mt:'金属',cm:'复合材料',pl:'塑料',ad:'胶黏剂',rb:'橡胶',fm:'泡沫',gl:'玻璃'};
const dynaFeatures = {sre:'应变率效应',fail:'失效',eos:'状态方程',ani:'各向异性',dam:'损伤',tc:'拉压差异',tef:'热效应'};
function dynaTokens(value) { return String(value || '').toLowerCase().split(',').map(s=>s.trim()).filter(Boolean); }
function dynaLabels(value, dictionary) {return dynaTokens(value).map(code=>dictionary[code] || `原站代码 ${code.toUpperCase()}（待核实）`).join('、') || '原站未标注';}
function dynaMatches(record, query, element, family, features) {
  const q=query.trim().toLowerCase();
  const idQuery=q.replace(/^\*?mat[\s_-]*/,'').replace(/^0+(?=\d)/,'');
  const id=record.id.toLowerCase().replace(/^0+(?=\d)/,'');
  const numeric=/^\d+(?:[a-z_].*)?$/.test(idQuery);
  const search=!q || (numeric ? id===idQuery : `${record.id} ${record.keyword} ${record.nameZh} ${record.purposeZh} ${record.purpose}`.toLowerCase().includes(q));
  const elements=dynaTokens(record.element), classes=dynaTokens(record.class), attrs=dynaTokens(record.attr);
  return search && (!element || (element==='8' ? elements.some(e=>['8','8a','8b'].includes(e)) : elements.includes(element))) && (!family || classes.includes(family)) && features.every(f=>attrs.includes(f));
}
function mountDynamat() {
  const host=document.createElement('section'); host.id='dynamat-tool'; host.className='card dynamat-tool'; host.setAttribute('aria-labelledby','dyna-heading');
  host.innerHTML=`<div class="dyna-heading"><div><div class="eyebrow">LS-DYNA / 材料模型检索</div><h2 id="dyna-heading">02 / LS-DYNA 材料工具</h2></div><span class="dyna-badge">264 条模型 · 中文查询</span></div>
    <p>从材料用途出发，查找适用的单元与模型特性。保留原始 MAT 编号、关键词和英文说明，方便对照。</p>
    <div class="dyna-source">资料来源：<a href="https://lsdyna.ansys.com/dynamat/" target="_blank" rel="noopener">Ansys DynaMat ↗</a> · 原站标注更新：2019-04-09 · 本地收录：2026-11-08。中文名称与用途摘要为本站整理，非官方译文；模型适用性请以所用版本手册为准。</div>
    <div class="dyna-controls"><label for="dyna-search">材料名称 / 编号 / 关键词<input id="dyna-search" type="search" placeholder="例如：塑料、24、MAT_024、JOHNSON" autocomplete="off"></label><label for="dyna-element">单元类型<select id="dyna-element"><option value="">全部单元</option></select></label><label for="dyna-family">材料类别<select id="dyna-family"><option value="">全部类别</option></select></label></div>
    <fieldset class="dyna-features"><legend>模型特性（多选时须同时满足）</legend></fieldset>
    <div class="dyna-toolbar"><span id="dyna-count" role="status" aria-live="polite"></span><button type="button" id="dyna-reset">重置筛选</button></div>
    <div id="dyna-results"></div><nav class="dyna-pagination" aria-label="材料模型分页"><button type="button" id="dyna-prev">上一页</button><span id="dyna-page"></span><button type="button" id="dyna-next">下一页</button><label for="dyna-jump">跳至<input type="number" id="dyna-jump" min="1" value="1" aria-label="跳转页码"></label><button type="button" id="dyna-go">跳转</button></nav>
    <p class="dyna-footnote">筛选按原站标记匹配；未标注不等于不支持。原站未定义或含歧义的代码保留显示为“待核实”，不自动归类。理论文档为原站英文 PDF，打开时需联网。</p>`;
  document.querySelector('.tools-grid').replaceWith(host);
  const el=id=>host.querySelector('#dyna-'+id);
  const addOptions=(target, dictionary)=>Object.entries(dictionary).forEach(([code,name])=>{const o=document.createElement('option');o.value=code;o.textContent=name;target.append(o);});
  addOptions(el('element'),Object.fromEntries(Object.entries(dynaElements).filter(([k])=>!['8a','8b'].includes(k))));addOptions(el('family'),dynaClasses);
  Object.entries(dynaFeatures).forEach(([code,name])=>{const label=document.createElement('label');const input=document.createElement('input');input.type='checkbox';input.value=code;label.append(input,document.createTextNode(name));host.querySelector('fieldset').append(label);});
  let page=1;const size=10;
  const escape=s=>String(s ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function render(){
    const selected=[...host.querySelectorAll('input[type=checkbox]:checked')].map(e=>e.value);
    const matches=dynamatData.records.filter(r=>dynaMatches(r,el('search').value,el('element').value,el('family').value,selected));
    const pages=Math.max(1,Math.ceil(matches.length/size));page=Math.min(pages,Math.max(1,page));
    el('count').textContent=`找到 ${matches.length} / ${dynamatData.records.length} 条模型`;
    el('results').innerHTML=matches.length?matches.slice((page-1)*size,page*size).map(r=>`<article class="dyna-model" data-key="${escape(r.key)}"><div class="dyna-model-title"><span class="dyna-id">MAT ${escape(r.id)}</span><h3>${escape(r.nameZh)}</h3></div><code>${escape(r.keyword)}</code><p class="dyna-summary">${escape(r.purposeZh)}</p><dl><div><dt>材料类别</dt><dd>${escape(dynaLabels(r.class,dynaClasses))}</dd></div><div><dt>模型特性</dt><dd>${escape(dynaLabels(r.attr,dynaFeatures))}</dd></div><div><dt>适用单元</dt><dd>${escape(dynaLabels(r.element,dynaElements))}</dd></div></dl><details><summary>查看英文原文与来源</summary><p lang="en">${escape(r.purpose || '原站未提供英文用途说明。')}</p><p class="dyna-raw">原始标记 · 单元：${escape(r.element || '未标注')} / 类别：${escape(r.class || '未标注')} / 特性：${escape(r.attr || '未标注')}</p>${r.pdfUrl==='fileExist'?`<a href="https://lsdyna.ansys.com/wp-content/themes/lsdyna/dynamat/pdfs/mat_${encodeURIComponent(r.id)}_theory.pdf" target="_blank" rel="noopener">打开理论说明（英文 PDF）↗</a>`:'<p>原站未提供该条目的理论 PDF。</p>'}</details></article>`).join(''):'<div class="dyna-empty">没有匹配的模型。请尝试其他关键词，或重置筛选。</div>';
    el('page').textContent=`第 ${page} / ${pages} 页`;el('prev').disabled=page===1;el('next').disabled=page===pages;el('jump').max=pages;el('jump').value=page;
  }
  el('search').addEventListener('input',()=>{page=1;render();});
  for(const target of [el('element'),el('family'),host.querySelector('fieldset')])target.addEventListener('change',()=>{page=1;render();});
  el('reset').onclick=()=>{el('search').value='';el('element').value='';el('family').value='';host.querySelectorAll('input[type=checkbox]').forEach(e=>e.checked=false);page=1;render();};
  function turn(next){page=next;render();el('count').scrollIntoView({block:'center'});}
  el('prev').onclick=()=>turn(page-1);el('next').onclick=()=>turn(page+1);
  el('go').onclick=()=>{const n=Number(el('jump').value);if(Number.isInteger(n)&&n>=1)turn(n);else el('jump').reportValidity();};
  el('jump').onkeydown=e=>{if(e.key==='Enter')el('go').click();};

  render();
}
