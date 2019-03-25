// pages/account/account.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    accountData: [{
        text: "Email",
        isVerification: false,
        info: "0",
      },
      {
        text: "手机号",
        isVerification: true,
        info: "15816792255",
      },
      {
        text: "账号密码",
        info: "修改密码",
      }
    ],
    communityData: [{
        text: '微信',
        isChecked: false
      },
      {
        text: '微博',
        isChecked: false
      },
      {
        text: 'QQ',
        isChecked: false
      },
      {
        text: 'Google',
        isChecked: false
      },
      {
        text: 'GitHub',
        isChecked: false
      }
    ]
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
    this.getWeChat();
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
  getWeChat: function() {
    // 获取到是否已经微信授权了
    var res = wx.getStorageInfoSync();
    var that = this;
    var indexValue = null; //找到微信的索引
    var arrData = that.data.communityData; //获取到社区账号的数据
    that.data.communityData.forEach((item, index) => {
      // 找到微信的位置
      if (item.text == "微信") {
        indexValue = index;
      }
    });
    if (res.keys.length != 0 && res.keys.toString().indexOf("userInfo") != -1) {
      arrData[indexValue].isChecked = true;
      setTimeout(() => {
        that.setData({
          communityData: arrData
        })
      }, 500)
    } else {
      arrData[indexValue].isChecked = false;
      that.setData({
        communityData: arrData
      })
    }
  },
  switchChange: function(res) {
    console.log(!res.detail.value);
    var that = this;
    var indexValue = res.currentTarget.dataset.index;
    if (res.currentTarget.dataset.index == 0) {
      if (!res.detail.value) {
        try {
          wx.removeStorageSync('userInfo')
        } catch (e) {
          console.log(e);
        }
      } else {
        wx.showModal({
          title: '提示',
          content: '请先微信授权',
          success: function(res) {
            if (res.confirm) {
              wx.navigateTo({
                url: "../login/login"
              })
            } else if (res.cancel) {
              var arrData = that.data.communityData;
              arrData[indexValue].isChecked = false;
              that.setData({
                communityData: arrData
              })
            }
          }
        })
      }
    }
  }
})