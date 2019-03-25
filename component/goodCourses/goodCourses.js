// component/goodCourses/goodCourses.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    courses:{
      type:Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goDetails:function(){
      wx.navigateTo({
        url: '../pageDetails/pageDetails'
      })
    }
  },
})
