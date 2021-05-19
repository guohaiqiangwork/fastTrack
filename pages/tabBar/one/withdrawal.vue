<template>
	<view>
		<cu-custom bgColor="bg-2d-2d" :isBack="true">
			<block slot="content">{{ title }}</block>
		</cu-custom>
		<view class="bg-2d-2d">
			<view class="moudel_width pt-50 pb-50">
				<!-- 没有银行卡 -->
				<!-- <view class="flex">
					<view class="fs-26 color-99 wp-30">到账银行卡</view>
					<view class="flex fs-30 color-ff wp-40 justify-end">
						<image class="mt-10" style="width: 28upx;height: 28upx;" src="../../../static/images/icon/ad.png" mode=""></image>
						<view class="ml-20">添加银行卡</view>
					</view>
					<view class="wp-30 text-right"><image style="width: 10upx;height: 16upx;" src="../../../static/images/icon/right6.png" mode=""></image></view>
				</view> -->
				<!-- 有银行卡 -->
				<view class="flex">
					<view class="fs-26 color-99 wp-30">到账银行卡</view>
					<view class="flex fs-30 color-ff wp-40 justify-end">
						<image class="mt-10" style="width: 30upx;height: 30upx;" src="../../../static/images/icon/ad.png" mode=""></image>
						<view class="ml-20">工商银行高新支行</view>
					</view>
				</view>
				<view class="flex">
					<view class="wp-30"></view>
					<view class="wp-40 fs-24 color-99 pl-70">尾号9920</view>
					<view class="wp-30 justify-end flex">
						<view class="fs-24 color-99">修改</view>
						<image class="mt-15 ml-20" style="width: 10upx;height: 16upx;" src="../../../static/images/icon/right6.png" mode=""></image>
					</view>
				</view>
			</view>

			<view class="moudel_tx">
				<view class="moudel_list">
					<view class="fs-26 color-33">提现金额</view>
					<view class="border_bottom pb-10 pt-20 fs-60 fw-700 color-33">
						¥
						<text class="ml-30">{{ moneyT }}</text>
					</view>
					<view class="flex justify-between fs-26 border_bottom  pb-20 pt-20">
						<view class=" color-33">分润可提现金额：10,000.00元</view>
						<view class="color-f5">全部提现</view>
					</view>
					<view class="fs-22 color-99 mt-20">税率为8%，手续费为3元/笔</view>
					<view class="fs-22 color-99 mt-10">不得低于300元，提现秒到账时间10:00-21:00</view>
				</view>
			</view>

			<view class="bg-fa pb-30">
				<view class="flex">
					<view class="wp-70">
						<view @click="getNumber(index + 1)" class="number_item" v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="index">{{ index + 1 }}</view>
						<view class="flex">
							<view @click="getNumber(0)" class="number_item" style="width: 63%;">0</view>
							<view @click="getNumber('.')" class="number_item" style="align-items: center;line-height: 40px;">.</view>
						</view>
					</view>
					<view class="wp-30 " style="padding-top: 1.5%;">
						<view @click="getNumber('del')" class="number_item wp-80 " style="margin-left: 10%;">
							<image style="width: 53upx;height: 40upx;" src="../../../static/images/icon/delect.png" mode=""></image>
						</view>
						<view @click="goResult" class="number_item bg-f5 wp-80 mt-20 color-ff fs-40" style="margin-left: 10%;height:325upx ;line-height: 325upx;">提现</view>
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
			title: '提现',
			moneyT: 0
		};
	},
	onLoad(option) {
		this.title = option.title + '提现';
		// uni.setNavigationBarTitle({
		// 	title: option.title + '提现'
		// });
		console.log(this.title);
	},
	methods: {
		tabItem: function(item) {
			this.listFalg = item;
		},
		// 提现
		goResult:function(){
			
			uni.navigateTo({
				url:'./withdrawalResult'
			})
		},
		getNumber: function(number) {
			var regMoney = /(^[1-9](\d+)?(\.\d{1,2})?$)|(^0$)|(^\d\.\d{1,2}$)/; //手机号码
			if (number == 'del') {
				this.moneyT = this.moneyT.substr(0, this.moneyT.length - 1);
			} else {
				if (this.moneyT == 0) {
					this.moneyT = '';
				}
				switch (number) {
					case '.':
						// 当输入为点的时候，如果第一次输入点，则补零
						if (!this.moneyT.length) {
							this.moneyT = '0.';
						} else {
							if (this.moneyT.indexOf('.') > -1) {
								// 如果已经有点，则无效
							} else {
								this.moneyT = this.moneyT + '' + number;
							}
						}
						break;
					case '0':
						if (this.moneyT.length === 0) {
							this.moneyT = this.moneyT + '' + number;
						}
						if (Number(this.moneyT) === 0 && this.moneyT.indexOf('.') == -1) {
							// 当输入为零的时候，如果value转换成数字为零，且没有点则无效
						} else {
							this.moneyT = this.moneyT + '' + number;
						}
						break;

					default:
						if (this.moneyT.includes('.')) {
							console.log(this.moneyT.indexOf('.'));
							if (this.moneyT.substring(this.moneyT.indexOf('.'), this.moneyT.length).length > 2) {
								return;
							} else {
								this.moneyT = this.moneyT + '' + number;
							}
						} else {
							this.moneyT = this.moneyT + '' + number;
						}

						break;
				}
				// console.log('截取' + this.moneyT.substring(this.moneyT.indexOf('.')));
				// console.log('石佛有点' + this.moneyT.includes('.'));
				// console.log(this.moneyT.indexOf('.'));
				// console.log(this.moneyT.lastIndexOf('.'));
				// console.log(this.moneyT.substring(0, this.moneyT.indexOf('.')));
				// console.log();
				// console.log('正则' + /(^[1-9](\d+)?(\.\d{1,2})?$)|(^0$)|(^\d\.\d{1,2}$)/.test(this.moneyT));

				//
				// console.log(!regMoney.test(this.moneyT))
				// if(!regMoney.test(this.moneyT)){
				// 	console.log('错误')
				// }
				// this.moneyT = this.moneyT + String(number);
			}
		}
	}
};
</script>

<style lang="less">
page {
	background-color: #fafafa;
}
.moudel_tx {
	width: 100%;
	opacity: 1;
	background: #ffffff;
	border-radius: 30upx 30upx 0 0;
	margin-top: -30upx;
	padding-bottom: 200upx;
}
.number_item {
	width: 30%;
	height: 100upx;
	opacity: 1;
	background: #ffffff;
	border-radius: 20upx;
	text-align: center;
	line-height: 100upx;
	color: #333333;
	font-size: 60upx;
	display: inline-block;
	margin-left: 3%;
	margin-top: 3%;
}
</style>
