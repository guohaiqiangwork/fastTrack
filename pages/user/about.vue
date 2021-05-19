<template>
	<view>
		<view class="moudel_width">
			<view class="text-center mt-100">
				<image style="width: 160upx;height: 160upx;" src="../../static/images/icon/ercode.png" mode=""></image>
				<view class="fs-30 color-99 mt-30">
					版本号：v1.0.0
				</view>
			</view>
			
			<view class="moudel_list mt-80 pb-5">
				<view class="flex justify-between  border_bottom pb-30" @click="goUserConter('userAgreement')">
					<view class="fs-30">
						服务协议
					</view>
					<view class="">
						<image style="width: 12upx;height: 20upx;" src="../../static/images/icon/right3.png" mode=""></image>
					</view>
				</view>
				<view class="flex justify-between pt-30  pb-30" @click="goUserConter('userPrivacy')">
					<view class="fs-30">
						隐私政策
					</view>
					<view class="">
						<image style="width: 12upx;height: 20upx;" src="../../static/images/icon/right3.png" mode=""></image>
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
				
			}
		},
		methods: {
			// 去用户协议 去隐私协议
			goUserConter: function(page) {
				uni.navigateTo({
					url: '../' + page + '/' + page
				});
			},
		}
	}
</script>

<style>

</style>
