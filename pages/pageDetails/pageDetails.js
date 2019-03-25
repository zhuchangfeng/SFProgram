// pages/pageDetails/pageDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    choiceData: [{
        text: '详情介绍'
      },
      {
        text: '讲座推荐'
      }
    ],
    imgSrc: {
      img1: './image/return_b.svg',
      img2: './image/label_b.svg',
      img3: './image/share_b.svg'
    }, //图片地址
    indexValue: 0, //选择的索引值默认是0
    choiceHeight: null, //筛选的盒子高度值默认是空
    choiceTop: null, //筛选的盒子距离顶部的值默认是空
    brieBottom: null, //详情的盒子底部距离顶部高度值默认是空
    titleHeight: null, //标题底部距离顶部的值默认是空（px）
    styleValue: " position: absolute", //选择的定位
    titleBg: 'transparent', //标题的样式背景颜色
    scrollTop: 0, //距离顶部的
    gradeValue: 5, //默认是0颗星
    leftValue: 'margin-left:0%', //移动盒子的位置 默认是不移动
    similarData: [{
      describe: '凯威教你学 Python（三）：Python的控制语句', //标题描述
      price: 9.90, //价格
      attribute: 'LIVE', //标签属性
      author: '凯威的讲堂', //讲师
      people: '15', //人数
      imgSrc: 'https://live-static.segmentfault.com/184/183/1841839299-5b98cde7aa94d_render' //图片链接
    }],
    otherData: [{
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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.queryMultipleNodes('#choiceBox', (res) => {
      this.setData({
        choiceHeight: res.height,
        choiceTop: res.top
      })
    });
    this.queryMultipleNodes('#titleBar', (res) => {
      this.setData({
        titleHeight: res.height
      })
    });
    this.queryMultipleNodes('#briefBox', (res) => {
      this.setData({
        brieBottom: res.bottom + res.height,
      });
    });
    this.queryMultipleNodes('#buyBox', (res) => {
      this.setData({
        buyHeight: res.height,
      });
    });
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
      var isOk = false;
      if (res.scrollTop >= this.data.choiceTop - this.data.titleHeight) {
        if (isOk) {
          return;
        }
        this.setData({
          styleValue: ' position: fixed;top:' + this.data.titleHeight + 'px',
          styleData: ' position: fixed;bottom: 0px',
          imgSrc: {
            img1: './image/return_g.svg',
            img2: './image/label_g.svg',
            img3: './image/share_g.svg'
          },
          titleBg: '#fff',
        });
        isOk = true;
      } else {
        isOk = false;
      }
    } else {
      var isOk = false;
      if (res.scrollTop < this.data.choiceTop - this.data.titleHeight) {
        if (isOk) {
          return;
        }
        this.setData({
          styleValue: ' position: absolute;',
          styleData: 'position: absolute;top:' + (this.data.brieBottom + this.data.titleHeight) + 'px',
          imgSrc: {
            img1: './image/return_b.svg',
            img2: './image/label_b.svg',
            img3: './image/share_b.svg'
          },
          titleBg: 'transparent',
        });
        isOk = true;
      } else {
        isOk = false;
      }
    }
    this.setData({
      scrollTop: res.scrollTop,
    })
  },
  /**
   * 自定义事件
   */
  selectOne: function(res) {
    // 获取到点击的索引值
    this.setData({
      indexValue: res.currentTarget.dataset.index
    });
    switch (this.data.indexValue) {
      case 0:
        this.setData({
          leftValue: 'margin-left:0%'
        });
        break;
      case 1:
        this.setData({
          leftValue: 'margin-left:-100%'
        });
        break;
    }
  },
  queryMultipleNodes: function(id, callBack) {
    // 获取到节点的信息
    const query = wx.createSelectorQuery();
    query.select(id).boundingClientRect(function(res) {
      return callBack(res);
    }).exec();
  },
  callBack:function(){
    // 返回上一层
    wx.navigateBack({
      delta:1
    })
  }
})