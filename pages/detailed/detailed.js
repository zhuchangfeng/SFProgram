// pages/detailed/detailed.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    experienceData: [{
        title: '学习经历',
        content: '广东岭南职业技术学院',
        describe: '软件技术'
      },
      {
        title: '工作经历',
        content: 'intters',
        describe: 'web前端工程师'
      },
      {
        title: '项目&著作',
        content: '（*/㉨＼*）捂脸',
        describe: `.◢████◣  
█ ＞_ ＜ █  
 ╰—┰—╯  
　┕█┙  
　  ∏
        `
      }
    ],
    scrollTop:0 //当前距离顶部的距离默认是0
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
 * 页面滚动触发事件的处理函数
 */
  onPageScroll: function (res) {
    this.setData({
      scrollTop: res.scrollTop
    });
  },
})