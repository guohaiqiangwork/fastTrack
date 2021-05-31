<template>
	<view class="pb-80" v-if="userType == 'fabricators'">
		<view class="bg-ff pt-20 " v-if="fromFalg != 'three'">
			<view :class="typeTab == item.type ? 'border_bottom' : ' '" class="tab_item" @click="tabOne(item.type)" v-for="(item, index) in tabList" :key="index">
				{{ item.title }}
			</view>
		</view>

		<!-- 采购单 -->
		<block v-if="typeTab == 1">
			<view class="">
				<image src="../../../static/images/bjt.png" mode="" class="image_width"></image>
				<view class="login_moudel">
					<view class="flex justify-between fs-25 color-29 pt-30 ">
						<view class="">
							<view class="fw-600">发货人信息</view>
							<view class="" v-if="consignorData.name">{{ consignorData.name }}</view>
							<view class="" v-else>暂无发货人信息</view>
						</view>
						<view class="r_btn" @click="addList('edit', 'cg')">编辑订单信息</view>
					</view>

					<view class=" bor_bottom pb-20" v-if="consignorData.bankCard">{{ consignorData.bankCard }}</view>
					<view class=" bor_bottom pb-20" v-else>无</view>
					<view class=" fw-700">收货人信息</view>
					<view class="mt-10">名称：{{ consigneeData.comName }}</view>
					<view class="flex mt-10">
						<view class="wp-50">联系人：{{ consigneeData.leader }}</view>
						<view class="">电话：{{ consigneeData.phone }}</view>
					</view>
					<view class="mt-10">地址：{{ consigneeData.address }}</view>
				</view>
			</view>
			<view class="moudel_width mt-60">
				<view class="moudel_list fs-25 pb-70 ">
					<view class="pt-20" v-for="(item, index) in productlist" :key="index">
						<view class="flex justify-between">
							<view class=" color-29 fw-700">
								名称：{{ item.productName }}
								<input v-if="item.type != 1" @input="getName" type="text" v-model="item.name" value="item.name" placeholder="请输入名称" />
							</view>
							<view class="color-98" @click="okList(index)" v-if="item.type != 1">确认</view>
							<view class=" color-e7" @click="delList(index)" v-else>删除</view>
						</view>
						<view class="flex  bor_bottom_s pb-20" style="color: #979D9F;">
							<view class="">
								单价：{{ item.price }}（元/KG）
								<input v-if="item.type != 1" type="text" value="" placeholder="请输入单价" />
							</view>
							<view class="">
								数量：{{ item.weight }}（KG）
								<input v-if="item.type != 1" type="text" value="" placeholder="请输入数量" />
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="text-center">
				<image @click="addList('add')" style="width:76upx;height: 76upx;margin-top: -35upx;" src="../../../static/images/img/two.png" mode=""></image>
				<view class="fs-25" style="line-height: 1;">添加商品</view>
			</view>
			<view class="moudel_width">
				<view class="btn_bd_t">总金额：{{ totalPrice }}（元）</view>
				<view class="two_btn ">
					<view class="wp-50" v-if="fromFalg != 'three'" style="border-right: 1px solid #A77845;" @click="save(false)">保存</view>
					<view class="wp-50" v-else style="border-right: 1px solid #A77845;" @click="overOrder">取消订单</view>
					<view class="wp-50" @click="save(true)">保存并提交</view>
				</view>
			</view>
		</block>
		<!-- 销售单 -->
		<block v-if="typeTab == 2">
			<view class="">
				<image src="../../../static/images/bjt1.png" mode="" class="image_width"></image>
				<view class="login_moudel" style="height: 500upx">
					<view class="flex justify-between fs-25 color-29 pt-30 ">
						<view class="">
							<view class="fw-600">发货人信息</view>
							<view class="">{{ consigneeData.comName }}</view>
						</view>
						<view class="r_btn" @click="addList('edit', 'xs')">编辑订单信息</view>
					</view>

					<view class=" bor_bottom pb-20">{{ consigneeData.bankAccount }}</view>
					<view class=" fw-700">收货人信息</view>
					<view class="mt-10">名称：{{ consigneeDataX.comName }}</view>
					<view class="flex mt-10">
						<view class="wp-50">联系人：{{ consigneeDataX.leader }}</view>
						<view class="">电话：{{ consigneeDataX.phone }}</view>
					</view>
					<view class="mt-10">地址：{{ consigneeDataX.address }}</view>
				</view>
			</view>
			<view class="titl_m ">
				<view class="moudel_width flex justify-between pt-20" v-if="orderDetail.id">
					<view class="">订单号：{{ orderDetail.id }}</view>
					<view class="">日期：{{ orderDetail.createTime.substring(0, 10) }}</view>
				</view>
			</view>
			<view class="moudel_width mt-50">
				<view class="moudel_list fs-25 pb-70 ">
					<view class="pt-20" v-for="(item, index) in productlist" :key="index">
						<view class="flex justify-between">
							<view class=" color-29 fw-700">
								名称：{{ item.productName }}
								<input v-if="item.type != 1" @input="getName" type="text" v-model="item.name" value="item.name" placeholder="请输入名称" />
							</view>
							<view class="color-98" @click="okList(index)" v-if="item.type != 1">确认</view>
							<view class=" color-e7" @click="delList(index)" v-else>删除</view>
						</view>
						<view class="flex  bor_bottom_s pb-20" style="color: #979D9F;">
							<view class="">
								单价：{{ item.price }}（元/KG）
								<input v-if="item.type != 1" type="text" value="" placeholder="请输入单价" />
							</view>
							<view class="">
								数量：{{ item.weight }}（KG）
								<input v-if="item.type != 1" type="text" value="" placeholder="请输入数量" />
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="text-center">
				<image @click="addList('add')" style="width:76upx;height: 76upx;margin-top: -35upx;" src="../../../static/images/img/two.png" mode=""></image>
				<view class="fs-25" style="line-height: 1;">添加商品</view>
			</view>
			<view class="moudel_width">
				<view class="btn_bd_t">总金额：{{ totalPrice }}（元）</view>
				<view class="two_btn">
					<view class="wp-50" v-if="fromFalg != 'three'" style="border-right: 1px solid #A77845;" @click="save(false, 'xs')">保存</view>
					<view class="wp-50" v-else style="border-right: 1px solid #A77845;" @click="overOrder">取消订单</view>
					<view class="wp-50" @click="save(true, 'xs')">保存并提交</view>
				</view>
			</view>
		</block>
	</view>

	<view class="text-center" style="margin-top: 30%;" v-else>暂无权限,请登录加工商账号</view>
