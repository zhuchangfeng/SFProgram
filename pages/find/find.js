// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    barData: [{
        imgSrc: './image/face.svg',
        describe: '动态'
      },
      {
        imgSrc: './image/answer.svg',
        describe: '问答'
      },
      {
        imgSrc: './image/article.svg',
        describe: '文章'
      },
      {
        imgSrc: './image/channel.svg',
        describe: '频道'
      },
      {
        imgSrc: './image/rankings.svg',
        describe: '排行榜',
        url:'../ranking/ranking'
      }
    ],
    scrollTop: 0, //滚动的高度默认是0px
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
      }
    ],
    questionData: [
      // 问答数据
      {
        title: '怎么获取到vue的DOM对象',
        attribute: 'question',
        author: 'minijie',
        amount: 10
      },
      {
        title: '视频演示如何用 CSS 和 D3 创作一个小鱼游动的交互动画',
        attribute: 'question',
        author: 'minijie',
        amount: 66
      },
      {
        title: '写给前端工程师的10条实用原则 | Fundebug博客',
        attribute: 'question',
        author: '小黑同学',
        amount: 55
      },
      {
        title: '【小程序】保存到相册，头像裁圆，文字图片头像定位响应，兼容各种机型，随机背景图完全指南优化篇',
        attribute: 'question',
        author: '微信小黑',
        amount: 77
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
  specialFn: function() {
    // 查看全部（专题推荐）
    wx.navigateTo({
      url: "../special/special"
    })
  },
  communityFn: function() {
    // 查看全部（社区活动）
    wx.navigateTo({
      url: "../community/community"
    })
  },
  articleFn: function() {
    // 查看全部（热门文章）
    wx.navigateTo({
      url: "../article/article"
    })
  },
  answerFn:function(){
    // 查看全部（热门问答）
    wx.navigateTo({
      url: "../answer/answer"
    })
  },
  goSpecial:function(){
    // 专题推荐详情
    wx.navigateTo({
      url: "../specialDetails/specialDetails"
    })
  },
  selectOne:function(res){
    var index = res.currentTarget.dataset.index;
    var url = this.data.barData[index].url;
    wx.navigateTo({
      url: url
    })
  }
})