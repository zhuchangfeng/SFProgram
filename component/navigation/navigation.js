// component/navigation/navigation.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      //接收传过来的标题名称
      type: String
    },
    searchValue: {
      //接收传过来是否显示搜索按钮
      type: String,
      observer: function(newVal) {
        var flag = newVal == "false" ? false : true;
        this.setData({
          search: flag
        });
      }
    },
    editValue: {
      //接收传过来是否显示编辑按钮
      type: String,
      observer: function(newVal) {
        var flag = newVal == "false" ? false : true;
        this.setData({
          edit: flag
        });
      }
    },
    top: {
      //接收传过来是否滚动的值
      type: Number,
      observer: function(newVal, oldVal, changedPath) {
        this.setData({
          currentValue: newVal
        });
        var deviation = newVal - oldVal; //向下滚动的偏差值
        var devContrary = oldVal - newVal; //向上滚动的偏差值
        if (deviation > 0) {
          var mt = this.data.marginTop - deviation / 4 <= -25 ? -25 : this.data.marginTop - deviation / 4;
          var ml = this.data.marginLeft + deviation / 2.5 >= 50 ? 50 : this.data.marginLeft + deviation / 2.5;
          var faceValue = this.data.defaultFace - deviation / 10 <= 20 ? 20 : this.data.defaultFace - deviation / 10;
          if (this.data.currentValue <= 125) {
            var colorValue = "transparent";
          } else {
            var colorValue = "#fff";
          }
        } else {
          if (this.data.currentValue <= 125) {
            var mt = this.data.marginTop + devContrary / 4 >= 10 ? 10 : this.data.marginTop + devContrary / 4;
            var ml = this.data.marginLeft + deviation / 2.5 <= 0 ? 0 : this.data.marginLeft + deviation / 2.5;
            var faceValue = this.data.defaultFace + devContrary / 10 >= 30 ? 30 : this.data.defaultFace + devContrary / 10;
            var colorValue = "transparent";
          } else {
            var mt = -25;
            var ml = 50;
            var faceValue = 20;
            var colorValue = "#fff";
          }
        }
        this.setData({
          marginTop: mt,
          marginLeft: ml,
          defaultFace: faceValue,
          color: colorValue
        })
      }
    },
    bgColor: {
      //接收传过来的背景颜色
      type: String,
      observer: function(newVal) {
        this.setData({
          color: newVal
        });
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentValue: 0, //当前距离顶部位置的默认是0
    marginTop: 10, //默认是10px
    defaultFace: 30, //默认字体大小30px
    marginLeft: 0, //默认是0px
    search: false, //显示搜索图标默认是不显示
    edit: false, //显示编辑图标默认是不显示
    color: '#fff', //默认的背景颜色为白色
  },

  /**
   * 组件的方法列表
   */
  methods: {
    callBack: function() {
      // 返回上一层
      wx.navigateBack({
        delta: 1
      })
    },
    showSearch: function() {
      wx.navigateTo({
        url: '/pages/search/search',
      })
    },
    showEdit: function() {
      wx.navigateTo({
        url: '/pages/editor/editor',
      })
    }
  },
})