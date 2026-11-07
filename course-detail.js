// Transcribed from the course materials supplied by the site owner.
const nvhCoreCourse = {
  breadcrumb:'整车 NVH · 核心技术',
  title:'整车级 NVH 仿真分析<br>及优化核心技术 <em>21 讲</em>',
  subtitle:'从基础到进阶，贯穿整车模态、灵敏度、<br class="nvh-wide">动力总成噪声与路噪分析。',
  tags:['整车 NVH','工程实战','附学习模型'],
  overviewTitle:'搭建完整的整车 NVH 分析体系',
  purchaseLabel:'整车 NVH · 系统课程',
  syllabusNote:'大纲按课程资料列示。第 11、12 讲均标注为“整车 PT-Noise-Idle 分析”。',
  introduction:'讲解实际工程中整车 NVH 领域从基础到专项的各类核心分析内容，帮助工程师和学习者形成系统、完整的整车 NVH 分析知识体系。',
  outcomes:[
    ['模态与灵敏度分析','掌握整车模态、DSA、BrakeShudder 等分析技巧及详细流程。'],
    ['动力总成噪声分析','掌握整车 PT-Noise-Idle、WOT 等分析技巧及详细流程。'],
    ['路面激励与噪声分析','掌握整车 RoadShake、Noise、Boom 等分析技巧及详细流程。']
  ],
  audience:['学习仿真的工程师','学习整车 NVH 仿真及测试的工程师','理工科院校学生及老师','汽车相关行业的从业者'],
  lessons:[
    '课程概述及具体安排','整车模态分析','整车模态分布表制定方法及要求','整车动力总成质心灵敏度分析','整车轮心灵敏度分析','整车钣金厚度DSA分析','整车衬套刚度DSA分析','整车Brakeshudder分析','整车ImpactHarshness分析','整车PropshaftUnbalance分析','整车PT-Noise-Idle分析','整车PT-Noise-Idle分析','整车PT-Noise-WOT分析','整车PT-Noise-WOT分析-order','整车TorqueVariation分析','整车WheelUnbalance分析','整车TyreUnbalance分析','整车Roadshake分析','整车CoolUnbalance分析','整车Road-Noise-Boom分析','整车Road-Noise-Bolt分析'
  ],
  cases:[
    {file:'pt-noise-wot',lesson:'14',title:'整车 PT-Noise-WOT 分析 · order',description:'课程示例展示不同阶次激励工况下的频率响应，以及转速与声压级曲线。'},
    {file:'cool-unbalance',lesson:'19',title:'整车 CoolUnbalance 分析',description:'课程示例展示冷却系统模型、响应曲线及不同方案下的响应点结果对比。'}
  ]
};

const boltCoreCourse = {
  breadcrumb:'螺栓加载 · 工程实战',
  title:'实际工程螺栓加载<br>分析技巧 <em>27 讲</em>',
  subtitle:'贯穿预紧力加载、振动冲击与失效分析，<br class="nvh-wide">掌握多种求解器下的工程仿真方法。',
  tags:['ABAQUS','LS-DYNA','OptiStruct'],
  overviewTitle:'从预紧力加载到螺栓失效分析',
  purchaseLabel:'螺栓加载 · 系统课程',
  introduction:'使用 ABAQUS / LS-DYNA / OptiStruct 多模块联合仿真解析螺栓振动冲击、热耦合及失效分析技术内容，全面覆盖螺栓仿真的相关领域和应用场景。',
  outcomes:[
    ['多求解器预紧力分析','掌握基于 OS、LS-DYNA、ABAQUS 等多种螺栓预紧力分析方法。'],
    ['螺栓松动仿真','掌握实际工程螺栓松动仿真方法。'],
    ['螺栓受力设置与读取','掌握实际工程螺栓受力的设置技巧与方法。'],
    ['螺栓断裂案例','通过实际螺栓断裂案例讲解，理解工程失效分析。']
  ],
  audience:['学习仿真的工程师','OS、ABAQUS 及 LS-DYNA 等学习者和使用者','理工科院校学生及老师','汽车及机械相关行业的从业者'],
  lessons:[
    '课程概述及背景','螺栓的失效案例','螺栓受力的仿真方法',
    '基于OS的螺栓预紧力分析方法1','基于OS的螺栓预紧力分析方法2',
    '基于Lsdyna螺栓预紧力分析方法1','基于Lsdyna螺栓预紧力分析方法2','基于Lsdyna螺栓预紧力分析方法3','基于Lsdyna螺栓预紧力分析方法4','基于Lsdyna螺栓预紧力分析方法5','基于Lsdyna螺栓预紧力分析方法6','基于Lsdyna螺栓预紧力分析方法7',
    '基于ABAQUS的螺栓预紧力分析方法1','基于ABAQUS的螺栓预紧力分析方法2','基于ABAQUS的螺栓预紧力分析方法3','基于ABAQUS的螺栓预紧力分析方法4','基于ABAQUS的螺栓预紧力分析方法5',
    '基于随机振动的螺栓松动分析1','基于随机振动的螺栓松动分析2','基于冲击工况的螺栓松动分析1','基于冲击工况的螺栓松动分析2',
    '基于ABAQUS的截面力设置技巧及读取方法','基于OS的截面力设置技巧及读取方法','基于Lsdyna的截面力设置技巧及读取方法','案例1&2：某车路试螺栓松动及某螺栓断裂'
  ],
  syllabusNote:'课程共 27 讲，已提供第 1–25 讲大纲，第 26–27 讲待补充。',
  cases:[
    {file:'beam-preload-output',label:'案例 01',title:'LS-DYNA 螺栓预紧力分析：BEAM 螺栓与刚性壳螺母',description:'课程示例展示梁单元输出设置、预紧力加载结果和位移云图，并说明轴向力、预紧力及接触力的核对方法。'},
    {file:'bolt-failure',label:'案例 02',title:'螺栓的典型失效案例',description:'课程示例介绍螺栓疲劳断裂的典型位置，以及危险截面的拉伸应力、扭转切应力与强度计算。'},
    {file:'preload-impact',label:'案例 03',title:'螺栓预紧力对冲击响应的影响',description:'课程示例对比 Z 向 25G 冲击下有无预紧力的响应，并展示位移、应力、加速度及接触状态结果。'}
  ]
};

