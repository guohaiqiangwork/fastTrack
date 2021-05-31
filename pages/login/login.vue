<template>
	<view>
		<view class="login">
			<image src="../../static/images/bj.png" mode="" class="image_width"></image>
			<view class="login_moudel">
				<view class="log">惠农批发贸易管理系统</view>
				<view class="input_moudel">
					<view class="flex input_list">
						<view class="wp-10 text-center mt-10"><image style="width: 26upx;height: 30upx;" src="../../static/images/icon/log1.png" mode=""></image></view>
						<view class="wp-80 pl-20 "><input type="text" v-model="username" value="" placeholder="输入手机号" maxlength="11" placeholder-style="color:#fff;font-size:30upx" /></view>
						<view class="wp-10 text-center" v-if="username.length > 1">
							<!-- <image style="width: 26upx;height: 30upx;" src="../../static/images/icon/colse.png" mode=""></image> -->
						</view>
					</view>
					<view class="flex input_list mt-50">
						<view class="wp-10 text-center mt-10"><image style="width: 26upx;height: 30upx;" src="../../static/images/icon/log2.png" mode=""></image></view>
						<view class="wp-80 pl-20 ">
							<input v-model="password" type="password" value="" placeholder="请输入登录密码" placeholder-style="color:#fff;font-size:30upx" />
						</view>
						<view class="wp-10 text-center" v-if="password.length > 1">
							<!-- <image style="width: 26upx;height: 30upx;" src="../../static/images/icon/colse.png" mode=""></image> -->
						</view>
					</view>
					<!-- 	<view class="fs-28 color-e7 mt-10 ml-10">
						账号或密码错误，请重试
					</view> -->

					<view class="flex justify-center mt-40">
						<view class="text-center color-ff fs-28 fw-600 mt-20 wp-30 " @click="goUserConter('register')">快速注册</view>
						<view style="margin-top: 30upx; border-right: 1px solid #FFFFFF;width: 1px;height: 30upx;"></view>
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
			username: '',
			password: ''
		};
	},
	onLoad() {},
	methods: {
		// 去用户协议 去隐私协议
		goUserConter: function(page) {
			uni.navigateTo({
				url: './' + page
			});
		},

		goLogin: function() {
			let data = {
				username: this.username,
				password: this.password
			};
			if (!/^1[3456789]\d{9}$/.test(this.username)) {
				uni.showToast({
					title: '请输入正确的11位手机号码',
					icon: 'none',
					duration: 1500,
					position: 'center'
				});
				return false;
			}
			if (!this.username || !this.password) {
				uni.showToast({
					title: '有数据未填写',
					icon: 'none',
					duration: 2000,
					position: 'center'
				});
				return;
			}
			this.$http.post('/login', data).then(res => {
				console.log(JSON.stringify(res));
				if (res.data.code == 200) {
					uni.setStorageSync('token', res.data.token);
					this.$http.get('/system/company/self', '', true).then(res => {
						if (res.data.code == 200) {
							console.log(res);
							uni.setStorageSync('comType', res.data.data.comType); //身份标识
							uni.setStorageSync('comName', res.data.data.comName); //公司名称
							uni.setStorageSync('address', res.data.data.address); //公司地址
							uni.setStorageSync('shareId', res.data.data.shareId); //分享id
							uni.setStorageSync('phone', res.data.data.phone); //手机号
							uni.setStorageSync('leader', res.data.data.leader); //联系人名称
							uni.setStorageSync('comId', res.data.data.comId); //用户ID
							uni.setStorageSync('bankAccount', res.data.data.bankAccount); //存储银行卡号
							uni.setStorageSync('fromFalg', '');
							uni.setStorageSync('consignorData', {});
							uni.setStorageSync('consigneeDataX', {});
							uni.setStorageSync('orderDetail', {});
							uni.setStorage({
								key: 'prictList_key',
								data: [],
								success: function() {}
							});
							uni.switchTab({
								url: '../tabBar/one/one'
							});
						}
					});
				} else {
					uni.showToast({
						title: res.data.msg,
						icon: 'none',
						duration: 2000,
						position: 'center'
					});
				}
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
		background-color: #a77845;
		border-radius: 60upx;
		line-height: 83upx;
		text-align: center;
		color: #ffffff;
		font-size: 38upx;
		font-weight: 600;
	}
}
.input_moudel {
	margin-top: 160upx;
	.input_list {
		background-color: #a6c9b5;
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
	background-color: #fbc941;
	border-radius: 50upx;
	font-size: 30upx;
	margin-top: 120upx;
}
</style>