</template>

<script>
export default {
	data() {
		return {
			tabList: [
				{
					title: '采购单创建',
					type: 1
				},
				{
					title: '销售单创建',
					type: 2
				}
			],
			typeTab: 1,
			productlist: [],

			consigneeData: {
				comName: '',
				address: '',
				leader: '',
				phone: ''
			}, //收货人信息
			consignorData: {
				name: '',
				bankCard: '',
				phone: ''
			}, //发货人信息
			totalPrice: 0, //总数
			consigneeDataX: '',
			fromFalg: '',
			urlfalg: '',
			orderDetail: {
				createTime: '2021-04-26'
			},
			userType: '',
			orderId :''
		};
	},
	onLoad(option) {
		console.log(uni.getStorageSync('fromFalg') + '看看数据')
		if (uni.getStorageSync('fromFalg')) {
		} else {
			// 获取收货人信息采购单     销售单发货人信息
			this.consigneeData.comName = uni.getStorageSync('comName'); //公司名称
			this.consigneeData.address = uni.getStorageSync('address'); //公司地址
			this.consigneeData.phone = uni.getStorageSync('phone');
			this.consigneeData.leader = uni.getStorageSync('leader');
			this.consigneeData.bankAccount = uni.getStorageSync('bankAccount');
		}
	},
	onShow(option) {
		let that = this;
		this.userType = uni.getStorageSync('comType');

		// 获取选择产品数据
		uni.getStorage({
			key: 'prictList_key',
			success(res) {
				that.productlist = res.data;
			}
		});
		this.totalPrice = 0;
		this.getTotal(); //计算总价
		
		// 获取发货人信息 采购单
		if (uni.getStorageSync('consignor')) {
			this.consignorData = uni.getStorageSync('consignor');
		}
		// 获取收货人信息 销售单
		if (uni.getStorageSync('consigneeDataX')) {
			this.consigneeDataX = uni.getStorageSync('consigneeDataX');
			console.log(JSON.stringify(this.consigneeDataX) + '获取带');
		}
		// 处理从订单管理页面过来的数据 采购订单
		if(uni.getStorageSync('fromFalg') == ''){
			this.fromFalg = ''
		}
		console.log('我在这个')
		if (uni.getStorageSync('fromFalg')) {
			//采购单数据
			if (uni.getStorageSync('threeFalg') == 1) {
				let _this = this;
				_this.fromFalg = uni.getStorageSync('fromFalg');
				_this.orderId = uni.getStorageSync('orderId');
				_this.typeTab = uni.getStorageSync('threeFalg');
				let url = '/system/orders/' + _this.orderId;
				_this.$http.get(url, '', true).then(res => {
					console.log(res.data.data);
					let resData = res.data.data;
					let _this = this;
					if (res.data.code == 200) {
						(_this.consigneeData = {
							comName: '',
							address: '',
							leader: '',
							phone: ''
						}), //收货人信息
							// 发货人信息
							(_this.consignorData.name = resData.sellerName);
						_this.consignorData.bankCard = resData.sellerBankAccount;
						_this.consignorData.phone = resData.sellerMobile;
						// 收货人信息
						_this.consigneeData.comName = resData.buyerName; //公司名称
						_this.consigneeData.address = resData.buyerArea; //公司地址
						_this.consigneeData.phone = resData.buyerMobile; //电话
						_this.consigneeData.leader = resData.buyerId; //联系人id
						let dataList = [];
						if (resData.details.length > 0) {
							for (let i = 0; i < resData.details.length; i++) {
								let item = {
									productId: Number(resData.details[i].productId),
									productName: resData.details[i].productName,
									price: resData.details[i].productPrice,
									weight: resData.details[i].productWeight,
									type: '1'
								};
								dataList.push(item);
							}
						}
					
						uni.setStorage({
							key: 'prictList_key',
							data: dataList,
							success: function() {
							
							}
						});
						this.productlist = dataList;
						this.getTotal(); //计算总价
					}
				});
			} else if (uni.getStorageSync('threeFalg') == 2) {
				console.log('销售单');
				let that = this;
				this.fromFalg = uni.getStorageSync('fromFalg');
				this.orderId = uni.getStorageSync('orderId');
				this.typeTab = uni.getStorageSync('threeFalg');
				let url = '/system/orders/' + this.orderId;
				this.$http.get(url, '', true).then(res => {
					console.log(res.data.data);
					let resData = res.data.data;
					that.orderDetail = resData;
					if (res.data.code == 200) {
						console.log('6786');
						// 货人信息
						that.consigneeData.name = resData.sellerName;
						that.consigneeData.bankCard = resData.sellerBankAccount;
						that.consigneeData.phone = resData.sellerMobile;
						// 发货人信息

						// this.consigneeDataX = uni.getStorageSync('consigneeDataX');
						that.consignorData = {
							comName: '',
							address: '',
							phone: '',
							leader: ''
						};
						console.log('我是' + JSON.stringify(resData));
						that.consigneeDataX.comName = resData.buyerComName; //公司名称
						that.consigneeDataX.address = resData.buyerArea; //公司地址
						that.consigneeDataX.phone = resData.buyerMobile;
						that.consigneeDataX.leader = resData.buyerName;
						// 忘了那个是赋值的的了
						that.consignorData.comName = resData.buyerComName; //公司名称
						that.consignorData.address = resData.buyerArea; //公司地址
						that.consignorData.phone = resData.buyerMobile;
						that.consignorData.leader = resData.buyerName;
						uni.setStorageSync('consigneeDataX', that.consignorData);
						console.log(JSON.stringify(that.consignorData) + '看看存了');
						let dataList = [];
						if (resData.details.length > 0) {
							for (let i = 0; i < resData.details.length; i++) {
								let item = {
									productId: Number(resData.details[i].productId),
									productName: resData.details[i].productName,
									price: resData.details[i].productPrice,
									weight: resData.details[i].productWeight,
									type: '1'
								};
								dataList.push(item);
							}
						}

						this.productlist = dataList;
						this.getTotal(); //计算总价
					}
				});
			}
		}
	},

	onHide() {
		// 处理从订单管理过来的数据
		if (uni.getStorageSync('fromFalg')) {
			uni.setStorageSync('fromFalg', '');
			this.productlist = [];
			this.totalPrice = 0;
			this.fromFalg = '';
			if (this.typeTab == 1) {
				this.consignorData = {};
			} else {
				this.consigneeDataX = {};
				this.orderDetail = {};
			}
		
			
			uni.setStorageSync('orderId','')
		}
		// 清空商品数据
		// uni.setStorage({
		// 	key: 'prictList_key',
		// 	data: [],
		// 	success: function(e) {
				
		// 	}
		// });
	},
	methods: {
		// 计算总价采购单
		getTotal: function() {
			let that = this;
			let priceList = [];
			if (that.productlist.length > 0) {
				for (let i = 0; i < that.productlist.length; i++) {
					console.log(that.productlist[i]);
					priceList.push(Number(that.productlist[i].price) * Number(that.productlist[i].weight));
					this.totalPrice = eval(priceList.join('+')).toFixed(2); //总计
				}
			}
		},
		tabOne: function(item) {
			this.typeTab = item;
		},

		// 删除商品
		delList: function(item) {
			let that = this;
			that.productlist.splice(item, 1);
			if (that.productlist.length == 0) {
				this.totalPrice = 0;
			} else {
				this.getTotal();
			}

			uni.setStorage({
				key: 'prictList_key',
				data: that.productlist,
				success: function() {}
			});
		},
		//添加商品
		addList: function(item, type) {
			if (type) {
				uni.navigateTo({
					url: './' + item + '?type=' + type
				});
			} else {
				uni.navigateTo({
					url: './' + item
				});
			}
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
		},

		// 加工商采购单保存
		save: function(type, urlfalg) {
			var urlData = '';
			var data = '';
			let dataShipperId = '';
			console.log(this.typeTab);
			let dataName = {
				type: this.typeTab != 2 ? 'supplier' : 'dealer',
				name: this.typeTab != 2 ? this.consignorData.name : this.consigneeDataX.comName
			};
			this.$http.post('/system/company/search', dataName, true).then(res => {
				if (res.data.code == 200) {
					if (res.data.data.length > 0) {
						dataShipperId = res.data.data[0].comId;
					} else {
						dataShipperId = '';
					}
					
					if(this.productlist.length == 0){
						uni.showToast({
							title: '请添加商品',
							time: 2000,
							icon: 'none'
						});
						return
					}
					
					if (this.typeTab == 2) {
						//销售
						urlData = '/system/orders/sold';
						data = {
							orderId: this.orderId ,
							shipperId: dataShipperId,
							confirmed: type,
							senderName: this.consigneeData.comName,
							senderBankAccount: this.consigneeData.bankAccount,
							senderPhone: this.consigneeData.phone,
							receiverName: this.consigneeDataX.leader,
							receiverPhone: this.consigneeDataX.phone,
							receiverAddress: this.consigneeDataX.address,
							products: this.productlist
						};
					} else {
						console.log('采购低昂单');
						urlData = '/system/orders/procure';
						data = {
							orderId: this.orderId ,
							shipperId: dataShipperId || uni.getStorageSync('comId'),
							confirmed: type,
							senderName: this.consignorData.name,
							senderBankAccount: this.consignorData.bankCard,
							senderPhone: this.consignorData.phone,
							receiverName: this.consigneeData.comName,
							receiverPhone: this.consigneeData.phone,
							receiverAddress: this.consigneeData.address,
							products: this.productlist
						};
						if (!data.senderName || !data.senderBankAccount) {
							uni.showToast({
								title: '发货人信息不能为空',
								time: 2000,
								icon: 'none'
							});
							return;
						}
						
					}
					this.$http.post(urlData, data, true).then(res => {
						if (res.data.code == 200) {
							//销售单创建
							if (this.typeTab == 2) {
								console.log(res);
								this.consigneeDataX = '';
								uni.setStorageSync('consigneeDataX', {});
								uni.setStorageSync('threeFalgTab', 'xs'); //身份标识
								
							} else {
								// 采购单创建
								uni.setStorageSync('threeFalgTab', 'cg'); //身份标识
								// uni.setStorageSync('threeFalgType', '0'); //身份标识
								this.consignorData = '';
								uni.setStorageSync('consignor', {}); //清空发货人信息
								
							}
							this.productlist = [];
							uni.setStorage({
								key: 'prictList_key',
								data: this.productlist,
								success: function() {
									uni.switchTab({
										url: '../three/three'
									});
								}
							});
						} else {
							uni.showToast({
								title: res.data.msg,
								time: 2000,
								icon: 'none'
							});
						}
					});
				}
			});

			return;
		},

		//订单取消
		overOrder: function() {
			let data = {
				orderId: this.orderId,
				reason: ''
			};
			
			this.$http.post('/system/orders/cancel', data, true).then(res => {
				if (res.data.code == 200) {
					uni.setStorageSync('fromFalg', '');
					if (this.typeTab == 2) {
						uni.setStorageSync('consigneeDataX', {});
					} else {
						uni.setStorageSync('consignorData', {}); //清空发货人信息
					}
					uni.switchTab({
						url: '../one/one'
					});
				}
			});
			// let url = '/system/orders/' + this.orderId + '/cancel';
			// this.$http.post(url, '', true).then(res => {
			// 	if (res.data.code == 200) {
			// 		uni.setStorageSync('fromFalg', '');
			// 		uni.switchTab({
			// 			url: '../one/one'
			// 		});
			// 	}
			// });
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
}
.r_btn {
	// width: 150px;
	height: 80upx;
	font-size: 25upx;
	color: #a77845;
	line-height: 80upx;
	text-align: center;
	border: 1px solid #a77845;
	padding-left: 12upx;
	padding-right: 12upx;
	font-weight: 700;
}
.tab_item {
	width: 50%;
	text-align: center;
	height: 70upx;
	line-height: 70upx;
	font-size: 25upx;
	color: #293539;
	display: inline-block;
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
	margin-top: 30upx;
}
.two_btn {
	display: flex;
	height: 80upx;
	border-radius: 50upx;
	background-color: #f2f2f2;
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
