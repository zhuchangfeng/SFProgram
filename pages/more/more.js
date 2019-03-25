// pages/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [{
        describe: '我的动态',
        imageSrc: './image/dynamic.svg',
        url: "../dynamic/dynamic",
      },
      {
        describe: '我的收藏',
        imageSrc: './image/collection.svg'
      },
      {
        describe: '我的关注',
        imageSrc: './image/eye.svg',
        url: "../follow/follow"
      },
      {
        describe: '我的笔记',
        imageSrc: './image/books.svg'
      },
      {
        describe: '我的讲座',
        imageSrc: './image/palyer.svg'
      },
      {
        describe: '最近浏览',
        imageSrc: './image/lately.svg',
        url: "../browse/browse",
      },
      {
        describe: '设置',
        imageSrc: './image/setUp.svg',
        url: "../setUp/setUp",
      },
      {
        describe: '意见反馈',
        imageSrc: './image/feedback.svg',
        url: '../opinion/opinion'
      }
    ],
    userInfo: {
      nickName: "",
      avatarUrl: "",
      infoValue: "",
      authorize: false,
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

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
   * 自定义事件
   */
  selectOne: function(res) {
    wx.navigateTo({
      url: this.data.listData[res.currentTarget.dataset.index].url
    })
  },
  selectOperate: function() {
    if (!this.data.userInfo.authorize) {
      wx.navigateTo({
        url: "../login/login"
      })
    } else {
      wx.navigateTo({
        url: "../homePage/homePage"
      })
    }
  },
  getUser: function() {
    // 获取到用户信息
    var that = this;
    wx.getStorageInfo({
      success: function(res) {
        if (res.keys.length == 0) {
          that.setData({
            userInfo: {
              nickName: "未授权",
              avatarUrl: "./image/smile.svg",
              infoValue: "授权体验更多功能",
              authorize: false,
            }
          })
        } else {
          var keyData = res.keys.toString();
          if (keyData.indexOf("userInfo") != -1) {
            wx.getStorage({
              key: 'userInfo',
              success: function(res) {
                if (res.errMsg = "getStorage:ok") {
                  that.setData({
                    userInfo: {
                      nickName: res.data.nickName,
                      avatarUrl: res.data.avatarUrl,
                      infoValue: "查看或编辑个人主页",
                      authorize: true,
                    }
                  })
                }
              },
            })
          } else {
            that.setData({
              userInfo: {
                nickName: "未授权",
                avatarUrl: "./image/smile.svg",
                infoValue: "授权体验更多功能",
                authorize: false,
              }
            })
          }
        }
      },
    })
  }
})