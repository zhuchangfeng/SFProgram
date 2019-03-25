// pages/dynamic/dynamic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dynamicData: [{
        nickName: "", //用户昵称
        avatarUrl: "", //头像地址
        eventType: "关注标签", //事件类型如（关注用户，点赞）
        timeValue: "7-10", //时间
        title: "前端", //标题名称
        answer: "前端攻城狮的日常事情", // 描述
        followNumber: 20, //关注人数
      },
      {
        nickName: "", //用户昵称
        avatarUrl: "", //头像地址
        eventType: "赞了回答", //事件类型如（关注用户，点赞）
        timeValue: "6天前", //时间
        title: "小程序怎么获取到页面高度和宽度的", //标题名称
        answer: "wx.getLocation({type: 'wgs84',success: function(res) {var latitude = res.latitudevar longitude = res.longitudevarspeed = res.speedvar accuracy = res.accuracy}})", // 回答的内容
        imgSrc: 'https://image-static.segmentfault.com/132/710/1327101021-5b91cb488b51b_articlex',
        agreeNumber: 20, //赞同数
        commentNumber: 30, //评论数
      },
      {
        nickName: "", //用户昵称
        avatarUrl: "", //头像地址
        eventType: "赞了回答", //事件类型如（关注用户，点赞）
        timeValue: "6天前", //时间
        title: "小程序怎么获取到页面高度和宽度的", //标题名称
        answer: "wx.getLocation({type: 'wgs84',success: function(res) {var latitude = res.latitudevar longitude = res.longitudevarspeed = res.speedvar accuracy = res.accuracy}})", // 回答的内容
        agreeNumber: 20, //赞同数
        commentNumber: 30, //评论数
      },
      {
        nickName: "", //用户昵称
        avatarUrl: "", //头像地址
        eventType: "赞了回答", //事件类型如（关注用户，点赞）
        timeValue: "6天前", //时间
        title: "小程序怎么获取到页面高度和宽度的", //标题名称
        answer: "wx.getLocation({type: 'wgs84',success: function(res) {var latitude = res.latitudevar longitude = res.longitudevarspeed = res.speedvar accuracy = res.accuracy}})", // 回答的内容
        agreeNumber: 20, //赞同数
        commentNumber: 30, //评论数
      },
      {
        nickName: "", //用户昵称
        avatarUrl: "", //头像地址
        eventType: "赞了回答", //事件类型如（关注用户，点赞）
        timeValue: "6天前", //时间
        title: "小程序怎么获取到页面高度和宽度的", //标题名称
        answer: "wx.getLocation({type: 'wgs84',success: function(res) {var latitude = res.latitudevar longitude = res.longitudevarspeed = res.speedvar accuracy = res.accuracy}})", // 回答的内容
        agreeNumber: 20, //赞同数
        commentNumber: 30, //评论数
      },
      {
        nickName: "", //用户昵称
        avatarUrl: "", //头像地址
        eventType: "关注标签", //事件类型如（关注用户，点赞）
        timeValue: "6-20", //时间
        title: "Vue.js", //标题名称
        answer: "Reactive Components for Model of Liao Yu Xi", // 描述
        followNumber: 20, //关注人数
      },
      {
        nickName: "", //用户昵称
        avatarUrl: "", //头像地址
        eventType: "关注标签", //事件类型如（关注用户，点赞）
        timeValue: "6-20", //时间
        title: "小程序", //标题名称
        answer: "欢迎来到小程序", // 描述
        followNumber: 20, //关注人数
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
    this.getUser();
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
  onPageScroll: function(res) {
    this.setData({
      scrollTop: res.scrollTop
    });
  },
  /**
   * 自定义事件
   */
  getUser: function() {
    var that = this;
    try {
      var value = wx.getStorageSync('userInfo');
      if (value) {
        var dynamicArr = that.data.dynamicData;
        dynamicArr.forEach((item, index) => {
          item.nickName = value.nickName;
          item.avatarUrl = value.avatarUrl;
        });
        that.setData({
          dynamicData: dynamicArr
        })
      }
    } catch (e) {
      console.log(e);
    }
  }
})