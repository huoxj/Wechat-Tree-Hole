Page({
	data: {
	  banner: ['../../images/banner1.jpg', '../../images/banner2.jpg']
	},
  
	onLoad: function (options) {
	  wx.setNavigationBarTitle({
		title: '广场'
	  })
	},
  
	handleTap: function() {
		wx.showToast({
			title: 'TODO: 点击帖子逻辑',
			icon: 'none'
		})
	}
  })