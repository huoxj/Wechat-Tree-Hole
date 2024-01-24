import {Category} from '../../model/Category'
import {Postitem} from '../../model/Postitem'
const postApi = new Postitem()
const categoryApi = new Category()

Page({
	data: {
		categoryList: [],
		postList: [],
		index: 0,
		titleText: "",
		contentText: "" 
	},

	onLoad: function(){
		wx.setNavigationBarTitle({
		  title: '发布帖子',
		})
		//获取分区信息
		categoryApi.getCategoryList({}).then(res=>{
			this.setData({
				categoryList: res
			})
		}).catch(err=>{
			console.log(err)
		})
		//获取帖子信息
		postApi.getPostList({}).then(res=>{
			this.setData({
				postList:res
			})
		}).catch(err=>{
			console.log(err)
		})
	},

	pickerChange: function(e){
		this.setData({
			index: e.detail.value
		})
	},

	titleChange(event){
		this.setData({
			titleText: event.detail.value
		})
	},

	contentChange(event){
		this.setData({
			contentText: event.detail.value
		})
	},

	postConfirm(){
		var lastPost = this.data.postList[this.data.postList.length - 1]
		var newPostCategory = this.data.categoryList[this.data.index],
			newPostTitle = this.data.titleText,
			newPostContent = this.data.contentText
		if(newPostTitle == "" || newPostContent == ""){
			wx.showToast({
				title: '标题或内容不能为空！',
				icon: 'none'
			  })
			return
		}
		var options = {data:{username: getApp().globalData.userName, postPartition: newPostCategory, title: newPostTitle, text: newPostContent}}//username todo
		postApi.postPost(options).then(res=>{
			if(res == null){
				wx.showToast({
				  title: '发布失败！',
				  icon: 'error'
				})
			}
			else{
				wx.showToast({
					title: '发布成功！'
				})
			}
		}).catch(err=>{
			console.log(err)
			wx.showToast({
				title: '发布失败！',
			})
		})
	}

  })
  