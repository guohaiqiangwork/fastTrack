<template>
	<view>
		<view class="moudel_list  pb-40" >
			<view class="text-center fs-32 pt-90">
				此账号已经存在
				<br />
				是否关联为相同账户身份？
			</view>

			<view class="btn_bd mt-90" @click="okButtom">返回登入</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		okButtom:function(){
			uni.reLaunch({
				url:'../login/login'
			})
		}
	}
};
</script>

<style lang="less">
page {
	background-color: #f2f2f2;
}

.btn_bd {
	height: 90upx;
	background: #FBC941;
	border-radius: 10upx;
	text-align: center;
	align-items: center;
	color: #ffffff;
	font-size: 30upx;
	line-height: 90upx;
	margin-top: 30upx;
	border-radius: 50upx;
	// position: absolute;
	// bottom: 5%;
	// width: 94%;
}
</style>

