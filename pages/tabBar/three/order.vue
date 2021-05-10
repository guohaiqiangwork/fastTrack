<template>
	<view class="pb-80">
		<!-- 不同意弹窗 -->
		<!-- 	<view class="" v-if="modelClose">
			<view class="model_b">
				<view class="model_b_m">
					<view class="text-center fs-40 pt-30">请输入原因</view>
					<view class=" wp-80 mt-30" style="margin-left: 10%;">
						<input style="border: 1px solid #999999;height: 80upx;" type="text" value="" placeholder="请输入不同意的原因" />
					</view>
					<view class="two_btn_m mt-30">
						<view class=" btn" style="border-right: 1px solid #a77845;" @click="closeModel">确认</view>
						<view class="btn" style="color: #999999;">取消</view>
					</view>
				</view>
			</view>
		</view> -->

		<!-- 采购单 -->
		<block v-if="title == '采购单'">
			<view class="">
				<image src="../../../static/images/bjt.png" mode="" class="image_width"></image>
				<view class="login_moudel">
					<view class="flex justify-between fs-25 color-29 pt-30 ">
						<view class="">
							<view class="fw-600">发货人信息</view>
							<view class="">{{ orderDetail.sellerName }}</view>
						</view>
						<view class=""><image style="width: 69upx;height: 69upx;" src="../../../static/images/three.png" mode=""></image></view>
					</view>

					<view class=" bor_bottom pb-20">{{ orderDetail.sellerMobile }}</view>
					<view class=" fw-700 mt-10">收货人信息</view>
					<view class="mt-10">名称：{{ orderDetail.buyerName }}</view>
					<view class="flex mt-10">
						<view class="wp-50">联系人：{{ orderDetail.createBy }}</view>
						<view class="">电话：{{ orderDetail.buyerMobile }}</view>
					</view>
					<view class="mt-10">地址：{{ orderDetail.buyerArea }}</view>
				</view>
			</view>

			<view class="moudel_list pt-30 pb-20 color-ff fs-25" style="background-color: #CAB88F;border-radius: 0;">
				<view class="flex justify-between pb-10 " style="border-bottom: 1px solid #FFFFFF;">
					<view class="">订单号：{{ orderDetail.id }}</view>
					<view class="">日期：{{ orderDetail.createTime.substring(0, 10) }}</view>
				</view>
				<block v-if="model != 8">
					<view class="mt-15">货运信息</view>
					<view class="">名称：{{ orderDetail.logisticsDriver }}</view>
					<view class="flex">
						<view class="wp-40">车牌号：{{ orderDetail.logisticsPlate }}</view>
						<view class="">电话：{{ orderDetail.ogisticsMobile }}</view>
					</view>
					<view class="">运费：{{ orderDetail.logisticsMoney }}元</view>
				</block>
			</view>

			<view class="moudel_width mt-50">
				<view class="moudel_list fs-25" style="border-radius: 0;">
					<view class="pt-20" v-for="(item, index) in orderDetail.details" :key="index">
						<view class="flex justify-between">
							<view class=" color-29 fw-700">
								名称：{{ item.productName }}
								<input v-if="false" @input="getName" type="text" v-model="item.name" value="item.name" placeholder="请输入名称" />
							</view>
							<view clss="color-98" @click="okList(index)" v-if="false">确认</view>
							<!-- <view class=" color-e7" @click="delList(index)" v-else>删除</view> -->
						</view>
						<view class="flex  bor_bottom_s pb-20" style="color: #979D9F;">
							<view class="">
								单价：{{ item.productPrice }}
								<input v-if="false" type="text" value="" placeholder="请输入单价" />
							</view>
							<view class="">
								数量：{{ item.productWeight }}
								<input v-if="false" type="text" value="" placeholder="请输入数量" />
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="moudel_width">
				<view class="btn_bd_t">总金额：{{ orderDetail.duePay }}（元）</view>
				<block v-if="model != 8">
					<view class="two_btn" v-if="model != 5">
						<view class="wp-50" style="border-right: 1px solid #A77845;" @click="okOrder('false')">不同意</view>
						<view class="wp-50" @click="okOrder('true')">同意</view>
					</view>
					<view class="two_btn justify-center" v-if="false">点击收货</view>
				</block>
				<block v-else>
					<view class="moudel_list mt-40 pt-20">
						<view class="flex ">
							<view class="fs-25 wp-15">备注：</view>
							<view class="wp-80"><textarea style="height: 210upx;" value="" placeholder="请填写备注" /></view>
						</view>
					</view>
				</block>
			</view>
		</block>

		<!-- 销售单 -->
		<block v-else>
			<view class="">
				<image src="../../../static/images/bjt1.png" mode="" class="image_width"></image>
				<view class="login_moudel">
					<view class="flex justify-between fs-25 color-29 pt-30 ">
						<view class="">
							<view class="fw-600">发货人信息</view>
							<view class="">{{ orderDetail.sellerName }}</view>
						</view>
						<view class=""><image style="width: 69upx;height: 69upx;" src="../../../static/images/three.png" mode=""></image></view>
					</view>

					<view class=" bor_bottom pb-20">{{ orderDetail.sellerMobile }}</view>
					<view class=" fw-700 mt-10">收货人信息</view>
					<view class="mt-10">名称：{{ orderDetail.buyerName }}</view>
					<view class="flex mt-10">
						<view class="wp-50">联系人：{{ orderDetail.createBy }}</view>
						<view class="">电话：{{ orderDetail.buyerMobile }}</view>
					</view>
					<view class="mt-10">地址：{{ orderDetail.buyerArea }}</view>
				</view>
			</view>

			<view class="moudel_list pt-30 pb-20 color-ff fs-25" style="background-color: #CAB88F;border-radius: 0;">
				<view class="flex justify-between pb-10 " style="border-bottom: 1px solid #FFFFFF;">
					<view class="">订单号：{{ orderDetail.id }}</view>
					<view class="">日期：{{ orderDetail.createTime.substring(0, 10) }}</view>
				</view>
				<block v-if="orderDetail.logisticsDriver">
					<view class="flex justify-between">
						<view class="">
							<view class="mt-15">货运信息</view>
							<view class="">名称：{{ orderDetail.logisticsDriver }}</view>
						</view>
						<view class="r_btn" v-if="model != 4 && model != 8" @click="goUrl('transport')">编辑货运信息</view>
					</view>
					<view class="flex">
						<view class="wp-40">车牌号：{{ orderDetail.logisticsPlate }}</view>
						<view class="">电话：{{ orderDetail.ogisticsMobile }}</view>
					</view>
					<view class="">运费：{{ orderDetail.logisticsMoney }}元</view>
				</block>
			</view>

			<view class="moudel_width mt-50">
				<view class="moudel_list fs-25" style="border-radius: 0;">
					<view class="pt-20" v-for="(item, index) in orderDetail.details" :key="index">
						<view class="flex justify-between">
							<view class=" color-29 fw-700">
								名称：{{ item.productName }}
								<!-- <input v-if="item.type != 1" @input="getName" type="text" v-model="item.name" value="item.name" placeholder="请输入名称" /> -->
							</view>
							<!-- <view class="color-98" @click="okList(index)" v-if="item.type != 1">确认</view> -->
							<!-- <view class=" color-e7" @click="delList(index)" v-else>删除</view> -->
						</view>
						<view class="flex  bor_bottom_s pb-20" style="color: #979D9F;">
							<view class="">
								单价：{{ item.productPrice }}
								<!-- <input v-if="!item.price" type="text" value="" placeholder="请输入单价" /> -->
							</view>
							<view class="">
								数量：{{ item.productWeight }}
								<!-- <input v-if="!item.size" type="text" value="" placeholder="请输入数量" /> -->
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="moudel_width">
				<view class="btn_bd_t">总金额：{{ orderDetail.duePay }}（元）</view>
				<block v-if="model != 8">
					<view class="two_btn" v-if="model == 5">
						<view class="wp-50" style="border-right: 1px solid #A77845;" @click="okOrder('false')">不同意</view>
						<view class="wp-50" @click="okOrder('true')">同意</view>
					</view>
					<view class="two_btn justify-center" @click="sendgoods" v-else>{{ model == 4 ? '发货' : '点击收货' }}</view>
				</block>
				<block v-else>
					<view class="moudel_list mt-40 pt-20">
						<view class="flex ">
							<view class="fs-25 wp-15">备注：</view>
							<view class="wp-80"><textarea style="height: 210upx;" value="" v-model="orderDetail.comment" placeholder="请填写备注" /></view>
						</view>
					</view>
				</block>
			</view>
		</block>
	</view>
