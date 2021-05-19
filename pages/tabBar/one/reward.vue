<template>
	<view>
		<view class="moudel_width pb-30">
			<view class="moudel_list mt-30 pb-20" v-for="(item, index) in [1, 2, 3, 4]" :key="index">
				<view class="flex justify-between border_bottom pb-20">
					<view class="fs-22 color-99">
						<view class="">机具名称：传统POS机</view>
						<view class="">机具SN号：000022333333222211</view>
					</view>
					<view class="" style="margin-top:-15upx">
						<view class="fs-24">
							<text class="fs-40 fw-600">100</text>
							万
						</view>
						<view class="fs-26 fw-600" style="line-height: 1;">交易量</view>
					</view>
				</view>

				<view class="pt-10">
					<view class="cu-progress round sm striped "><view class="bg-green" :style="[{ width: loading ? '60%' : '' }]"></view></view>
					<view class="flex justify-between fs-24 mt-10">
						<view class="color-99">阶段1：300万/奖200元</view>
						<view class="color-33">剩余：166万</view>
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
			tabFalg: 0,
			loading: true
		};
	},
	methods: {}
};
</script>

<style lang="less">
.item_moudel {
	// width: 30%;
	height: 44upx;
	opacity: 1;
	background: #cccccc;
	border-radius: 6upx;
	color: #ffffff;
	font-size: 24upx;
	line-height: 44upx;
	padding-left: 10upx;
	padding-right: 10upx;
	margin-top: 30upx;
	margin-left: 30upx;
}
</style>
