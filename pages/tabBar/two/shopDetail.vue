<template>
	<view>
		<cu-custom bgColor="bg-2d-2d" :isBack="true"><block slot="content">商户详情</block></cu-custom>

		<view class="bg-2d-m" style="height: 50vh;">
			<view class="moudel_width pt-30">
				<view class="top_btn flex justify-center ">
					<image style="width: 30upx;height: 30upx;" src="../../../static/images/icon/td.png" mode=""></image>
					<view class="ml-20">伪激活</view>
				</view>

				<view class="mt-30 moudel_list">
					<!-- 基本信息 -->
					<view class="flex border_bottom pb-25">
						<view class="left_flag bg-f5 mt-15"></view>
						<view class="fs-30 color-33 fw-700 ml-10">基本信息</view>
					</view>
					<view class="flex justify-between fs-30 color-33 pt-30">
						<view class=" ">所属代理商</view>
						<view class="">王大锤</view>
					</view>
					<view class="flex justify-between fs-30 color-33 pt-30">
						<view class=" ">商户编号</view>
						<view class="">822192072301807</view>
					</view>
					<view class="flex justify-between fs-30 color-33 pt-30">
						<view class=" ">商户名称</view>
						<view class="">王大锤</view>
					</view>
					<view class="flex justify-between fs-30 color-33 pt-30">
						<view class=" ">商户类型</view>
						<view class="">王大锤</view>
					</view>
					<view class="flex justify-between fs-30 color-33 pt-30">
						<view class=" ">商户地址</view>
						<view class="text_hidden">内蒙古自治区包头市青山区</view>
					</view>

					<!-- 自制信息 -->
					<view class="flex border_bottom pb-25 mt-30">
						<view class="left_flag bg-f5 mt-15"></view>
						<view class="fs-30 color-33 fw-700 ml-10">资质信息</view>
					</view>
					<view class="flex justify-between fs-30 color-33 pt-30">
						<view class=" ">企业名称</view>
						<view class="text_hidden">内蒙古自治区包头市青山区</view>
					</view>
					<view class="flex justify-between fs-30 color-33 pt-30">
						<view class=" ">营业执照</view>
						<view class="text_hidden">内蒙古自治区包头市青山区</view>
					</view>
					<view class="flex justify-between fs-30 color-33 pt-30">
						<view class=" ">法人姓名</view>
						<view class="text_hidden">内蒙古自治区包头市青山区</view>
					</view>
					<view class="flex justify-between fs-30 color-33 pt-30">
						<view class=" ">法人身份证号</view>
						<view class="text_hidden">内蒙古自治区包头市青山区</view>
					</view>

					<!-- 结算信息 -->
					<view class="flex border_bottom pb-25 mt-30">
						<view class="left_flag bg-f5 mt-15"></view>
						<view class="fs-30 color-33 fw-700 ml-10">结算信息</view>
					</view>
					<view class="flex justify-between fs-30 color-33 pt-30">
						<view class=" ">结算方式</view>
						<view class="text_hidden">内蒙古自治区包头市青山区</view>
					</view>
					<view class="flex justify-between fs-30 color-33 pt-30">
						<view class=" ">账户类型</view>
						<view class="text_hidden">内蒙古自治区包头市青山区</view>
					</view>
					<view class="flex justify-between fs-30 color-33 pt-30">
						<view class=" ">结算人姓名</view>
						<view class="text_hidden">内蒙古自治区包头市青山区</view>
					</view>
					<view class="flex justify-between fs-30 color-33 pt-30">
						<view class=" ">结算卡卡号</view>
						<view class="text_hidden">内蒙古自治区包头市青山区</view>
					</view>
					<view class="flex justify-between fs-30 color-33 pt-30">
						<view class=" ">开户地</view>
						<view class="text_hidden">内蒙古自治区包头市青山区</view>
					</view>
					<view class="flex justify-between fs-30 color-33 pt-30">
						<view class=" ">结算卡卡号</view>
						<view class="text_hidden">内蒙古自治区包头市青山区</view>
					</view>

					<!-- 费率信息 -->
					<view class="flex border_bottom pb-25 mt-30">
						<view class="left_flag bg-f5 mt-15"></view>
						<view class="fs-30 color-33 fw-700 ml-10">费率信息</view>
					</view>
					<view class="flex justify-between fs-30 color-33 pt-30">
						<view class=" ">扫脸支付费率</view>
						<view class="text_hidden">内蒙古自治区包头市青山区</view>
					</view>
					<view class="flex justify-between fs-30 color-33 pt-30">
						<view class=" ">快捷支付费率</view>
						<view class="text_hidden">内蒙古自治区包头市青山区</view>
					</view>
					<view class="flex justify-between fs-30 color-33 pt-30">
						<view class=" ">NFC提现费率</view>
						<view class="text_hidden">内蒙古自治区包头市青山区</view>
					</view>
					<view class="flex justify-between fs-30 color-33 pt-30">
						<view class=" ">网联交易费率</view>
						<view class="text_hidden">内蒙古自治区包头市青山区</view>
					</view>
					<view class="flex justify-between fs-30 color-33 pt-30">
						<view class=" ">网联提现费率</view>
						<view class="text_hidden">内蒙古自治区包头市青山区</view>
					</view>
					<view class="flex justify-between fs-30 color-33 pt-30">
						<view class=" ">支付宝费率</view>
						<view class="text_hidden">内蒙古自治区包头市青山区</view>
					</view>
					<view class="flex justify-between fs-30 color-33 pt-30">
						<view class=" ">微信费率</view>
						<view class="text_hidden">内蒙古自治区包头市青山区</view>
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
			showPicker: false,
			date: ['2021/01/01', '2021/01/06'],
			value: ['2021/01/01', '2021/01/06']
		};
	},
	methods: {}
};
</script>

<style lang="less">
page {
	background-color: #fafafa;
}
.top_btn {
	height: 90upx;
	opacity: 1;
	background: #f55050;
	border-radius: 14upx;
	align-items: center;
	font-size: 30upx;
	color: #ffffff;
}
</style>