</template>

<script>
export default {
	data() {
		return {
			productlist: [
				{
					name: '硬粟（1级）',
					price: '4.3（元/KG）',
					size: '4000（KG）',
					type: 1
				}
			],
			orderId: '', //订单id
			orderDetail: {
				createTime: '2021-04-26'
			},
			userType: '',
			modelClose: true, //供应商不同意弹窗
			reason: ''
		};
	},
	onLoad(option) {
		console.log(option);
		this.model = option.type;
		this.title = option.title;
		this.userType = uni.getStorageSync('comType');
		if (option.listName) {
			this.listName = option.listName;
		}
		if (option.orderId) {
			this.orderId = option.orderId;
			// this.getOrderDetail();
		}
		uni.setNavigationBarTitle({
			title: this.title
		});
	},
	onShow() {
		this.orderId ? this.getOrderDetail() : '';

		if(uni.getStorageSync('reason')){
			this.reason = uni.getStorageSync('reason')
		}
	},

	methods: {
		// 获取订单详情
		getOrderDetail: function() {
			let url = '/system/orders/' + this.orderId;
			this.$http.get(url, '', true).then(res => {
				if (res.data.code == 200) {
					this.orderDetail = res.data.data;
				}
			});
		},
		// 加工商发货
		sendgoods: function() {
			let data = {
				orderId: this.orderId,
				confirm: 'true',
				comment: ''
			};
			this.$http.post('/system/orders/confirm/sendgoods', data, true).then(res => {
				if (res.data.code == 200) {
					uni.navigateBack({});
				} else {
					uni.showToast({
						title: res.data.msg,
						time: 2000,
						icon: 'none'
					});
				}
			});
		},
		//加工商同意收货
		okOrder: function(item) {
			if (this.userType == 'fabricators') {
				let data = {
					orderId: this.orderId,
					confirm: item
				};
				this.$http.post('/system/orders/self/confirm', data, true).then(res => {
					console.log(res);
					if (res.data.code == 200) {
						uni.navigateBack({});
					}
				});
			} else if (this.userType == 'supplier') {
				if (item == 'false') {
					if(this.reason){
						this.closeModel()
					}else{
						uni.navigateTo({
							url: '../../model/model?title=提示' + '&type=order'
						});
					}
					
				} else {
					let data = {
						orderId: this.orderId,
						confirm: item
					};
					this.$http.post('/system/orders/provider/confirm', data, true).then(res => {
						console.log(res);
						if (res.data.code == 200) {
							uni.navigateBack({});
						}
					});
				}
			}
		},
		//取消订单
		closeModel: function() {
			let data = {
				orderId: this.orderId,
				reason: this.reason
			};

			this.$http.post('/system/orders/cancel', data, true).then(res => {
				if (res.data.code == 200) {
					uni.setStorageSync('reason','')
					uni.navigateBack({});
				}
			});
		},

		tabOne: function(item) {
			this.typeTab = item;
		},
		delList: function(item) {
			this.productlist.splice(item);
		},
		goUrl: function(item) {
			uni.navigateTo({
				url: './' + item + '?orderId=' + this.orderId
			});
		},
		getName: function(e, index) {
			console.log(e.detail.value);
		},
		okList: function(item) {
			if (!this.productlist[item].price || !this.productlist[item].size || !this.productlist[item].name) {
				uni.showToast({
					title: '请检查内容',
					time: 2000,
					icon: 'none'
				});
				return;
			}
			this.productlist[item].type = 1;
			this.$set(this.productlist);
		}
	}
};
</script>

