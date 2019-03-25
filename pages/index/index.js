// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabData: [{
        text: "我的订阅"
      },
      {
        text: "近期热门"
      },
      {
        text: "最新内容"
      }
    ],
    indexValue: 0, //索引值默认是0
    paddingValue: null, // 填充的值
    subscribe: null, //我的订阅的高度
    hot: null, //近期热门的高度
    newest: null, // 最新内容
    swiperHeight: null, // swiper的高度
    windowHeight: null, //窗口可用高度
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.queryMultipleNodes();
    this.getWindowH();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

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
  selectOne: function(e) {
    this.setData({
      indexValue: e.currentTarget.dataset.index,
    });
    switch (this.data.indexValue) {
      case 0:
        this.setData({
          swiperHeight: this.data.subscribe,
        });
        break;
      case 1:
        this.setData({
          swiperHeight: this.data.hot,
        });
        break;
      case 2:
        this.setData({
          swiperHeight: this.data.newest,
        });
        break;
    }
  },
  queryMultipleNodes: function() {
    var query = wx.createSelectorQuery();
    var that = this;
    query.select('#indexTitle').boundingClientRect(function(res) {
      // 获取到头部搜索栏和tab的高度
      that.setData({
        paddingValue: res.height
      });
    }).exec();
    query.select('#subscribe').boundingClientRect(function(res) {
      // 获取我的订阅的高度
      that.setData({
        subscribe: res.height
      });
    }).exec(function(res) {
      that.setData({
        swiperHeight: res[1].height
      });
    });
    query.select('#hot').boundingClientRect(function(res) {
      // 获取近期热门的高度
      that.setData({
        hot: res.height
      });
    }).exec();
    query.select('#newest').boundingClientRect(function(res) {
      // 获取到最新内容的高度
      that.setData({
        newest: res.height
      });
    }).exec();
  },
  changSwiper: function(res) {
    this.setData({
      // 获取到当前侧滑的索引
      indexValue: res.detail.current,
    });
    if (res.detail.source == "touch") {
      switch (this.data.indexValue) {
        // 根据索引设置高度
        case 0:
          this.setData({
            swiperHeight: this.data.subscribe
          });
          break;
        case 1:
          this.setData({
            swiperHeight: this.data.hot
          });
          break;
        case 2:
          this.setData({
            swiperHeight: this.data.newest
          });
          break;
      }
    }
  },
  getWindowH: function() {
    // 获取到窗口高度
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          windowHeight: res.windowHeight
        });
      },
    })
  },
  showAdd: function() {
    // 打开发布页面
    wx.navigateTo({
      url: '/pages/add/add',
    })
  },
  showSearch: function() {
    // 跳转到搜索页面
    wx.navigateTo({
      url: '/pages/search/search',
    })
  }
})