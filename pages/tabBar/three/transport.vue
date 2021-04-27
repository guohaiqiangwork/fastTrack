<template>
	<view>
		<view class="moudel_width">
			<view class="input_mo flex">
				<view class="mt-5 wp-20">名称：</view>
				<view class="wp-80 fs-25"><input class="" placeholder="请输入名称" type="text" :value="name" :moudel="name" @input="getName" /></view>
			</view>

			<view class="input_mo flex">
				<view class="mt-5 wp-20">车牌号：</view>
				<view class="wp-80 fs-25"><input class="" placeholder="请输入车牌号" type="text" :value="name" :moudel="name" @input="getName" /></view>
			</view>
			<view class="input_mo flex">
				<view class="mt-5 wp-20">电话：</view>
				<view class="wp-80 fs-25"><input class="" placeholder="请输入电话" type="text" :value="name" :moudel="name" @input="getName" /></view>
			</view>
			<view class="input_mo flex">
				<view class="mt-5 wp-20">运费：</view>
				<view class="wp-80 fs-25"><input class="" placeholder="请输入运费" type="text" :value="name" :moudel="name" @input="getName" /></view>
			</view>

			
			<view class="btn_bd" @click="okEdit">
				确认
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			name: '',
			idCard: ''
		};
	},
	methods: {
		getName: function(e) {
			console.log(e.detail.value);
		},
		okEdit:function(){
			console.log('890')
			uni.navigateBack({
				
			})
			// uni.switchTab({
			// 	url:'./two'
			// })
		}
	}
};
</script>

<style lang="less">
.input_mo {
	background-color: #ffffff;
	margin-top: 30upx;
	border: 1px solid #a77845;
	height: 80upx;
	line-height: 80upx;
	align-items: center;
	font-size: 25upx;
	color: #293539;
	padding-left: 20upx;
}
.btn_bd {
	height: 90upx;
	background: #98d0ab;
	border-radius: 10upx;
	text-align: center;
	align-items: center;
	color: #ffffff;
	font-size: 30upx;
	line-height: 90upx;
	margin-top: 30upx;
	border-radius: 50upx;
	position: absolute;
	bottom: 5%;
	width: 90%;
}
</style>
