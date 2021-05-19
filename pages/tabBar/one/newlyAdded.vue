<template>
	<view>
		<image src="../../../static/images/oneb.png" mode="" class="image_width"></image>
		<view class="login_moudel">
			<view class="moudel_list text-center" style="border-radius: 50upx;">
				<view class="btn">
					邀请码
				</view>
				<view class="fs-60 fw-600 mt-30 color-f5">
					20849011
				</view>
				<view class="">
					<image style="width: 400upx;height: 400upx;" src="../../../static/images/icon/ercode.png" mode=""></image>
				</view>
				<view class="fs-26 color-33">
					识别二维码成为代理商
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
.image_width {
	position: absolute;
	width: 100%;
	height: 100%;
}

.login_moudel {
	position: relative;
	width: 80%;
	margin-left: 10%;
	padding-top: 65%;
	.btn{
		width: 198upx;
		height: 64upx;
		opacity: 1;
		background: #f55050;
		border-radius: 32upx;
		box-shadow: 0upx 4upx 16upx 0upx rgba(245,80,80,0.50); 
		line-height: 64upx;
		text-align: center;
		color: #FFFFFF;
		font-size: 36upx;
		margin-left: 35%;
	}
}
</style>
