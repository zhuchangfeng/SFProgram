// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: "", //输入框的内容
    searchValue: [], //历史输入的内容
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getLocalStorage();
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
   * 自定义事件
   */
  getInputValue: function(e) {
    // 同步输入框的数据
    this.setData({
      inputValue: e.detail.value
    })
  },
  hideSearch: function() {
    // 关闭搜索
    wx.navigateBack({
      delta: 1
    })
  },
  getsearch: function() {
    var that = this;
    var res = wx.getStorageInfoSync();
    if (res.keys.length == 0 || res.keys.toString().indexOf("search") == -1) {
      //本地存储中不存在数据或本地存储中不存在search
      var arr = [];
      arr.unshift(that.data.inputValue.replace(/\s+/g, ""));
      wx.setStorageSync('search', arr);
    } else {
      if (res.keys.toString().indexOf("switchValue") != -1) {
          var value = wx.getStorageSync("search");
          if (value.length == 0) {
            // 本地存储中存在search且search的值为空
            var arr = [];
            arr.unshift(that.data.inputValue.replace(/\s+/g, ""));
            wx.setStorageSync("search", arr);
          } else {
            // 本地存储中存在search且search的值为不为空
            var arr = value;
            arr.unshift(that.data.inputValue.replace(/\s+/g, ""));
            var arr_unique = arr.filter(function(item,index,arr){
              return arr.indexOf(item,index+1)===-1
            })
            wx.setStorageSync("search", arr_unique);
          }
        }
    }
    that.getLocalStorage();
  },
  getLocalStorage: function() {
    // 获取到本地存储中的search
    var that = this;
    var res = wx.getStorageInfoSync();
    if (res.keys.length == 0 || res.keys.toString().indexOf("search") == -1) {
      that.setData({
        searchValue: ""
      })
    } else {
      if (res.keys.toString().indexOf("switchValue") != -1) {
          var value = wx.getStorageSync("search");
          that.setData({
            searchValue: value
          })
        } else {
          that.setData({
            searchValue: ""
          })
        }
      
    }
  },
  searchEnter: function() {
    if (this.data.inputValue.trim() == '') {
      return;
    } else {
      this.getsearch();
      this.setData({
        inputValue: ""
      })
    }
  },
  cleanLocalStorage: function() {
    // 清除历史搜索
    wx.removeStorageSync("search");
    this.setData({
      searchValue: ""
    })
  },
  deleteOne: function(res) {
    // 删除某条搜索记录
    var value = wx.getStorageSync("search");
    var index = res.currentTarget.dataset.index;
    value.splice(index, 1);
    if (value.length == 0) {
      wx.removeStorageSync("search");
      this.setData({
        searchValue: ""
      })
    } else {
      wx.setStorageSync('search', value);
      this.setData({
        searchValue: value
      })
    }
  }
})