// Schematic dimensions use the same symbols and orientations as the inputs.
function sectionDiagram(index,name){
  const rect=(x,y,w,h)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}"/>`;
  const path=d=>`<path fill-rule="evenodd" d="${d}"/>`;
  const ellipse=(rx,ry)=>`<ellipse cx="170" cy="140" rx="${rx}" ry="${ry}"/>`;
  const line=(x,y,X,Y,label,tx,ty)=>`<g class="section-dimension"><path d="M${x} ${y}L${X} ${Y}" marker-start="url(#section-arrow)" marker-end="url(#section-arrow)"/><text x="${tx}" y="${ty}">${label}</text></g>`;
  const horizontal=(x,X,y,label)=>line(x,y,X,y,label,(x+X)/2,y-8);
  const vertical=(x,y,Y,label)=>line(x,y,x,Y,label,x+16,(y+Y)/2);
  let shape='',dims='';
  if(index===0){shape=rect(90,60,160,160);dims=horizontal(90,250,245,'a');}
  if(index===1||index===2){shape=index===1?rect(100,45,140,180):path('M100 45H240V225H100Z M122 70V200H218V70Z');dims=horizontal(100,240,250,'b')+vertical(270,45,225,'d');if(index===2)dims+=horizontal(122,218,115,'bᵢ')+vertical(155,70,200,'dᵢ');}
  if(index===3||index===4){shape=index===3?ellipse(85,85):path('M255 140A85 85 0 1 0 85 140A85 85 0 1 0 255 140Z M230 140A60 60 0 1 0 110 140A60 60 0 1 0 230 140Z');dims=line(170,140,230,80,'R',213,100);if(index===4)dims+=line(170,140,128,182,'r',135,154);}
  if(index===5||index===6){shape=index===5?path('M70 205A100 100 0 0 1 270 205Z'):path('M70 205A100 100 0 0 1 270 205H245A75 75 0 0 0 95 205Z');dims=line(170,205,240.71,134.29,'R',222,161);if(index===6)dims+=line(170,205,116.97,151.97,'r',130,178);}
  if(index===7||index===8){shape=index===7?ellipse(110,70):path('M280 140A110 70 0 1 0 60 140A110 70 0 1 0 280 140Z M250 140A80 45 0 1 0 90 140A80 45 0 1 0 250 140Z');dims=horizontal(170,280,235,'a')+vertical(305,70,140,'b');if(index===8)dims+=horizontal(170,250,140,'aᵢ')+vertical(150,95,140,'bᵢ');}
  if(index===9||index===10){shape=path('M170 55L265 220H75Z');dims=horizontal(75,265,245,index===9?'b':'a');if(index===9)dims+=vertical(290,55,220,'d');}
  if(index===11){shape=path('M70 50H270V80H185V225H155V80H70Z');dims=horizontal(70,270,28,'b')+vertical(295,50,80,'t')+vertical(225,80,225,'d')+horizontal(155,185,250,'tw');}
  if(index===12){shape=path('M75 55H100V200H240V55H265V225H75Z');dims=horizontal(75,265,250,'b')+vertical(295,55,200,'d')+horizontal(75,100,35,'tw')+vertical(145,200,225,'t');}
  if(index===13){shape=path('M70 50H270V75H185V200H270V225H70V200H155V75H70Z');dims=horizontal(70,270,28,'b')+vertical(295,50,75,'t')+vertical(225,75,200,'d')+horizontal(155,185,150,'tw');}
  if(index===14){shape=path('M170 55L275 160L255 180L170 95L85 180L65 160Z');dims=line(56,140,160,36,'a',97,78)+line(213,137,233,117,'t',235,150);}
  if(index===15){shape=path('M90 45H115V200H250V225H90Z');dims=horizontal(90,250,250,'b')+vertical(60,45,225,'d')+horizontal(90,115,25,'t');}
  return `<svg viewBox="0 0 340 280" role="img" aria-label="${name}截面尺寸示意图"><defs><marker id="section-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M10 5L0 0V10Z" fill="currentColor"/></marker></defs><g class="section-shape">${shape}</g>${dims}</svg><figcaption>${name} · 尺寸示意（不按比例）</figcaption>`;
}
function mountSections(){
  const host=document.createElement('section');host.id='section-tool';host.className='section-tool';
  host.innerHTML=`<h2>05 / 常用截面几何特性计算工具</h2><p>选择截面并输入尺寸，即时计算面积、形心、惯性矩与惯性半径。长度单位统一为 mm。</p><div class="section-layout"><div><label for="section-type">截面形式</label><select id="section-type">${sectionTypes.map((s,i)=>`<option value="${i}">${String(i+1).padStart(2,'0')} · ${s.name}</option>`).join('')}</select><p id="section-guide"></p><div id="section-inputs"></div><button type="button" class="primary" id="section-reset">恢复示例尺寸</button><figure id="section-diagram"></figure></div><div><h3 id="section-result-title">计算结果</h3><p id="section-error" role="status"></p><div id="section-results" aria-live="polite"></div></div></div><p class="section-source">依据：提供的《常用截面几何特性计算》Excel（A 版）。原表参考《飞机设计手册》第九册，p193–205。惯性矩关于形心轴；保留原表近似系数，结果可能与精确解析式略有差异。</p></section>`;
  document.querySelector('main').append(host);
  const el=id=>host.querySelector('#section-'+id);
  const guides=[
    'a 为边长；形心坐标从左下角起算。',
    'b 为宽度，d 为高度；形心坐标从左下角起算。',
    'b、d 为外宽、外高；bᵢ、dᵢ 为同心内孔宽、高。形心从外框左下角起算。',
    'R 为半径；形心坐标从外接矩形左下角起算。',
    'R 为外半径，r 为内半径；圆环同心。形心从外接矩形左下角起算。',
    'R 为半径，半圆位于水平直径上方；形心从直径左端起算。',
    'R、r 为外、内半径；半圆环位于直径上方，形心从外直径左端起算。保留原表 0.4244 系数。',
    'a 为水平半轴，b 为竖直半轴；形心从外接矩形左下角起算。',
    'a、b 为外椭圆水平、竖直半轴；aᵢ、bᵢ 为同心内椭圆半轴。形心从外接矩形左下角起算。',
    'b 为底边宽，d 为独立可调的高。原表形心 ẏ 从顶点水平线向底边计量（2d/3）。',
    'a 为边长；原表形心 ẏ 从顶点水平线向底边计量。保留 0.433、0.5774、0.01804 系数。',
    'b 为翼缘宽，t 为翼缘厚，d 为腹板净高（不含翼缘），tw 为腹板厚。ẏ 从翼缘外表面向腹板端部计量。',
    '槽形按 U 形方向计算：b 为底板总宽，t 为底板厚，d 为两侧壁净高，tw 为侧壁厚；形心从外框底边起算。',
    'b 为翼缘宽，d 为腹板净高，t 为单侧翼缘厚，tw 为腹板厚；总高为 d+2t。形心从外框左下角起算。',
    '等边直角角形旋转为倒 V：a 为每边外长，t 为厚度，b=a−t。ẏ₁、ẏ₂ 为原表两侧竖向形心距离；保留 0.7071 系数。',
    'b 为水平外宽，d 为竖直外高，t 为等厚壁厚；两肢沿左侧和底部布置，形心从左下外角起算。'
  ];
  let index=0;
  function render(){const s=sectionTypes[index];el('diagram').innerHTML=sectionDiagram(index,s.name);el('guide').textContent=guides[index];el('result-title').textContent=s.name+' · 计算结果';el('inputs').innerHTML=s.inputs.map(p=>`<label for="section-${p.cell}">${p.label}（mm）</label><input id="section-${p.cell}" type="number" step="any" min="0" value="${p.value}" required>`).join('');calculate();}
  function calculate(){const s=sectionTypes[index],v={},values=[];for(const p of s.inputs){const input=el(p.cell),n=Number(input.value);if(!input.value.trim()||!Number.isFinite(n)||n<=0){invalid('请填写所有尺寸，且必须为大于 0 的有限数值。');return;}v[p.cell]=n;values.push(n);}
    const [a,b,c,d]=values;
    if((index===2||index===8)&&(c>=a||d>=b)){invalid('内孔尺寸必须分别小于对应的外部尺寸。');return;}
    if((index===4||index===6||index===14)&&b>=a){invalid('内半径或厚度必须小于外半径或边长。');return;}
    if(([11,13].includes(index)&&d>=a)||(index===12&&2*d>=a)||(index===15&&c>=Math.min(a,b))){invalid('壁厚超出截面尺寸，请检查翼缘宽度与壁厚。');return;}
    const result=sectionCalculators[index](v);
    if(s.outputs.some(o=>!Number.isFinite(result[o.cell])||result[o.cell]<=0)){invalid('当前尺寸无法得到有效结果，请检查尺寸或缩小数值范围。');return;}
    el('error').textContent='';el('results').innerHTML=s.outputs.map(o=>`<div><span>${o.label}（${o.label==='A'?'面积':o.label.startsWith('I')?'惯性矩':o.label.startsWith('ρ')?'惯性半径':'形心坐标'}）</span><strong>${Number(result[o.cell].toPrecision(8)).toLocaleString('zh-CN',{maximumSignificantDigits:8})}</strong><small>${o.unit}</small></div>`).join('');
  }
  function invalid(message){el('error').textContent=message;el('results').replaceChildren();}
  el('type').onchange=e=>{index=Number(e.target.value);render();};el('inputs').addEventListener('input',calculate);el('reset').onclick=render;render();
}