const nvhModelingCourse = {
  breadcrumb:'整车 NVH · 建模与仿真',
  title:'全面讲解汽车 NVH 建模<br>及仿真方法与<em>技巧应用</em>',
  subtitle:'从总成建模规范到整车分析与优化，<br class="nvh-wide">掌握 HyperMesh 与 OptiStruct 的工程应用流程。',
  tags:['HyperMesh','OptiStruct','整车 NVH'],
  overviewTitle:'建立独立完成 TB 及整车 NVH 建模的能力',
  purchaseLabel:'整车 NVH · 建模与仿真',
  introduction:'本课程旨在帮助学习者掌握 HyperMesh 和 OptiStruct 在整车 NVH 仿真分析中的工作流程、注意事项及必备技能，了解国内主机厂的总成建模要求与网格划分标准规范。围绕软件应用以及 TB 和整车 NVH 建模中的难点进行讲解，帮助学习者具备独立建立 TB 及整车 NVH 模型的能力。',
  outcomes:[
    ['建模流程与软件操作','掌握 HyperMesh 和 OptiStruct 在整车 NVH 仿真分析中的工作流程、注意事项及必备技能，以及 HyperMesh 软件的基本操作和方法。'],
    ['OptiStruct 关键字设置','掌握 OptiStruct 整车 NVH 仿真分析中常见关键字的用法与设置。'],
    ['整车 NVH 优化','掌握整车 NVH 优化技巧和方法。'],
    ['整车超单元仿真','掌握整车超单元仿真方法及技巧。']
  ],
  audience:['学习仿真及测试的工程师','HyperWorks 软件的学习者和使用者','理工科院校学生及老师','汽车及机械相关行业的从业者'],
  lessons:[
    '整车NVH仿真分析概述及后期课程安排',
    '整车NVH模型建模1-总成建模要求及网格划分规范讲解',
    '整车NVH模型建模2-白车身及焊点焊缝胶粘模型处理方法',
    '整车NVH模型建模3-四门两盖模型的处理方法及难点',
    '整车NVH模型建模4-转向系统模型的处理方法及难点',
    '整车NVH模型建模5-座椅模型的处理方法及难点',
    '整车NVH模型建模6-内外饰模型处理方法及难点',
    '整车NVH模型建模7-密封条模型处理方法及难点',
    '整车NVH模型建模8-TB模型处理方法及include关键运用',
    '整车NVH模型建模9-减震器及弹簧模型处理方法及难点',
    '整车NVH模型建模10-动力总成模型处理方法及难点',
    '整车NVH模型建模11-传动轴系统模型处理方法及难点',
    '整车NVH模型建模12-轮胎模型处理方法及难点',
    '整车NVH模型建模13-整车模型装配处理方法及include关键运用',
    '整车NVH模型建模14-声腔模型处理方法及难点',
    '整车NVH仿真1-车身安装点动刚度分析及优化方法',
    '整车NVH仿真2-TB振动传递函数分析及优化方法',
    '整车NVH仿真3-TB噪声传递函数分析及优化方法',
    '整车NVH仿真4-整车模态分析及难点',
    '整车NVH仿真5-整车传递路径TPA分析方法及难点',
    '车身弯曲及扭转刚度目标值制定方法',
    '车身弯曲及扭转刚度分析方法',
    'BIP、TB及整车状态下弯曲及扭转刚度分析',
    '车身关键接头灵敏度分析及工程应用',
    '车身钣金灵敏度分析及工程应用',
    '基于Shrink Wrap的车身拓扑优化分析及工程应用',
    '基于Shell的车身拓扑优化分析及工程应用',
    '车身阻尼片潜在位置分析及工程应用',
    '整车模态超单元分析及工程应用',
    '整车频响函数超单元分析及工程应用'
  ],
  syllabusNote:'本次提供的大纲共 30 项，按资料顺序列示。原课程名称标注“31讲”，课程表数量为 33 讲；总讲数沿用课程表，其余大纲待补充核对。',
  cases:[
    {file:'nvh-workflow',label:'案例 01',title:'整车 NVH 分析工作内容与流程',description:'课程示例展示整车、TB、门盖系统及零部件的分析与优化工作，以及目标定义、模型标定和实车问题跟踪等环节。'},
    {file:'body-ipi',label:'案例 02',title:'白车身动刚度分析（IPI）',description:'课程示例介绍白车身动刚度分析的目的与方法，展示导纳、阻抗关系和安装点频率响应曲线。'},
    {file:'road-noise',label:'案例 03',title:'整车路噪分析与超单元计算',description:'课程示例展示整车路噪载荷、TPA 传递路径分析、响应优化及超单元计算结果对比。'}
  ]
};

