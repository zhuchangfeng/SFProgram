// pages/setUp/setUp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    functionData: [{
        text: '消息推送',
        url: "../Information/Information"
      },
      {
        text: "账号与安全",
        url: "../account/account"
      },
      {
        text: " 关于作者",
        url: "../about/about"
      },
      {
        text: "清除数据缓存",
        size: '0.0',
      },
      {
        text: "退出"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getLocalStorage();
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
    this.getLocalStorage();
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
    // 跳转的地址
    if (this.data.functionData[res.currentTarget.dataset.index].text == "清除数据缓存") {
      try {
        wx.clearStorageSync();
        var arr = this.data.functionData;
        arr[res.currentTarget.dataset.index].size = "0.0";
        this.setData({
          functionData: arr
        })
      } catch (e) {
        console.log(e);
      }
    } else if (this.data.functionData[res.currentTarget.dataset.index].text == "退出") {
      try {
        wx.removeStorageSync('userInfo');
        wx.navigateBack({
          delta: 1
        })
      } catch (e) {
        console.log(e);
      }
    }else{
      wx.navigateTo({
        url: this.data.functionData[res.currentTarget.dataset.index].url
      })
    }
  },
  getLocalStorage: function() {
    // 获取到本地存储的大小
    var that = this;
    that.data.functionData.forEach(function(item, index) {
      if (item.text == "清除数据缓存") {
        var indexValue = index;
        try {
          var res = wx.getStorageInfoSync();
          var arr = that.data.functionData;
          arr[indexValue].size = res.currentSize / 1024;
          that.setData({
            functionData: arr
          })
        } catch (e) {
          console.log(e);
        }
      }
    })
  }
})