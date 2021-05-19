<template>
	<view class="bg-2d-2d" style="height: 100vh;width: 100%;">
		<view class="pt-50 ml-30" @click="goBank"><image style="width: 19upx;height: 34upx;" src="../../../static/images/icon/leftf.png" mode=""></image></view>
		<view class="moudel_width ">
			<view class="text-center mt-60">
				<image style="width: 80upx;height: 80upx;border-radius: 50%;" src="../../../static/images/icon/money.png" mode=""></image>
				<view class="fs-36 color-ff">钱包</view>
			</view>
			<view class="moudel_list mt-60">
				<view class="fs-26 color-99 text-center">总余额(元)</view>
				<view class="fs-60 color-33 text-center" style="line-height: 1;">10,700.00</view>

				<view class="flex mt-50">
					<view class="wp-50" style="border-right: 1px solid #EEEEEE;">
						<view class="flex justify-center" @click="goMoney('分润')">
							<view class="fs-26 color-99">分润金额(元)</view>
							<image class="ml-20 mt-15" style="width: 10upx;height: 16upx;" src="../../../static/images/icon/right6.png" mode=""></image>
						</view>
						<view class="fs-44 color-33 text-center">10,000.00</view>
						<view class="flex justify-center mt-30" @click="goMoney('达标')">
							<view class="fs-26 color-99">达标金额(元)</view>
							<image class="ml-20 mt-15" style="width: 10upx;height: 16upx;" src="../../../static/images/icon/right6.png" mode=""></image>
						</view>
						<view class="fs-44 color-33 text-center">10,000.00</view>
					</view>
					<view class="wp-50">
						<view class="flex justify-center" @click="goMoney('激活')">
							<view class="fs-26 color-99">激活金额(元)</view>
							<image class="ml-20 mt-15" style="width: 10upx;height: 16upx;" src="../../../static/images/icon/right6.png" mode=""></image>
						</view>
						<view class="fs-44 color-33 text-center">10,000.00</view>
						<view class="flex justify-center mt-30" @click="goMoney('推广')">
							<view class="fs-26 color-99">金额(元)</view>
							<image class="ml-20 mt-15" style="width: 10upx;height: 16upx;" src="../../../static/images/icon/right6.png" mode=""></image>
						</view>
						<view class="fs-44 color-33 text-center">10,000.00</view>
					</view>
				</view>
			</view>

			<view class="moudel_list mt-30">
				<view class="flex justify-between" @click="goList('1')">
					<view class="flex">
						<view class="mt-8"><image style="width: 26upx;height: 30upx;" src="../../../static/images/icon/money1.png" mode=""></image></view>
						<view class="fs-30 color-33 ml-20">收支明细</view>
					</view>
					<view class=""><image style="width: 12upx;height: 20upx;" src="../../../static/images/icon/right6.png" mode=""></image></view>
				</view>
				<view class="flex justify-between pt-30" @click="goList">
					<view class="flex ">
						<view class="mt-8"><image style="width: 26upx;height: 30upx;" src="../../../static/images/icon/money2.png" mode=""></image></view>
						<view class="fs-30 color-33 ml-20">待调账明细</view>
					</view>
					<view class=""><image style="width: 12upx;height: 20upx;" src="../../../static/images/icon/right6.png" mode=""></image></view>
				</view>
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
		goBank: function() {
			uni.navigateBack({});
		},
		goMoney: function(item) {
			uni.navigateTo({
				url: './withdrawal?title=' + item
			});
		},
		// 
		goList:function(item){
			uni.navigateTo({
				url:'./withdrawalList?type=' + item
			})
		}
	}
};
</script>

<style></style>
