<template>
	<view class="    ">
		<view class="bg-ff">
			<view class="pl-30 pr-30 moudel_width">
				<view class="flex border_bottom padding_bottomNo padding_bottomNo1">
					<view class="wp-25 fs-30 color-33">收货人</view>
					<view class="ml-30 fs-30"><input type="text" maxlength="8" @input="keyPhone" placeholder="请填写收货人姓名" placeholder-style="color:#cccccc" /></view>
				</view>
				<view class="flex border_bottom padding_bottomNo padding_bottomNo1">
					<view class="wp-25 fs-30 color-33">手机号码</view>
					<view class="ml-30 fs-30"><input type="number" maxlength="11" @input="keyPhone" placeholder="请填写收货人手机号码" placeholder-style="color:#cccccc" /></view>
				</view>
				<view class="flex border_bottom padding_bottomNo padding_bottomNo1">
					<view class="wp-25 fs-30 color-33">所在地区</view>
					<view class="ml-30 fs-30 wp-75">
						<view class="flex  justify-between ">
							<picker @change="PickerChange" :value="index" :range="picker" :range-key="'name'">
								<view class="picker">{{ index > -1 ? picker[index].name : '' }}</view>
							</picker>
							<view class="ml-20"><image style="width: 16upx;height: 10upx;" src="../../static/images/icon/down99.png" mode=""></image></view>
						</view>
					</view>
				</view>

				<view class="flex  padding_bottomNo padding_bottomNo1">
					<view class="wp-25 fs-30 color-33">详细地址</view>
					<view class="ml-30 fs-30 wp-75"><textarea class="pt-10" style="height: 160upx;" value="" placeholder="街道、楼牌号等" /></view>
				</view>
			</view>
		</view>

		<view class="moudel_list mt-30">
			<view class="flex justify-between">
				<view class="wp-40 fs-30 color-33">设置默认地址</view>
				<view class="ml-30 fs-30"><switch class="" @change="SwitchA" :class="switchA ? 'checked' : ''" :checked="switchA ? true : false"></switch></view>
			</view>
		</view>

		<view class="btn_bd" @click="saveA">保存</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userPhone: '',
			picker: [{ name: '终端维度', id: '1' }, { name: '结算类型', id: '2' }, { name: '活动类型', id: '3' }, { name: '终端属性', id: '3' }],
			index: 1,
			switchA: false
		};
	},
	mounted() {
		// if(uni.getStorageSync('userId')){
		// 	this.getMyData()
		// }
	},
	onLoad(option) {
		this.type = option.type;
	},
	methods: {
		// 获取手机号
		keyPhone: function(e) {
			console.log(e);
			this.userPhone = e.target.value;
		},
		// 验证码
		keyCode: function(e) {
			this.phoneCode = e.target.value;
		},
		SwitchA: function(e) {
			this.switchA = e.detail.value;
		},
		
		saveA:function(){
			uni.navigateBack({
				
			})
		}
	}
};
</script>

<style lang="less">
page {
	background-color: #fafafa;
}
.padding_bottomNo {
	padding-bottom: 4%;
}
.padding_bottomNo1 {
	padding-top: 4%;
}

.btn_bd {
	height: 90upx;
	background: #3c3d3e;
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
	width: 94%;
	margin-left: 3%;
}
</style>
