// pages/generate/generate.js
const { MODULES, TEMPLATES, mockGenerate } = require('../../utils/data');
const app = getApp();

Page({
  data: {
    modules: MODULES,
    templates: TEMPLATES,
    currentStep: 0,
    selectedModule: null,
    params: {},
    result: null,
    isGenerating: false,
    steps: ['选择模块', '填写参数', '生成内容']
  },

  // 选择模块
  selectModule(e) {
    const { key } = e.currentTarget.dataset;
    const mod = MODULES.find(m => m.key === key);
    const template = TEMPLATES[key];
    
    // 初始化参数
    const params = {};
    template.fields.forEach(f => {
      params[f.key] = f.type === 'picker' ? f.options[0] : '';
    });
    
    this.setData({
      selectedModule: mod,
      params,
      currentStep: 1
    });
  },

  // 输入参数
  onParamInput(e) {
    const { key } = e.currentTarget.dataset;
    this.setData({
      [`params.${key}`]: e.detail.value
    });
  },

  // 选择器变化
  onPickerChange(e) {
    const { key, options } = e.currentTarget.dataset;
    const index = e.detail.value;
    this.setData({
      [`params.${key}`]: options[index]
    });
  },

  // 生成内容
  async generateContent() {
    const { selectedModule, params } = this.data;
    
    // 验证必填项
    const template = TEMPLATES[selectedModule.key];
    for (const field of template.fields) {
      if (field.type === 'input' && !params[field.key]?.trim()) {
        wx.showToast({ title: `请填写${field.label}`, icon: 'none' });
        return;
      }
    }

    this.setData({ isGenerating: true });
    wx.showLoading({ title: 'AI生成中...' });

    try {
      const result = await mockGenerate(selectedModule.key, params);
      
      // 保存历史
      const history = wx.getStorageSync('generate_history') || [];
      history.unshift({ ...result, id: Date.now() });
      wx.setStorageSync('generate_history', history.slice(0, 50));
      
      this.setData({
        result,
        currentStep: 2,
        isGenerating: false
      });
    } catch (err) {
      wx.showToast({ title: '生成失败', icon: 'none' });
      this.setData({ isGenerating: false });
    }
    wx.hideLoading();
  },

  // 复制结果
  copyResult() {
    const { result } = this.data;
    if (!result) return;
    
    wx.setClipboardData({
      data: result.content,
      success: () => {
        wx.showToast({ title: '已复制', icon: 'success' });
      }
    });
  },

  // 重新开始
  restart() {
    this.setData({
      currentStep: 0,
      selectedModule: null,
      params: {},
      result: null
    });
  },

  // 修改参数
  modifyParams() {
    this.setData({
      currentStep: 1,
      result: null
    });
  }
});
