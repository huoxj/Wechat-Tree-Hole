const app = getApp()
Page({
	data: {
      banner: ['../../images/banner1.jpg', '../../images/banner2.jpg'],
      dataList: app.usersList
	},
  
	onLoad: function (options) {
	  wx.setNavigationBarTitle({
		title: '广场'
	  })
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
	}
  })