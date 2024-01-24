import {Postitem} from '../../model/Postitem'
import {User} from '../../model/User'
const postApi = new Postitem()
const userApi = new User()

Page({
	data: {
	  banner: ['../../images/banner1.jpg', '../../images/banner2.jpg'],
	  postList : []
	},
  
	onLoad() { 
	  wx.setNavigationBarTitle({
		title: '广场'
	  })
	},
	
	onShow(){
	  postApi.getPostList({}).then(res=>{
		  	this.setData({
				  postList: res
			})
			this.updateUserProfile(0)
	  }).catch(err=>{
		  console.log(err)
	  })
	  
	},
  
	handleTap: function(options) {
		//获取被点击帖子的id
		const targetId = options.currentTarget.dataset.postid
		var postDetail = null
        this.data.postList.forEach(item => {
			if(item.id == targetId) postDetail = item
		});
        wx.navigateTo({
			url: '/pages/postdetail/postdetail',
			success: res => {
				//通过管道传递帖子detail
				res.eventChannel.emit('postDetail', postDetail)
			}
        })
	},
	updateUserProfile(index){
		if(index == this.data.postList.length) return
		var postList = this.data.postList
		userApi.getUserProfile({data: {id: postList[index].userId}}).then(res=>{
			postList[index].userName = res.name
			this.setData({
				postList: postList
			})
			this.updateUserProfile(index + 1)
		}).catch(err=>{
			console.log(err)
		})
	}

  })