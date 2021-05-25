//app.js
App({
  globalData:{},

  data:{
    settings:{
      title: 'ddd',
      // 最大打卡半径(米)
      maxScan: 30,
      colorStyle: 'green',
      bgImage: '/images/bkg/bg1.jpg'
    },
    baseInfo: {
      // 用户标识
      userId:'ljd',
      // 角色标识 ABCD, A:1 系统管理员，B:1 活动管理者，C:1 待定  
      roleId:'111',
      // 用户VIP级别 1,2,3...
      userLevel: 3,
      // 经验值
      expScores: 9,
      // 体能分(参考：参加次数-消耗累计)
      sportScores:200,
      // 距离分(m)
      distScores:200
    },
  },
  
  onLaunch: function () {
    /*
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }*/
    wx.getSystemInfo({
      success: e => {
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;  
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
  }
})
