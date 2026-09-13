// pages/index/index.js
const { MODULES } = require('../../utils/data');
const app = getApp();

Page({
  data: {
    modules: MODULES,
    abilityScores: { exhibit: 0, guide: 0, experiment: 0, drama: 0, activity: 0 },
    todayTraining: false,
    modeCards: [
      {
        key: 'training',
        title: '训练模式',
        subtitle: '练习+反馈',
        desc: '获取练习任务，完成后获得AI评分',
        icon: '💪',
        color: '#e94560',
        path: '/pages/training/training'
      },
      {
        key: 'generate',
        title: '生成模式',
        subtitle: '直接产出',
        desc: '选择模板，AI生成内容',
        icon: '✨',
        color: '#0f3460',
        path: '/pages/generate/generate'
      },
      {
        key: 'evaluate',
        title: '评估模式',
        subtitle: '评价现有作品',
        desc: '上传作品，获取评分和改进建议',
        icon: '📊',
        color: '#52c41a',
        path: '/pages/evaluate/evaluate'
      }
    ]
  },

  onLoad() {
    this.loadAbilityScores();
  },

  onShow() {
    this.loadAbilityScores();
    this.checkTodayTraining();
  },

  loadAbilityScores() {
    const scores = app.globalData.abilityScores;
    this.setData({ abilityScores: scores });
  },

  checkTodayTraining() {
    const history = app.globalData.trainingHistory;
    const today = new Date().toDateString();
    const hasToday = history.some(h => new Date(h.timestamp).toDateString() === today);
    this.setData({ todayTraining: hasToday });
  },

  // 点击能力模块
  onModuleTap(e) {
    const { key } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/training/training?module=${key}&from=index`
    });
  },

  // 点击模式卡片
  onModeTap(e) {
    const { path } = e.currentTarget.dataset;
    wx.switchTab({ url: path });
  },

  // 绘制雷达图
  onReady() {
    this.drawRadarChart();
  },

  drawRadarChart() {
    const ctx = wx.createCanvasContext('radarChart');
    const { abilityScores } = this.data;
    const scores = [
      abilityScores.exhibit,
      abilityScores.guide,
      abilityScores.experiment,
      abilityScores.drama,
      abilityScores.activity
    ];
    
    const centerX = 150;
    const centerY = 130;
    const radius = 90;
    const sides = 5;
    const labels = ['展品', '辅导词', '实验', '短剧', '活动'];
    
    // 绘制网格
    ctx.setStrokeStyle('#e8e8e8');
    ctx.setLineWidth(1);
    for (let level = 1; level <= 5; level++) {
      ctx.beginPath();
      for (let i = 0; i < sides; i++) {
        const angle = (Math.PI * 2 / sides) * i - Math.PI / 2;
        const r = (radius / 5) * level;
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
    }
    
    // 绘制轴线
    ctx.beginPath();
    for (let i = 0; i < sides; i++) {
      const angle = (Math.PI * 2 / sides) * i - Math.PI / 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      
      // 标签
      ctx.setFontSize(22);
      ctx.setFillStyle('#666');
      const labelX = centerX + Math.cos(angle) * (radius + 20);
      const labelY = centerY + Math.sin(angle) * (radius + 20);
      ctx.fillText(labels[i], labelX - 20, labelY + 5);
    }
    ctx.stroke();
    
    // 绘制数据区域
    ctx.beginPath();
    ctx.setFillStyle('rgba(233, 69, 96, 0.2)');
    ctx.setStrokeStyle('#e94560');
    ctx.setLineWidth(2);
    for (let i = 0; i < sides; i++) {
      const angle = (Math.PI * 2 / sides) * i - Math.PI / 2;
      const r = (radius / 5) * (scores[i] || 0);
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    ctx.draw();
  }
});