const exhaustSystemCourse = {
  breadcrumb:'排气系统 · CAE 仿真',
  title:'汽车排气系统 CAE<br>仿真实战课 <em>14 讲</em>',
  subtitle:'从整体模态与强度到吊挂隔振，<br class="nvh-wide">掌握排气系统性能分析的方法与工程细节。',
  tags:['排气系统','CAE 仿真','工程实战'],
  overviewTitle:'系统掌握汽车排气系统 CAE 分析方法',
  purchaseLabel:'排气系统 · 系统课程',
  introduction:'课程围绕汽车排气系统的 CAE 分析展开，涵盖排气系统整体模态、强度分析及细节难点；吊钩动刚度、位置布置、静态及动态力、隔振分析；消音器及热端模态分析；吊耳刚度测试要求与细节；以及 ERD、EVD、RRD、运动包络和动力总成摆角分析等内容。',
  outcomes:[
    ['整体模态与强度分析','掌握汽车排气系统整体模态、强度分析及细节难点。'],
    ['吊钩布置与隔振分析','掌握汽车排气系统吊钩动刚度、位置布置、隔振等分析方法及细节。'],
    ['吊耳测试与部件模态','掌握汽车排气系统吊耳刚度测试、消音器及热端模态等分析方法及细节。'],
    ['工况分析与运动包络','掌握汽车排气系统 ERD、EVD、RRD、包络及动力总成摆角等分析方法及细节。']
  ],
  audience:['学习仿真及测试的工程师','排气系统的学习者和使用者','理工科院校学生及老师','汽车及机械相关行业的从业者'],
  lessons:[
    '汽车排气系统CAE分析介绍及系列课程规划',
    '汽车排气系统整体模态分析及细节难点',
    '汽车排气系统整体强度分析及细节难点',
    '汽车排气系统吊钩动刚度分析及细节',
    '汽车排气系统吊钩位置布置分析及细节',
    '汽车排气系统吊钩静态及动态力分析及细节',
    '汽车排气系统吊钩隔振分析及细节',
    '汽车排气系统消音器及热端模态分析及细节',
    '汽车排气系统吊耳刚度测试要求及细节',
    '汽车排气系统ERD分析及细节',
    '汽车排气系统EVD分析及细节',
    '汽车排气系统RRD分析及细节',
    '汽车排气系统运动包络分析及细节',
    '汽车排气系统动力总成摆角分析及细节'
  ],
  syllabusNote:'课程大纲依据课程资料录入，共 14 讲。',
  cases:[
    {file:'exhaust-analysis',label:'案例 01',title:'排气系统建模、吊挂测试与响应分析',description:'课程示例展示排气系统与吊挂布置、吊耳橡胶结构及刚度测试示意，并结合模型、位移响应曲线和局部应力结果介绍分析内容。'}
  ]
};

const gissmoCourse = {
  breadcrumb:'LS-DYNA · GISSMO 失效分析',
  title:'LS-DYNA 材料及结构<br>GISSMO 失效模型<br>工程案例应用实操 <em>51 讲</em>',
  subtitle:'从材料试验数据处理到失效模型关键字，<br class="nvh-wide">结合工程案例理解损伤累积与断裂分析。',
  tags:['LS-DYNA','GISSMO','材料与结构失效'],
  overviewTitle:'理解 GISSMO 失效模型，贯通数据处理与工程应用',
  purchaseLabel:'GISSMO · 失效模型实战',
  introduction:'GISSMO 是一种唯象损伤力学模型，通过非线性损伤累积描述材料从变形到破坏的过程，而不追究损伤的物理背景与材料内部微观结构变化。模型考虑不同应力状态下的失效应变、应变路径对失效的影响及非线性损伤累积，适用于超高强钢板材在复杂工况下的断裂行为表征。课程围绕应力三轴度、失效应变、不稳定性应变、损伤累积指数、应力退化指数、软化指数、中面失效、应变率及网格尺寸等理论与参数展开，结合材料数据处理、关键字设置和案例解读，介绍 GISSMO 的应用方法。',
  outcomes:[
    ['常用材料与使用方法','掌握 LS-DYNA 常用材料的特性及使用方法。'],
    ['MAT_ADD_EROSION 关键字','掌握 MAT_ADD_EROSION 关键字的使用方法和技巧。'],
    ['拉伸数据处理与拟合','掌握金属材料拉伸数据处理及拟合方法、技巧和流程。'],
    ['GISSMO 理论与关键字','掌握 GISSMO 失效模型理论及详细关键字的含义与应用。']
  ],
  audience:['学习仿真及测试的工程师','LS-DYNA 软件的学习者和使用者','理工科院校学生及老师','汽车及机械相关行业的从业者'],
  lessons:[
    '前言1-2','Giss*o模型背景','Lsdyna材料专题','金属材料力学知识',
    '失效模型类型1','失效模型类型2','ADD EROSION相关基础知识1','ADD EROSION相关基础知识2',
    'Giss*o相关基础知识1','Giss*o相关基础知识2','Giss*o相关基础知识3',
    '试验工况1','试验工况2','材料拟合1','材料拟合2','应力三轴度','罗德角','应变率','损伤概念','历史变量',
    'DTYP','基础分析1','基础分析2','基础分析3','lsopt1','lsopt2','lsopt3',
    'REFSZ','NUMFIP','LCSDG','ECRIT','DMGEXP','DCRIT','FADEXP','LCREGD','LCSRS',
    'SHRF_BIAXF','LCDLIM','MIDFAIL','HISVN','SOFT','LP2BI','关键字小结2','关键字小结2',
    '失效验证','案例解读1','案例解读2','总结'
  ].map((title,index)=>`GISSMO失效模型专题${index+1}-${title}`),
  syllabusNote:'本次提供的大纲共 48 课，按资料顺序录入；第 43、44 课均标注为“关键字小结2”，按原稿保留。课程名称标注“51讲”，原课程表数量为 52 讲、时长 23 小时 10 分钟；本次简介标注 48 节、近 20 小时。页面总讲数和时长沿用原课程表，其余内容待补充核对。',
  cases:[
    {file:'vehicle-impact',label:'案例 01',title:'汽车碰撞与结构变形',description:'课程示例展示汽车碰撞试验中的车身结构变形，说明材料与结构失效分析的工程应用背景。'},
    {file:'fracture-comparison',label:'案例 02',title:'结构断裂试验与仿真对比',description:'课程示例并列展示结构断裂的实物图与仿真结果，观察局部变形和断裂形态。'},
    {file:'gissmo-validation',label:'案例 03',title:'GISSMO 失效模型与试验曲线对比',description:'课程示例展示试样模型，以及 GISSMO、CAE_base 与 TEST 曲线的对比。'},
    {file:'mesh-regularization',label:'案例 04',title:'LCREGD 与单元尺寸归一化',description:'课程示例展示不同单元尺寸下的响应曲线，以及单元尺寸归一化前后的结果对比。'}
  ]
};

