<template>
	<view>
		<view class="moudel_width" v-if="falg == 0">
			<view class="moudel_list mt-30">
				<view class="fs-30 fw-600">为什么要获取我的位置信息?</view>
				<view class="fs-30">
					我们会根据您的位置信息为您提供更契合您需要的产品及服务，在您使用我们的新增商户服务时，由于不同地区有不同的进件限制，为保证合规以及风控要求,我们需要获取您的位置信息。
				</view>
				<view class="fs-30 fw-600 mt-30">如何进行权限设置?能否停止授权?</view>
				<view class="fs-30">
					如果要开启或关闭权限授予，请按照以下步骤操作:
					<br />
					1、打开手机设置
					<br />
					2、在应用列表内找到应用
					<br />
					3、点击进入，查看或修改权限设置
				</view>
			</view>

			<view class="bn_b mt-30">去设置</view>
		</view>
		<view class="moudel_width" v-if="falg == 1">
			<view class="moudel_list mt-30">
				<view class="fs-30 fw-600">为什么要获取我的相机?</view>
				<view class="fs-30">
					为了您可以使用摄像头进行直接拍摄，并上传图片用于新增商户、商户变更、实名认证，以及其他您明确知悉的特定场景下经您授权的人脸识别，我们需要访问您的相机。
				</view>
				<view class="fs-30 fw-600 mt-30">如何进行权限设置?能否停止授权?</view>
				<view class="fs-30">
					如果要开启或关闭权限授予，请按照以下步骤操作:
					<br />
					1、打开手机设置
					<br />
					2、在应用列表内找到应用
					<br />
					3、点击进入，查看或修改权限设置
				</view>
			</view>

			<view class="bn_b mt-30">去设置</view>
		</view>
		<view class="moudel_width" v-if="falg == 2">
			<view class="moudel_list mt-30">
				<view class="fs-30 fw-600">为什么要获取我的相册/手机存储?</view>
				<view class="fs-30">为帮助您取用和上传手机中的照片、图片，以实现新增商户、商户变更以及银行卡绑定等操作，我们需要获取您的相册/手机存储权限。</view>
				<view class="fs-30 fw-600 mt-30">如何进行权限设置?能否停止授权?</view>
				<view class="fs-30">
					如果要开启或关闭权限授予，请按照以下步骤操作:
					<br />
					1、打开手机设置
					<br />
					2、在应用列表内找到应用
					<br />
					3、点击进入，查看或修改权限设置
				</view>
			</view>

			<view class="bn_b mt-30">去设置</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: '',
			falg: ''
		};
	},
	onLoad(option) {
		let dataOption = JSON.parse(option.item);
		this.title = dataOption.title;
		this.falg = dataOption.type;
		uni.setNavigationBarTitle({
			title: this.title
		});
	},
	methods: {}
};
</script>

<style></style>
