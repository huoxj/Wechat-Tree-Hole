Page({
	data: {
	  avatarUrl: '/images/avatar.png',
	  name: 'NJUer',
	  department: '母猪产后护理系'
	},
	onLoad: function(){
		wx.setNavigationBarTitle({
		  title: '我的',
		})
	},
	handleTap: function() {
	  wx.showToast({
		title: 'TODO: 设置',
		icon: 'none'
	  })
	}
  })
  