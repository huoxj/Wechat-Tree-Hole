Page({
	data: {
		categories: ['灌水区', '情感区', '学习区'],
		index: 0
	},

	pickerChange: function(e){
		this.setData({
			index: e.detail.value
		})
	}

  })
  