// pages/specialDetails/specialDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleHeight: null, //顶部栏的高度
    specialBottom: null, // 详情的盒子距离顶部的距离
    imageBottom: null, // 背景图片的盒子距离顶部的距离
    textBottom: null, //标题距离顶部的距离
    scrollTop: 0, //距离顶部的
    opacityValue: 1, //透明的值,默认是不透明
    bcColorValue: "transparent", //标题的背景颜色
    borderColor: 'transparent', //标题的边框颜色
    textOpacity: 0, // 标题文字透明度,默认是0
    articleData: [
      // 文章数据
      {
        title: 'CSS魔法堂：稍稍深入伪类选择器',
        attribute: 'article',
        author: '小爱',
        amount: 50
      },
      {
        title: 'Redis 的8大应用场景',
        attribute: 'article',
        author: 'Java技术宅',
        amount: 20
      },
      {
        title: '如何快速入门vue2.0',
        attribute: 'article',
        author: '小爱',
        amount: 50
      },
      {
        title: '微信小程序实现3D轮播图',
        attribute: 'article',
        author: 'minijie',
        amount: 10
      },
      {
        title: '如何快速入门vue2.0',
        attribute: 'article',
        author: '小爱',
        amount: 50
      },
      {
        title: '微信小程序实现3D轮播图',
        attribute: 'article',
        author: 'minijie',
        amount: 10
      }
    ],
    imgSrc: {
      img1: './image/return_b.svg',
      img2: './image/share_b.svg'
    }, //图片地址
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.queryMultipleNodes('#titleBox', (res) => {
      this.setData({
        titleHeight: res.height
      });
    });
    this.queryMultipleNodes('#specialBox', (res) => {
      this.setData({
        specialBottom: res.bottom
      });
    });
    this.queryMultipleNodes('#imageBox', (res) => {
      this.setData({
        imageBottom: res.bottom
      });
    });
    this.queryMultipleNodes('#textBox', (res) => {
      this.setData({
        textBottom: res.bottom
      });
    })
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
   * 用户滚动事件
   */
  onPageScroll: function(res) {
    if (this.data.scrollTop - res.scrollTop <= 0) {
      var opacity = res.scrollTop >= this.data.specialBottom - this.data.imageBottom ? 0 : 1;
      var bcColor = res.scrollTop >= this.data.specialBottom - this.data.titleHeight - 1 ? '#fff' : 'transparent';
      var imgSrc = res.scrollTop >= this.data.specialBottom - this.data.imageBottom ? {
        img1: './image/return_g.svg',
        img2: './image/share_g.svg'
      } : {
        img1: './image/return_b.svg',
        img2: './image/share_b.svg'
      };
      var borderColor = res.scrollTop >= this.data.specialBottom - this.data.titleHeight - 1 ? '#f1f1f1' : 'transparent';
      var textOpacity = res.scrollTop >= this.data.textBottom ? 1 : 0
    } else {
      var opacity = res.scrollTop < this.data.specialBottom - this.data.imageBottom ? 1 : 0;
      var bcColor = res.scrollTop < this.data.specialBottom - this.data.titleHeight - 1 ? 'transparent' : '#fff'
      var borderColor = res.scrollTop < this.data.specialBottom - this.data.titleHeight - 1 ? 'transparent' : '#f1f1f1'
      var textOpacity = res.scrollTop < this.data.textBottom ? 0 : 1;
      var imgSrc = res.scrollTop < this.data.specialBottom - this.data.imageBottom ? {
        img1: './image/return_b.svg',
        img2: './image/share_b.svg'
      } : {
        img1: './image/return_g.svg',
        img2: './image/share_g.svg'
      };
    }
    this.setData({
      scrollTop: res.scrollTop,
      opacityValue: opacity,
      bcColorValue: bcColor,
      borderColor: borderColor,
      textOpacity: textOpacity,
      imgSrc: imgSrc
    })
  },
  /**
   * 自定义事件
   */
  queryMultipleNodes: function(id, callBack) {
    // 获取到节点的信息
    const query = wx.createSelectorQuery();
    query.select(id).boundingClientRect(function(res) {
      return callBack(res);
    }).exec();
  },
})