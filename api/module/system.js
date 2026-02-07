/**
 * 存放 系统模块 的接口
 */
const request = require('../http.js');

// 接口前缀
const modeUrl = 'system'; 

// 导出接口列表
module.exports = {
	systemgetAliyunOssConfig: data => request.get(modeUrl + '/aliyunConfig/getAliyunConfig',data),  // 上传oss
	sendLoginSms: data => request.get(modeUrl + '/sms/sendSms',data),  // 发送验证码
};
