// Course names, prices, lesson counts, durations and ratings follow the supplied table.
// Lesson counts in course names and on supplied covers may differ from the count column.
const courseCatalog = [
  {id:1,detailRoute:'#course/1',url:'https://www.fangzhenxiu.com/course/12970222/',category:'整车 NVH',name:'整车级NVH仿真分析及优化核心技术21讲',fullName:'从基础到进阶·汽车主机厂整车级NVH仿真分析及优化核心技术21讲（附学习模型）',goal:'系统讲解整车 NVH 领域从基础到专项的各类核心分析内容',price:1299,lessons:21,minutes:513,software:'NVH · 分析与优化'},
  {id:2,detailRoute:'#course/2',url:'https://www.fangzhenxiu.com/course/12808629/',category:'结构与失效',name:'实际工程螺栓加载分析技巧27讲',fullName:'螺栓预紧力加载分析实战27讲：ABAQUS/LS-DYNA/Optistruct多模型应用',goal:'系统讲解螺栓受力在实际工程中的仿真方法',price:699,lessons:27,minutes:701,software:'ABAQUS / LS-DYNA / OptiStruct'},
  {id:3,detailRoute:'#course/3',url:'https://www.fangzhenxiu.com/course/747120/',category:'整车 NVH',name:'整车NVH建模及仿真31讲',fullName:'整车NVH建模及仿真31讲·掌握Hypermesh和Optistruct整车NVH仿真',goal:'全面讲解汽车 NVH 建模及仿真方法及技巧应用',price:1499,lessons:33,minutes:1069,software:'HyperMesh / OptiStruct'},
  {id:4,detailRoute:'#course/4',url:'https://www.fangzhenxiu.com/course/12422081/',category:'排气系统',name:'汽车排气系统CAE仿真实战课14讲',fullName:'汽车排气系统CAE仿真实战课14讲：获得排气系统性能预测和优化能力（附学习模型）',goal:'系统讲解汽车排气系统 CAE 仿真方法',price:499,lessons:14,minutes:394,software:'排气系统 · CAE'},
  {id:5,detailRoute:'#course/5',url:'https://www.fangzhenxiu.com/course/11305356/',category:'结构与失效',name:'LS-DYNA材料及结构Gissmo失效模型工程案例应用实操51讲',fullName:'LS-DYNA材料及结构Gissmo失效模型工程案例应用实操51讲（附学习模型）',goal:'系统讲解 GISSMO 失效模型的原理及工程数据处理全过程',price:1999,lessons:52,minutes:1390,software:'LS-DYNA / GISSMO'},
  {id:6,detailRoute:'#course/6',url:'https://www.fangzhenxiu.com/course/10645793/',category:'整车 NVH',name:'整车路噪仿真及优化实战应用41讲',fullName:'汽车主机厂NVH整车路噪仿真及优化实战应用41讲（附学习模型和专用插件工具）',goal:'全解讲解汽车路噪工程仿真及优化技术',price:1999,lessons:42,minutes:1468,software:'NVH · 路噪优化'},
  {id:7,detailRoute:'#course/7',url:'https://www.fangzhenxiu.com/course/7773702/',category:'振动与模态',name:'汽车NVH之隔振分析与行用进阶7讲',fullName:'汽车NVH之隔振分析与行用进阶7讲：汽车及机械隔振理论、CAE分析及应用方法',goal:'系统讲解 NVH 隔振原理及实际工程应用技巧',price:399,lessons:8,minutes:184,software:'NVH · 隔振分析'},
  {id:8,url:'https://www.fangzhenxiu.com/course/7765883/',category:'振动与模态',name:'汽车NVH之模态分析与识别方法技巧进阶7讲',fullName:'汽车NVH之模态分析与识别方法技巧进阶7讲：汽车及机械的模态分析、识别及处理方法',goal:'系统讲解 NVH 模态识别原理及实际工程应用技巧',price:299,lessons:7,minutes:123,software:'NVH · 模态识别'},
  {id:9,detailRoute:'#course/9',url:'https://www.fangzhenxiu.com/course/7112599/',category:'超单元方法',name:'各种超单元法在产品开发仿真应用及实战技巧40讲',fullName:'各种超单元法在产品开发仿真应用及实战技巧40讲（附学习模型）',goal:'系统讲解超单元在产品开发仿真中的系列应用技巧',price:999,lessons:40,minutes:1763,software:'超单元 · 产品开发'},
  {id:10,url:'https://www.fangzhenxiu.com/course/1927439/',category:'振动与模态',name:'汽车动刚度工程分析及优化7讲',fullName:'汽车设计仿真必修课7讲：实操汽车动刚度工程分析优化方法和难点细节',goal:'系统讲解汽车动刚度原理及实际工程应用技巧',price:499,lessons:7,minutes:228,software:'动刚度 · 分析与优化'},
  {id:11,url:'https://www.fangzhenxiu.com/course/845847/',category:'整车 NVH',name:'整车NVHD建模技巧与仿真实战8讲',fullName:'整车NVHD建模技巧与仿真实战8讲（附学习模型）',goal:'系统讲解 NVHD 在汽车 NVH 仿真中的应用方法和技巧',price:699,lessons:8,minutes:351,software:'NVHD · 建模与仿真'},
  {id:12,url:'https://www.fangzhenxiu.com/course/780613/',category:'整车 NVH',name:'基于Hypermesh、Nastran等整车NVH仿真分析和优化实战进阶10讲',fullName:'基于Hypermesh、Nastran等整车NVH仿真分析和优化实战进阶10讲（附学习模型）',goal:'系统讲解汽车 NVH 仿真中的优化方法和技巧',price:699,lessons:10,minutes:278,software:'HyperMesh / Nastran / OptiStruct'}
  ,{id:13,url:'https://www.fangzhenxiu.com/course/579659/',category:'整车 NVH',name:'汽车NVH设计前的声腔建模流程细节与实际工程中应用教程2讲',fullName:'汽车NVH设计前的声腔建模流程细节与实际工程中应用教程2讲',goal:'系统讲解汽车声腔的一般建模细节及工程应用',price:69,lessons:2,minutes:44,seconds:6,software:'NVH · 声腔建模'}
  ,{id:14,url:'https://www.fangzhenxiu.com/course/592141/',category:'整车 NVH',name:'汽车整车分析核心技术-TPA仿真分析流程与案例应用3讲',fullName:'汽车整车分析核心技术-TPA仿真分析流程与案例应用（含关键参数设置）3讲',goal:'系统讲解汽车整车 TPA 分析流程及工程应用',price:199,lessons:3,minutes:54,seconds:10,software:'TPA · 传递路径分析'}
  ,{id:15,url:'https://www.fangzhenxiu.com/course/602694/',category:'零部件分析',name:'汽车关键零部件性能CAE的分析流程及方法7讲',fullName:'汽车关键零部件性能CAE的分析流程及方法7讲',goal:'讲解汽车关键零部件性能 CAE 的分析流程及方法',price:399,lessons:7,minutes:129,software:'CAE · 零部件性能'}
  ,{id:16,url:'https://www.fangzhenxiu.com/course/627314/',category:'整车 NVH',name:'汽车NVH仿真的主要工作内容1讲',fullName:'汽车NVH仿真的主要工作内容1讲',goal:'讲解汽车 NVH 仿真的主要工作内容',price:20,lessons:1,minutes:28,seconds:52,software:'NVH · 工作流程'}
  ,{id:17,url:'https://www.fangzhenxiu.com/course/627358/',category:'振动与模态',name:'汽车动力吸振器CAE分析设计方法1讲',fullName:'汽车动力吸振器CAE分析设计方法1讲',goal:'讲解汽车动力吸振器 CAE 分析设计方法',price:69,lessons:1,minutes:16,seconds:27,software:'动力吸振器 · CAE'}
  ,{id:18,url:'https://www.fangzhenxiu.com/course/627367/',category:'振动与模态',name:'汽车空调压缩机支架模态分析方法1讲',fullName:'汽车空调压缩机支架模态分析方法1讲',goal:'讲解汽车空调压缩机支架模态分析方法',price:69,lessons:1,minutes:17,seconds:33,software:'支架 · 模态分析'}
  ,{id:19,url:'https://www.fangzhenxiu.com/course/627378/',category:'零部件分析',name:'汽车轮辋侧向刚度分析1讲',fullName:'汽车轮辋侧向刚度分析1讲',goal:'讲解汽车轮辋侧向刚度分析',price:69,lessons:1,minutes:15,seconds:1,software:'轮辋 · 侧向刚度'}
  ,{id:20,url:'https://www.bilibili.com/cheese/play/ss36289',category:'拓扑优化',name:'汽车拓扑优化及案例6讲',fullName:'汽车拓扑优化及案例6讲',goal:'讲解汽车常用的拓扑仿真优化方法和流程',price:299,lessons:6,minutes:235,software:'拓扑优化 · 工程案例'}
  ,{id:21,url:'https://www.bilibili.com/cheese/play/ss36384',category:'零部件分析',name:'汽车车门性能分析系列课程12讲',fullName:'汽车车门性能分析系列课程12讲',goal:'系统讲解汽车车门性能仿真方法及流程',price:399,lessons:12,minutes:315,software:'车门 · 性能分析'}
  ,{id:22,url:'https://www.bilibili.com/cheese/play/ss36293',category:'零部件分析',name:'汽车方向盘结构性能分析系列课程8讲',fullName:'汽车方向盘结构性能分析系列课程8讲',goal:'系统讲解汽车方向盘性能仿真方法及流程',price:399,lessons:8,minutes:238,software:'方向盘 · 结构性能'}
  ,{id:23,url:'https://www.fangzhenxiu.com/course/12910922/',category:'超单元方法',name:'汽车仿真超单元技术20讲',fullName:'汽车仿真超单元技术20讲',goal:'讲解超单元法应用实践书籍及实际工程内容',price:399,lessons:20,minutes:1628,software:'超单元技术 · 工程实践'}
].map(course=>({seconds:0,...course,rating:'5.0'}));

