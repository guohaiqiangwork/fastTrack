<template>
	<view class="moudel_width">
		<view class="moudel_list mt-30">
			<view class="flex border_bottom_r padding_bottomNo padding_bottomNo1">
				<view class="wp-20 fs-30 color-33">公司名称</view>

				<view class="ml-30 fs-30"><input v-model="comName" placeholder="请输入公司名称" placeholder-style="color:#cccccc" /></view>
			</view>
			<view class="flex border_bottom_r padding_bottomNo padding_bottomNo1">
				<view class="wp-20 fs-30 color-33">银行卡号</view>
				<view class="ml-30 fs-30 wp-75"><input v-model="bankAccount" maxlength="19" type="number" placeholder="请输入银行卡号" placeholder-style="color:#cccccc" /></view>
			</view>
			<view class="flex border_bottom_r padding_bottomNo padding_bottomNo1">
				<view class="wp-20 fs-30 color-33">身份证号</view>
				<view class="ml-30 fs-30 wp-75"><input v-model="cardId" maxlength="18" type="number" placeholder="请输入银行卡身份证号" placeholder-style="color:#cccccc" /></view>
			</view>
			<view class="flex border_bottom_r padding_bottomNo padding_bottomNo1">
				<view class="wp-20 fs-30 color-33">联系人</view>
				<view class="ml-30 fs-30"><input v-model="userName" type="text" placeholder="请输入联系人" placeholder-style="color:#cccccc" /></view>
			</view>
			<view class="flex border_bottom_r padding_bottomNo padding_bottomNo1">
				<view class="wp-20 fs-30 color-33">联系电话</view>
				<view class="ml-30 fs-30"><input v-model="phone" type="number" maxlength="11" placeholder="请输入联系电话" placeholder-style="color:#cccccc" /></view>
			</view>
			<view class="flex border_bottom_r padding_bottomNo padding_bottomNo1">
				<view class="wp-20 fs-30 color-33">地址</view>
				<view class="ml-30 fs-30 wp-80"><input v-model="address" type="text" placeholder="请输入地址" placeholder-style="color:#cccccc" /></view>
			</view>
			<view class="flex border_bottom_r padding_bottomNo padding_bottomNo1">
				<view class="wp-20 fs-30 color-33">邮箱</view>
				<view class="ml-30 fs-30"><input v-model="email" placeholder="请输入邮箱" placeholder-style="color:#cccccc" /></view>
			</view>
			<view class="flex border_bottom_r padding_bottomNo padding_bottomNo1">
				<view class="wp-20 fs-30">密码设置</view>
				<view class="ml-30 fs-30 "><input v-model="password" type="password" placeholder="请输入密码" placeholder-style="color:#cccccc" /></view>
			</view>
			<view class="flex  padding_bottomNo padding_bottomNo1">
				<view class="wp-20 fs-30">验证码</view>
				<view class="flex wp-90">
					<view class="font_size28   " style="margin-left: 5.3%;width: 67%;">
						<input v-model="valCode" type="number" maxlength="6" placeholder="请输入验证码" placeholder-style="color:#cccccc" />
					</view>
					<view class="wp_33 text-center fs-30 color-f5" @click="yzm_function">
						{{ countdown }}
						<text v-show="timestatus" class="forgetpwd2">秒重获</text>
					</view>
				</view>
			</view>
		</view>

		<view class="btn_bd" @click="getRegister">确认</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			countdown: '获取验证码',
			timestatus: false,

			address: '',
			bankAccount: '',
			cardId: '',
			comName: '',
			email: '',
			password: '',
			phone: '',
			userName: '',
			valCode: '',
			shareId: '',

			title: ''
		};
	},
	mounted() {},
	onLoad(option) {
		console.log(JSON.stringify(option.shareId) + '验证码数据');
		if (option.shareId) {
			this.shareId = option.shareId;
			this.title = option.title;
			uni.setNavigationBarTitle({
				title: this.title
			});
			this.getMydata();
		}
	},
	methods: {
		// 用户进行注册
		getRegister: function() {
			var data = {
				address: this.address,
				bankAccount: this.bankAccount,
				cardId: this.cardId,
				comName: this.comName,
				email: this.email,
				password: this.password,
				phone: this.phone,
				userName: this.userName,
				valCode: this.valCode
			};
			let dataUrl = '/register';
			// 判断是注册还是补全流程
			if (this.shareId) {
				data.shareId = this.shareId;
				dataUrl = '/bind';
			}
			console.log(JSON.stringify(data));
			if (!this.address || !this.bankAccount || !this.cardId || !this.comName || !this.password || !this.phone || !this.userName || !this.valCode) {
				uni.showToast({
					title: '有数据未填写',
					icon: 'none',
					duration: 2000,
					position: 'center'
				});
				return;
			}
			if (this.address.length < 10 || this.address.length > 50) {
				uni.showToast({
					title: '地址不能小于10位',
					icon: 'none',
					duration: 2000,
					position: 'center'
				});
				return;
			}
			console.log(JSON.stringify(data));
			// 注册 和信息补全
			this.$http.post(dataUrl, data).then(res => {
				if (res.data.code == 200) {
					uni.navigateBack();
				} else {
					uni.showToast({
						title: res.data.msg,
						icon: 'none',
						duration: 2000,
						position: 'center'
					});
					// uni.navigateTo({
					// 	url:'../model/model?title=' + '关联账户' + '&type=register'
					// })
				}
			});
		},

		// 获取用户公司信息
		getMydata: function() {
			this.$http.get('/party/detail/' + this.shareId, '', true).then(res => {
				console.log(res);
				if (res.data.code == 200) {
					this.userName = res.data.data.leader;
					this.comName = res.data.data.comName;
					this.phone = res.data.data.phone;
				} else {
					uni.showToast({
						title: res.data.msg,
						icon: 'none',
						duration: 2000,
						position: 'center'
					});
				}
			});
		},

		// 获取验证码
		yzm_function: function() {
			var that = this;
			if (!/^1[3456789]\d{9}$/.test(this.phone)) {
				uni.showToast({
					title: '请输入正确的11位手机号码',
					icon: 'none',
					duration: 1500,
					position: 'center'
				});
				return false;
			} else if (this.timestatus == true) {
				uni.showToast({
					title: '请勿重复点击',
					icon: 'none',
					duration: 1500,
					position: 'center'
				});
				return false;
			}
			that.disabled = true; //禁用点击
			var phoneData = {
				phone: that.userPhone
			};
			let url = '/sms/reg/' + this.phone;
			that.$http
				.get(url,'', false)
				.then(res => {
					if (res.data.code == 200) {
						that.countdown = 60;
						that.timestatus = true;
						that.clear = setInterval(that.countDown, 1000);
						console.log(JSON.stringify(data));
					} else {
						that.disabled = false; //获取失败开启点击
						uni.showToast({
							title: res.data.message,
							icon: 'none',
							duration: 1500,
							position: 'center'
						});
					}
				})
				.catch(err => {
					that.disabled = false; //获取失败开启点击
				});
		},
		// 倒计时
		countDown() {
			var that = this;
			if (!that.countdown) {
				that.disabled = false;
				that.timestatus = false;
				that.countdown = '获取验证码';
				clearInterval(that.clear);
			} else {
				--that.countdown;
			}
		},

		funBindMobileAndIdCard: function() {
			return;
			uni.reLaunch({
				url: '../model/noModel?title=' + '注册提示' + '&type=tips'
			});

			if (!this.phoneCode || this.phoneCode.length < 6) {
				uni.showToast({
					title: '请检查验证码',
					icon: 'none',
					duration: 2000,
					position: 'center'
				});
				return;
			} else if (!this.userPhone) {
				uni.showToast({
					title: '请填写手机号',
					icon: 'none',
					duration: 2000,
					position: 'center'
				});
				return;
			} else if (!this.password || !this.password1) {
				uni.showToast({
					title: '请检查密码',
					icon: 'none',
					duration: 2000,
					position: 'center'
				});
				return;
			} else if (this.password != this.password1) {
				uni.showToast({
					title: '密码不一致',
					icon: 'none',
					duration: 2000,
					position: 'center'
				});
				return;
			}
			var data = {
				code: this.phoneCode,
				password: this.password,
				phone: this.userPhone
			};
			this.$http.post('/api/common/mb/changePwd', data).then(res => {
				if (res.data.code == 200) {
					uni.showToast({
						title: '修改成功',
						icon: 'none',
						duration: 2000,
						position: 'center'
					});
					uni.removeStorageSync('userId');
					uni.removeStorageSync('token');
					uni.reLaunch({
						url: '../passwordLogin/passwordLogin'
					});
				} else {
					uni.showToast({
						title: res.data.message,
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
	background-color: #f2f2f2;
}
.padding_bottomNo {
	padding-bottom: 4%;
}
.padding_bottomNo1 {
	padding-top: 4%;
}

.one_img {
	width: 28upx;
	height: 38upx;
}

.two_img {
	width: 32upx;
	height: 24upx;
}

.three_img {
	width: 30upx;
	height: 30upx;
}

.btn_bd {
	height: 90upx;
	background: #98d0ab;
	border-radius: 10upx;
	text-align: center;
	align-items: center;
	color: #ffffff;
	font-size: 30upx;
	line-height: 90upx;
	margin-top: 30upx;
	border-radius: 50upx;
	position: absolute;
	bottom: 5%;
	width: 90%;
}
</style>
