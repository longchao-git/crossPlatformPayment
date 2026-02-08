/**
 * 配置请求
 */
// URL地址
import config from './config.js';
const baseURl = config.BASE_URL;
let _isLoad = 0; // 请求的设置


function http({url, data, method = 'GET'}) {
	return new Promise((resolve, reject) => {
		// 显示加载中效果
		if(method == 'POST'){
			data = JSON.stringify(data)
		}
		uni.request({
			url: baseURl + url,
			method,
			data,
			header: {
				'content-type': 'application/json',
				'token': uni.getStorageSync('token')?uni.getStorageSync('token'):''
			},
			timeout: 60000,
			// 成功回调
			success: res => {
				const { code, msg, body } = res.data;
				if(parseInt(code) === 1001) {
					resolve(body);
				}
				else {
					if(parseInt(code) === 1007) {
						uni.clearStorageSync("loginUserInfo");
						uni.clearStorageSync("token");
						uni.showModal({
							title: '提示',
							content: '登录状态失效请重新登录',
							showCancel:false,
							success:  (res) => {
								if (res.confirm) {
									uni.navigateTo({
										url:'/pages/login/login'
									})
								} 
							}
						})
						return;
					} else {
						_isLoad = 0
						uni.showToast({
							title:msg?msg:'请联系开发人员',
							icon:'none'
						});
					
					}
					reject(res);
				}
			},
			// 失败回调
			fail: error => {
				console.log(error,'error')
				reject(error);
			},
			// 请求完成回调
			complete: () => {
			
			}
		});
	});
}


const request = {
	get: (url, data) => {
		return http({url, data});
	},
	post: (url, data) => {
		return http({url, data, method: 'POST'});
	}
};
// 导出
module.exports = request;