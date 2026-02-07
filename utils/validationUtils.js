/**
 * 校验、验证的工具类
 */

/**
 * 验证身份证号码是否正确
 */
function validationIdCard(value) {
    // 创建正则
    const reg = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    return reg.test(value.toString());
}


/**
 * 验证手机号码是否正确
 */
function validationPhone(value) {
    // 创建正则
    const reg = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;
    return reg.test(value.toString());
}


/**
 * 验证邮箱
 */
function validationEmail(value) {
    // 创建正则
    const reg = /^[A-Za-z0-9u4e00-u9fa5]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/;
    return reg.test(value.toString());
}


/**
 * 验证是否是字符
 */
function validationChinese(value) {
    // 创建正则
    const reg = /^[\u4E00-\u9FA5]+$/;
    return reg.test(value.toString());
}


/**
 * 暴露出去
 */
module.exports = {
    validationIdCard,
    validationPhone,
    validationEmail,
    validationChinese
};