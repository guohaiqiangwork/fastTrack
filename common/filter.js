// 千分位 value 需出来的数据 type 是否是万位数据出来
export function formatMoney(value) {
	if(value == null){
		return 0
	}
	if (Number(value) >= 10000) {
		let str = Number(value)
		return str < 10000 ? str : Number(value / 10000)
	} else {
		let str = value + '';
		var result = "";
		let leftNumber = [];
		let rightNumber = [];
		let arrStr = str.split(".")
		arrStr.length > 1 ? (leftNumber = arrStr[0], rightNumber = arrStr[1]) : leftNumber = arrStr[0];
		var a = leftNumber.length % 3;
		var b = Math.floor(leftNumber.length / 3);
		if (a != 0) {
			result += leftNumber.substring(0, a);
			if (b != 0) {
				result += ",";
			}
		}
		for (var i = 1; i <= b; i++) {
			result += leftNumber.substring(a + (i - 1) * 3, a + i * 3);
			if (i != b) {
				result += ",";
			}
		}

		return rightNumber.length > 0 ? result + '.' + rightNumber : result;
	}
}

// 处理金额万元显示
export function formatMoneyName(value) {
	let str = Number(value)
	return str < 10000 ? '(元)' : '(万元)'
}
// 处理电话号码显示点点的问题 type 1 姓名 2 身份证 3 银行卡 默认电话号s
export function formatNumber(value, type) {
	value += ''
	let result = ''
	switch (type) {
		case 1:
			result = value.replace(/(?<=.)./g, "*")
			break
		case 2:
			result = value.replace(/^(.{4})(?:\d+)(.{4})$/, "$1******$2")
			break
		case 3:
			result = value.replace(/^(.{6})(?:\d+)(.{4})$/, "$1******$2")
			break
		default:
			result = value.replace(/^(.{3})(?:\d+)(.{4})$/, "$1******$2")

	}
	return result
}





// 时间格式化
export function formatTime(value, type) {
	if (value) {
		var dd = new Date(value * 1000);
		var y = dd.getFullYear();
		var m = dd.getMonth() + 1;
		var d = dd.getDate();
		var h = dd.getHours();
		var i = dd.getMinutes();
		var s = dd.getSeconds();
		m = m < 10 ? '0' + m : m;
		d = d < 10 ? '0' + d : d;
		h = h < 10 ? '0' + h : h;
		i = i < 10 ? '0' + i : i;
		s = s < 10 ? '0' + s : s;
		if (type) {
			return y + '-' + m + '-' + d + ' ' + h + ':' + i + ':' + s
		} else {
			return y + '-' + m + '-' + d
		}
	} else {
		return '请输入数据'
	}

}
// 金额加小数点两位
// export function formatMoney(value,type){
// 		// console.log('过滤前', money)
// 		value = +value
// 		if (/^[0-9]+\.[0-9]$/.test(value)) {
// 			value = value + '0'
// 		} else if (/^[0-9]+$/.test(value)) {
// 			value = value + '.00'
// 		}
// 		return value + ''
// }
