// component/titleBar/titleBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
    },
    top: {
      type: Number,
      observer: function(newVal, oldVal, changedPath) {
        //newVal 就是新设置的数据， oldVal 是旧数据
        this.setData({
          currentValue: newVal
        });
        var deviation = newVal - oldVal; //向下滚动的偏差值
        var devContrary = oldVal - newVal; //向上滚动的偏差值
        if (deviation > 0) {
          var changeValue = (this.data.marginTop - deviation / 4) <= -this.data.bar ? -this.data.bar : (this.data.marginTop - deviation / 4);
          var faceValue = (this.data.defaultFace - deviation / 10) <= 20 ? 20 : (this.data.defaultFace - deviation / 10);
        } else {
          if (this.data.currentValue <= 100) {
            var changeValue = (this.data.marginTop - deviation / 4) >= 0 ? 0 : (this.data.marginTop - deviation / 4);
            var faceValue = (this.data.defaultFace + devContrary / 10) >= 30 ? 30 : (this.data.defaultFace + devContrary / 10);
          } else {
            var changeValue = -this.data.bar;
            var faceValue = 20;
          }
        }
        this.setData({
          marginTop: changeValue,
          defaultFace: faceValue
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    barHeight: null, // 获取到导航栏的高度(会变化的)
    defaultHeight: null, //获取到导航栏的高度(固定的)
    currentValue: 0, //当前距离顶部位置的默认是0
    defaultFace: 30, //默认字体大小30px
    proportion: 0, //rpx和px的比例
    bar: 0, //搜索栏的高度 (px)
    titleBar: null, // 导航栏标题(px)
    marginTop: 0, //默认是0
  },
  ready: function() {
    this.queryMultipleNodes();
    this.getWindowWidth();
  },
  /**
   * 组件的方法列表
   */
  methods: {
    queryMultipleNodes: function() {
      // 获取到导航栏高度
      var that = this;
      var query = wx.createSelectorQuery().in(that);
      query.select("#titleBar").boundingClientRect(function(res) {
        that.setData({
          barHeight: res.height
        })
      }).exec();
      query.select("#title").boundingClientRect(function(res) {
        that.data.defaultHeight = res.height;
      }).exec();
      query.select("#bar").boundingClientRect(function(res) {
        that.setData({
          bar: res.height
        });
        that.setData({
          titleBar: that.data.barHeight - that.data.bar
        });
      }).exec();
    },
    getWindowWidth: function() {
      // 获取到屏幕宽度
      this.setData({
        proportion: wx.getSystemInfoSync().windowWidth / 750
      });
    },
    showAdd: function() {
      // 打开添加页面
      wx.navigateTo({
        url: '/pages/add/add',
      })
    },
    showSearch: function() {
      wx.navigateTo({
        url: '/pages/search/search',
      })
    }
  }
})