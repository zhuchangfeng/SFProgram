// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [{
        describe: '评论回复',
        imgSrc: './image/comment.svg'
      },
      {
        describe: '收到的赞',
        imgSrc: './image/fabulous.svg'
      },
      {
        describe: '新增粉丝',
        imgSrc: './image/fans.svg'
      },
      {
        describe: '系统通知',
        imgSrc: './image/notice.svg'
      }
    ],
    scrollTop: 0, //滚动的高度默认是0px
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
  onPageScroll: function (res) {
    this.setData({
      scrollTop: res.scrollTop
    });
  },
  /**
   * 自定义事件
   */

})