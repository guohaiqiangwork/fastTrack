<template>
	<view class="pb-80">
		<!-- 发货单 -->
		<block v-if="model == 2">
			<view class="">
				<image src="../../../static/images/bjt.png" mode="" class="image_width"></image>
				<view class="login_moudel">
					<view class="fw-600 pt-20">发货人信息</view>
					<view class="">{{ orderDetail.sellerName }}</view>
					<view class=" bor_bottom pb-20">{{ orderDetail.sellerMobile }}</view>

					<view class="flex mt-30">
						<view class="wp-45">
							<view class="fs-25 color-29 fw-700">随货同行单</view>
							<view class="mt-10" style="height: 139upx;background: #FFFFFF;border: 1px solid #A77845;text-align: center;align-items: center;">
								<image :src="imgLefturl" style="width: 100%;height: 100%;" mode=""></image>
								<!-- <image src="../../../static/images/add.png" style="width: 38upx;height: 38upx;margin-top: 50upx;" mode=""></image> -->
							</view>
						</view>
						<view class="wp-45" style="margin-left: 5%;">
							<view class="fs-25 color-29 fw-700">上传随货同行单</view>
							<view class="mt-10" @click="uplodImg" v-if="!imgFalg" style="height: 139upx;background: #FFFFFF;border: 1px solid #A77845;text-align: center;align-items: center;">
								<image   src="../../../static/images/add.png" style="width:38upx;height: 38upx;margin-top: 50upx;" mode=""></image>
							</view>
							<image class="mt-10" v-if="imgFalg" @click="uplodImg" :src="tradeImage" style="width: 100%;height: 139upx;" mode=""></image>
							
						</view>
					</view>
				</view>
			</view>

			<view class="bg-ca pt-20 pb-20 mt-30 pl-20 pr-20 flex justify-between color-ff fs-25">
				<view class="">订单号：{{ orderDetail.id }}</view>
				<view class="">日期：{{ orderDetail.createTime.substring(0, 10) }}</view>
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
					<view class="two_btn" v-if="model != 5">
						<view class="wp-50" style="border-right: 1px solid #A77845;" @click="okOrder('false')">不同意</view>
						<view class="wp-50" @click="okOrder('true')">同意</view>
					</view>
					<view class="two_btn justify-center" v-else>点击收货</view>
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

		<!--  -->
		<block v-else>
			<view class="">
				<image src="../../../static/images/bjt.png" mode="" class="image_width" style="height: 460upx;"></image>
				<view class="login_moudel">
					<view class="flex justify-between fs-25 color-29 pt-30 ">
						<view class="">
							<view class="fw-600">发货人信息</view>
							<view class="">{{ orderDetail.sellerName }}</view>
						</view>
						<!-- <view class=""><image style="width: 69upx;height: 69upx;" src="../../../static/images/three.png" mode=""></image></view> -->
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

			<view class="bg-ca pt-20    pl-20 pr-20 flex justify-between color-ff fs-25">
				<view class="">订单号：{{ orderDetail.id }}</view>
				<view class="">日期：{{ orderDetail.createTime.substring(0, 10) }}</view>
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

				<view class="moudel_list mt-40 pt-20">
					<view class="flex ">
						<view class="fs-25 wp-15">备注：</view>
						<view class="wp-80"><textarea style="height: 210upx;" value="" placeholder="请填写备注" /></view>
					</view>
				</view>
				<!-- <view class="two_btn justify-center mt-50">确认付款</view> -->
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
			orderId: '',
			orderDetail: {
				createTime: '2021-04-26'
			},
			imgFalg: false,
			tradeImage: '',
			imgLefturl: ''
		};
	},
	onLoad(option) {
		console.log(option);
		this.model = option.type;
		this.title = option.title;
		if (option.listName) {
			this.listName = option.listName;
		}
		uni.setNavigationBarTitle({
			title: this.title
		});
		if (option.orderId) {
			this.orderId = option.orderId;
			this.getOrderDetail();
		}
		if (option.type != 3) {
			this.getImg();
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
		// 获取随行单图片
		getImg: function() {
			let url = '/file/download/from-' + this.orderId + '-152-51.png';
			this.imgLefturl = 'http://121.89.193.22:9090/file/download/from-' + this.orderId + '-152-51.png';
			this.$http.get(url, '', true).then(res => {
				// this.imgLefturl= res
			});
		},
		//上传图片
		uplodImg: function() {
			let that = this;
			uni.chooseImage({
				count: 1,
				sizeType: ['copressed'],
				success(res) {
					//因为有一张图片， 输出下标[0]， 直接输出地址
					var imgFiles = res.tempFilePaths[0];
					console.log(imgFiles);
					that.imgFalg = true;
					that.urlTobase64(imgFiles); //转64
				}
			});
		},
		urlTobase64: function(url) {
			var toBase64Url;
			uni.request({
				url: url,
				method: 'GET',
				responseType: 'arraybuffer',
				success: async res => {
					let base64 = wx.arrayBufferToBase64(res.data); //把arraybuffer转成base64
					toBase64Url = 'data:image/jpeg;base64,' + base64; //不加上这串字符，在页面无法显示
					// console.log(toBase64Url);
					this.tradeImage = toBase64Url;
				}
			});
		},

		// 同意不同意
		okOrder: function(item) {
			let data = {
				id: this.orderDetail.id,
				comment: '', //备注
				confirmed: item, //是否确认
				products: this.orderDetail.detail, //产品重量
				tradeImage: this.tradeImage
			};

			this.$http.post('/system/orders/update/delivery', data, true).then(res => {
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

		tabOne: function(item) {
			this.typeTab = item;
		},
		delList: function(item) {
			this.productlist.splice(item);
		},
		addList: function(item) {
			uni.navigateTo({
				url: './' + item
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
	height: 440upx;
}

.login_moudel {
	position: relative;
	width: 90%;
	margin-left: 5%;
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
</style>
