/**
 * 统一管理接口
 */
const config = require('./config');
const userData = require('./module/user.js');
const systemData = require('./module/system.js');

/** 将接口暴露 */
module.exports = {
    ...config,
	...userData,
	...systemData
}