const roadNoiseCourse = {
  breadcrumb:'整车 NVH · 路噪仿真与优化',
  title:'整车路噪仿真及优化<br>实战应用 <em>41 讲</em>',
  subtitle:'从路面谱与载荷处理到传递路径分析，<br class="nvh-wide">结合实际项目掌握整车路噪仿真与优化方法。',
  tags:['整车路噪','TPA 分析','仿真与优化'],
  overviewTitle:'贯通路噪理论、仿真流程与工程优化',
  purchaseLabel:'整车路噪 · 实战课程',
  introduction:'全面讲解汽车路噪工程仿真及优化技术，涵盖理论、路谱、建模方法与技巧、数据处理、优化方法与技巧、路噪仿真方法、噪声及优化策略。课程将理论与实际相结合，注重实际项目的实战应用。',
  outcomes:[
    ['整车路噪分析流程','掌握整车路噪仿真分析的工作流程、注意事项及必备技能。'],
    ['路面谱程序建模','掌握路面谱的程序建模方法和技巧。'],
    ['基于路面谱的路噪仿真','掌握基于路面谱的路噪仿真方法、技巧和流程。'],
    ['实测载荷处理与仿真','掌握实际路谱载荷的轮心力数据处理、仿真方法、技巧和流程。'],
    ['路噪分析基础理论','掌握路噪仿真中模态、动刚度、隔振、NTF 及 ODS 等相关基础理论。']
  ],
  audience:['学习仿真及测试的工程师','对路噪仿真及解决路噪感兴趣的朋友','理工科院校学生及老师','汽车及机械相关行业的从业者'],
  lessons:[
    '整车路噪分析及系列课程简介',
    '整车Road-Noise基础',
    '整车Road-Noise影响因素',
    '整车路噪仿真方法',
    '整车路噪之平顺性相关及应用',
    '路面不平度程序编写',
    '路面不平度FFT转换及程序编写',
    '路面PSD转换及程序编写',
    '整车路噪仿真方法1及应用',
    '整车路噪仿真方法2及应用',
    '整车路噪仿真方法3及应用',
    '整车路噪仿真方法4实际路谱的整车路噪试验',
    '整车路噪仿真方法4路谱采集及处理',
    '整车路噪仿真方法4传递函数计算',
    '整车路噪仿真方法4轮心力载荷提取',
    '整车路噪仿真方法4仿真与试验对比',
    '整车路噪仿真方法4整车路噪TPA分析方法一',
    '整车路噪仿真方法4整车路噪TPA分析方法二',
    '基于Testlab的路谱采集及要求',
    '基于Testlab的载荷识别及TPA处理方法',
    '基于Spindle单位力的整车路噪分析',
    '基于Virtulab的实际载荷整车路噪分析',
    '整车路噪优化方法之模态的重要性',
    '整车路噪优化方法之轮胎侧向刚度',
    '整车路噪优化方法之动刚度与隔振率',
    '整车路噪优化方法之NTF及OSD重要性',
    '整车路噪拓扑优化',
    '整车路噪DSA厚度属性优化方法',
    '整车路噪DSA衬套刚度优化方法1',
    '整车路噪DSA衬套刚度优化方法2',
    '整车路噪优化方法案例汇总及解析1',
    '整车路噪优化方法案例汇总及解析2',
    '整车路噪优化方法案例汇总及解析3',
    '整车路噪优化方法案例汇总及解析4',
    '整车路噪优化方法案例汇总及解析5',
    '整车路噪优化方法案例汇总及解析6',
    '整车路噪优化方法案例汇总及解析7',
    '整车路噪优化方法案例汇总及解析8',
    '整车路噪优化方法案例汇总及解析9',
    '整车路噪优化方法案例汇总及解析10',
    '整车路噪涉及相关专著'
  ],
  syllabusNote:'本次提供的大纲共 41 课，与课程名称“41讲”一致；原课程表数量为 42 讲，页面总讲数沿用原课程表，第 42 讲大纲待补充核对。第 26 课中的“OSD”按大纲原稿保留。',
  cases:[
    {file:'topology-response',label:'案例 01',title:'车身拓扑优化与频率响应对比',description:'课程示例展示车身单元密度分布，以及 9001、9003 响应点的 base 与 topo 曲线对比。'},
    {file:'tpa-contributions',label:'案例 02',title:'路噪传递路径贡献分析',description:'课程示例展示各路径贡献的柱状图、频率分布及矢量关系，辅助分析不同路径对总响应的贡献。'},
    {file:'psd-spectrum',label:'案例 03',title:'路噪 PSD 与频谱结果对比',description:'课程示例展示 9001 响应点的 AutoPower PSD 与 spectrum 曲线，用于对比不同频率下的响应特征。'}
  ]
};

