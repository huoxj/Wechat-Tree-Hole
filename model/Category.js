import {Request} from '../utils/request'
class Category extends Request{
	constructor(){
		super();
	}
	/**
	 * 获取分区信息
	 */
	getCategoryList(options){
		return new Promise((resolve, reject)=>{
			let props = {
				url : "/GetAllPartition",
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
	 * 获取分区帖子数
	 */
	getCategoryHeat(options){
		return new Promise((resolve, reject)=>{
			let props = {
				url : "/GetPostsNumberByPartition",
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
export {Category}