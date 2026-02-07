/** 
 * 时间的工具类
 * */

/**
 * 转换时间格式
 *  @param { Date }             date        时间
 *  @param { number }           index       选择的类型
 *  @param { Array<string>[2] } splitStrs   年月日的分割符号、时分秒的分割符号
 */
function formatDate(date, index, splitStrs = ["-", ":"]) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().length < 2 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    const day = date.getDate().toString().length < 2 ? '0' + date.getDate() : date.getDate();
    const hours = date.getHours().toString().length < 2 ? '0' + date.getHours() : date.getHours();
    const minutes = date.getMinutes().toString().length < 2 ? '0' + date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds().toString().length < 2 ? '0' + date.getSeconds() : date.getSeconds();

    switch (index) {
        case 1:
            return year + splitStrs[0] + month + splitStrs[0] + day;

        case 2:
            return year + splitStrs[0] + month + splitStrs[0] + day + " " + hours + splitStrs[1] + minutes;

        case 3:
            return year + splitStrs[0] + month + splitStrs[0] + day + " " + hours + splitStrs[1] + minutes + splitStrs[1] + seconds;

        case 4:
            return month + splitStrs[0] + day + " " + hours + splitStrs[1] + minutes;

        case 5:
            return hours + splitStrs[1] + minutes;

        default:
            return null;
    }
}

/**
 * 转换时间格式  IE 不兼容
 *  @param { Date }             date        时间
 *  @param { number }           index       选择的类型
 *  @param { Array<string>[2] } splitStrs   年月日的分割符号、时分秒的分割符号
 */
function formatDateNoIE(date, index, splitStrs = ["-", ":"]) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    switch (index) {
        case 1:
            return year + splitStrs[0] + month + splitStrs[0] + day;

        case 2:
            return year + splitStrs[0] + month + splitStrs[0] + day + " " + hours + splitStrs[1] + minutes;

        case 3:
            return year + splitStrs[0] + month + splitStrs[0] + day + " " + hours + splitStrs[1] + minutes + splitStrs[1] + seconds;

        case 4:
            return month + splitStrs[0] + day + " " + hours + splitStrs[1] + minutes;

        case 5:
            return hours + splitStrs[1] + minutes;

        default:
            return null;
    }
}


/**
 * 转换时间格式
 * 例如：2021-10-01
 */
function formatDateYYYYMMDD(date, ...args) {
	// 兼容IOS的操作
	if(typeof date === 'string') {
		date = date.replace(/-/g, '/');
	}
	
    if (date) {
        return formatDate(new Date(date), 1, ...args);
    } else {
        return formatDate(new Date(), 1, ...args);
    }
}


/**
 * 转换时间格式
 * 例如：2021-10-01 16:30
 */
function formatDateYYYYMMDDHHMM(date, ...args) {
	// 兼容IOS的操作
	if(typeof date === 'string') {
		date = date.replace(/-/g, '/');
	}
	
    return formatDate(new Date(date), 2, ...args);
}


/**
 * 转换时间格式
 * 例如：2021-10-01 16:30:59
 */
function formatDateYYYYMMDDHHMMSS(date, ...args) {
	// 兼容IOS的操作
	if(typeof date === 'string') {
		date = date.replace(/-/g, '/');
	}
	
    return formatDate(new Date(date), 3, ...args);
}


/**
 * 转换时间格式
 * 例如：10-01
 */
function formatDateMMDD(date, ...args) {
	// 兼容IOS的操作
	if(typeof date === 'string') {
		date = date.replace(/-/g, '/');
	}
	
    return formatDate(new Date(date), 4, ...args);
}


/**
 * 转换时间格式
 * 例如：16:30
 */
function formatDateHHMM(date, ...args) {
	// 兼容IOS的操作
	if(typeof date === 'string') {
		date = date.replace(/-/g, '/');
	}
	
    return formatDate(new Date(date), 5, ...args);
}


/**
 * 比较时间，第一个时间是否大于第二个时间
 */
function compareDate(date1, date2) {
	// 兼容IOS的操作
	if(typeof date1 === 'string') {
		date1 = date1.replace(/-/g, '/');
	}
	if(typeof date2 === 'string') {
		date2 = date2.replace(/-/g, '/');
	}
	
    return new Date(date1) > new Date(date2);
}