const isolationCourse = {
  breadcrumb:'汽车 NVH · 隔振分析',
  title:'汽车 NVH 之隔振分析<br>与行用进阶 <em>7 讲</em>',
  subtitle:'从单、两自由度模型到 Mobility 与 IPI，<br class="nvh-wide">理解隔振原理，掌握实际工程中的分析方法。',
  tags:['NVH 隔振','Mobility','CAE 对标分析'],
  overviewTitle:'将隔振理论与实际工程分析相结合',
  purchaseLabel:'汽车隔振 · 理论与应用',
  introduction:'系统讲解 NVH 隔振原理及实际工程应用技巧，围绕 NVH 隔振原理与应用过程中遇到的难点展开。从单自由度、两自由度理论及 CAE 对标分析出发，介绍隔振基础理论、Mobility、动刚度和 IPI 的关系，以及实际工程中的应用方法。',
  outcomes:[
    ['自由度理论与 CAE 对标','掌握汽车单自由度及两自由度理论，以及 CAE 对标分析方法。'],
    ['隔振分析基础理论','掌握汽车隔振分析相关基础理论。'],
    ['Mobility 理论基础','掌握汽车隔振分析 Mobility 理论基础。'],
    ['实际工程中的隔振应用','掌握汽车隔振分析在实际工程中的应用。']
  ],
  audience:['学习型仿真工程师','对模态分析及识别感兴趣的仿真工程师及设计师','理工科院校学生及老师','汽车及机械相关行业的从业者'],
  lessons:[
    {title:'汽车隔振分析简介',points:['隔振分析的目的和原理','常见的隔振分析方法简介及课程安排']},
    {title:'汽车单自由度理论及CAE分析',points:['常见隔振的分类','单自由度动力方程推导及频率演算','单自由度仿真模型建立关键设置流程','单自由度仿真结果评判与理论对比细节']},
    {title:'汽车两自由度理论及CAE分析',points:['两自由度的数学模型建立','两自由度动力方程推导及频率演算','两自由度仿真模型建立关键设置流程','两自由度仿真结果评判与理论对比细节']},
    {title:'汽车隔振分析相关基础理论',points:['隔振的理论基础','基于单自由度强迫动力方程推导','基于单自由度的重要三条线定义及意义','基于单自由度强迫方程仿真模型建立关键设置流程','基于单自由度的隔振原理详细讲解','结合隔振的实际工程优化方向']},
    {title:'汽车隔振分析Mobility理论基础',points:['隔振分析Mobility理论基础','隔振分析Mobility的公式推导','隔振分析Mobility的应用价值和意义','隔振分析Mobility的工程应用']},
    {title:'汽车隔振分析动刚度基础',points:['动刚度分析的意义','动刚度的公式推导','动刚度仿真模型建立关键设置流程','动刚度结果处理细节及流程']},
    {title:'汽车隔振、Mobility与IPI之间的关系',points:['振动的基本方程及关键参数意义','隔振与IPI的关联和意义','Mobility与IPI的关联和意义','隔振、Mobility与IPI之间的工程应用场景']},
    {title:'汽车隔振分析在实际工程中的应用',points:['Mobility仿真模型建立关键设置流程','Mobility仿真模型结果处理流程','基于Mobility的隔振应用方法','基于Mobility的隔振优化方法']}
  ],
  syllabusNote:'课程名称沿用“7讲”；本次提供的大纲包含 8 讲、32 项知识要点，与原课程表的 8 讲一致，已完整列示。',
  cases:[
    {file:'two-dof-model',label:'案例 01',title:'两自由度数学模型与 CAE 模型',description:'课程示例并列展示质量、弹簧和阻尼组成的数学模型与 CAE 模型，帮助理解模型参数之间的对应关系。',compact:true},
    {file:'isolation-response',label:'案例 02',title:'隔振响应曲线与特征频率',description:'课程示例展示多组响应曲线，以及共振峰、零分贝交点和负 20 分贝位置等特征标记。'},
    {file:'bushing-design',label:'案例 03',title:'衬套刚度与限位结构设计',description:'课程示例展示衬套结构、刚度随位移变化的关系，以及软衬套、橡胶限位和运动限位的布置。'},
    {file:'mobility-comparison',label:'案例 04',title:'Mobility 响应与隔振方案对比',description:'课程示例对比车架侧、动总侧及不同隔振方案的频率响应，并突出约 300 Hz 附近的响应特征。'}
  ]
};

