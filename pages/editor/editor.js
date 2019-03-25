// pages/editor/editor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      nickName: '',
      avatarUrl: '',
      gender: 0 //性别 0：未知、1：男、2：女 
    },
    userData: [{
        imageSrc: './image/portrait.svg',
        placeholderValue: '请填写你的昵称',
        value: '',
        isDisabled: false,
      },
      {
        imageSrc: './image/sex.svg',
        placeholderValue: '请选择你的性别',
        value: '',
        isDisabled: true,
      },
      {
        imageSrc: './image/home.svg',
        placeholderValue: '请写下你的个人网站',
        value: '',
        isDisabled: false,
      },
      {
        imageSrc: './image/comma.svg',
        placeholderValue: '请用简洁的语言介绍下自己',
        value: '前端小白的日常',
        isDisabled: false,
      },
      {
        imageSrc: './image/location.svg',
        placeholderValue: '请选择你所在的城市',
        value: '广州',
        isDisabled: true,
      }
    ],
    experienceValue: [{
        imgSrc: './image/degree.svg',
        aggregate: [{
            title: '广东岭南职业技术学院',
            describe: '软件技术'
          },
          {
            title: '澄海华侨中学',
            describe: '全日制'
          }
        ],
        title: '学习经历'
      },
      {
        imgSrc: './image/package.svg',
        aggregate: [{
          title: 'intters',
          describe: 'web前端工程师'
        }],
        title: '工作经历'
      },
      {
        imgSrc: './image/card.svg',
        aggregate: [{
          title: `（*/㉨＼*）捂脸`,
          describe: `
.◢████◣  
█ ＞_ ＜ █  
 ╰—┰—╯  
　┕█┙  
　  ∏
          `
        }],
        title: '项目&著作'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getUser();
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
  getUser: function() {
    var that = this;
    try {
      var value = wx.getStorageSync('userInfo');
      if (value) {
        wx.setNavigationBarTitle({
          title: value.nickName
        })
        that.setData({
          userInfo: {
            nickName: value.nickName,
            avatarUrl: value.avatarUrl,
            gender: value.gender
          },
        });
        var userData = that.data.userData;
        switch (that.data.userInfo.gender) {
          case 0:
            userData[1].value = '保密';
            break;
          case 1:
            userData[1].value = '男';
            break;
          case 2:
            userData[1].value = '女';
            break;
        }
        userData[0].value = that.data.userInfo.nickName
        that.setData({
          userData: userData
        })
      }
    } catch (e) {
      console.log(e);
    }
  },
  callBack: function() {
    // 返回上一层
    wx.navigateBack({
      delta: 1
    })
  }
})