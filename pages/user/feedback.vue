<template>
	<view>
		<view class="moudel_width">
			<view class="moudel_list mt-30">
				<view class="flex">
					<view class="left_flag bg-f5"></view>
					<view class="fs-30 fw-600 ml-10">
						请选择需要生成的报表
					</view>
				</view>
				<view class="mt-30 ">
					<textarea style="height: 216upx;border: 1px solid #EEEEEE;border-radius: 10upx;" class="pd-20" value="" placeholder="请输入反馈内容" />
				</view>
			</view>
			<view class="mt-30 bn_b" @click="goBack">
				提交
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
			goBack:function(){
				uni.navigateBack({
					
				})
			}
		}
	}
</script>

<style lang="less">

</style>
