// utils/data.js

// 五大能力模块定义
const MODULES = [
  {
    key: 'exhibit',
    name: '展品原理知识',
    icon: '🔬',
    color: '#e94560',
    desc: '理解展品科学原理，建立知识网络',
    tasks: [
      { type: 'A', name: '原理拆解练习', desc: '拆解展品原理到基础定律层级' },
      { type: 'B', name: '知识关联练习', desc: '建立展品与日常、前沿的关联网络' },
      { type: 'C', name: '深度讲解练习', desc: '面对特定受众进行60秒讲解' }
    ],
    dimensions: ['原理准确性', '深度适配', '关联丰富度', '表达清晰度', '互动设计']
  },
  {
    key: 'guide',
    name: '辅导词写作',
    icon: '📝',
    color: '#0f3460',
    desc: '撰写展厅讲解词、主题串联词',
    tasks: [
      { type: 'A', name: '单件展品辅导词', desc: '写一段3分钟讲解词' },
      { type: 'B', name: '主题串联辅导词', desc: '串联3-5件展品' },
      { type: 'C', name: '辅导词改写', desc: '将学术化文字改写成口语化辅导词' }
    ],
    dimensions: ['开头吸引力', '逻辑递进', '语言口语化', '互动设计', '结尾力度', '时长控制']
  },
  {
    key: 'experiment',
    name: '科学实验设计',
    icon: '⚗️',
    color: '#52c41a',
    desc: '设计可操作的科普实验',
    tasks: [
      { type: 'A', name: '实验方案设计', desc: '设计可现场操作的验证实验' },
      { type: 'B', name: '实验方案评估', desc: '评估实验的可行性和安全性' },
      { type: 'C', name: '操作讲解同步', desc: '写出操作与讲解精确同步的脚本' }
    ],
    dimensions: ['科学准确性', '现象可见性', '时间可控性', '材料安全性', '互动性', '可复现性']
  },
  {
    key: 'drama',
    name: '科普短剧/表演',
    icon: '🎭',
    color: '#faad14',
    desc: '编写科普剧脚本、舞台呈现',
    tasks: [
      { type: 'A', name: '科学叙事提取', desc: '从科学发现中提取戏剧冲突' },
      { type: 'B', name: '短剧脚本片段', desc: '写一段5-8分钟短剧脚本' },
      { type: 'C', name: '表演点评', desc: '评估科普表演的戏剧性和科学性' }
    ],
    dimensions: ['科学性', '戏剧性', '角色立体度', '舞台可行性', '观众参与', '时长控制']
  },
  {
    key: 'activity',
    name: '科学课程/活动',
    icon: '🎯',
    color: '#722ed1',
    desc: '设计教育活动和课程方案',
    tasks: [
      { type: 'A', name: '完整方案设计', desc: '输出完整教育活动方案' },
      { type: 'B', name: '活动片段设计', desc: '聚焦设计一个具体环节' },
      { type: 'C', name: '方案评估优化', desc: '评估方案的教育性和可行性' }
    ],
    dimensions: ['目标清晰度', '逻辑连贯性', '互动丰富度', '时间合理性', '材料可行性', '评估完整性', '安全考量']
  }
];

