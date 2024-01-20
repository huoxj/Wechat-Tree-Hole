Page({
	data: {
	  inputValue: '',
	  historyList: [],
	  recommendList: ['114514', 'qaq']
	},
  
	onLoad: function () {
		wx.setNavigationBarTitle({
		  title: '搜索',
		})
		this.setData({
			historyList: wx.getStorageSync('historyList') || []
		})
	},
  
	onInput: function (e) {
	  this.setData({
		inputValue: e.detail.value
	  })
	},
  
	onSearch: function () {
	  
	  const value = this.data.inputValue
	  if (!value) {
		return
	  }
	  const historyList = this.data.historyList
	  if (historyList.indexOf(value) === -1) {
		historyList.unshift(value)
		wx.setStorageSync('historyList', historyList)
	  }
	  wx.navigateTo({
		url: '/pages/search-result/search-result?query=' + value
	  })
	},
  
	clearHistory: function () {
	  wx.removeStorageSync('historyList')
	  this.setData({
		historyList: []
	  })
	}
  })
  