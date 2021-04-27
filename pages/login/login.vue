<template>
	<view>
		<view class="login">
			<image src="../../static/images/bj.png" mode="" class="image_width"></image>
			<view class="login_moudel">
				<view class="log">惠农批发贸易管理系统</view>
				<view class="input_moudel">
					<view class="flex input_list">
						<view class="wp-10 text-center mt-10"><image style="width: 26upx;height: 30upx;" src="../../static/images/icon/log1.png" mode=""></image></view>
						<view class="wp-80 pl-20 ">
							<input type="number" maxlength="11" @input="keyPhone" value="" placeholder="请输入账号" placeholder-style="color:#fff;font-size:30upx" />
						</view>
						<view class="wp-10 text-center" v-if="userPhone.length > 1">
							<!-- <image style="width: 26upx;height: 30upx;" src="../../static/images/icon/colse.png" mode=""></image> -->
						</view>
					</view>
					<view class="flex input_list mt-50">
						<view class="wp-10 text-center mt-10"><image style="width: 26upx;height: 30upx;" src="../../static/images/icon/log2.png" mode=""></image></view>
						<view class="wp-80 pl-20 ">
							<input @input="keyCode" type="password" value="" placeholder="请输入登录密码" placeholder-style="color:#fff;font-size:30upx" />
						</view>
						<view class="wp-10 text-center" v-if="phoneCode.length > 1">
							<!-- <image style="width: 26upx;height: 30upx;" src="../../static/images/icon/colse.png" mode=""></image> -->
						</view>
					</view>
				<!-- 	<view class="fs-28 color-e7 mt-10 ml-10">
						账号或密码错误，请重试
					</view> -->
					
					<view class="flex justify-center mt-40">
						<view  class="text-center color-ff fs-28 fw-600 mt-20 wp-30 " @click="goUserConter('register')">快速注册</view>
						<view   style="margin-top: 30upx; border-right: 1px solid #FFFFFF;width: 1px;height: 30upx;"></view>
						<view class="text-center color-ff fs-28 fw-600 mt-20 wp-30" @click="goUserConter('noPassword')">忘记密码</view>
					</view>
				</view>

				<view class="log_btn" @click="goLogin">登入</view>
			</view>
		
		</view>
	
	</view>
</template>

<script>
export default {
	data() {
		return {
			checked: true,
			userPhone: '',
			phoneCode: ''
		};
	},
	onLoad() {},
	methods: {
		// 手机号
		keyPhone: function(event) {
			this.userPhone = event.target.value;
		},
		// 密码
		keyCode: function(e) {
			this.phoneCode = e.target.value;
		},
		// 去用户协议 去隐私协议
		goUserConter: function(page) {
			uni.navigateTo({
				url: './' + page 
			});
		},
		goLogin: function() {
			uni.switchTab({
				url: '../tabBar/one/one'
			});
			return;
			if (!/^1[3456789]\d{9}$/.test(this.userPhone)) {
				uni.showToast({
					title: '请输入正确的11位手机号码',
					icon: 'none',
					duration: 1500,
					position: 'center'
				});
				return false;
			}
			let data = {
				phone: this.userPhone,
				code: this.phoneCode
			};
			this.$http.post('url', data).then(res => {
				uni.switchTab({
					url: '../tabBar/one/one'
				});
			});
		}
	}
};
</script>

<style lang="less">
page {
	background-color: #333333;
}
.image_width {
	position: absolute;
	width: 100%;
	height: 100%;
}

.login_moudel {
	position: relative;
	width: 80%;
	margin-left: 10%;
	padding-top: 200upx;
	.log {
		width: 100%;
		height: 83upx;
		background-color: #A77845;
		border-radius: 60upx;
		line-height: 83upx;
		text-align: center;
		color: #FFFFFF;
		font-size: 38upx;
		font-weight: 600;
	}
}
.input_moudel {
	margin-top: 160upx;
	.input_list {
		background-color: #A6C9B5;
		height: 88upx;
		border-radius: 50upx;
		line-height: 88upx;
		align-items: center;
		padding-left: 20upx;
		padding-right: 20upx;
		border: 1px solid #293539;
	}
}
.log_btn {
	height: 88upx;
	line-height: 88upx;
	text-align: center;
	color: #ffffff;
	background-color: #FBC941;
	border-radius: 50upx;
	font-size: 30upx;
	margin-top: 120upx;
}
</style>