function courseDuration(minutes,seconds=0){const total=minutes*60+seconds;const h=Math.floor(total/3600),m=Math.floor(total%3600/60),s=total%60;return `${h?h+'小时':''}${m||!h?m+'分':''}${s?s+'秒':''}`;}
function courseInquiry(course){return `mailto:252989277@qq.com?subject=${encodeURIComponent('课程咨询：'+course.name)}&body=${encodeURIComponent('您好，我想咨询《'+course.fullName+'》的课程内容、购买方式及学习安排。')}`;}

const freeCourseCatalog = [
  {id:'free-1',url:'https://www.fangzhenxiu.com/course/1738044/',category:'传递函数优化',name:'汽车NVH分析中传递函数常用优化方法1讲',goal:'讲解汽车 NVH 分析中传递函数常用优化方法',lessons:1,minutes:105,software:'NVH · 传递函数优化'},
  {id:'free-2',url:'https://www.fangzhenxiu.com/course/3305769/',category:'传递函数优化',name:'NVH仿真在汽车开发中应用及传递函数常用优化方法及实战1讲',goal:'系统讲解汽车 NVH 仿真传递函数优化方法和技巧',lessons:1,minutes:116,software:'汽车开发 · NVH 仿真实战'},
  {id:'free-3',url:'https://www.fangzhenxiu.com/course/8943024/',category:'传递函数优化',name:'2024新年汽车NVH传函优化方法及首本NVH仿真实战书籍推介1讲',goal:'讲解 NVH 仿真中三大传递函数优化技巧及产品设计经典案例',lessons:1,minutes:155,software:'传函优化 · 工程案例'},
  {id:'free-4',url:'https://www.fangzhenxiu.com/course/9438158/',category:'图书沙龙',name:'《汽车NVH一本通建模、优化与应用》专业图书读者沙龙会5讲',goal:'讲解汽车 NVH 一本通书籍及实际工程',lessons:6,minutes:591,software:'汽车 NVH 一本通 · 读者沙龙'},
  {id:'free-5',url:'https://www.bilibili.com/video/BV1AXdVBDEuf/?vd_source=ef5e9d1b50c0ab2912d4ce5dbfb418b4',category:'材料与失效',name:'LSDYNA金属材料单轴拉伸数据处理拟合及标定',goal:'系统讲解金属材料单轴拉伸数据处理拟合方法及标定细节',lessons:1,minutes:122,software:'LS-DYNA · 材料数据标定'},
  {id:'free-6',url:'https://www.bilibili.com/video/BV1efbPz8EDR/?vd_source=ef5e9d1b50c0ab2912d4ce5dbfb418b4',category:'材料与失效',name:'GISSMO失效模型及拉伸试验标定方法',goal:'GISSMO 失效模型及拉伸试验标定方法',lessons:1,minutes:103,software:'GISSMO · 失效模型标定'}
].map(course=>({...course,fullName:course.name,price:0,seconds:0,rating:'5.0'}));

