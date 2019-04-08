Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  onGotUserInfo: function(){
    console.log("请确认授权");
    var appInstance = getApp();
    wx.login({
      success: function (res) {
        var code = res.code;
        // wx.getUserInfo({
        //   success: function (res) {
        //     // 实现与后台的通讯绑定
        //     wx.request({
        //       url: appInstance.globalData.webPath + appInstance.globalData.decodeUserInfoUrl,
        //       data: {
        //         code: code,
        //         encryptedData: res.encryptedData
        //       },
        //       success: function (res) {
        //         // console.log(res);
        //         var result = res.data.data;
        //         appInstance.globalData.openid = result.openid;
        //         appInstance.globalData.appid = result.appid;
        //         wx.navigateBack({})
        //       },
        //       complete: function (res) {
        //         appInstance.globalData.initFlag = false;
        //       },
        //       fail: function () {
        //         console.log(123)
        //       }
        //     });
        //   }
        // })
      }
    });
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