const superelementCourse = {
  breadcrumb:'超单元方法 · 产品开发仿真',
  title:'各种超单元法在产品开发<br>仿真应用及实战技巧 <em>40 讲</em>',
  subtitle:'从缩聚理论到多求解器工程应用，<br class="nvh-wide">掌握超单元建模、结果分析与问题解决方法。',
  tags:['超单元方法','产品开发','附学习模型'],
  overviewTitle:'建立独立应用超单元开展工程仿真的能力',
  purchaseLabel:'超单元方法 · 工程实战',
  introduction:'掌握超单元在产品开发各类仿真中的应用，学习独立建立超单元模型、开展仿真分析和快速解决问题的方法，形成超单元工程应用能力。',
  outcomes:[
    ['基础理论与适用场景','掌握超单元的相关基础理论、方法差异及应用场景。'],
    ['模态与振动分析','掌握不同超单元方法在模态、振动等分析中的应用技巧和流程。'],
    ['多求解器应用','掌握不同超单元方法在 ABAQUS、NASTRAN、LS-DYNA 等分析中的应用技巧和流程。'],
    ['整车 TPA 与结果解读','掌握整车超单元传递路径 TPA 分析及结果后处理方法，正确解读整车 NVH 仿真结果，提出合理的结构改进建议。']
  ],
  audience:['学习型仿真工程师','对超单元感兴趣的仿真工程师及设计师','理工科院校学生及老师','汽车及机械相关行业的从业者'],
  lessons:[
    {chapter:'第一章 · 超单元法与课程安排',title:'超单元的系列课程介绍及安排',points:['超单元法定义','超单元法的意义','各个章节内容总体介绍','超单元系列课程安排']},
    {chapter:'第二章 · 超单元法的理论基础专题',title:'超单元的相关理论基础1',points:['超单元基本概念','超单元的动力学方程形式','超单元的静力缩聚理论','超单元的动力缩聚理论']},
    {title:'超单元的相关理论基础2',points:['超单元法概念','超单元基本术语','超单元常用缩聚类型','超单元静力缩聚方法1','超单元静力缩聚方法2','超单元动力缩聚方法','超单元的使用方法']},
    {title:'超单元的相关理论基础3',points:['OS中内部超单元的定义','OS中超单元静力缩聚理论','OS中超单元动力缩聚理论','OS中超单元的使用方法','OS中超单元案例节选']},
    {chapter:'第三章 · 关键字应用',title:'超单元关键字的详解和差异对比',points:['超单元的分类','超单元常见界面定义关键字详细说明','模态超单元关键字详细说明','动力超单元关键字详细说明']},
    {chapter:'第四章 · 静力学应用',title:'超单元在静力学分析中的应用方法1',points:['操作案例说明','静力超单元缩聚方法1关键字说明','静力超单元缩聚方法1详细创建流程','静力超单元缩聚方法1超单元与残余结构静力计算','静力超单元缩聚方法1结果对比']},
    {title:'超单元在静力学分析中的应用方法2',points:['操作案例说明','静力超单元缩聚方法2关键字说明','静力超单元缩聚方法2详细创建流程','静力超单元缩聚方法2超单元与残余结构静力计算','静力超单元缩聚方法2结果对比']},
    {title:'超单元在静力学分析中的应用方法3',points:['操作案例说明','静力超单元缩聚其余方法关键字说明','静力超单元缩聚其余方法详细创建流程','静力超单元缩聚其余方法超单元结果对比及适用性','静力超单元缩聚其余方法超单元与残余结构静力计算','静力超单元中界面定义对静力缩聚的影响']},
    {title:'超单元在静力学分析中的应用方法4',points:['操作案例说明','静力超单元缩聚方法4关键字说明','静力超单元缩聚方法4详细创建流程','静力超单元缩聚方法4超单元与残余结构静力计算过程','静力超单元缩聚方法4结果对比']},
    {chapter:'第五章 · 拓扑优化应用',title:'超单元在拓扑优化中的应用',points:['操作案例说明','拓扑中超单元的详细创建过程','基于超单元的拓扑优化详细操作过程','完整模型的计算及结果','基于超单元的拓扑优化结果与完整结果对比']},
    {chapter:'第六章 · 模态分析',title:'超单元在模态分析中的应用方法1',points:['操作案例说明','模态分析中超单元方法1的关键字说明','模态分析中超单元方法1的详细创建流程','模态分析中超单元方法1与残余结构计算过程','模态分析中超单元方法1结果查看及对比']},
    {title:'超单元在模态分析中的应用方法2',points:['操作案例说明','模态分析中超单元方法2的关键字说明','模态分析中超单元方法2的详细创建流程','模态分析中超单元方法2与残余结构计算过程','模态分析中超单元方法2结果查看及对比','模态分析中超单元其余方法的结果查看及适用性']},
    {chapter:'第七章 · 随机振动',title:'超单元在随机振动中的应用方法',points:['操作案例说明','随机振动的基本理论及关键字说明','随机振动中超单元方法1的详细创建流程','随机振动中超单元方法1与残余结构计算过程','随机振动中超单元方法1的结果查看及对比','随机振动中超单元其余方法的结果查看及适用性']},
    {chapter:'第八章 · 整车传递路径分析',title:'超单元在整车传递路径分析中的应用方法1',points:['整车传递路径分析的基本概念','整车传递路径中超单元创建方法1的关键字说明','整车传递路径中超单元创建方法1的详细创建流程','整车传递路径中超单元创建方法1与残余结构计算过程','基于超单元创建方法1的整体传递路径结果查看']},
    {title:'超单元在整车传递路径分析中的应用方法2',points:['整车传递路径分析中模型分组方法和注意事项','整车传递路径中超单元创建方法2的不同创建流程说明','整车传递路径中超单元创建方法2的关键字说明','整车传递路径中超单元创建方法2的详细创建流程','整车传递路径中超单元创建方法2与残余结构计算过程']},
    {title:'超单元在整车传递路径分析中的应用方法3',points:['整车传递路径分析方法3中模型分组方法和注意事项','整车传递路径分析方法3的传递函数详细创建流程','超单元在整车传递路径分析方法3的连接力详细创建流程','基于超单元的整车传递路径分析方法3的结果查看流程','基于超单元的采用不同方法的整车传递路径分析结果对比']},
    {chapter:'第九章 · 动力学分析',title:'超单元在动力学的建立过程',points:['案例操作说明','超单元方法1在动力学的关键字说明','超单元方法1在动力学的详细创建流程','超单元方法2在动力学的详细创建流程','超单元在动力学的结果查看']}
  ],
  syllabusNote:'课程共 40 讲。本次提供的截图包含 9 章、第 1–17 讲及 87 项知识要点，已按原稿完整列示；第 18–40 讲大纲待补充。',
  cases:[
    {file:'vehicle-model',label:'案例 01',title:'整车仿真模型展示',description:'课程示例展示整车模型及各部件的划分，为整车超单元分析的工程应用提供模型背景。'},
    {file:'full-sub-response',label:'案例 02',title:'完整模型与子模型响应对比',description:'课程示例展示 full 与 sub 两组模型的 Y 向力时程曲线，比较响应趋势与局部差异。'},
    {file:'cms-methods',label:'案例 03',title:'超单元缩聚方法与界面条件',description:'课程示例介绍 Craig-Bampton、Craig-Chang 及混合模式，展示 CMSMETH 参数和固定界面、自由界面的差异。'},
    {file:'abaqus-submodel',label:'案例 04',title:'Abaqus 子模型技术与适用场景',description:'课程示例对比基于节点与基于曲面的子模型技术，并列出 BC-Submodel、Load-Submodel 设置及应用条件。'}
  ]
};