function coursesPage(isFree=false){
  const catalog=isFree?freeCourseCatalog:courseCatalog;
  const title=isFree?'免费课程':'付费课程';
  const subtitle=isFree?'让知识分享，成为工程进步的起点。':'从理解原理，到解决工程问题。';
  const introduction=isFree?'从 NVH 仿真到材料标定与失效分析，分享仿真方法与工程经验。<br>精选公开讲座与读者沙龙，开启你的下一段学习。':'聚焦整车 NVH、结构失效与仿真优化，把理论方法带入真实工程。<br>从基础建模到专项实战，找到适合自己的下一步。';
  const inquiry=course=>isFree?`mailto:252989277@qq.com?subject=${encodeURIComponent('免费课程咨询：'+course.name)}&body=${encodeURIComponent('您好，我想了解《'+course.fullName+'》的学习链接与观看方式。')}`:courseInquiry(course);
  const categories=['全部课程',...new Set(catalog.map(c=>c.category))];
  const totalSeconds=catalog.reduce((sum,c)=>sum+c.minutes*60+c.seconds,0);
  const totalLessons=catalog.reduce((sum,c)=>sum+c.lessons,0);
  let active='全部课程';
  main.innerHTML=`<section class="course-hero"><div class="eyebrow">${isFree?'04 / OPEN LEARNING':'03 / KEEP LEARNING'}</div><div class="course-hero-title"><h1>${title}<span>${subtitle}</span></h1><span class="course-seal" aria-hidden="true">${isFree?'OPEN':'CAE'}<br><small>${isFree?'CLASSROOM':'ACADEMY'}</small></span></div><p>${introduction}</p><div class="course-stats"><span><b>${catalog.length}</b> 门课程</span><span><b>${totalLessons}</b> 讲课程内容</span><span><b>${Math.floor(totalSeconds/3600)}</b> 小时 <b>${Math.floor(totalSeconds%3600/60)}</b> 分 ${totalSeconds%60?`<b>${totalSeconds%60}</b> 秒`:''}</span></div></section>
  <div class="course-toolbar"><div class="course-tabs" aria-label="课程分类">${categories.map(c=>`<button class="course-tab ${c===active?'active':''}" data-course-cat="${c}" aria-pressed="${c===active}">${c}<span>${c==='全部课程'?catalog.length:catalog.filter(p=>p.category===c).length}</span></button>`).join('')}</div></div>
  <div class="course-list-heading"><h2>探索课程 <span id="course-count" aria-live="polite"></span></h2><label>排序 <select id="course-sort"><option value="featured">默认排序</option>${isFree?'':'<option value="price-low">价格从低到高</option><option value="price-high">价格从高到低</option>'}<option value="lessons">讲数最多</option><option value="duration">时长从短到长</option></select></label></div>
  <section class="course-grid ${isFree?'free-course-grid':''}" id="course-grid" aria-label="课程列表"></section>
  <aside class="course-note"><div><strong>${isFree?'知识因分享而生长，经验在交流中积累。':'让每一次学习，都回应一个工程问题。'}</strong><p>${isFree?'点击“了解课程”前往仿真秀或哔哩哔哩学习。课程咨询：':'课程内容与购买方式咨询：'}<a href="mailto:252989277@qq.com">252989277@qq.com</a></p></div><a class="primary" href="mailto:252989277@qq.com?subject=CAE课程咨询">邮件咨询 ↗</a></aside>
  <p class="course-data-note">${isFree?'所有课程售价为 ¥0，评分按提供的课程资料列示。读者沙龙名称保留“5讲”，课程数量按资料标注为 6 讲。':'课程讲数、时长、售价与评分按课程资料列示；部分封面和课程名称中的讲数与资料不同，以页面标注数据为准。'}</p>
  <dialog id="course-dialog" class="course-dialog" aria-labelledby="course-dialog-title"><button class="course-close" aria-label="关闭课程详情">×</button><div id="course-dialog-body"></div></dialog>`;

  const dialog=document.querySelector('#course-dialog');
  document.querySelector('.course-close').onclick=()=>dialog.close();
  dialog.onclick=e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}};
  const render=()=>{
    let list=catalog.filter(c=>active==='全部课程'||c.category===active);
    const sort=document.querySelector('#course-sort').value;
    if(sort==='price-low')list.sort((a,b)=>a.price-b.price);
    if(sort==='price-high')list.sort((a,b)=>b.price-a.price);
    if(sort==='lessons')list.sort((a,b)=>b.lessons-a.lessons);
    if(sort==='duration')list.sort((a,b)=>(a.minutes*60+a.seconds)-(b.minutes*60+b.seconds));
    document.querySelector('#course-count').textContent=`/ ${list.length} 门课程`;
    document.querySelector('#course-grid').innerHTML=list.map(c=>`<article class="course-card" data-course-id="${c.id}"><button class="course-cover" data-course-detail="${c.id}" aria-label="查看课程：${c.name}"><img src="assets/courses/cover-${c.id}.webp" alt="${c.name}课程封面" width="960" height="540" loading="lazy"></button><div class="course-body"><div class="course-meta"><span>${c.category} / ${isFree?'免费课程':c.lessons <= 3 ? '专题课程' : '系统课程'}</span><strong>${isFree?'免费 · ¥0':`¥${c.price.toLocaleString('en-US')}`}</strong></div><h2><button data-course-detail="${c.id}">${c.name}</button></h2><p>${c.goal}</p><div class="course-software">${c.software}</div><div class="course-card-bottom"><div class="course-facts"><span>▤ ${c.lessons} 讲</span><span>◷ ${courseDuration(c.minutes,c.seconds)}</span><span class="course-rating" aria-label="评分 ${c.rating} 分">★ ${c.rating}</span></div>${isFree?`<a class="course-details" href="${c.url}" target="_blank" rel="noopener noreferrer" title="在新标签页打开课程">了解课程 <span>↗</span></a>`:c.detailRoute?`<a class="course-details" href="${c.detailRoute}">了解课程 <span>↗</span></a>`:`<button class="course-details" data-course-detail="${c.id}">了解课程 <span>↗</span></button>`}</div></div></article>`).join('');
    document.querySelectorAll('[data-course-detail]').forEach(b=>b.onclick=()=>{
      const c=catalog.find(c=>String(c.id)===b.dataset.courseDetail);
      if(c.detailRoute){location.hash=c.detailRoute;return;}
      document.querySelector('#course-dialog-body').innerHTML=`<div class="eyebrow">${c.category} / 课程详情</div><h2 id="course-dialog-title">${c.fullName}</h2><img class="course-dialog-cover" src="assets/courses/cover-${c.id}.webp" alt="${c.name}课程封面"><h3>课程目标</h3><p>${c.goal}</p><div class="course-dialog-facts"><span>${c.lessons} 讲</span><span>${courseDuration(c.minutes,c.seconds)}</span><span>评分 ${c.rating}</span><strong>${isFree?'免费 · ¥0':`¥${c.price.toLocaleString('en-US')}`}</strong></div><p>${isFree?'点击下方按钮前往课程平台学习。如有问题，请联系':c.url?'点击下方按钮前往课程平台查看购买详情。课程咨询请联系':'咨询课程大纲、购买方式及学习安排，请联系'} <a href="mailto:252989277@qq.com">252989277@qq.com</a>。</p><a class="primary" href="${c.url||inquiry(c)}" ${c.url?'target="_blank" rel="noopener noreferrer"':''}>${isFree?'前往学习':c.url?'前往购买课程':'邮件咨询本课程'} ↗</a><div class="course-back-row"><a class="course-back" href="${isFree?'#free-courses':'#courses'}"><span aria-hidden="true">←</span>返回课程列表</a></div>`;
      dialog.querySelector('.course-back').onclick=e=>{e.preventDefault();dialog.close();};
      dialog.showModal();
    });
  };
  document.querySelectorAll('[data-course-cat]').forEach(b=>b.onclick=()=>{active=b.dataset.courseCat;document.querySelectorAll('[data-course-cat]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b));});render();});
  document.querySelector('#course-sort').onchange=render;
  render();
}
