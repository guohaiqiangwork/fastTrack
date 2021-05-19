<template>
	<view class="moudel_list">
		<view class="moudel_width" v-for="(item,index) in [1,2,3,4]" :key="index" @click="goTab">
			<view class="flex pt-20 border_bottom pb-10">
				<view class="">
					<image style="width: 160upx;height: 160upx;" src="../../static/images/icon/card1.png" mode=""></image>
				</view>
				<view class="ml-40 mt-20">
					<view class="fs-43 fw-700">
						知者创物
					</view>
					<view class="fs-30 color-99 mt-20">
						代理编号812190072300314
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
			goTab:function(){
				uni.switchTab({
					url: '../tabBar/one/one'
				});
			}
		}
	}
</script>

<style lang="less">
page{
	background-color: #FFFFFF;
}
</style>
