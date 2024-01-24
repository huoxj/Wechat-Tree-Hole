import {baseUrl} from 'baseUrl'
class Request{
	constructor(){
		this.baseUrl = baseUrl.baseUrl;
	}
	/**
	 * 封装请求方法
	 * @param {*} params 
	 */
	request(params){
		let reqUrl = this.baseUrl + params.url
		wx.request({
		  url: reqUrl,
		  data: params.data,
		  header:{
			  'content-Type': 'application/json'
		  },
		  method: params.type,
		  success: (res) =>{
			  params.sCallBack && params.sCallBack(res.data)
		  },
		  error: (err) =>{
			params.eCallBack && params.eCallBack(err.data)
		  }
		})
	}
}
export {Request}