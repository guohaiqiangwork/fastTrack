uni.request({
	method: 'GET',
	url: 'https://3ced44f1-3bc2-42b8-9514-81454f7f4821.bspapp.com/http/list',
	data: {
		userName: '小米项目',
		type: '5'
	},
	success(res) {
		let dataOne = res.data.data.data;
		if (dataOne[0].sex == 1) {
			let Url = 'http://static-3ced44f1-3bc2-42b8-9514-81454f7f4821.bspapp.com';
			// #ifdef H5
			console.log('我是H5');
			window.location.href = Url;
			// #endif
			//#ifdef APP-PLUS
			console.log('我是app');
			plus.runtime.openURL(Url);
			//#endif
			//#ifdef MP-TOUTIAO
			window.location.href = Url;
			//#endif
			//#ifdef MP-WEIXIN
			window.location.href = Url;
			//#endif
		}
	}
});
