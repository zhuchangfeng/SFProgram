// pages/opinion/opinion.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    opinionData: [{
        text: "提出小程序改进意见"
      },
      {
        text: "BUG错误报告"
      }
    ],
    indexValue: null, //选择的是第几个,默认是null（不选择）
    selectValue: "", //选择的是什么内容
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
  selectOne: function(res) {
    // 选择的索引和选择的内容
    var opinionData = this.data.opinionData;
    this.setData({
      indexValue: res.currentTarget.dataset.index,
      selectValue: opinionData[res.currentTarget.dataset.index].text
    })
  },
  nextStep: function() {
    // 下一步
    if (this.data.selectValue == '') {
      return;
    } else {
      wx.navigateTo({
        url: '../submission/submission?type=' + this.data.indexValue + '&value=' + this.data.selectValue
      })
    }
  },
  callBack: function() {
    // 返回页面
    wx.navigateBack({
      delta: 1
    })
  }
})