// pages/search-result/search-result.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist:app.usersList,
    searchList: [], //搜索渲染推荐数据。
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options) {
    var query = options.query;
    console.log("Received Query" + query);
    var arr = [];
    var dataL = this.data.datalist
    for (var i = 0; i < dataL.length; i++) {
      if (dataL[i].title.indexOf(query) >= 0) {
        arr.push(dataL[i]);
      };
      console.log(arr); 
      this.setData({
        searchList: arr
      });
    }


},
handleTap: function(options) {
    // wx.showToast({
    // 	title: 'TODO: 点击帖子逻辑',
    // 	icon: 'none'
    // })
    console.log(options)
    const data = this.data.dataList
    const targetId = options.currentTarget.dataset.postid
    console.log("Going to " + targetId)
    wx.navigateTo({
        url: '/pages/postdetail/postdetail?query=' + targetId
    })
},
  init(){
      //TBD
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})