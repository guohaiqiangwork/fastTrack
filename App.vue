<script>
import Vue from 'vue';
import './components/http/http1.js';
export default {
	onLaunch: function() {
		uni.getSystemInfo({
			success: function(e) {
				// #ifndef MP
				Vue.prototype.StatusBar = e.statusBarHeight;
				if (e.platform == 'android') {
					Vue.prototype.CustomBar = e.statusBarHeight + 50;
				} else {
					Vue.prototype.CustomBar = e.statusBarHeight + 45;
				}
				// #endif
				// #ifdef MP-WEIXIN
				Vue.prototype.StatusBar = e.statusBarHeight;
				let custom = wx.getMenuButtonBoundingClientRect();
				Vue.prototype.Custom = custom;
				Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
				// #endif
				// #ifdef MP-ALIPAY
				Vue.prototype.StatusBar = e.statusBarHeight;
				Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
				// #endif
			}
		});
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>
<style>
/* 第三方ui库 */
@import 'static/css/uni.css';
@import 'components/colorui/main.css';
@import 'components/colorui/icon.css';
</style>
<style lang="scss">
/*每个页面公共css */
@import 'static/css/index.scss';
</style>

<style lang="less">
.moudel_width {
	width: 90%;
	margin-left: 5%;
}
.moudel_list {
	background: #ffffff;
	border-radius: 14upx;
	// padding: 30upx;
	padding-left: 30upx;
	padding-right: 30upx;
}
.border_bottom {
	border-bottom: 7upx solid #fbc941;
}
.bor_bottom {
	border-bottom: 1px dashed #000000;
}
.bor_bottom_s {
	border-bottom: 1px solid #a77845;
}
.border_bottom_r {
	border-bottom: 1px solid #fbc941;
}
.listName {
	background-color: #cab88f;
	height: 80upx;
	line-height: 80upx;
	color: #ffffff;
	font-size: 25upx;
	padding-left: 30upx;
}
</style>
