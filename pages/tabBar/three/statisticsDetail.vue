<template>
	<view>
		<cu-custom bgColor="bg-2d-2d" :isBack="true"><block slot="content">团队机具管理</block></cu-custom>
		<view class="bg-2d">
			<view class="moudel_width pb-30">
				<view class="flex justify-between pt-60 ">
					<view class="flex">
						<view class="left_flag bg-f5"></view>
						<view class="fs-28 color-aa ml-20">机具总数（台）</view>
					</view>
				</view>
				<view class="fs-60 fw-700 color-ff">146</view>

				<view class="flex">
					<view class="flex wp-50">
						<view class="left_flag bg-3c"></view>
						<view class="fs-28 color-aa ml-20">激活总数（台）</view>
					</view>
					<view class="flex wp-50">
						<view class="left_flag bg-fc"></view>
						<view class="fs-28 color-aa ml-20">未激活总数（台）</view>
					</view>
				</view>
				<view class="flex color-ff" style="font-size: 44upx;">
					<view class="wp-50 fs-44">100</view>
					<view class="wp-50 fs-44">100</view>
				</view>
			</view>
		</view>

		<view class="mt-30 flex fs-34 color-99 text-center">
			<view class="wp-25  ">代理商名称</view>
			<view class="wp-25  ">总机具数</view>
			<view class="wp-25  ">已激活</view>
			<view class="wp-25  ">未激活</view>
		</view>
		<view class="" v-for="(item,index) in [1,2,3]" :key="index" @click="goDetail(item)">
			<view class="mt-30 flex fs-32  text-center">
				<view class="wp-25 color-33">王大锤</view>
				<view class="wp-25 color-f5">200</view>
				<view class="wp-25 " style="color: #70CC81;">180</view>
				<view class="wp-25 " style="color: #FFC048;">20</view>
			</view>
			<view class="border-bottom mt-10"></view>
		</view>
		
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad() {},
	methods: {
		goDetail:function(item){
			uni.navigateTo({
				url:'./detailOne?item=' + item
			})
		}
	}
};
</script>

<style>
.moudel_bgff {
	background: #ffffff;
	border-radius: 14upx;
}
.wp-16 {
	width: 16% !important;
}
.tab_item {
	width: 33%;
	text-align: center;
	display: inline-block;
	color: #333333;
}

.border_bt {
	width: 36upx;
	height: 6upx;
	opacity: 1;
	background: #f55050;
	border-radius: 3upx;
	box-shadow: 0upx 4upx 6upx 0upx rgba(245, 80, 80, 0.3);
	margin-left: 40%;
}
.border-bottom {
	border-bottom: 1upx solid #CCCCCC;
	width: 90%;
	margin-left: 5%;
}
</style>
