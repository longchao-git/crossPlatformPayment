/** 工具类 */

/**
 * 防抖
 * @param {function} func 需要防抖的函数
 * @param {number}   wait 防抖的时间 默认500毫秒
 * */
function antiShake(func, wait = 500) {
    let timeout = null;
    return function() {
        if(timeout === null) {
            func(...arguments);
        }
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            clearTimeout(timeout);
            timeout = null;
        }, wait);
    }
}


/**
 * 节流
 * @param {function} func 需要节流的函数
 * @param {number}   wait 节流等待的时间 默认500毫秒
 * */
function throttle(func, wait = 500) {
    let timeout = null;
    return function() {
        if(timeout === null) {
            func(...arguments);
            timeout = setTimeout(() => {
                clearTimeout(timeout);
                timeout = null;
            }, wait);
        }
    }
}


/**
 * 去掉字符串左右空格
 */
function trimSpace(value) {
    if (!value) {
        return '';
    }
    return value.toString().trimStart().trimEnd();
}


/**
 * 将URL中的参数转换为对象
 */
function getUrlParamsToObject(url) {
    //定义正则表达式
    const reg = /(\w+)=(\w+)/ig;
    // 创建对象
    const parames = {};
    url.replace(reg, (_data, key, value) => {
        parames[key] = value;
    });
    // 返回对象
    return parames;
}


/**
 * 初始化数据
 * @param {any} data
 * number类型初始化后返回-1
 * boolean类型初始化后返回false
 */
function handleInitData(data) {
    // 判断data的类型
    if(typeof data === 'string') {
        return "";
    }
    else if(typeof data === 'number') {
        return -1;
    }
    else if(typeof data === 'boolean') {
        return false;
    }
    else if(typeof data === 'undefined' || !data) {
        return null;
    }
    else if(typeof data === 'object' && data instanceof Object) {
        // 如果是对象
        if(!(data instanceof Array)) {
            for(const key of Object.keys(data)) {
                data[key] = handleInitData(data[key]);
            }
            return data;
        }
        // 如果是数组
        else if(data instanceof Array) {
            for(const key in data) {
                data[key] = handleInitData(data[key]);
            }
            return data;
        }
    }
}


/**
 * 将网络图片转化为base64
 * @param {string} url          网络图片地址
 * @param {number} width        图片的宽度 默认100
 * @param {number} height       图片的宽度 默认100
 * */
function getUrlBase64(url, width = -1, height = -1) {
    return new Promise(resolve => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const image = new Image();
        image.crossOrigin = 'Anonymous';
        image.src = url;
        image.onload = () => {
            canvas.width = width === -1 ? image.width : width;
            canvas.height = height === -1 ? image.height : height;
            ctx.drawImage(image, 0, 0, width === -1 ? image.width : width, height === -1 ? image.height : height);
            const dataURL = canvas.toDataURL();
            resolve(dataURL);
        };
    });
}


module.exports = {
    antiShake,
    throttle,
    trimSpace,
    getUrlParamsToObject,
    handleInitData,
    getUrlBase64,
};
