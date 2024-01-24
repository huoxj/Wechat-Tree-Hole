import {Postitem} from '../../model/Postitem'
const postApi = new Postitem()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options) {
		wx.setNavigationBarTitle({
		  title: '帖子列表',
		})
		var query = options.query;
		console.log("Received Query : " + query);
		if(query == null) return
		if(query.charAt(0) == '#'){
			//收到分区搜索请求
			let options = {data: {postPartition: query.substring(1)}}
			postApi.getPostListByCategory(options).then(res=>{
				this.setData({
					searchList:res
				})
			}).catch(err=>{
				console.log(err)
			})
		}
		else{
			//搜到关键字搜索请求
			postApi.getPostList({data: {}}).then(res=>{
				var postList = []
				var length = 0
				if(res != null) length = res.length
				for(var i = 0;i < length;i++){
					if (res[i].title.indexOf(query) >= 0) {
						postList.push(res[i]);
					  };
				}
				console.log(postList); 
				this.setData({
					searchList: postList
				  });
			}).catch(err=>{
				console.log(err)
			})
		}
	},
handleTap: function(options) {
    //获取被点击帖子的id
		const targetId = options.currentTarget.dataset.postid
		var postDetail = null
        this.data.searchList.forEach(item => {
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