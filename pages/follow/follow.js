// pages/follow/follow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleData: [{
        text: '用户'
      },
      {
        text: '标签'
      },
      {
        text: '问题'
      },
      {
        text: '专栏'
      },
      {
        text: '收藏夹'
      }
    ],
    indexValue: 0, //索引值默认是0
    topDistance: null, //选择的盒子到顶部的距离
    leftValue: 'margin-left:0%', //移动盒子的位置 默认是不移动
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.queryMultipleNodes('#selectBox', (res) => {
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
    this.setData({
      indexValue: res.currentTarget.dataset.index
    });
    switch (this.data.indexValue) {
      case 0:
        this.setData({
          leftValue: 'margin-left:0%'
        });
        break;
      case 1:
        this.setData({
          leftValue: 'margin-left:-100%'
        });
        break;
      case 2:
        this.setData({
          leftValue: 'margin-left:-200%'
        });
        break;
      case 3:
        this.setData({
          leftValue: 'margin-left:-300%'
        });
        break;
      case 4:
        this.setData({
          leftValue: 'margin-left:-400%'
        });
        break;
    }

  },
  queryMultipleNodes: function(id, callBack) {
    // 获取到节点的信息
    const query = wx.createSelectorQuery();
    query.select(id).boundingClientRect(function(res) {
      return callBack(res);
    }).exec();
  },
})