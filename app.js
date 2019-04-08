//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs);
    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     console.log(res);
    //   }
    // })
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
  },
  globalData: {
    userInfo: null
  },
  getUserInfo: function(cb){
    var that = this;
    if(this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo);
    }else{
      wx.checkSession({
        success: function(res){
          //session 未过期，并且在本生命周期一直有效
          // if (res.code) {
          //   wx.request({
          //     url: that.globalData.webPath + that.globalData.decodeUserInfoUrl,
          //     data: {
          //       code: res.code,
          //       encryptedData: res.encryptedData
          //     },
          //     success: function (res) {
          //       // console.log(res);
          //       var result = res.data.data;
          //       that.globalData.openid = result.openid;
          //       that.globalData.appid = result.appid;
          //     },
          //     complete: function (res) {
          //       that.globalData.initFlag = false;
          //     }
          //   });
          // } else {
          //   console.log('获取用户登录态失败！' + res.errMsg)
          // }
        },
        fail: function(){
          console.log('失败');
        }
      })
    }
  }
})