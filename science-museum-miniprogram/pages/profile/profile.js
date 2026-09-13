// pages/profile/profile.js
const app = getApp();

Page({
  data: {
    userInfo: null,
    abilityScores: { exhibit: 0, guide: 0, experiment: 0, drama: 0, activity: 0 },
    trainingCount: 0,
    generateCount: 0,
    evaluateCount: 0,
    recentHistory: [],
    streak: 0
  },

  onLoad() {
    this.loadData();
  },

  onShow() {
    this.loadData();
  },

  loadData() {
    const scores = app.globalData.abilityScores;
    const trainingHistory = app.globalData.trainingHistory;
    const generateHistory = wx.getStorageSync('generate_history') || [];
    const evaluateHistory = wx.getStorageSync('evaluate_history') || [];
    
    // 计算连续训练天数
    const streak = this.calculateStreak(trainingHistory);
    
    // 获取最近记录
    const recentHistory = trainingHistory.slice(0, 5).map(h => ({
      ...h,
      date: new Date(h.timestamp).toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' })
    }));

    this.setData({
      abilityScores: scores,
      trainingCount: trainingHistory.length,
      generateCount: generateHistory.length,
      evaluateCount: evaluateHistory.length,
      recentHistory,
      streak
    });
  },

  calculateStreak(history) {
    if (history.length === 0) return 0;
    
    const dates = [...new Set(history.map(h => 
      new Date(h.timestamp).toDateString()
    ))].map(d => new Date(d).getTime()).sort((a, b) => b - a);
    
    let streak = 1;
    const oneDay = 24 * 60 * 60 * 1000;
    
    for (let i = 1; i < dates.length; i++) {
      if (dates[i-1] - dates[i] <= oneDay) {
        streak++;
      } else {
        break;
      }
    }
    
    // 检查今天是否训练
    const today = new Date().toDateString();
    const lastDate = new Date(dates[0]).toDateString();
    if (today !== lastDate && today !== new Date(dates[0] + oneDay).toDateString()) {
      streak = 0;
    }
    
    return streak;
  },

  // 获取用户信息
  getUserProfile() {
    wx.getUserProfile({
      desc: '用于完善用户资料',
      success: (res) => {
        this.setData({ userInfo: res.userInfo });
        wx.setStorageSync('user_info', res.userInfo);
      }
    });
  },

  // 清除历史
  clearHistory() {
    wx.showModal({
      title: '确认清除',
      content: '确定要清除所有训练记录吗？此操作不可恢复。',
      confirmColor: '#e94560',
      success: (res) => {
        if (res.confirm) {
          app.globalData.trainingHistory = [];
          app.globalData.abilityScores = { exhibit: 0, guide: 0, experiment: 0, drama: 0, activity: 0 };
          wx.removeStorageSync('training_history');
          wx.removeStorageSync('ability_scores');
          wx.removeStorageSync('generate_history');
          wx.removeStorageSync('evaluate_history');
          this.loadData();
          wx.showToast({ title: '已清除', icon: 'success' });
        }
      }
    });
  },

  // 查看全部历史
  viewAllHistory() {
    wx.navigateTo({
      url: '/pages/profile/history'
    });
  }
});
