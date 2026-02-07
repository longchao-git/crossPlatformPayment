/**
 * 统一集中管理所有工具类
 */
import commonUtils from './commonUtils.js';
import dateUtils from './dateUtils.js';
import validationUtils from './validationUtils.js';


/**
 * 将所有暴露 - 区分模块 防止重复
 */

 export const CommonUtils = { ...commonUtils };
 export const DateUtils = { ...dateUtils };
 export const ValidationUtils = { ...validationUtils };

 