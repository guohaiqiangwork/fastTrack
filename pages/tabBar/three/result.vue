<template>
	<view>
		<view class="text-center">
			<image style="width: 422upx;height: 354upx;margin-top: 250upx;" src="../../../static/images/noData/no.png" mode=""></image>
			<view class="fs-30 color-99">
				申领成功
			</view>
			<view class="btn_q" @click="goPay">
				去查看
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
			goPay:function(){
				uni.navigateTo({
					url:'./list'
				})
			}
		}
	}
</script>

<style lang="less">
page{
	background-color: #FFFFFF;
}
.btn_q{
	width: 420upx;
	height: 88upx;
	opacity: 1;
	background: #2d2d2d;
	border-radius: 44upx;
	color: #FFFFFF;
	text-align: center;
	line-height: 88upx;
	margin-left: 165upx;
	margin-top: 120upx;
}
</style>
