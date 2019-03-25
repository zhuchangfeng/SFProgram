// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aboutData: [{
        explain: "我的微信",
        content: "i652165177"
      },
      {
        explain: "我的QQ",
        content: "652165177"
      },
      {
        explain: "关于作者",
        content: "minijie",
        surprise:"点我有惊喜哟"
      },
      {
        explain: "当前版本",
        content: "1.0.4"
      }
    ],
    styleValue: "",
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
   * 用户自定义事件
   */
  selectOne: function(res) {
    // 打开提示
    if (res.currentTarget.dataset.index == 2) {
      this.setData({
        styleValue: " bottom: 0",
      })
    }
  },
  closeFn: function() {
    this.setData({
      styleValue: ""
    })
  }
})