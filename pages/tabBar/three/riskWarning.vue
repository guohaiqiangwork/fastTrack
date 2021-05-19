<template>
	<view class="bg-ff">
		<view class="flex ">
			<view @click="swichTab(item.id)" class="tab_item wp-50" v-for="(item, index) in tabOneList" :key="index">
				<view class="color-33 fs-30" :class="tabFalg == item.id ? ' fw-700' : ''">{{ item.name }}</view>
				<view v-if="tabFalg == item.id" class="border_bt" style="margin-left: 44%;"></view>
			</view>
		</view>
		<view class="moudel_width">
			<view v-for="(item, index) in [1, 2, 3]" :key="item" class="pt-20 pb-20 border_bottom">
				<view class="flex">
					<view class="mt-10" v-if="false"><image style="width: 80upx;height: 34upx;" src="../../../static/images/icon/list1.png" mode=""></image></view>
					<view class="mt-10"><image style="width: 80upx;height: 34upx;" src="../../../static/images/icon/list2.png" mode=""></image></view>
					<view class="fs-30 color-33 fw-700 ml-20">魔方</view>
				</view>
				<view class="flex">
					<view class="mt-10"><image style="width: 130upx;height: 115upx;" src="../../../static/images/icon/three2.png" mode=""></image></view>
					<view class="ml-25">
						<view class="flex">
							<view class="fs-26 color-99">代理商：</view>
							<view class="fs-26 color-33">王大锤</view>
							<view class="ml-30" @click="goPhone"><image style="width: 26upx;height: 26upx;" src="../../../static/images/icon/phonef5.png" mode=""></image></view>
						</view>
						<view class="flex" v-if="tabFalg == 2">
							<view class="fs-26 color-99">商户名称：</view>
							<view class="fs-26 color-33">瑞恩娜美容美发</view>
							<view class="ml-30" @click="goPhone"><image style="width: 26upx;height: 26upx;" src="../../../static/images/icon/phonef5.png" mode=""></image></view>
						</view>
						<view class="flex">
							<view class="fs-26 color-99">序列号：</view>
							<view class="fs-26 color-33">00003102962002298325</view>
						</view>
						<view class="flex">
							<view class="fs-26 color-99">活动类型：</view>
							<view class="fs-26 color-33">考拉宝3.0传统非押版活动</view>
						</view>
						<view class="flex">
							<view class="fs-26 color-99">激活倒计时：</view>
							<view class="fs-26 color-33">仅剩-180天</view>
						</view>
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
			tabOneList: [{ name: '未激活', id: '1' }, { name: '伪激活', id: '2' }],
			tabFalg: 1
		};
	},
	methods: {
		swichTab: function(item) {
			this.tabFalg = item;
		},
		goPhone: function() {
			// uni.ca
		}
	}
};
</script>

<style lang="less">
.tab_item {
	width: 33%;
	text-align: center;
	display: grid;
	color: #333333;
	padding-top: 30upx;
	padding-bottom: 30upx;
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
</style>
