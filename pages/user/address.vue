<template>
	<view>
		<view class="moudel_width " style="padding-bottom: 150upx;">
			<view 
			v-for="(item,index) in [1,2,3,2,1,1,1,1]" :key="index"
			class="moudel_list mt-30 pr-0">
				<view class="flex">
					<view class="wp-75">
						<view class="flex">
							<view class="fs-30">
								王大锤
								<text class="ml-20">184****0024</text>
							</view>
							<view v-if="index == 1" class="top_btn">默认</view>
						</view>
						<view class="fs-28 color-99 text_hidden2">内蒙古自治区 包头市 昆都仑区 友谊大街18 栋2号西门左转</view>
					</view>
					<view @click="addA('old')" class="wp-20 text-center pt-50" style="border-left: 1px solid #CCCCCC;margin-left: 3%;align-items: center;">
						<image style="width: 26upx;height: 26upx;" src="../../static/images/icon/bj.png" mode=""></image>
					</view>
				</view>
			</view>
			
			
			<view class="btn_bn" @click="addA('new')">
				添加新地址
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
		addA:function(item){
			uni.navigateTo({
				url:'./addAddress?type=' + item
			})
		}
	}
};
</script>

<style lang="less">
.top_btn {
	width: 70upx;
	height: 31upx;
	opacity: 1;
	background: #f55050;
	border-radius: 16upx;
	color: #ffffff;
	text-align: center;
	line-height: 31upx;
	font-size: 22upx;
	margin-top: 12upx;
	margin-left: 15upx;
}
.btn_bn{
	width: 690upx;
	height: 88upx;
	opacity: 1;
	background: #2d2d2d;
	border-radius: 44upx;
	font-size: 30upx;
	color: #FFFFFF;
	text-align: center;
	line-height: 88upx;
	position: fixed;
	bottom: 20upx;
}
</style>
