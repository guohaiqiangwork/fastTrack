<script>
import Vue from 'vue';
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
.DrawerPage {
	width: 100vw;
	// left: 0vw;
	background-color: #f1f1f1;
	transition: all 0.4s;
}

.DrawerPage.show {
	position: fixed;
	transform: scale(0.9, 0.9);
	left: 85vw;
	box-shadow: 0 0 60upx rgba(0, 0, 0, 0.2);
	transform-origin: 0;
}

.DrawerWindow {
	position: absolute;
	width: 83vw;
	height: 100vh;
	left: 0;
	top: 0;
	transform: scale(1.5, 1.5) translateX(-100%);
	opacity: 0;
	pointer-events: none;
	transition: all 1s;
	/* padding: 100upx 0; */
}

.DrawerWindow.show {
	transform: scale(1, 1) translateX(0%);
	opacity: 1;
	pointer-events: all;
}
.list_moudel {
	padding: 30upx;
	background: #ffffff;
	border-radius: 20upx;
}
.left_flag {
	width: 6upx;
	height: 28upx;
	opacity: 1;
	border-radius: 3upx;
	margin-top: 10upx;
}
.moudel_list {
	background: #ffffff;
	border-radius: 14upx;
	padding: 30upx;
	
}
.wrapper {
	width: 99%;
	white-space: nowrap;
	display: flex;
	margin-top: 2%;
}

uni-checkbox .uni-checkbox-input {
	margin-right: 8upx;
	-webkit-appearance: none;
	appearance: none;
	outline: 0;
	border: 1px solid #9f9f9f;
	background-color: #fff;
	width: 30upx;
	height: 30upx;
	position: relative;
}
checkbox::before {
	font-family: 'cuIcon';
	content: '\e645';
	position: absolute;
	color: #ffffff !important;
	top: 50%;
	margin-top: -16upx;
	right: 10upx;
	font-size: 32upx;
	line-height: 32upx;
	pointer-events: none;
	-webkit-transform: scale(1, 1);
	transform: scale(1, 1);
	-webkit-transition: all 0.3s ease-in-out 0s;
	transition: all 0.3s ease-in-out 0s;
	z-index: 9;
}
uni-checkbox:not([disabled]) .uni-checkbox-input:hover {
	border-color: #9f9f9f;
}

uni-checkbox.green[checked] .wx-checkbox-input,
uni-checkbox[checked] .wx-checkbox-input,
uni-checkbox.green.checked .uni-checkbox-input,
uni-checkbox.checked .uni-checkbox-input,
uni-radio.green.checked .uni-radio-input,
uni-radio.checked .uni-radio-input {
	background-color: #f55050 !important;
	border-color: #f55050 !important;
	color: #ffffff !important;
}
.bn_b {
	height: 88upx;
	opacity: 1;
	background: #2d2d2d;
	border-radius: 44upx;
	text-align: center;
	line-height: 88upx;
	color: #ffffff;
	font-size: 30upx;
}
.moudel_bg{
	position: fixed;
	background-color: #333333a3;
	width: 100%;
	height: 100%;
	top: 0;
}
.bottom_flag {
	width: 40upx;
	height: 6upx;
	opacity: 1;
	border-radius: 3upx;
	margin-top: 10upx;
}
.wp-33{
	width: 33.33% !important;
	
}
</style>
