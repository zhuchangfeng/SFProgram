// pages/forum/forum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    barData: [{
        imgSrc: './image/hot.svg',
        describe: '热门'
      },
      {
        imgSrc: './image/time.svg',
        describe: '最新'
      },
      {
        imgSrc: './image/live.svg',
        describe: 'LIVE'
      },
      {
        imgSrc: './image/series.svg',
        describe: '系列'
      },
      {
        imgSrc: './image/curriculum.svg',
        describe: '公开课'
      }
    ],
    goodCourses: [{
        describe: '跨平台移动App开发实战2 - 完整开发一个调音器应用', //标题描述
        price: 15, //价格
        attribute: 'LIVE', //标签属性
        author: 'minijie', //讲师
        people: '15', //人数
        imgSrc: 'https://live-static.segmentfault.com/960/643/960643691-5b769e3115c06_render' //图片链接
      },
      {
        describe: 'Git代码管理与团队协作最佳实践', //标题描述
        price: 29.90, //价格
        attribute: 'LIVE', //标签属性
        author: '落叶', //讲师
        people: '19', //人数
        imgSrc: 'https://live-static.segmentfault.com/477/285/477285198-5b38b2a8341b1_render' //图片链接
      },
      {
        describe: '浏览器工作原理及在网页性能优化中的应用', //标题描述
        price: 9.90, //价格
        attribute: 'LIVE', //标签属性
        author: '艾特老干部', //讲师
        people: '97', //人数
        imgSrc: 'https://live-static.segmentfault.com/344/512/3445122803-5b1bd6d864c8b_render' //图片链接
      },
      {
        describe: '「Yii2启示录」生命周期 一人撑起千斤担', //标题描述
        price: 16.90, //价格
        attribute: 'LIVE', //标签属性
        author: '阿北', //讲师
        people: '5', //人数
        imgSrc: 'https://live-static.segmentfault.com/423/020/4230207948-5b4e998072247_render' //图片链接
      }
    ],
    hotRecommend: [{
        describe: '一起挣外快吧——环境搭建+万能的WP+前端如何玩转WP', //标题描述
        price: 10.24, //价格
        attribute: 'LIVE', //标签属性
        author: 'Meathill', //讲师
        people: '77', //人数
        imgSrc: 'https://live-static.segmentfault.com/300/901/3009019497-5b5742ce2b698_render' //图片链接
      },
      {
        describe: '【Kotlin极简特性】Kotlin基础语法', //标题描述
        price: 8.88, //价格
        attribute: '视频', //标签属性
        author: '东海陈光剑', //讲师
        people: '23 ', //人数
        imgSrc: 'https://live-static.segmentfault.com/368/809/368809895-59bb91995263c_render' //图片链接
      },
      {
        describe: 'Java 微服务实践 - Spring Cloud 系列（七）Ribbon 源码', //标题描述
        price: 32.00, //价格
        attribute: 'LIVE', //标签属性
        author: 'mercyblitz', //讲师
        people: '651', //人数
        imgSrc: 'https://live-static.segmentfault.com/286/540/2865405414-58dccc463f018_render' //图片链接
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
  /**
   * 页面滚动触发事件的处理函数
   */
  onPageScroll: function(res) {
    this.setData({
      scrollTop: res.scrollTop
    });
  }
})