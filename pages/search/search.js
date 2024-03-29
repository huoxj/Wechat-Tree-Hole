Page({
	data: {
	  inputValue: '',
	  historyList: [],
	  recommendList: ['Search', 'example1']
	},
    onItemClick(optons){
        this.setData({
            inputValue:optons.currentTarget.dataset.keyword,
        }); 
        this.onSearch()
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
	  console.log("Search start")
	  const value = this.data.inputValue
	  if (!value) {
        console.log("Empty Input")
		return
	  }
	  const historyList = this.data.historyList
	  if (historyList.indexOf(value) !== -1) {
        historyList.splice(historyList.indexOf(value),1)
    }
      historyList.unshift(value)
      this.setData({
          historyList:historyList
      });
      console.log("Go to " + value)
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
  