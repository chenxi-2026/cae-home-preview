// Base-unit exponents relative to kg, m, s. Derived quantities follow M,L,T.
const feaSystems = [
  ['kg-m-s',0,0,0], ['kg-mm-ms',0,-3,-3], ['kg-mm-s',0,-3,0],
  ['kg-cm-s',0,-2,0], ['kg-cm-ms',0,-2,-3], ['kg-cm-us',0,-2,-6],
  ['t-mm-s',3,-3,0], ['g-mm-ms',-3,-3,-3], ['g-mm-s',-3,-3,0],
  ['g-cm-s',-3,-2,0], ['g-cm-ms',-3,-2,-3], ['g-cm-us',-3,-2,-6],
  ['Mg-mm-s',3,-3,0]
].map(([id,m,l,t]) => ({id,m,l,t}));
const feaQuantities = [
  {id:'density',name:'密度',dimension:[1,-3,0],example:7850},
  {id:'force',name:'力',dimension:[1,1,-2],example:1.29},
  {id:'stress',name:'应力',dimension:[1,-1,-2],example:560000000},
  {id:'modulus',name:'杨氏模量',dimension:[1,-1,-2],example:210000000000},
  {id:'energy',name:'能量',dimension:[1,2,-2],example:7000000000},
  {id:'velocity',name:'速度',dimension:[0,1,-1],example:6930},
  {id:'acceleration',name:'加速度',dimension:[0,1,-2],example:1}
];
function feaExponent(system, quantity) {
  return system.m*quantity.dimension[0]+system.l*quantity.dimension[1]+system.t*quantity.dimension[2];
}
function feaConvert(value, quantity, from, to) {
  return value * 10 ** (feaExponent(from, quantity)-feaExponent(to, quantity));
}
function feaFormat(value) {
  if (!Number.isFinite(value)) return '超出计算范围';
  if (value===0) return '0';
  const rounded=Number(value.toPrecision(10));
  return Math.abs(rounded)<0.0001 || Math.abs(rounded)>=1e9 ? rounded.toExponential().replace('e+','e') : String(rounded);
}
function feaUnit(system, quantity) {
  const [mass,length,timeRaw]=system.id.split('-'); const time=timeRaw==='us'?'μs':timeRaw;
  if(quantity.id==='density')return `${mass}/${length}³`;
  if(quantity.id==='velocity')return `${length}/${time}`;
  if(quantity.id==='acceleration')return `${length}/${time}²`;
  const exp=feaExponent(system,quantity);
  const kind=quantity.id==='modulus'?'stress':quantity.id;
  const labels={force:{'-6':'μN','-3':'mN',0:'N',3:'kN'},stress:{0:'Pa',3:'kPa',6:'MPa',9:'GPa'},energy:{'-9':'nJ','-6':'μJ','-3':'mJ',0:'J',3:'kJ'}};
  const si={force:'N',stress:'Pa',energy:'J'}[kind];
  return labels[kind]?.[exp] || `10^${exp} ${si}`;
}
function mountFeaUnits() {
  const host=document.createElement('section'); host.className='card fea-tool';host.id='fea-tool';host.setAttribute('aria-labelledby','fea-heading');
  host.innerHTML=`<div class="fea-heading"><div><div class="eyebrow">FINITE ELEMENT UNITS / 一致单位制</div><h2 id="fea-heading">01 / 有限元单位换算工具</h2></div><span class="fea-badge">13 个体系 · 7 项换算</span></div>
  <p>选择输入与输出单位体系，输入数值即可换算。支持科学计数法，如 2.1e11。</p>
  <div class="fea-controls"><label for="fea-from">输入单位体系<select id="fea-from"></select></label><button type="button" id="fea-swap" title="将当前结果作为输入，反向换算">⇄ 交换</button><label for="fea-to">输出单位体系<select id="fea-to"></select></label></div>
  <p id="fea-system-note" class="fea-system-note"></p>
  <div class="fea-actions"><button type="button" id="fea-example">载入原表示例</button><button type="button" id="fea-clear">清空数值</button></div>
  <div class="fea-rows"></div><p id="fea-status" role="status"></p>
  <details class="fea-method"><summary>单位说明与换算依据</summary><p>采用一致的质量—长度—时间单位体系，力 = 质量 × 长度 / 时间²，应力及杨氏模量 = 质量 /（长度 × 时间²），能量 = 质量 × 长度² / 时间²。密度 = 质量 / 长度³，速度 = 长度 / 时间，加速度 = 长度 / 时间²。</p><p>t 与 Mg 均为 1000 kg；g 为 0.001 kg。ms 为毫秒，μs（原表 us）为微秒。形如“10^4 N”的单位表示该体系的 1 个力单位等于 10000 N。正负号按输入保留，空白不会当作 0。</p><p>来源：《有限元单位换算表.xlsx》Sheet1，A3:H16、I3:O16。原表的正向与反向公式按量纲核对；原表反向区域未单列杨氏模量，本工具按与应力相同的量纲提供双向换算。显示最多 10 位有效数字，内部计算使用未格式化的数值。</p></details>`;
  document.querySelector('.tools-grid').before(host);
  const el=id=>host.querySelector('#fea-'+id);
  for(const system of feaSystems)for(const id of ['from','to']){
    const option=document.createElement('option');option.value=system.id;option.textContent=system.id.replace('us','μs');el(id).append(option);
  }
  for(const q of feaQuantities){
    const row=document.createElement('div');row.className='fea-row';
    row.innerHTML=`<h3>${q.name}</h3><label class="fea-input-label" for="fea-${q.id}">输入 · <span id="fea-${q.id}-from-unit"></span><input type="text" inputmode="text" id="fea-${q.id}" aria-label="${q.name}输入值" placeholder="输入数值" autocomplete="off" spellcheck="false"></label><span class="fea-arrow" aria-hidden="true">→</span><div class="fea-output"><span>输出 · <span id="fea-${q.id}-to-unit"></span></span><output id="fea-${q.id}-result" for="fea-${q.id}" aria-label="${q.name}换算结果"></output></div>`;
    host.querySelector('.fea-rows').append(row);
  }
  const getSystem=id=>feaSystems.find(s=>s.id===el(id).value);
  function read(q){
    const text=el(q.id).value.trim();
    if(!text)return {empty:true};
    if(!/^[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/i.test(text))return {error:true};
    const value=Number(text);
    if(value===0 && /[1-9]/.test(text.split(/e/i)[0]))return {error:true};
    return Number.isFinite(value)?{value}:{error:true};
  }
  function results(){
    const from=getSystem('from'),to=getSystem('to');let invalid=0;
    const force=feaQuantities[1],stress=feaQuantities[2];
    el('system-note').textContent=`${from.id}：力单位 ${feaUnit(from,force)}，应力单位 ${feaUnit(from,stress)} → ${to.id}：力单位 ${feaUnit(to,force)}，应力单位 ${feaUnit(to,stress)}`;
    for(const q of feaQuantities){
      el(q.id+'-from-unit').textContent=feaUnit(from,q);el(q.id+'-to-unit').textContent=feaUnit(to,q);
      const input=read(q),result=el(q.id+'-result');
      const value=input.value===undefined?NaN:feaConvert(input.value,q,from,to);
      const bad=input.error || (!input.empty && (!Number.isFinite(value) || (input.value!==0 && value===0)));
      el(q.id).setAttribute('aria-invalid',String(!!bad));
      if(bad){result.textContent=input.error?'请输入有效数字':'超出计算范围';invalid++;}
      else result.textContent=input.empty?'—':feaFormat(value);
      result.title=!bad&&!input.empty?String(value):'';
    }
    el('status').textContent=invalid?`${invalid} 项输入无效或超出计算范围，请检查标记项。`:'';
  }
  function example(){el('from').value='kg-m-s';el('to').value='t-mm-s';for(const q of feaQuantities)el(q.id).value=String(q.example);results();}
  el('example').onclick=example;
  el('clear').onclick=()=>{for(const q of feaQuantities)el(q.id).value='';results();el('density').focus();};
  el('from').onchange=el('to').onchange=results;
  for(const q of feaQuantities)el(q.id).oninput=results;
  el('swap').onclick=()=>{
    const from=getSystem('from'),to=getSystem('to');
    const converted=feaQuantities.map(q=>{const input=read(q);return {q,input,value:input.empty?null:feaConvert(input.value,q,from,to)};});
    if(converted.some(({input,value})=>input.error||(!input.empty&&(!Number.isFinite(value)||(input.value!==0&&value===0))))){results();el('status').textContent='请先修正无效输入，再交换单位体系。';return;}
    for(const {q,value} of converted)el(q.id).value=value===null?'':String(value);
    el('from').value=to.id;el('to').value=from.id;results();
  };
  example();
  const shortcut=document.createElement('button');shortcut.type='button';shortcut.className='chip';shortcut.textContent='有限元单位换算';
  shortcut.onclick=()=>{host.scrollIntoView({behavior:'smooth'});el('from').focus({preventScroll:true});};document.querySelector('.tools-shortcuts').prepend(shortcut);
}
