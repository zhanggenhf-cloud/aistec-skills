// pages/evaluate/evaluate.js
const { MODULES, EVALUATION_CRITERIA, mockEvaluate } = require('../../utils/data');
const app = getApp();

Page({
  data: {
    modules: MODULES,
    criteria: EVALUATION_CRITERIA,
    currentStep: 0,
    selectedModule: null,
    userWork: '',
    evaluation: null,
    isEvaluating: false,
    steps: ['选择模块', '上传作品', '查看评估']
  },

  // 选择模块
  selectModule(e) {
    const { key } = e.currentTarget.dataset;
    const mod = MODULES.find(m => m.key === key);
    this.setData({
      selectedModule: mod,
      currentStep: 1
    });
  },

  // 输入作品
  onWorkInput(e) {
    this.setData({ userWork: e.detail.value });
  },

  // 提交评估
  async submitEvaluation() {
    const { userWork, selectedModule } = this.data;
    if (!userWork.trim()) {
      wx.showToast({ title: '请先输入作品', icon: 'none' });
      return;
    }

    this.setData({ isEvaluating: true });
    wx.showLoading({ title: 'AI评估中...' });

    try {
      const result = await mockEvaluate(selectedModule.key, userWork);
      
      // 保存历史
      const history = wx.getStorageSync('evaluate_history') || [];
      history.unshift({
        ...result,
        workPreview: userWork.substring(0, 100),
        id: Date.now()
      });
      wx.setStorageSync('evaluate_history', history.slice(0, 50));
      
      this.setData({
        evaluation: result,
        currentStep: 2,
        isEvaluating: false
      });
    } catch (err) {
      wx.showToast({ title: '评估失败', icon: 'none' });
      this.setData({ isEvaluating: false });
    }
    wx.hideLoading();
  },

  // 重新开始
  restart() {
    this.setData({
      currentStep: 0,
      selectedModule: null,
      userWork: '',
      evaluation: null
    });
  }
});
