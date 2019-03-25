// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addList: [{
        describe: '提问',
        imgSrc: './image/problem.svg'
      },
      {
        describe: '文章',
        imgSrc: './image/article.svg'
      },
      {
        describe: '关注',
        imgSrc: './image/follow.svg'
      },
      {
        describe: '头条',
        imgSrc: './image/headline.svg'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
  hideAdd: function() {
    wx.navigateBack({
      delta: 1
    })
  }
})