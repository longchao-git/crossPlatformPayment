/**
 * 存放 系统模块 的接口
 */
const request = require('../http.js');

// 接口前缀
const modeUrl = 'user';

// 导出接口列表
module.exports = {
	loginSms: data => request.get(modeUrl + '/login/loginSms', data), // 短信验证码登录
	loginWx: data => request.get(modeUrl + '/appletUser/loginWx', data), // 微信登录登录
	getProductList: data => request.get(modeUrl + '/product/getProductList', data), // 获取产品列表
	productGet: data => request.get(modeUrl + '/product/get', data), // 产品详情

};