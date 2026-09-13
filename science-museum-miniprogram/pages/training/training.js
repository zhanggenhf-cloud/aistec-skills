// pages/training/training.js
const { MODULES, QUESTIONS } = require('../../utils/data');
const app = getApp();

Page({
  data: {
    modules: MODULES,
    currentStep: 0, // 0:选择模块, 1:选择任务, 2:练习中, 3:结果
    selectedModule: null,
    selectedTask: null,
    question: null,
    userAnswer: '',
    evaluation: null,
    isSubmitting: false,
    steps: ['选择模块', '选择任务', '完成练习', '查看反馈']
  },

  onLoad(options) {
    if (options.module) {
      const mod = MODULES.find(m => m.key === options.module);
      if (mod) {
        this.setData({ selectedModule: mod, currentStep: 1 });
      }
    }
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

  // 选择任务类型
  selectTask(e) {
    const { type } = e.currentTarget.dataset;
    const mod = this.data.selectedModule;
    const questions = QUESTIONS[mod.key]?.[type] || [];
    
    if (questions.length === 0) {
      wx.showToast({ title: '暂无题目', icon: 'none' });
      return;
    }
    
    // 随机选一道题
    const question = questions[Math.floor(Math.random() * questions.length)];
    
    this.setData({
      selectedTask: mod.tasks.find(t => t.type === type),
      question,
      currentStep: 2,
      userAnswer: ''
    });
  },

  // 输入答案
  onAnswerInput(e) {
    this.setData({ userAnswer: e.detail.value });
  },

  // 提交答案
  async submitAnswer() {
    const { userAnswer, selectedModule } = this.data;
    if (!userAnswer.trim()) {
      wx.showToast({ title: '请先填写答案', icon: 'none' });
      return;
    }

    this.setData({ isSubmitting: true });
    wx.showLoading({ title: 'AI评分中...' });

    // 模拟AI评分（实际项目应调用后端API）
    setTimeout(() => {
      const dimensions = selectedModule.dimensions;
      const scores = dimensions.map(d => ({
        dimension: d,
        score: Math.floor(Math.random() * 2) + 3,
        comment: this.getRandomComment()
      }));
      
      const avg = (scores.reduce((s, i) => s + i.score, 0) / scores.length).toFixed(1);
      
      const evaluation = {
        scores,
        average: avg,
        summary: `综合评分 ${avg} 分。${avg >= 4 ? '表现优秀！' : avg >= 3 ? '基础扎实，继续提升。' : '需要加强练习。'}`,
        suggestions: [
          '增加更多具体案例支撑',
          '注意语言的口语化表达',
          '在关键节点设计互动环节'
        ].slice(0, Math.floor(Math.random() * 2) + 2)
      };

      // 保存记录
      app.saveTrainingRecord({
        module: selectedModule.key,
        moduleName: selectedModule.name,
        taskType: this.data.selectedTask.type,
        score: parseFloat(avg),
        question: this.data.question
      });

      this.setData({
        evaluation,
        currentStep: 3,
        isSubmitting: false
      });
      wx.hideLoading();
    }, 2000);
  },

  getRandomComment() {
    const comments = [
      '内容准确，表达清晰',
      '思路正确，但可以更深入',
      '基本符合要求，细节待完善',
      '有亮点，也有改进空间',
      '结构完整，语言流畅'
    ];
    return comments[Math.floor(Math.random() * comments.length)];
  },

  // 重新开始
  restart() {
    this.setData({
      currentStep: 0,
      selectedModule: null,
      selectedTask: null,
      question: null,
      userAnswer: '',
      evaluation: null
    });
  },

  // 下一题（同模块）
  nextQuestion() {
    const { selectedModule, selectedTask } = this.data;
    const questions = QUESTIONS[selectedModule.key]?.[selectedTask.type] || [];
    const question = questions[Math.floor(Math.random() * questions.length)];
    this.setData({
      question,
      userAnswer: '',
      evaluation: null,
      currentStep: 2
    });
  },

  // 返回上一步
  goBack() {
    const { currentStep } = this.data;
    if (currentStep > 0) {
      this.setData({ currentStep: currentStep - 1 });
    }
  }
});
