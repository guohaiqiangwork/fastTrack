<template>
	<view>
		<view class="moudel_list pb-80">
			<view class="fs-28 color-33 mt-30">请拍摄并上传您的身份证照片</view>

			<view class="flex mt-30">
				<view class="wp-45"><image style="height: 272upx;" src="../../static/images/icon/card1.png" mode=""></image></view>
				<view class="wp-45" style="margin-left: 10%;"><image style="height: 272upx;" src="../../static/images/icon/card2.png" mode=""></image></view>
			</view>
		</view>
		
		<view class="moudel_list mt-30 fs-28">
			<view class="mt-50">
				拍摄身份证要求:
			</view>
			<view class="color-99 fs-26">
				大陆公民持有本人有效二代身份证
			</view>
			<view class="color-99 fs-26">
				拍摄时确保身份证  <text style="color: #FFAD00;"> 边框完整、字体清晰、亮度</text>
			</view>
			
			<view class="mt-30">
				<image style="height: 175upx;width: 100%;" src="../../static/images/icon/card3.png" mode=""></image>
			</view>
			<view class="bn_b mt-50 mb-100" @click="goBack">
				下一步
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		goBack:function(){
			uni.navigateTo({
				url:'./bankCard'
			})
		}
	}
};
</script>

<style></style>
