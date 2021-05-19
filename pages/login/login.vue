<template>
	<view>
		<!-- 登录页面 -->
		<view class="login" style="background-color: #333333;" v-if="loginFalg">
			<image src="../../static/images/bj.png" mode="" class="image_width"></image>
			<view class="login_moudel">
				<view class="log"><image src="../../static/images/log.png" mode=""></image></view>

				<view class="input_moudel">
					<view class="flex input_list">
						<view class="wp-10 text-center mt-10"><image style="width: 26upx;height: 30upx;" src="../../static/images/icon/log1.png" mode=""></image></view>
						<view class="wp-80 pl-20 color-ff">
							<input
								type="number"
								maxlength="11"
								v-model="userPhone"
								@input="keyPhone"
								value=""
								placeholder="请输入账号"
								placeholder-style="color:#999999;font-size:30upx"
							/>
						</view>
						<view class="wp-10 text-center" @click="eliminatePhone" v-if="userPhone.length > 1">
							<image style="width: 26upx;height: 30upx;" src="../../static/images/icon/colse.png" mode=""></image>
						</view>
					</view>
					<view class="flex input_list mt-20">
						<view class="wp-10 text-center mt-10"><image style="width: 26upx;height: 30upx;" src="../../static/images/icon/log2.png" mode=""></image></view>
						<view class="wp-80 pl-20 color-ff">
							<input @input="keyCode" type="password" v-model="phoneCode" value="" placeholder="请输入登录密码" placeholder-style="color:#999999;font-size:30upx" />
						</view>
						<view class="wp-10 text-center" @click="eliminatePhoneCode" v-if="phoneCode.length > 1">
							<image style="width: 26upx;height: 30upx;" src="../../static/images/icon/colse.png" mode=""></image>
						</view>
					</view>
				</view>

				<view class="log_btn" @click="goLogin">登录</view>
				<view class="text-right color-ff fs-26 mt-20" @click="goUserConter('noPassword')">忘记密码</view>
			</view>
			<view class="flex color-ff justify-center" style="position: fixed;bottom: 4%;width: 100%;">
				勾选即表示同意
				<text @click="goUserConter('userAgreement')" style="color: #F55050;">《服务协议》</text>
				和
				<text @click="goUserConter('userPrivacy')" style="color: #F55050;">《隐私政策》</text>
			</view>
		</view>

		<!-- 选择机构 -->
		<view class="" v-else>
			<cu-custom bgColor="bg-ff" :isBack="true">
				<block slot="content">机构选择</block>
				<block slot="right"></block>
			</cu-custom>
			<view class="moudel_list pt-30">
				<view class="" v-for="(item, index) in productList" :key="index" @click="goTab(item.id)">
					<view class="flex pt-20 border_bottom pb-10">
						<view class="wp-25"><image style="width: 160upx;height: 160upx;" :src="item.logo" mode=""></image></view>
						<view class="wp-75 ml-10 mt-20">
							<view class="fs-43 fw-700">{{ item.agencyName }}</view>
							<view class="fs-30 color-99 mt-20">代理编号:{{ item.agencyCode }}</view>
						</view>
					</view>
				</view>
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
			phoneCode: '',
			agencyId: '',
			loginFalg: true,
			productList: []
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
				url: '../' + page + '/' + page
			});
		},
		eliminatePhone: function() {
			this.userPhone = '';
		},
		eliminatePhoneCode: function() {
			this.phoneCode = '';
		},
		goTab: function(item) {
			this.agencyId = item;
			this.goLogin();
		},
		goLogin: function(item) {
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
				agentMobile: this.userPhone,
				agentPass: this.phoneCode ,
				agencyId: this.agencyId
			};
			this.$http.post('/v1/agent/doLogin', data, '', true).then(res => {
				console.log(res.data);
				if (res.data.code == 200) {
					if (res.data.data.code == 300) {
						this.loginFalg = false;
						this.productList = res.data.data.data;
					} else {
						uni.setStorageSync('userId',res.data.data.data.userinfo.id);//用户ID
						uni.setStorageSync('agencyId', res.data.data.data.userinfo.agencyId);//机构id
						uni.setStorageSync('token', res.data.data.data.token);//token
						uni.switchTab({
							url: '../tabBar/one/one'
						});
						
					}
				} else {
					uni.showToast({
						title: res.data.message,
						icon: 'none',
						duration: 1500,
						position: 'center'
					});
				}
				console.log(JSON.stringify(res) + '登录返回数据');
			});
		}
	}
};
</script>

<style lang="less">
.image_width {
	position: absolute;
	width: 100%;
	height: 100%;
}

.login_moudel {
	position: relative;
	width: 70%;
	margin-left: 15%;
	padding-top: 200upx;
	.log {
		width: 160upx;
		height: 160upx;
		margin: auto;
		image {
			width: 100%;
			height: 100%;
			border-radius: 20upx;
		}
	}
}
.input_moudel {
	margin-top: 160upx;
	.input_list {
		background-color: #555555;
		height: 88upx;
		border-radius: 50upx;
		line-height: 88upx;
		align-items: center;
		padding-left: 20upx;
		padding-right: 20upx;
	}
}
.log_btn {
	height: 88upx;
	line-height: 88upx;
	text-align: center;
	color: #ffffff;
	background-color: #f55050;
	border-radius: 50upx;
	font-size: 30upx;
	margin-top: 120upx;
}
</style>
