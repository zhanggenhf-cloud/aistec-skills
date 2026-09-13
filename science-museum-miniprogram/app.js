// app.js
App({
  globalData: {
    userInfo: null,
    trainingHistory: [],
    generateHistory: [],
    evaluateHistory: [],
    // 能力雷达图数据
    abilityScores: {
      exhibit: 0,
      guide: 0,
      experiment: 0,
      drama: 0,
      activity: 0
    }
  },

  onLaunch() {
    // 从本地存储加载历史
    const history = wx.getStorageSync('training_history') || [];
    this.globalData.trainingHistory = history;
    
    const scores = wx.getStorageSync('ability_scores');
    if (scores) {
      this.globalData.abilityScores = scores;
    }
  },

  // 保存训练记录
  saveTrainingRecord(record) {
    const history = this.globalData.trainingHistory;
    history.unshift({
      ...record,
      id: Date.now(),
      timestamp: new Date().toISOString()
    });
    // 只保留最近50条
    if (history.length > 50) history.length = 50;
    this.globalData.trainingHistory = history;
    wx.setStorageSync('training_history', history);
    
    // 更新能力分数
    this.updateAbilityScore(record.module, record.score);
  },

  // 更新能力分数（取平均分）
  updateAbilityScore(module, score) {
    const keyMap = {
      'exhibit': 'exhibit',
      'guide': 'guide',
      'experiment': 'experiment',
      'drama': 'drama',
      'activity': 'activity'
    };
    const key = keyMap[module];
    if (!key) return;
    
    const records = this.globalData.trainingHistory.filter(r => r.module === module);
    const avg = records.reduce((sum, r) => sum + r.score, 0) / records.length;
    this.globalData.abilityScores[key] = Math.round(avg * 10) / 10;
    wx.setStorageSync('ability_scores', this.globalData.abilityScores);
  }
});
