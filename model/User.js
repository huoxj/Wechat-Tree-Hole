import {Request} from '../utils/request'
class User extends Request{
	constructor(){
		super();
	}
	/**
	 * 根据用户id获取信息
	 */
	getUserProfile(options){
		return new Promise((resolve, reject)=>{
			let props = {
				url : "/user/GetUserInformationById",
				data : options.data,
				type : "POST",
				sCallBack : res=>{
					resolve(res)
				},
				eCallBack : res=>{
					reject(res)
				}
			}
			this.request(props)
		})
	}
	/**
	 * 注册
	 */
	register(options){
		return new Promise((resolve, reject)=>{
			let props = {
				url : "/user/register",
				data : options.data,
				type : "POST",
				sCallBack : res=>{
					resolve(res)
				},
				eCallBack : res=>{
					reject(res)
				}
			}
			this.request(props)
		})
	}
	/**
	 * 登录
	 */
	login(options){
		return new Promise((resolve, reject)=>{
			let props = {
				url : "/user/login",
				data : options.data,
				type : "POST",
				sCallBack : res=>{
					resolve(res)
				},
				eCallBack : res=>{
					reject(res)
				}
			}
			this.request(props)
		})
	}
}
export {User}