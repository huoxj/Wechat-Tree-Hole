import {Request} from '../utils/request'
class Postitem extends Request{
	constructor(){
		super();
	}
	/**
	 * 获取帖子列表
	 */
	getPostList(options){
		return new Promise((resolve, reject)=>{
			let props = {
				url : "/GetAllPosts",
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
	 * 根据分区获取帖子列表
	 */
	getPostListByCategory(options){
		return new Promise((resolve, reject)=>{
			let props = {
				url : "/GetPostsByPartition",
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
	 * 获取帖子图片地址列表
	 */
	getPicureUrlList(options){
		return new Promise((resolve, reject)=>{
			let props = {
				url : "GetUrlByPostId",
				data : options.data,
				type : "POST",
				sCallBack : ()=>{
					resolve(res)
				},
				eCallBack : ()=>{
					reject(res)
				}
			}
			this.request(props)
		})
	}
}
export {Postitem}