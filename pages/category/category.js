import {Category} from '../../model/Category'

const categoryApi = new Category()

Page({

  data: {
	categoryList : [],
	categoryHeat : []
  },
  
  onLoad(options) {
		wx.setNavigationBarTitle({
		title: '分区',
		})
		//获取分区信息
		categoryApi.getCategoryList({}).then(res=>{
			this.setData({
				categoryList:res
			})
			for(let i = 0;i < this.data.categoryList.length;i++){
				categoryApi.getCategoryHeat({data: {postPartition: this.data.categoryList[i]}}).then(res=>{
					this.setData({
						['categoryList['+i+']'] : {id: i, name: this.data.categoryList[i], heat: res}
					})
				})
			}
		}).catch(err=>{
			console.log(err)
		})

  },
  handleTap: function(options) {
		//获取被点击分区的name
		const targetId = '#' + options.currentTarget.dataset.categoryname
		console.log(targetId)
		wx.navigateTo({
			url: '/pages/search-result/search-result?query=' + targetId
		})
  }
})