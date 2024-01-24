import {Request} from '../utils/request'
class Comment extends Request{
	constructor(){
		super();
	}
	/**
	 * 根据帖子id获取其评论列表
	 */
	getCommentList(options){ 
		return new Promise((resolve, reject)=>{
			let props = {
				url : "/GetAllComments",
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
	 * 发表评论
	 */
	postComment(options){
		return new Promise((resolve, reject)=>{
			let props = {
				url : "/comment",
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
export {Comment}