// 训练题库（示例）
const QUESTIONS = {
  exhibit: {
    A: [
      {
        exhibit: '电磁弹射展品',
        task: '请完成以下原理拆解：\n1. 核心科学原理（一句话）\n2. 涉及的基础定律/公式（列出）\n3. 日常生活中的3个类比案例\n4. 观众最常见的1个误解及纠正方式'
      },
      {
        exhibit: '牛顿摆展品',
        task: '请完成以下原理拆解：\n1. 核心科学原理（一句话）\n2. 涉及的基础定律/公式（列出）\n3. 日常生活中的3个类比案例\n4. 观众最常见的1个误解及纠正方式'
      }
    ],
    B: [
      {
        exhibit: '光纤通信展品',
        task: '请为光纤通信展品建立知识网络：\n• 向上关联：该原理在哪个前沿领域有应用？\n• 横向关联：同原理的其他展品有哪些？\n• 向下关联：该原理的日常现象有哪些？'
      }
    ],
    C: [
      {
        exhibit: '万有引力展品',
        audience: '8岁儿童',
        task: '请模拟面对8岁儿童进行60秒讲解。要求：开头用现象或问题引入，中间讲核心原理，结尾留一个思考题。'
      },
      {
        exhibit: 'DNA双螺旋展品',
        audience: '高中生',
        task: '请模拟面对高中生进行60秒讲解。要求：开头用现象或问题引入，中间讲核心原理，结尾留一个思考题。'
      }
    ]
  },
  guide: {
    A: [
      {
        exhibit: '特斯拉线圈展品',
        duration: '3分钟',
        task: '请为特斯拉线圈展品写一段3分钟讲解词（约600-800字）。必须包含：现象引入 → 原理揭示 → 互动提问 → 生活关联 → 结尾升华。'
      }
    ],
    B: [
      {
        exhibits: ['水循环展品', '云室展品', '降雨模拟展品'],
        theme: '水的旅程',
        task: '请以上述3件展品写一段主题串联讲解，主题为"水的旅程"。必须找到展品间的逻辑主线。'
      }
    ],
    C: [
      {
        original: '法拉第电磁感应定律指出，当穿过闭合回路的磁通量发生变化时，回路中会产生感应电动势，其大小与磁通量变化率成正比，数学表达式为ε = -dΦ/dt。该定律是电磁学的重要基础，广泛应用于发电机、变压器等设备中。',
        task: '请将上述学术化文字改写成口语化、有节奏感的辅导词，适合科技馆现场讲解。'
      }
    ]
  },
  experiment: {
    A: [
      {
        principle: '大气压强',
        task: '请为"大气压强"原理设计一个可现场操作的验证实验。输出：实验名称、目标、材料清单、步骤、预期现象、安全注意。'
      }
    ],
    B: [
      {
        scenario: '某辅导员设计了一个用液氮做冰淇淋的实验，让观众品尝。',
        task: '请评估上述实验方案的可行性、安全性和教育性，给出改进建议。'
      }
    ],
    C: [
      {
        experiment: '覆杯实验（证明大气压存在）',
        task: '请写出"覆杯实验"的操作+解说同步脚本。要求每步操作对应一句讲解，动作与语言精确同步。'
      }
    ]
  },
  drama: {
    A: [
      {
        discovery: '青霉素的发现（弗莱明）',
        task: '请从青霉素的发现历史中提取戏剧冲突点：\n• 主角是谁？他的困境/欲望是什么？\n• 对手是谁？\n• 转折点在哪里？\n• 结局是什么？'
      }
    ],
    B: [
      {
        concept: '光的波粒二象性',
        duration: '5-8分钟',
        task: '请围绕"光的波粒二象性"写一段短剧脚本。包含：角色表、场景设定、对话、舞台指示、科学点嵌入位置。'
      }
    ],
    C: [
      {
        description: '一段科普表演：演员穿着白大褂，戴着眼镜，拿着试管，用平淡的语气说"大家好，今天我们来学习酸碱中和反应..."',
        task: '请评估上述科普表演的戏剧性和科学性，指出问题并给出改进建议。'
      }
    ]
  },
  activity: {
    A: [
      {
        topic: '彩虹的形成',
        audience: '小学生（8-10岁）',
        duration: '60分钟',
        task: '请为"彩虹的形成"主题设计一个完整的60分钟教育活动方案，适合8-10岁小学生。'
      }
    ],
    B: [
      {
        phase: '导入环节',
        topic: '静电现象',
        duration: '3分钟',
        task: '请设计"静电现象"活动的导入环节。要求：在3分钟内抓住注意力，引发好奇心。'
      }
    ],
    C: [
      {
        plan: `活动名称：火山喷发模拟
时长：45分钟
流程：1.讲解火山知识(20分钟) 2.用小苏打和醋模拟喷发(15分钟) 3.总结(10分钟)
材料：小苏打、醋、红色颜料、瓶子`,
        task: '请评估上述活动方案的教育性和可行性，给出具体改进建议。'
      }
    ]
  }
};