/** 通过传入的时间得到对应的比较人性化的时间 */
function getFormatStringDate(date) {
	// 兼容IOS的操作
	if(typeof date === 'string') {
		date = date.replace(/-/g, '/');
	}
	
	// 如果是当天
	if(formatDate(new Date(date), 1) === formatDate(new Date(), 1)) {
		const { hours, minutes } = formatDate(new Date(date), 6);
		return `今天${hours}:${minutes}`;
	}
	// 如果是昨天
	else if(formatDate(new Date(date), 1) === formatDate(new Date((new Date()).getTime() - 24 * 60 * 60 * 1000), 1)) {
		const { hours, minutes } = formatDate(new Date(date), 6);
		return `昨天${hours}:${minutes}`;
	}
	// 如果是明天
	else if(formatDate(new Date(date), 1) === formatDate(new Date((new Date()).getTime() + 24 * 60 * 60 * 1000), 1)) {
		const { hours, minutes } = formatDate(new Date(date), 6);
		return `明天${hours}:${minutes}`;
	}
	// 其他...
	else {
		const { year: newYear, month, day, hours, minutes } = formatDate(new Date(date), 6);
		const { year: currentYear } = formatDate(new Date(), 6);
		
		// 如果是本年
		if(newYear === currentYear) {
			return `${month}月${day}日 ${hours}时${minutes}分`;
		}
		else {
			return formatDate(new Date(date), 2);
		}
	}
}

// 	自由拍卖时间,
function FreeTimePicker() {
	let dateTimeArray = [[],[]];
	for(let i= 0;i<120;i++){
		dateTimeArray[0].push(`${i}时`)
	}
    for(let i= 0;i<60;i++){
    	dateTimeArray[1].push(`${i}分`)
    }
	return dateTimeArray

}

// 	限时竞价时间,
function LimitTimePicker() {
	let dateTimeArray = [[],[]];
	for(let i= 0;i<60;i++){
		dateTimeArray[0].push(`${i}分`)
	}
    for(let i= 0;i<60;i++){
    	dateTimeArray[1].push(`${i}秒`)
    }
	return dateTimeArray

}

/**
 * 和当前时间进行比较
 **/
function formatDateMMDDHM2(date) {
	// 兼容IOS的操作
	if(typeof date === 'string') {
		date = date.replace(/-/g, '/');
	}
	
	let newData = new Date(date),
		dayStr = "";
	let month = newData.getMonth() + 1;
	let dd = newData.getDate();
	let hh = newData.getHours();
	let mm = newData.getMinutes();
	if (month.toString().length == 1) {
		month = "0" + month;
	}
	if (dd.toString().length == 1) {
		dd = "0" + dd;
	}
	if (mm.toString().length == 1) {
		mm = "0" + mm;
	}
	if (hh.toString().length == 1) {
		hh = "0" + hh;
	}
	if (new Date().getFullYear() == newData.getFullYear() && new Date().getMonth() == newData.getMonth()) {

		if (newData.toDateString() == new Date().toDateString()) {
			dayStr = "-1";
		} else if (dd - (new Date().getDate()) == -1) {
			dayStr = "昨天";
		} else if (dd - (new Date().getDate()) == -2) {
			dayStr = "前天";
		} else if (dd - (new Date().getDate()) == 1) {
			dayStr = "明天";
		} else if (dd - (new Date().getDate()) == 2) {
			dayStr = "后天";
		}
	}
	if (dayStr == '-1') {
		return hh + ":" + mm;
	} else if (dayStr) {
		return dayStr + " " + hh + ":" + mm;
	} else {
		return dayStr + " " + month + "-" + dd + " " + hh + ":" + mm;
	}
}


/**
 * 暴露出去
 */
module.exports = {
	FreeTimePicker,
	LimitTimePicker,
    formatDateHHMM,
    formatDateMMDD,
    formatDateYYYYMMDD,
    formatDateYYYYMMDDHHMM,
    formatDateYYYYMMDDHHMMSS,
    formatDateMMDDHM2,
    compareDate,
	getFormatStringDate,
};