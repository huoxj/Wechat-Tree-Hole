// app.js
App({
    usersList: [
        {
            id:1,
            publisher:"user1",
            title:"Search1",
            content:"s1content"
        } ,{
            id:2,
            publisher:"user2",
            title:"Search2",
            content:"s2content"
        }, {
            id:3,
            publisher:"user3",
            title:"Search3",
            content:"s3content"
        }
    ],
    onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
