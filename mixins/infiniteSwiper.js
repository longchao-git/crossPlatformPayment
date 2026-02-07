/**
 *  无限轮播数据的Mixin方法等...
 */
// 记录无限数据
let _recordArray = [];
// 记录当前数据的下标
let _currentIndex = 0;
// 记录轮播图数据
let _swiperArray = [];
// 记录轮播下标的位置
let _swiperIndex = 0;

// 定义一个mixin对象
const infiniteSwiperMixin = {
    methods: {
		/**
		 * 初始化无限数据
		 * @param {Array} 	dataArray 		需要初始化的无限数据
		 * @param {number}	swiperIndex		当前轮播图的位置  
		 * @param {number} 	dataIndex 		需要从第几个数据开始展示
		 */
		initInfiniteData(dataArray, swiperIndex = 0, dataIndex = 0) {
			// 判断当前无限数据是否少于5
			if(dataArray.length < 5) {
				return dataArray;
			}
			
			// 默认无限数据设置为5个刚好合适
			const tempArray = new Array(5);
			let tempIndex = dataIndex;
			// 初始化数据...
			// 设置当前轮播数据
			tempArray[0] = dataArray[tempIndex];
			// 设置前面数据
			tempIndex = tempIndex + 1 === dataArray.length ? 0 : tempIndex + 1;
			tempArray[1] = dataArray[tempIndex];
			tempIndex = tempIndex + 1 === dataArray.length ? 0 : tempIndex + 1;
			tempArray[2] = dataArray[tempIndex];
			// 设置后面数据
			tempIndex = dataIndex;
			tempIndex = tempIndex - 1 === -1 ? dataArray.length - 1 : tempIndex - 1;
			tempArray[4] = dataArray[tempIndex];
			tempIndex = tempIndex - 1 === -1 ? dataArray.length - 1 : tempIndex - 1;
			tempArray[3] = dataArray[tempIndex];
			// 记录数据
			_recordArray = dataArray;
			_swiperIndex = swiperIndex;
			_currentIndex = dataIndex;
			_swiperArray = tempArray;
			// 返回
			return tempArray;
		},
	
		/**
		 * 滚动轮播图时 - 需要调用此方法获取最新无限数据
		 * @param {number}	swiperIndex		当前轮播图的位置  
		 */
		changeSwiperGetNewDate(swiperIndex) {
			// 返回的新数据
			let tempArray = _swiperArray;
			// 向前滚动
			if(_swiperIndex < swiperIndex && _swiperIndex - swiperIndex !== -4 || _swiperIndex - swiperIndex === 4) {
				_currentIndex++;
				tempArray[swiperIndex + 2 > 4 ? swiperIndex + 2 - 5 : swiperIndex + 2] = _recordArray[_currentIndex + 2 > _recordArray.length - 1 ? _currentIndex + 2 - _recordArray.length : _currentIndex + 2];
			}
			// 向后滚动
			else if(_swiperIndex > swiperIndex && _swiperIndex - swiperIndex !== 4 || _swiperIndex - swiperIndex === -4) {
				_currentIndex--;
				tempArray[swiperIndex - 2 < 0 ? swiperIndex - 2 + 5 : swiperIndex - 2] = _recordArray[_currentIndex - 2 < 0 ? _currentIndex - 2 + _recordArray.length : _currentIndex - 2];
			}
			// 更新记录的下标
			_swiperIndex = swiperIndex;
			// 返回新数据
			return tempArray;
		},
	
		/**
		 * 处理改变轮播数组中的某一个值
		 * @param {any}    value 	数组中的某一项
		 */
		handleChangeSwiperItem(value) {
			// 需要返回的新数组
			let tempArray = _swiperArray;
			tempArray[_swiperIndex] = value;
			_recordArray[_currentIndex] = value;
			// 返回新数组
			return tempArray;
		},
	}
}


// 导出...
export default infiniteSwiperMixin;