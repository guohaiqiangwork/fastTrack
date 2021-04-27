<template>
	<view>
		<view class="listName">发货人信息</view>
		<view class="moudel_width">
			<view class="input_mo"><input class="mt-15" placeholder="请输入发货人信息" placeholder-class="fs-25" type="text" :value="name" :moudel="name" @input="getName" /></view>
			<view class="input_mo">
				<input class="mt-15" placeholder="请输入发货人卡号" placeholder-class="fs-25" type="text" :value="idCard" :moudel="name" @input="getName" />
			</view>
		</view>

		<view class="listName mt-30">收货人信息</view>
		<view class="moudel_width">
			<view class="input_mo flex">
				<view class="mt-5 wp-20">名称：</view>
				<view class="wp-80 fs-25"><input class="" placeholder="请输入收货人名称" type="text" :value="name" :moudel="name" @input="getName" /></view>
			</view>

			<view class="input_mo flex">
				<view class="mt-5 wp-20">联系人：</view>
				<view class="wp-80 fs-25"><input class="" placeholder="请输入联系人" type="text" :value="name" :moudel="name" @input="getName" /></view>
			</view>
			<view class="input_mo flex">
				<view class="mt-5 wp-20">电话：</view>
				<view class="wp-80 fs-25"><input class="" placeholder="请输入联系人电话" type="text" :value="name" :moudel="name" @input="getName" /></view>
			</view>
			<view class="input_mo flex">
				<view class="mt-5 wp-20">地址：</view>
				<view class="wp-80 fs-25"><input class="" placeholder="请输入收货地址" type="text" :value="name" :moudel="name" @input="getName" /></view>
			</view>

			<view class="moudel_list mt-40 pt-20" >
				<view class="flex ">
					<view class="fs-25 wp-15">备注：</view>
					<view class="wp-80"><textarea style="height: 210upx;"  value="" placeholder="请填写备注" /></view>
				</view>
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
			name: '河北兴农谷物销售有限公司',
			idCard: '62166102000****7010'
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
}
</style>
