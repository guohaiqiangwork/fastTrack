<template>
	<view>
		<view class="moudel_width">
			<view class="moudel_list mt-30">
				<view class="flex justify-between border_bottom pb-30">
					<view class="flex">
						<view class="left_flag bg-f5 mt-15"></view>
						<view class="fs-30 fw-600 ml-20">开户人</view>
					</view>
					<view class="fs-22 color-99 mt-10">注：银行卡必须为本人持有的银行储蓄卡</view>
				</view>
				<view class="flex pt-30 pb-30 justify-between fs-30">
					<view class="">开户人</view>
					<view class="text-right"><input type="text" value="" placeholder="请输入开户人姓名" /></view>
				</view>
				<view class="flex pt-30  justify-between fs-30">
					<view class="">身份证</view>
					<view class="text-right"><input type="text" value="" placeholder="请输入开户人姓名" /></view>
				</view>
			</view>
			
			
			<view class="moudel_list mt-30">
				<view class="flex justify-between border_bottom pb-30">
					<view class="flex">
						<view class="left_flag bg-f5 mt-15"></view>
						<view class="fs-30 fw-600 ml-20">开户行</view>
					</view>
					<view class="fs-22 color-99 mt-10">注：如未找到开户行，选择附近任意支行即可</view>
				</view>
				<view class="flex pt-30 pb-30 justify-between fs-30">
					<view class="">银行卡号</view>
					<view class="text-right"><input type="text" value="" placeholder="请输入开户人姓名" /></view>
				</view>
				<view class="flex pt-30 pb-30 justify-between fs-30">
					<view class="">开户城市</view>
					<view class="text-right"><input type="text" value="" placeholder="请输入开户人姓名" /></view>
				</view>
				<view class="flex pt-30  justify-between fs-30">
					<view class="">开户支行</view>
					<view class="text-right"><input type="text" value="" placeholder="请输入开户人姓名" /></view>
				</view>
			</view>
			
			
			<view class="bn_b mt-40">
				确定
			</view>
		
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style></style>
