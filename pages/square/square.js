import {Postitem} from '../../model/Postitem'
const postApi = new Postitem()

Page({
	data: {
	  banner: ['../../images/banner1.jpg', '../../images/banner2.jpg'],
	  postList: [],
	  pictureUrlList: []
	},
  
	onLoad() { 
		wx.setNavigationBarTitle({
			title: '广场'
		})
		postApi.getPostList({}).then(res=>{
			if(res == null) return
			var postList = res
			for(var i = 0;i < postList.length;i++){
				//请求帖子图片
				var options = {data: {post_id: postList[i].id}}
				var picUrls = []
				postApi.getPicureUrlList(options).then(res=>{
					picUrls = res
					console.log(res)
					postList[i].pictureUrlList = res
					this.setData({
						postList: postList
					})
				}).catch(err=>{
					console.log(err)
				})
			}
		}).catch(err=>{
			console.log(err)
		})
		
	},
	
	onShow(){
		
	  
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
	}
  })