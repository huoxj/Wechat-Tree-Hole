import {Comment} from '../../model/Comment'
import {Request} from '../../utils/request'
import {User} from '../../model/User'

const userApi = new User()
const commentApi = new Comment()
const thumbApi = new Request()

Page({

  data: {
		postDetail : {},
		commentList : [],
		commentText : ''
  },

  onLoad(options) {
	    wx.clearStorageSync()//记得删除
		wx.setNavigationBarTitle({
		title: '帖子内容',
		})
		//获取管道
		const eventChannel = this.getOpenerEventChannel()
		eventChannel.on('postDetail', postDetail => {
			this.setData({
				postDetail: postDetail
			})
			//获取评论列表
			var data = {post_id: this.data.postDetail.id}
			commentApi.getCommentList({data}).then(res=>{
				this.setData({
					commentList:res
				})
				this.updateUserProfile(0)
			}).catch(err=>{
				console.log(err)
			})
		})
		
		
  },

  thumb(e) {
	    //获取点赞信息 决定当前是否可以点赞
		const thumbKey = 'thumbed' + this.data.postDetail.id
		const thumbed = wx.getStorageSync(thumbKey) || false
		if(thumbed == true) return;
		wx.setStorageSync(thumbKey, true)
	  	//点赞网络请求
	return new Promise((resolve, reject)=>{
		var likeData = {post_id: this.data.postDetail.id}
		
		let props = {
			url : "/like",
			data : likeData,
			type : "POST",
			sCallBack : res=>{
				resolve(res)
			},
			eCallBack : res=>{
				reject(res)
			}
		}
		this.setData({
			'postDetail.likesCount' : this.data.postDetail.likesCount + 1
		})
		thumbApi.request(props)
	})
  },

  commentInput(e) {
		this.data.commentText = e.detail.value
  },

  commentConfirm(e) {
	  	let options = {data: {post_id: this.data.postDetail.id, username: getApp().globalData.userName, text: this.data.commentText}}
		commentApi.postComment(options).then(res=>{
			wx.showToast({
			  title: '评论成功!',
			  icon: 'null'
			})
			var newCommentList = this.data.commentList
			console.log(newCommentList)
			newCommentList.push({id:-1 ,postId: this.data.postDetail.id, userId: getApp().globalData.userId, likesCount: null,text: this.data.commentText})
			this.setData({
				commentList: newCommentList
			})
		}).catch(err=>{
			console.log(err)
			wx.showToast({
				title: '评论失败',
				icon: 'null'
			  })
		})
  },
	updateUserProfile(index){
		if(index == this.data.commentList.length) return
		var arr = this.data.commentList
		userApi.getUserProfile({data: {id: arr[index].userId}}).then(res=>{
			arr[index].userName = res.name
			this.setData({
				commentList: arr
			})
			this.updateUserProfile(index + 1)
		}).catch(err=>{
			console.log(err)
		})
	}

})