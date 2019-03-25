// pages/interlocution/interlocution.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleData: [{
        text: '全部'
      },
      {
        text: 'es6'
      },
      {
        text: '小程序'
      },
      {
        text: 'vue.js'
      },
      {
        text: '前端'
      },
      {
        text: 'vue.js0'
      },
      {
        text: '前端2'
      }
    ],
    toView: null, //去第几个
    indexValue: 0, //索引值默认是0
    topDistance: null, //选择的盒子到顶部的距离
    leftValue: 'margin-left:0%', //移动盒子的位置 默认是不移动
    questionData: [
      // 问答数据
      {
        title: '怎么获取到vue的DOM对象',
        attribute: 'question',
        author: 'minijie',
        amount: 10
      },
      {
        title: '视频演示如何用 CSS 和 D3 创作一个小鱼游动的交互动画',
        attribute: 'question',
        author: 'minijie',
        amount: 66
      },
      {
        title: '写给前端工程师的10条实用原则 | Fundebug博客',
        attribute: 'question',
        author: '小黑同学',
        amount: 55
      },
      {
        title: '【小程序】保存到相册，头像裁圆，文字图片头像定位响应，兼容各种机型，随机背景图完全指南优化篇',
        attribute: 'question',
        author: '微信小黑',
        amount: 77
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.queryMultipleNodes('#titleBox', (res) => {
      this.setData({
        topDistance: res.top + res.height
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  /**
   * 自定义事件
   */
  selectOne: function(res) {
    var indexValue = res.currentTarget.dataset.index - 2 >= 0 ? res.currentTarget.dataset.index - 2 : 0;
    var value;
    this.setData({
      indexValue: res.currentTarget.dataset.index,
      toView: 'item' + indexValue
    });
    if (this.data.indexValue == 0) {
      value = 0;
    } else {
      value = -this.data.indexValue + '00'
    }
    this.setData({
      leftValue: 'margin-left:' + value + '%'
    })
  },
  queryMultipleNodes: function(id, callBack) {
    // 获取到节点的信息
    const query = wx.createSelectorQuery();
    query.select(id).boundingClientRect(function(res) {
      return callBack(res);
    }).exec();
  },
})