// 生成模板
const TEMPLATES = {
  exhibit: {
    name: '展品知识包',
    fields: [
      { key: 'exhibitName', label: '展品名称', type: 'input', placeholder: '如：电磁弹射展品' },
      { key: 'principle', label: '核心原理', type: 'input', placeholder: '如：电磁感应 + 洛伦兹力' },
      { key: 'audience', label: '目标受众', type: 'picker', options: ['儿童(6-10)', '青少年(11-15)', '成人', '家庭'] }
    ]
  },
  guide: {
    name: '辅导词',
    fields: [
      { key: 'exhibitName', label: '展品/主题', type: 'input', placeholder: '如：特斯拉线圈' },
      { key: 'duration', label: '目标时长', type: 'picker', options: ['1分钟', '3分钟', '5分钟', '10分钟'] },
      { key: 'audience', label: '目标受众', type: 'picker', options: ['儿童', '青少年', '成人', '混合'] }
    ]
  },
  experiment: {
    name: '实验方案',
    fields: [
      { key: 'principle', label: '对应原理', type: 'input', placeholder: '如：大气压强' },
      { key: 'duration', label: '目标时长', type: 'picker', options: ['5分钟', '10分钟', '15分钟', '20分钟'] },
      { key: 'type', label: '实验类型', type: 'picker', options: ['验证型', '探究型', '演示型'] }
    ]
  },
  drama: {
    name: '科普短剧脚本',
    fields: [
      { key: 'theme', label: '科学主题', type: 'input', placeholder: '如：光的波粒二象性' },
      { key: 'duration', label: '目标时长', type: 'picker', options: ['5分钟', '8分钟', '10分钟', '15分钟'] },
      { key: 'actors', label: '演员人数', type: 'picker', options: ['1人', '2人', '3人', '4人+'] }
    ]
  },
  activity: {
    name: '教育活动方案',
    fields: [
      { key: 'topic', label: '活动主题', type: 'input', placeholder: '如：彩虹的形成' },
      { key: 'audience', label: '目标受众', type: 'input', placeholder: '如：小学生（8-10岁）' },
      { key: 'duration', label: '活动时长', type: 'picker', options: ['30分钟', '45分钟', '60分钟', '90分钟'] }
    ]
  }
};

// 评估标准提示
const EVALUATION_CRITERIA = {
  exhibit: '评估维度：\n1. 原理准确性（科学内容是否准确）\n2. 深度适配（是否匹配目标受众认知水平）\n3. 关联丰富度（知识网络是否足够宽广）\n4. 表达清晰度（语言是否简洁易懂）\n5. 互动设计（是否预留了提问或动手空间）',
  guide: '评估维度：\n1. 开头吸引力（前10秒能否抓住观众注意力）\n2. 逻辑递进（信息是否层层推进，无跳跃）\n3. 语言口语化（是否适合口头表达，无生僻长句）\n4. 互动设计（提问/手势/操作点是否自然嵌入）\n5. 结尾力度（是否留下印象或思考题）\n6. 时长控制（是否符合目标时长）',
  experiment: '评估维度：\n1. 科学准确性（实验是否真正验证了目标原理）\n2. 现象可见性（现象是否明显，后排观众能否看清）\n3. 时间可控性（是否在5-10分钟内完成）\n4. 材料安全性（有无危险材料，是否有安全预案）\n5. 互动性（观众能否参与或预测）\n6. 可复现性（成功率是否高，失败是否有预案）',
  drama: '评估维度：\n1. 科学性（科学概念是否准确、是否作为核心情节）\n2. 戏剧性（是否有冲突、悬念、情感起伏）\n3. 角色立体度（科学家是否像真人，不是行走的百科）\n4. 舞台可行性（道具、演员、场景是否适合科技馆）\n5. 观众参与（是否设计互动点）\n6. 时长控制（是否在目标范围内）',
  activity: '评估维度：\n1. 目标清晰度（学习目标是否明确、可测量）\n2. 逻辑连贯性（环节之间是否有内在逻辑）\n3. 互动丰富度（是否有动手、讨论、探索、创造）\n4. 时间合理性（每环节时长是否匹配内容）\n5. 材料可行性（材料是否易得、安全、低成本）\n6. 评估完整性（是否有前置/过程/后置评估）\n7. 安全考量（是否有风险识别和预案）'
};

