// pages/submission/submission.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: "", //输入的内容
    isSubmit: false, //是否可以提交申请 
    titleValue: '', //标题名称
    placeholderValue: '', //输入框的提示语
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.modifyContent(options)
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
  inputFn: function(res) {
    this.setData({
      inputValue: res.detail.value
    });
    if (this.data.inputValue.trim() != '') {
      this.setData({
        isSubmit: true
      });
    } else {
      this.setData({
        isSubmit: false
      });
    }
  },
  callBack: function() {
    // 返回页面
    wx.navigateBack({
      delta: 1
    })
  },
  modifyContent: function(options) {
    wx.setNavigationBarTitle({
      title: options.value
    })
    if (options.type == 0) {
      this.setData({
        titleValue: options.value,
        placeholderValue: "和我们分享你的看法。有哪些功能值得深入挖掘或者继续拓展？哪些造成了困扰需要修改？"
      });
    } else {
      this.setData({
        titleValue: options.value,
        placeholderValue: "BUG提交报告"
      })
    }
  }
})