import {User} from '../../model/User'
const userApi = new User()
const app = getApp()
Page({
	data: {
		userId: '0',
		avatarUrl: '/images/avatar.png',
		name: '未登录', 
		department: '无'
	},
	onLoad: function(){
		wx.setNavigationBarTitle({
		  title: '我的',
		})
		this.setData({
			userId: app.globalData.userId
		})
		userApi.getUserProfile({data: {id: this.data.userId}}).then(res=>{
			this.setData({
				name: res.name,
				department: res.department
			})
		}).catch(err=>{
			console.log(err)
		})
	},
	handleTap: function() {
	  wx.showToast({
		title: 'TODO: 设置',
		icon: 'none'
	  })
	}
  })
  