// pages/Information/Information.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    informationData: [{
        text: '关注的问题有新的答案',
        isChecked: false
      },
      {
        text: '有人关注我',
        isChecked: false
      },
      {
        text: '有人给我投票',
        isChecked: false
      },
      {
        text: '我有新的私信',
        isChecked: false
      },
      {
        text: '有人评论或提到我',
        isChecked: false
      },
      {
        text: '邀请我回答问题',
        isChecked: false
      },
      {
        text: '我报名的讲座快开始了',
        isChecked: false,
        describe: "在讲座开始前10分钟通知"
      },
      {
        text: '勿扰模式',
        isChecked: false,
        describe: "22:00到06:00"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setUpSwitch();
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
  setUpSwitch: function() {
    // 获取到本地存储中的switchValue,
    var that = this;
    var res = wx.getStorageInfoSync();
    if (res.keys.length == 0 || res.keys.toString().indexOf("switchValue") == -1) {
      var arr = that.data.informationData;
      for (var index in arr) {
        arr[index].isChecked = true;
      }
      wx.setStorageSync("switchValue", arr);
      setTimeout(function() {
        that.setData({
          informationData: arr
        })
      }, 500)
    } else {
      if (res.keys.toString().indexOf("switchValue") != -1) {
        var value = wx.getStorageSync("switchValue");
        setTimeout(function() {
          that.setData({
            informationData: value
          })
        }, 500);
      }
    }
  },
  switchChange: function(res) {
    // switch的改变事件
    var arr = this.data.informationData;
    arr[res.currentTarget.dataset.index].isChecked = res.detail.value;
    this.setData({
      informationData: arr
    });
    wx.setStorageSync("switchValue", arr);
  }
})