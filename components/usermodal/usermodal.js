import {User} from '../../model/User'
const userApi = new User()
const app = getApp()

Component({
  properties: {

  },

  data: {
		name: "", // 用户名
		department: "", // 院系
		password: "", // 密码
		login:app.isUserLoggedIn,
		register:true
  },

  methods: {
	Login(){
		let options = {data: {name: this.data.name, password: this.data.password}}
		userApi.login(options).then(res=>{
			const userId = res.id; // 获取用户ID
			if (userId != null) {
                // 登录成功，处理相应逻辑
                wx.showToast({
                    title: '登录成功',
                    icon: 'none',
                    duration: 2000
				  });
				  app.globalData.isUserLoggedIn = true
				  app.globalData.userID = userId
				  this.setData({
					  login: true
				  })
              } else {
                // 登录失败，处理相应逻辑
                wx.showToast({
                    title: '用户名或密码错误',
                    icon: 'none',
                    duration: 2000
                });
              }
		}).catch(err=>{
			console.log(err)
		})
    },
    Register(){
		let options = {data: {name: this.data.name, password: this.data.password, department: this.data.department, profilePhotoUrl: 'null'}}
		
		userApi.register(options).then(res=>{
			const isSuccess = res; // 根据后端返回的数据判断注册是否成功
			if (isSuccess) {
				// 注册成功，处理相应逻辑
				wx.showToast({
					title: '注册成功',
					icon: 'none',
					duration: 2000
				});
				this.setData({
					register:true
				})
			}
			else{
				wx.showToast({
					title: '注册失败，请更换用户名或检查网络后重试',
					icon: 'none',
					duration: 2000
				});
			}
		}).catch(err=>{
			console.log(err)
			// 处理请求失败的逻辑
            wx.showToast({
                title: '网络错误，请稍后重试',
                icon: 'none',
                duration: 2000
            });
		})
    },
    toRegister(){
        this.setData({
            register : false
        })
    },
    toLogin(){
        this.setData({
            register: true
        })
	},
	inputName(event){
		this.setData({
			name: event.detail.value
		})
	},
	inputPassword(event){
		this.setData({
			password: event.detail.value
		})
	},
	inputDepartment(event){
		this.setData({
			department: event.detail.value
		})
	}
  }
})