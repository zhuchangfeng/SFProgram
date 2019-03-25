// pages/ranking/ranking.js
var data = new Date();
var month = data.getMonth() + 1;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleData: [{
        text: '今天'
      },
      {
        text: '本周'
      },
      {
        text: month + '月'
      },
      {
        text: '季度'
      },
      {
        text: '年度'
      }
    ],
    indexValue: 0, //索引值默认是0
    topDistance: null, //选择的盒子到顶部的距离
    rankingData: [{
        imgSrc: 'https://i0.hdslb.com/bfs/sycp/tmaterial/201809/c9c64ddcabfccb04e0ee825c3e2201ea.jpg',
        name: 'xIAO',
        people: 302
      },
      {
        imgSrc: 'https://i0.hdslb.com/bfs/sycp/tmaterial/201809/c9c64ddcabfccb04e0ee825c3e2201ea.jpg',
        name: 'wwww',
        people: 301
      },
      {
        imgSrc: 'https://i0.hdslb.com/bfs/sycp/tmaterial/201809/c9c64ddcabfccb04e0ee825c3e2201ea.jpg',
        name: 'wwww',
        people: 300
      },
      {
        imgSrc: 'https://i0.hdslb.com/bfs/sycp/tmaterial/201809/c9c64ddcabfccb04e0ee825c3e2201ea.jpg',
        name: 'xIA2O',
        people: 299
      },
      {
        imgSrc: 'https://i0.hdslb.com/bfs/sycp/tmaterial/201809/c9c64ddcabfccb04e0ee825c3e2201ea.jpg',
        name: 'asksaf',
        people: 288
      },
      {
        imgSrc: 'https://i0.hdslb.com/bfs/sycp/tmaterial/201809/c9c64ddcabfccb04e0ee825c3e2201ea.jpg',
        name: 'xIAO',
        people: 282
      },
      {
        imgSrc: 'https://i0.hdslb.com/bfs/sycp/tmaterial/201809/c9c64ddcabfccb04e0ee825c3e2201ea.jpg',
        name: 'xIAO',
        people: 280
      },
    ],
    leftValue: 'margin-left:0%', //移动盒子的位置 默认是不移动
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.queryMultipleNodes('#selectBox', (res) => {
      this.setData({
        topDistance: res.top + res.height
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.generateNumbers();
  },

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
  selectOne: function(res) {
    this.setData({
      indexValue: res.currentTarget.dataset.index
    });
    var value;
    if (this.data.indexValue == 0) {
      value = 0;
    } else {
      value = -this.data.indexValue + '00'
    }
    this.setData({
      leftValue: 'margin-left:' + value + '%'
    })
  },
  queryMultipleNodes: function(id, callBack) {
    // 获取到节点的信息
    const query = wx.createSelectorQuery();
    query.select(id).boundingClientRect(function(res) {
      return callBack(res);
    }).exec();
  },
  generateNumbers: function() {
    // 根据数据的长度生成同长度的数组
    var length = this.data.titleData.length;
    var arr = [];
    for (var i = 0; i < length; i++) {
      arr.push(i);
    }
    this.setData({
      numberArr: arr,
    })
  }
})