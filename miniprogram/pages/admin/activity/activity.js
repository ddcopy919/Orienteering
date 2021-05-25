/**
 * 获取场地路线数据
 */
function getPlaceRoutes(o) {
  var places = [
    {
      p1: '北京市',
      p2: '北京市',
      p3: '海淀区',
      p4: "紫竹院公园",
      center: {
        lng: 116,
        lat: 39
      },
      points: [
        {
          lng: 116.01,
          lat: 39.01
        },
        {
          lng: 116.03,
          lat: 39.02
        },
        {
          lng: 116.02,
          lat: 39.03
        },
        {
          lng: 116.03,
          lat: 39.03
        },
      ],
      r: 20,
      routes: [
        {
          bgn: 0,
          end: 2,
          pnts: [1, 3]
        },
        {
          bgn: 1,
          end: 2,
          pnts: [0, 3]
        }
      ]
    },
    {
      p1: '北京市',
      p2: '北京市',
      p3: '海淀区',
      p4: "紫竹院公园",
      center: {
        lng: 116,
        lat: 39
      },
      points: [
        {
          lng: 116.01,
          lat: 39.01
        },
        {
          lng: 116.03,
          lat: 39.02
        },
        {
          lng: 116.02,
          lat: 39.03
        },
        {
          lng: 116.03,
          lat: 39.03
        },
      ],
      r: 20,
      routes: [
        {
          bgn: 0,
          end: 2,
          pnts: [1, 3]
        },
        {
          bgn: 1,
          end: 2,
          pnts: [0, 3]
        }
      ]
    }
  ]
  o.setData({
    places: places
  })
}

Page({
  /**
   * 页面的初始数据
   */
  data: {
    places: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
    getPlaceRoutes(this)
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