const courseDetails = {'1':nvhCoreCourse,'2':boltCoreCourse,'3':nvhModelingCourse,'4':exhaustSystemCourse,'5':gissmoCourse,'6':roadNoiseCourse,'7':isolationCourse,'9':superelementCourse};

function courseLessonContent(lesson){
  if(typeof lesson==='string')return `<span>${lesson}</span>`;
  return `<div class="nvh-lesson-content">${lesson.chapter?`<div class="nvh-lesson-chapter">${lesson.chapter}</div>`:''}<strong>${lesson.title}</strong><ol class="nvh-knowledge">${lesson.points.map(point=>`<li>${point}</li>`).join('')}</ol></div>`;
}

function courseDetailPage(id){
  const course=courseCatalog.find(c=>String(c.id)===id);
  const detail=Object.hasOwn(courseDetails,id)?courseDetails[id]:null;
  if(!course||!detail){
    document.title='课程未找到 · CAE之家';
    main.innerHTML='<section class="empty"><h1>暂未找到这门课程</h1><a class="primary" href="#courses">返回付费课程</a></section>';
    return;
  }
  document.title=`${course.name} · CAE之家`;
  const courseLink=(text,classes='primary')=>`<a class="${classes}" href="${course.url}" target="_blank" rel="noopener noreferrer">${text} ↗</a>`;
  main.innerHTML=`<div class="nvh-page">
    <div class="nvh-breadcrumb"><a href="#courses">付费课程</a><span>/</span><span>${detail.breadcrumb}</span></div>
    <section class="nvh-hero" aria-labelledby="nvh-title">
      <div class="nvh-hero-copy"><div class="eyebrow">CAE ACADEMY / 系统课程</div><h1 id="nvh-title">${detail.title}</h1><p>${detail.subtitle}</p><div class="nvh-tags">${detail.tags.map(tag=>`<span>${tag}</span>`).join('')}</div><div class="nvh-hero-meta"><span><b>${course.lessons}</b> 讲课程</span><span><b>${courseDuration(course.minutes)}</b></span><span class="nvh-rating">★ ${course.rating} <small>课程评分</small></span></div></div>
      <div class="nvh-hero-cover"><img src="assets/courses/cover-${course.id}.webp" alt="${course.name}课程封面" width="960" height="540"><div><span>从理论理解到分析流程</span><span>CORE TECHNIQUES / ${course.lessons}</span></div></div>
    </section>
    <div class="nvh-layout"><div class="nvh-content">
      <div class="nvh-section-nav" role="navigation" aria-label="课程内容导航"><button data-nvh-section="nvh-overview">课程介绍</button><button data-nvh-section="nvh-gains">学习收获</button><button data-nvh-section="nvh-examples">案例展示</button><button data-nvh-section="nvh-syllabus">课程大纲 <span>${course.lessons}</span></button></div>
      <section class="nvh-section" id="nvh-overview"><div class="nvh-section-label">01 / OVERVIEW</div><h2>${detail.overviewTitle}</h2><p>${detail.introduction}</p><h3>适合谁来学习？</h3><ul class="nvh-audience">${detail.audience.map(a=>`<li><span aria-hidden="true">✓</span>${a}</li>`).join('')}</ul></section>
      <section class="nvh-section" id="nvh-gains"><div class="nvh-section-label">02 / WHAT YOU WILL LEARN</div><h2>你将收获</h2><div class="nvh-outcomes">${detail.outcomes.map((o,i)=>`<article><span class="nvh-outcome-number">0${i+1}</span><div><h3>${o[0]}</h3><p>${o[1]}</p></div></article>`).join('')}</div></section>
      <section class="nvh-section" id="nvh-examples"><div class="nvh-section-label">03 / ENGINEERING CASES</div><h2>让分析方法落到工程案例</h2><p>以下图片来自课程资料，点击可放大查看。</p>${detail.cases.map(c=>`<figure class="nvh-case"><button class="nvh-case-image${c.compact?' nvh-case-compact':''}" data-nvh-image="${c.file}" aria-label="放大案例：${c.title}"><img src="assets/course-${course.id}/${c.file}.webp" alt="${c.title}案例图" loading="lazy"><span>查看大图 ↗</span></button><figcaption><span>${c.lesson?`LESSON ${c.lesson}`:c.label}</span><h3>${c.title}</h3><p>${c.description}</p></figcaption></figure>`).join('')}</section>
      <section class="nvh-section" id="nvh-syllabus"><div class="nvh-section-label">04 / COURSE SYLLABUS</div><div class="nvh-syllabus-heading"><h2>课程大纲</h2><span>共 ${course.lessons} 讲 · ${courseDuration(course.minutes)}</span></div><ol class="nvh-lessons">${detail.lessons.map((lesson,i)=>`<li><span class="nvh-lesson-number">${String(i+1).padStart(2,'0')}</span>${courseLessonContent(lesson)}<span class="nvh-lesson-type">视频课程</span></li>`).join('')}</ol><p class="nvh-source-note">${detail.syllabusNote}</p></section>
    </div><aside class="nvh-purchase" aria-label="课程学习与购买"><div class="nvh-purchase-label">${detail.purchaseLabel}</div><div class="nvh-price"><span>¥</span>${course.price.toLocaleString('en-US')}<small>课程售价</small></div><dl><div><dt>课程数量</dt><dd>${course.lessons} 讲</dd></div><div><dt>课程时长</dt><dd>${courseDuration(course.minutes)}</dd></div><div><dt>课程评分</dt><dd class="nvh-rating">★ ${course.rating}</dd></div><div><dt>学习平台</dt><dd>仿真秀</dd></div></dl>${courseLink('前往仿真秀学习 / 购买')}<a class="nvh-contact" href="${courseInquiry(course)}">咨询课程</a><p class="nvh-purchase-note">在仿真秀查看课程及购买详情，实际售价与服务以平台页面为准。</p><div class="nvh-help"><strong>学习前有疑问？</strong><p>联系 CAE之家</p><a href="mailto:252989277@qq.com">252989277@qq.com</a></div></aside></div>
    <div class="nvh-bottom"><div><strong>把工程经验，转化为自己的分析能力。</strong><p>${course.name}</p></div>${courseLink('查看官方课程')}</div>
    <div class="course-back-row"><a class="course-back" href="#courses"><span aria-hidden="true">←</span>返回课程列表</a></div>
    <dialog class="nvh-lightbox" aria-label="课程案例大图"><button class="nvh-lightbox-close" aria-label="关闭大图">×</button><img alt=""><div><span id="nvh-image-caption"></span><a target="_blank" rel="noopener noreferrer">打开原图 ↗</a></div></dialog>
  </div>`;
  document.querySelectorAll('[data-nvh-section]').forEach(button=>button.onclick=()=>document.getElementById(button.dataset.nvhSection).scrollIntoView({behavior:'smooth',block:'start'}));
  const lightbox=document.querySelector('.nvh-lightbox');
  document.querySelector('.nvh-lightbox-close').onclick=()=>lightbox.close();
  lightbox.onclick=e=>{if(e.target===lightbox){const r=lightbox.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)lightbox.close();}};
  document.querySelectorAll('[data-nvh-image]').forEach(button=>button.onclick=()=>{
    const example=detail.cases.find(c=>c.file===button.dataset.nvhImage);
    const source=`assets/course-${course.id}/${example.file}.png`;
    const image=lightbox.querySelector('img');image.src=source;image.alt=example.title;
    lightbox.querySelector('a').href=source;
    document.querySelector('#nvh-image-caption').textContent=`${example.lesson?`第 ${example.lesson} 讲`:example.label} · ${example.title}`;
    lightbox.showModal();
  });
}
