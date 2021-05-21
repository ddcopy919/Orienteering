const app = getApp()

Component({
  /**
   * 组件的一些选项
   */
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },

  /**
   * 组件的对外属性
   */
  properties: {
  },

  /**
   * 页面的初始数据
   */
  data: {
  },

  attached(){
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChangeIntro(e){
      this.setData({
      })
    },

    BackPage() {
      wx.navigateBack({
        delta: 1
      });
    },

    toHome(){
      wx.reLaunch({
        url: '/pages/home/index',
      })
    }
  }
})