<style lang="less">
.image_width {
	position: absolute;
	width: 100%;
	height: 500upx;
}

.login_moudel {
	position: relative;
	width: 90%;
	margin-left: 5%;
	height: 500upx;
}
.r_btn {
	height: 80upx;
	font-size: 25upx;
	color: #a77845;
	line-height: 80upx;
	text-align: center;
	border: 1px solid #a77845z;
	padding-left: 12upx;
	padding-right: 12upx;
	font-weight: 700;
	background-color: #ffffff;
	margin-top: 20upx;
}

.btn_bd_t {
	height: 80upx;
	background: #fbc941;
	border-radius: 10upx;
	text-align: center;
	align-items: center;
	color: #ffffff;
	font-size: 32upx;
	line-height: 80upx;
	// margin-top: -30upx;
}
.two_btn {
	display: flex;
	height: 80upx;
	border-radius: 50upx;
	background-color: #ffffff;
	border: 1px solid #a77845;
	margin-top: 80upx;
	color: #a77845;
	font-size: 32upx;
	text-align: center;
	align-items: center;
	font-weight: 700;
}
.titl_m {
	background-color: #cab88f;
	color: #ffffff;
	font-size: 25upx;
	height: 80upx;
	line-height: 80upx;
	align-items: center;
}
.model_b {
	background-color: #000000a6;
	position: absolute;
	height: 100%;
	width: 100%;
	z-index: 999;
	.model_b_m {
		width: 80%;
		background-color: #ffffff;
		z-index: 9999;
		margin-left: 10%;
		margin-top: 20%;
		border-radius: 20upx;
		padding-bottom: 30upx;
	}
	.two_btn_m {
		display: flex;
		height: 80upx;
		border-radius: 50upx;
		background-color: #ffffff;
		border: 1px solid #a77845;
		margin-top: 80upx;
		color: #a77845;
		font-size: 32upx;
		text-align: center;
		align-items: center;
		font-weight: 700;
		width: 80%;
		margin-left: 10%;
	}
	.btn {
		width: 50%;
		line-height: 80upx;
		text-align: center;
	}
}
</style>
