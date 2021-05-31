<template>	<view>		<view class="moudel_width">			<view class="input_mo flex">				<view class="mt-5 wp-20">名称：</view>				<view class="wp-80 fs-25"><input class="" placeholder="请输入名称" type="text" v-model="orderDetail.logisticsDriver" /></view>			</view>			<view class="input_mo flex">				<view class="mt-5 wp-20">车牌号：</view>				<view class="wp-80 fs-25"><input class="" placeholder="请输入车牌号" type="text" v-model="orderDetail.logisticsPlate" /></view>			</view>			<view class="input_mo flex">				<view class="mt-5 wp-20">电话：</view>				<view class="wp-80 fs-25"><input class="" maxlength="11" placeholder="请输入电话" type="number" v-model="orderDetail.logisticsMobile" /></view>			</view>			<view class="input_mo flex">				<view class="mt-5 wp-20">运费：</view>				<view class="wp-80 fs-25"><input class="" placeholder="请输入运费" type="number" v-model="orderDetail.logisticsMoney" /></view>			</view>			<view class="btn_bd" @click="upLog">确认</view>		</view>	</view></template><script>export default {	data() {		return {			name: '',			idCard: '',			orderId: '',			orderDetail: ''		};	},	onLoad(option) {		if (option.orderId) {			this.orderId = option.orderId;			this.getOrderDetail(); //获取详情		}	},	methods: {		// 获取详情		getOrderDetail: function() {			let url = '/system/orders/' + this.orderId;			this.$http.get(url, '', true).then(res => {				if (res.data.code == 200) {					this.orderDetail = res.data.data;				}			});		},		// 更新物流信息		upLog: function() {			let data = {				orderId: this.orderId,				done: 'false',				comment: '',				logisticsDriver: this.orderDetail.logisticsDriver, //物流司机姓名				logisticsMobile: this.orderDetail.logisticsMobile, //物流手机号				logisticsPlate: this.orderDetail.logisticsPlate, // 物流车牌				logisticsMoney: this.orderDetail.logisticsMoney, //物流价格				paid: '', //是否已付款				tradeImage: ''			};
			if (!/^1[3456789]\d{9}$/.test(this.orderDetail.logisticsMobile,)) {
				uni.showToast({
					title: '请输入正确的11位手机号码',
					icon: 'none',
					duration: 1500,
					position: 'center'
				});
				return false;
			}
					this.$http.post('/system/orders/update/logistics', data, true).then(res => {
				if(res.data.code == 200){
					uni.navigateBack({});
				}else{
					uni.showToast({
						title: res.data.msg,
						time: 2000,
						icon: 'none'
					});
				}
			});		},		getName: function(e) {			console.log(e.detail.value);		},			}};</script><style lang="less">.input_mo {	background-color: #ffffff;	margin-top: 30upx;	border: 1px solid #a77845;	height: 80upx;	line-height: 80upx;	align-items: center;	font-size: 25upx;	color: #293539;	padding-left: 20upx;}.btn_bd {	height: 90upx;	background: #98d0ab;	border-radius: 10upx;	text-align: center;	align-items: center;	color: #ffffff;	font-size: 30upx;	line-height: 90upx;	margin-top: 30upx;	border-radius: 50upx;	position: absolute;	bottom: 5%;	width: 90%;}</style>
