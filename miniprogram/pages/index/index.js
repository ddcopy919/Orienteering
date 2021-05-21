// miniprogram/pages/index/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageCur: "home",
    
    baseInfo: {
      // 用户标识
      userId:'',
      // 角色标识 ABCD, A:1 系统管理员，B:1 活动管理者，C:1 普通用户，D:待定  
      roleId:'1111',
      // 用户VIP级别 1,2,3...
      userLevel: 9,
      // 能力级别 4,3,2,1
      sportLevel:''
    },

    tabBar: {
      home: {
        content: '心悦定向越野',
        text:'首页',
        img:'home'
      },
      help: {
        content: '定向越野技能讲解',
        text:'帮助',
        img:'list'
      },
      main: {
        content: '心悦定向越野活动',
        text:'活动',
        img:'addr'
      },
      self: {
        content: '个人中心',
        text:'我的',
        img:'user'
      },
    }
  },

  navChange (e) {
    var cur = e.currentTarget.dataset.cur
    this.setData({
      content: this.data.tabBar[cur].content,
      pageCur: cur
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      content: this.data.tabBar.home.content,
      appData: app.data
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})