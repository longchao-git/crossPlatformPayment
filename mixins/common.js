/**
 *  常用的Mixin方法等...
 */
import { trimSpace } from '@/utils/util';

// 定义一个mixin对象
const commonMixin = {
    methods: {
        /**
         * 对数据进行校验
         * @param {any}     value   需要校验的值
         * @param {string}  message 校验不合法时提醒的内容
         * 对number类型的变量判断是负数就表示失败
         */
        handleCheckValue(value, message) {
            // 校验的结果
            let result = true;
            
            // 判断value的数据类型
            if(typeof value === 'string' && !trimSpace(value)) {
                result = false;
            }
            else if(typeof value === 'number' && value < 0) {
                result = false;
            }
            else if(typeof value === 'boolean' && !value) {
                result = false;
            }
            else if(typeof value === 'undefined') {
                result = false;
            }
            else if(typeof value === 'object' && value instanceof Object) {
                // 判断是否是时间
                if(value instanceof Date) {
                	result = true;
                }
                // 判断是对象还是数组
                else if(value instanceof Array && value.length === 0) {
                    result = false;
                }
                else if(!(value instanceof Array) && Object.keys(value).length === 0) {
                    // 判断对象中是否有键值对
                    result = false;
                }
            }
			else if(typeof value !== 'number' && !value) {
			   result = false;
			}

            // 如果结果是false就提示
            if(!result) {
				uni.showToast({title: message, icon: 'none'});
            }
            return result;
        },

    }
}


// 导出...
export default commonMixin;