// 模拟AI生成内容（实际项目中应调用后端API）
function mockGenerate(moduleKey, params) {
  const templates = {
    exhibit: `# ${params.exhibitName} 知识包\n\n## 核心原理\n${params.principle}——展品的科学基础。\n\n## 基础定律\n- 定律：相关物理/化学定律\n- 公式：$...$\n\n## 展品工作原理\n步骤1 → 步骤2 → 步骤3...\n\n## 日常类比\n1. 类比A：对应原理点\n2. 类比B：对应原理点\n3. 类比C：对应原理点\n\n## 分层讲解要点\n| 受众 | 引入方式 | 核心讲解 | 结尾 |\n|------|---------|---------|------|\n| 儿童 | 故事引入 | 简单比喻 | 动手体验 |\n| 青少年 | 问题引入 | 原理解释 | 思考题 |\n| 成人 | 现象引入 | 深度分析 | 前沿关联 |`,
    guide: `# ${params.exhibitName} 辅导词\n\n## 基础信息\n- 目标时长：${params.duration}\n- 目标受众：${params.audience}\n- 核心知识点：1-2个\n\n## 辅导词正文\n[开头：现象/问题引入，10-15秒]\n大家看，这里有一个神奇的现象...\n\n[中间：原理揭示，层层递进]\n这个现象背后的原理是...\n\n[互动点：提问/操作]\n大家猜一猜，接下来会发生什么？\n\n[关联：联系生活]\n其实在生活中，我们每天都在接触这个原理...\n\n[结尾：升华或留思考题]\n下次你遇到这个现象，就知道背后的秘密了。`,
    experiment: `# ${params.principle} 实验方案\n\n## 实验信息\n- 对应原理：${params.principle}\n- 目标时长：${params.duration}\n- 实验类型：${params.type}\n\n## 科学目标\n验证${params.principle}原理...\n\n## 材料清单\n| 材料 | 数量 | 备注 |\n|------|------|------|\n| ... | ... | ... |\n\n## 实验步骤\n| 步骤 | 操作 | 解说词 |\n|------|------|--------|\n| 1 | ... | ... |\n\n## 安全评估\n| 风险点 | 等级 | 预防措施 |\n|--------|------|----------|\n| ... | 低 | ... |`,
    drama: `# ${params.theme} 科普短剧\n\n## 剧目信息\n- 科学主题：${params.theme}\n- 目标时长：${params.duration}\n- 演员人数：${params.actors}\n\n## 故事梗概\n围绕${params.theme}展开的科学故事...\n\n## 角色表\n| 角色 | 性格 | 与科学点的关系 |\n|------|------|--------------|\n| 科学家A | 好奇、执着 | 发现者 |\n\n## 场景分解\n### 场景1\n[舞台指示]\n角色A：（台词）...\n\n## 科学点嵌入策略\n- 科学点1：通过角色对话自然带出\n- 科学点2：作为高潮反转`,
    activity: `# ${params.topic} 教育活动方案\n\n## 活动概述\n- 主题：${params.topic}\n- 目标受众：${params.audience}\n- 活动时长：${params.duration}\n\n## 学习目标\n| 目标类型 | 目标内容 |\n|----------|----------|\n| 知识目标 | 理解... |\n| 能力目标 | 能够... |\n| 情感目标 | 激发... |\n\n## 活动流程\n### 环节1：导入\n### 环节2：探究\n### 环节3：总结\n\n## 材料清单\n| 材料 | 数量 | 备注 |\n|------|------|------|\n\n## 安全与应急预案\n| 风险点 | 等级 | 预防措施 |`
  };
  
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        content: templates[moduleKey] || '生成失败，请重试',
        module: moduleKey,
        params,
        timestamp: new Date().toISOString()
      });
    }, 1500);
  });
}

// 模拟AI评估（实际项目中应调用后端API）
function mockEvaluate(moduleKey, content) {
  const criteria = EVALUATION_CRITERIA[moduleKey];
  const dimensions = MODULES.find(m => m.key === moduleKey)?.dimensions || [];
  
  // 模拟评分（实际应基于AI分析）
  const scores = dimensions.map(d => ({
    dimension: d,
    score: Math.floor(Math.random() * 2) + 3, // 3-4分模拟
    comment: '内容基本符合要求，可在具体细节上进一步深化。'
  }));
  
  const avgScore = (scores.reduce((s, i) => s + i.score, 0) / scores.length).toFixed(1);
  
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        module: moduleKey,
        scores,
        average: avgScore,
        summary: `整体评价：内容结构完整，科学性准确。建议加强${dimensions[Math.floor(Math.random() * dimensions.length)]}方面的训练。`,
        suggestions: [
          '增加更多互动环节设计',
          '注意语言口语化，避免学术腔',
          '结尾可以更有力一些'
        ],
        timestamp: new Date().toISOString()
      });
    }, 2000);
  });
}

module.exports = {
  MODULES,
  QUESTIONS,
  TEMPLATES,
  EVALUATION_CRITERIA,
  mockGenerate,
  mockEvaluate
};
