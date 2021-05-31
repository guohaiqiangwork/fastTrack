<template>
	<view>
		<!-- 加工商 -->
		<view class="bg-ff pt-20 " v-if="userType == 'fabricators'">
			<view :class="typeTab == item.type ? 'border_bottom' : ' '" class="tab_item" @click="tabOne(item.type)" v-for="(item, index) in tabList" :key="index">
				{{ item.title }}
			</view>
		</view>
		<!-- 供应商 -->
		<view class="bg-ff pt-20 " v-if="userType == 'supplier'">
			<view :class="typeTab == item.type ? 'border_bottom' : ' '" class="tab_item_s" @click="tabOne(item.type)" v-for="(item, index) in tabList" :key="index">
				{{ item.title }}
			</view>
		</view>
		<!-- 经销商 -->
		<view class="bg-ff pt-20 " v-if="userType == 'dealer'">
			<view
				:class="typeTab == item.type ? 'border_bottom' : ' '"
				style="width: 100%;"
				class="tab_item"
				@click="tabOne(item.type)"
				v-for="(item, index) in tabList"
				:key="index"
			>
				{{ item.title }}
			</view>
		</view>
		<scroll-view scroll-y="true"><view></view></scroll-view>
		<view class="" style="background-color: #A77845;height: 210upx;">
			<view class="moudel_width">
				<view class="flex pt-30">
					<view class="time_moudel">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="text-center mt-10">{{ startDateOne }}</view>
						</picker>
					</view>
					<view class="time_moudel" style="margin-left: 10%;">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChangeEnd">
							<view class="text-center mt-10">{{ endDateOne }}</view>
						</picker>
					</view>
				</view>
			</view>
		</view>
		<view class="moudel_width">
			<view class="tab_moudel  pl-30 pr-20 pb-30">
				<view class="flex">
					<view :class="typeTwo == item.type ? 'bg-ca color-ff' : ''" class="item" @click="twoSwcih(item.type)" v-for="(item, index) in twoList" :key="index">
						<view class="wp-80 text-center" :class="item.title.length > 3 ? '' : 'item_line'" style="margin-left: 10%;height: 110upx;">{{ item.title }}</view>
					</view>
				</view>

				<view :class="typeTwo == item.type ? 'bg-ca color-ff' : ''" class="item" @click="twoSwcih(item.type)" v-for="(item, index) in twolistA" :key="index">
					<view class="wp-80 text-center" :class="item.title.length > 3 ? '' : 'item_line'" style="margin-left: 10%;height: 110upx;">{{ item.title }}</view>
				</view>
			</view>

			<scroll-view scroll-y="true" class="pb-80" :style="typeTab == 3 ? 'height: 55vh;' : 'height: 45vh'">
				<!-- 加工商 -->
				<view class="" v-if="userType == 'fabricators'">
					<!-- 采购单 -->
					<block v-if="typeTab == 'b'">
						<view v-if="orderList.length > 0" class=" mt-30" v-for="(item, index) in orderList" :key="index">
							<view style="background-color: #FBC941;" class="flex justify-between fs-25 color-ff pt-20 pb-20 pl-20 pr-20">
								<view class="">订单号：{{ item.id }}</view>
								<view class="">日期：{{ item.createTime.substring(5) }}</view>
							</view>
							<view class="moudel_list pb-20  pt-20 fs-25 color-29" style="border-radius: 0;">
								<view class="fs-32 color-a7 fw-700 ">{{ item.buyerName }}</view>
								<view class=" ">{{ item.buyerMobile }}</view>
								<view class="flex justify-between">
									<view class=""></view>
									<view
										class="color-a7"
										@click="goUrl(item)"
										v-if="typeTwo != 'waiting_provider_confirm' && typeTwo != 'waiting_send_goods' && typeTwo != 'received_goods' && typeTwo != 'paid_money'"
									>
										点击查看
									</view>
								</view>
							</view>
						</view>
						<view class="fs-32 color-33 mt-50 text-center" v-if="orderList.length == 0">暂无数据</view>
					</block>

					<!-- 销售单 -->
					<block v-if="typeTab == 's'">
						<view class=" mt-30" v-for="(item, index) in orderList" :key="index">
							<view style="background-color: #FBC941;" class="flex justify-between fs-25 color-ff pt-20 pb-20 pl-20 pr-20">
								<view class="">订单号：{{ item.id }}</view>
								<view class="">日期：{{ item.createTime.substring(5) }}</view>
							</view>
							<view class="moudel_list pb-20  pt-20 fs-25 color-29" style="border-radius: 0;">
								<view class="fs-32 color-a7 fw-700 ">{{ item.buyerName }}</view>
								<view class=" ">{{ item.buyerMobile }}</view>
								<!-- <view class=" ">商品：硬粟米（1级）</view> -->
								<view class="flex justify-between">
									<view class=""></view>

									<view
										class="color-a7"
										@click="goUrl(item)"
										v-if="typeTwo == 'new' || typeTwo == 'cancelled' || typeTwo == 'waiting_self_confirm' || typeTwo == 'waiting_send_goods'"
									>
										点击查看
									</view>
								</view>
							</view>
						</view>
						<view class="fs-32 color-33 mt-50 text-center" v-if="orderList.length == 0">暂无数据</view>
					</block>

					<!-- 发货单 -->
					<block v-if="typeTab == 's1'">
						<view class=" mt-30" v-for="(item, index) in orderList" :key="index">
							<view style="background-color: #FBC941;" class="flex justify-between fs-25 color-ff pt-20 pb-20 pl-20 pr-20">
								<view class="">订单号：{{ item.id }}</view>
								<view class="">日期：{{ item.createTime.substring(5) }}</view>
							</view>
							<view class="moudel_list pb-20  pt-20 fs-25 color-29" style="border-radius: 0;">
								<view class="fs-32 color-a7 fw-700 ">{{ item.buyerName }}</view>
								<view class=" ">{{ item.buyerMobile }}</view>
								<!-- <view class=" ">商品：硬粟米（1级）</view> -->
								<view class="flex justify-between">
									<view class=""></view>
									<view class="color-a7" @click="goUrl(item)" v-if="typeTwo == 'waiting_self_confirm' || typeTwo == 'waiting_pay_money'">点击查看</view>
								</view>
							</view>
						</view>
						<view class="fs-32 color-33 mt-50 text-center" v-if="orderList.length == 0">暂无数据</view>
					</block>
				</view>
				<!-- 供应商 -->
				<view class="" v-if="userType == 'supplier'">
					<!-- 销售单 -->
					<block v-if="typeTab == 'b'">
						<view class=" mt-30" v-for="(item, index) in orderList" :key="index">
							<view style="background-color: #FBC941;" class="flex justify-between fs-25 color-ff pt-20 pb-20 pl-20 pr-20">
								<view class="">订单号：{{ item.id }}</view>
								<view class="">日期：{{ item.createTime.substring(5) }}</view>
							</view>
							<view class="moudel_list pb-20  pt-20 fs-25 color-29" style="border-radius: 0;">
								<view class="fs-32 color-a7 fw-700 ">{{ item.buyerName }}</view>
								<view class=" ">{{ item.buyerMobile }}</view>
								<!-- <view class=" ">商品：硬粟米（1级）</view> -->
								<view class="flex justify-between">
									<view class=""></view>

									<view
										class="color-a7"
										@click="goUrl(item)"
										v-if="typeTwo == 'new' || typeTwo == 'cancelled' || typeTwo == 'waiting_provider_confirm' || typeTwo == 'waiting_send_goods'"
									>
										点击查看
									</view>
								</view>
							</view>
						</view>
						<view class="fs-32 color-33 mt-50 text-center" v-if="orderList.length == 0">暂无数据</view>
					</block>

					<!-- 发货单 -->
					<block v-if="typeTab == 's1'">
						<view class=" mt-30" v-for="(item, index) in orderList" :key="index">
							<view style="background-color: #FBC941;" class="flex justify-between fs-25 color-ff pt-20 pb-20 pl-20 pr-20">
								<view class="">订单号：{{ item.id }}</view>
								<view class="">日期：{{ item.createTime.substring(5) }}</view>
							</view>
							<view class="moudel_list pb-20  pt-20 fs-25 color-29" style="border-radius: 0;">
								<view class="fs-32 color-a7 fw-700 ">{{ item.buyerName }}</view>
								<view class=" ">{{ item.buyerMobile }}</view>
								<!-- <view class=" ">商品：硬粟米（1级）</view> -->
								<view class="flex justify-between">
									<view class=""></view>
									<view class="color-a7" @click="goUrl(item)" v-if="typeTwo == 'waiting_self_confirm' || typeTwo == 'received_goods'">点击查看</view>
								</view>
							</view>
						</view>
						<view class="fs-32 color-33 mt-50 text-center" v-if="orderList.length == 0">暂无数据</view>
					</block>
				</view>

				<!-- 供应商 -->
				<view class="" v-if="userType == 'dealer'">
					<!-- 销售单 -->
					<block v-if="typeTab == 's'">
						<view class=" mt-30" v-for="(item, index) in orderList" :key="index">
							<view style="background-color: #FBC941;" class="flex justify-between fs-25 color-ff pt-20 pb-20 pl-20 pr-20">
								<view class="">订单号：{{ item.id }}</view>
								<view class="">日期：{{ item.createTime.substring(5) }}</view>
							</view>
							<view class="moudel_list pb-20  pt-20 fs-25 color-29" style="border-radius: 0;">
								<view class="fs-32 color-a7 fw-700 ">{{ item.buyerName }}</view>
								<view class=" ">{{ item.buyerMobile }}</view>
								<!-- <view class=" ">商品：硬粟米（1级）</view> -->
								<view class="flex justify-between">
									<view class=""></view>

									<view class="color-a7" @click="goUrl(item)" v-if="typeTwo == 'cancelled' || typeTwo == 'waiting_dealer_confirm' || typeTwo == 'sent_goods'">
										点击查看
									</view>
								</view>
							</view>
						</view>
						<view class="fs-32 color-33 mt-50 text-center" v-if="orderList.length == 0">暂无数据</view>
					</block>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
function getDate(type) {
	const date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();

	if (type === 'start') {
		year = year;
		month = month - 1;
	} else if (type === 'end') {
		year = year;
		month = month;
	}
	month = month > 9 ? month : '0' + month;
	day = day > 9 ? day : '0' + day;

	return `${year}-${month}-${day}`;
}
export default {
	data() {
		return {
			tabList: [
				{
					title: '采购单管理',
					type: 'b'
				},
				{
					title: '销售单管理',
					type: 's'
				},

				{
					title: '发货单管理',
					type: 's1'
				}
			],
			typeTab: 'b',
			startDateOne: getDate('start'),
			endDateOne: getDate('end'),
			startDate: '1993-01-01',
			endDate: getDate('end'),
			date: getDate({
				format: true
			}),

			twoList: [
				{
					title: '未提交',
					type: 'new'
				},
				{
					title: '待供应商确认',
					type: 'waiting_provider_confirm'
				},
				{
					title: '待己方确认',
					type: 'waiting_self_confirm'
				},
				{
					title: '待发货',
					type: 'waiting_send_goods'
				}
			],
			typeTwo: 'waiting_self_confirm',
			twolistA: [
				{
					title: '已发货',
					type: 'sent_goods'
				},
				{
					title: '已收货',
					type: 'received_goods'
				},
				{
					title: '已付款',
					type: 'paid_money'
				},
				{
					title: '已取消',
					type: 'cancelled'
				}
			],
			orderList: [],
			userType: ''
		};
	},

	onShow() {
		// 加工商订单创建过来的
		if (uni.getStorageSync('threeFalg') == 'cg') {
			this.typeTab = 'b';
		}else if (uni.getStorageSync('threeFalg') == 'xs') {
			this.typeTab = 's';
		}
		this.userType = uni.getStorageSync('comType');
		if (this.userType == 'supplier') {
			this.tabList = [
				{
					title: '销售单管理',
					type: 'b'
				},

				{
					title: '发货单管理',
					type: 's1'
				}
			];

			this.twoList = [
				{
					title: '待收货商确认',
					type: 'waiting_self_confirm'
				},
				{
					title: '待己方确认',
					type: 'waiting_provider_confirm'
				},
				{
					title: '待发货',
					type: 'waiting_send_goods'
				},
				{
					title: '已发货',
					type: 'sent_goods'
				}
			];
			this.twolistA = [
				{
					title: '已收货',
					type: 'received_goods'
				},
				{
					title: '已付款',
					type: 'paid_money'
				},
				{
					title: '已取消',
					type: 'cancelled'
				}
			];
			this.typeTwo = 'waiting_provider_confirm';
			this.typeTab = 'b';
		} else if (this.userType == 'dealer') {
			this.tabList = [
				{
					title: '采购单管理',
					type: 's'
				}
			];
			this.twoList = [
				{
					title: '待供应商确认',
					type: 'waiting_self_confirm'
				},
				{
					title: '待己方确认',
					type: 'waiting_dealer_confirm'
				},
				{
					title: '待发货',
					type: 'waiting_send_goods'
				},
				{
					title: '已发货',
					type: 'sent_goods'
				}
			];
			this.twolistA = [
				{
					title: '已收货',
					type: 'received_goods'
				},
				{
					title: '已付款',
					type: 'paid_money'
				},
				{
					title: '已取消',
					type: 'cancelled'
				}
			];
			this.typeTwo = 'waiting_dealer_confirm';
			this.typeTab = 's';
		}
		this.getList();
	},
	onLoad() {},
	onHide() {
		uni.setStorageSync('threeFalg', ''); //身份标识
	},
	methods: {
		// 订单列表获取
		getList: function() {
			var d1 = new Date(this.startDateOne.replace(/\-/g, '\/'));
			var d2 = new Date(this.endDateOne.replace(/\-/g, '\/'));
			if (!d1) {
				uni.showToast({
					title: '请选择开始日期',
					icon: 'none',
					duration: 2000,
					position: 'center'
				});
			} else if (!d2) {
				uni.showToast({
					title: '请选择结束日期',
					icon: 'none',
					duration: 2000,
					position: 'center'
				});
			} else if (d1 > d2) {
				uni.showToast({
					title: '结束时间不能小于开始日期',
					icon: 'none',
					duration: 2000,
					position: 'center'
				});
				this.startDateOne = getDate('start');
				this.endDateOne = getDate('end');
				return;
			}
					
			let data = {
				type: this.typeTab,
				status: this.typeTwo,
				startDate: this.startDateOne,
				endDate: this.endDateOne
			};
			if (this.typeTab == 's1') {
				if (this.userType == 'fabricators') {
					//加工商
					console.log('8');
					if (data.status == 'waiting_dealer_confirm') {
						(data.needSelfConfirm = '1'), (data.needOtherConfirm = '0');
						data.status = null
					} else if (data.status == 'waiting_self_confirm') {
						(data.needSelfConfirm = '0'), (data.needOtherConfirm = '1');
						data.status = null
					} else if (data.status == 'waiting_pay_money') {
						data.status = 'received_goods';
					}
				} else if (this.userType == 'supplier') {
					//经销商
					if (data.status == 'waiting_dealer_confirm') {
						(data.needSelfConfirm = '0'), (data.needOtherConfirm = '1');
						data.status = null
					} else if (data.status == 'waiting_self_confirm') {
						(data.needSelfConfirm = '1'), (data.needOtherConfirm = '0');
						data.status = null
					}
				}
			}

			console.log(JSON.stringify(data));

			this.$http.post('/system/orders/status', data, true).then(res => {
				// console.log(res);
				if (res.data.code == 200) {
					this.orderList = res.data.data;
				} else {
					uni.showToast({
						title: res.data.msg,
						time: 2000,
						icon: 'none'
					});
				}
			});
		},

		//获取开始时间
		bindDateChange: function(e) {
			// console.log(e.detail.value);
			this.startDateOne = e.detail.value;
			this.getList(); //获取列表数据
		},
		// 获取结束时间
		bindDateChangeEnd: function(e) {
			// console.log(e.detail.value);
			this.endDateOne = e.detail.value;
			this.getList(); //获取列表数据
		},
		tabOne: function(item) {
			console.log('我是谁' + item);
			// 加工商
			if (this.userType == 'fabricators') {
				if (item == 's1') {
					this.twoList = [
						{
							title: '待采购商确认',
							type: 'waiting_dealer_confirm'
						},

						{
							title: '待己方确认',
							type: 'waiting_self_confirm'
						},
						{
							title: '待付款',
							type: 'waiting_pay_money'
						},
						{
							title: '已付款',
							type: 'paid_money'
						}
					];
					this.twolistA = [];
					this.typeTwo = 'waiting_self_confirm';
				} else if (item == 's') {
					this.twoList = [
						{
							title: '未提交',
							type: 'new'
						},
						{
							title: '待收货商确认',
							type: 'waiting_dealer_confirm'
						},
						{
							title: '待己方确认',
							type: 'waiting_self_confirm'
						},
						{
							title: '待发货',
							type: 'waiting_send_goods'
						}
					];
					this.twolistA = [
						{
							title: '已发货',
							type: 'sent_goods'
						},
						{
							title: '已收货',
							type: 'received_goods'
						},
						{
							title: '已付款',
							type: 'paid_money'
						},
						{
							title: '已取消',
							type: 'cancelled'
						}
					];
					this.typeTwo = 'waiting_self_confirm';
				} else {
					this.twoList = [
						{
							title: '未提交',
							type: 'new'
						},
						{
							title: '待供应商确认',
							type: 'waiting_provider_confirm'
						},
						{
							title: '待己方确认',
							type: 'waiting_self_confirm'
						},
						{
							title: '待发货',
							type: 'waiting_send_goods'
						}
					];
					this.twolistA = [
						{
							title: '已发货',
							type: 'sent_goods'
						},
						{
							title: '已收货',
							type: 'received_goods'
						},
						{
							title: '已付款',
							type: 'paid_money'
						},
						{
							title: '已取消',
							type: 'cancelled'
						}
					];
					this.typeTwo = 'waiting_self_confirm';
				}
			} else if (this.userType == 'supplier') {
				//供应商
				if (item == 's1') {
					this.twoList = [
						{
							title: '待采购商确认',
							type: 'waiting_dealer_confirm'
						},

						{
							title: '待己方确认',
							type: 'waiting_self_confirm'
						},
						{
							title: '待付款',
							type: 'received_goods'
						},
						{
							title: '已付款',
							type: 'paid_money'
						}
					];
					this.twolistA = [];
					this.typeTwo = 'waiting_self_confirm';
				} else {
					this.twoList = [
						{
							title: '待供应商确认',
							type: 'waiting_provider_confirm'
						},
						{
							title: '待己方确认',
							type: 'waiting_self_confirm'
						},
						{
							title: '待发货',
							type: 'waiting_send_goods'
						},
						{
							title: '已发货',
							type: 'sent_goods'
						}
					];
					this.twolistA = [
						{
							title: '已收货',
							type: 'received_goods'
						},
						{
							title: '已付款',
							type: 'paid_money'
						},
						{
							title: '已取消',
							type: 'cancelled'
						}
					];
					this.typeTwo = 'waiting_self_confirm';
				}
			}

			this.typeTab = item;
			this.getList(); //获取列表数据
		},
		twoSwcih: function(item) {
			this.typeTwo = item;
			this.getList(); //获取列表数据
		},
		// 去查看
		goUrl: function(item) {
			var dataItem = item;
			console.log(dataItem);
			// 加工商
			if (this.userType == 'fabricators') {
				switch (this.typeTab) {
					case 'b':
						switch (this.typeTwo) {
							case 'new':
								uni.setStorageSync('orderId', item.id);
								uni.setStorageSync('threeFalg', 1);
								uni.setStorageSync('fromFalg', 'three');
								uni.switchTab({
									url: '../two/two'
								});
								break;
							case 'waiting_self_confirm':
								uni.navigateTo({
									url: './order?title=采购单' + '&type=1' + '&orderId=' + dataItem.id
								});
								break;
							case 'sent_goods':
								uni.navigateTo({
									url: './order?title=采购单' + '&type=5' + '&orderId=' + dataItem.id
								});
								break;
							case 'cancelled':
								uni.navigateTo({
									url: './order?title=采购单' + '&type=100' + '&orderId=' + dataItem.id
								});
								break;
						}
						break;
					case 's':
						switch (this.typeTwo) {
							case 'new':
								uni.setStorageSync('orderId', item.id);
								uni.setStorageSync('threeFalg', 2);
								uni.setStorageSync('fromFalg', 'three');
								uni.switchTab({
									url: '../two/two'
								});
								break;
							case 'waiting_self_confirm':
								uni.navigateTo({
									url: './order?title=销售单' + '&type=5' + '&orderId=' + dataItem.id
								});
								break;
							case 'waiting_send_goods':
								uni.navigateTo({
									url: './order?title=销售单' + '&type=4' + '&orderId=' + dataItem.id
								});
								break;
							case 'cancelled':
								uni.navigateTo({
									url: './order?title=销售单' + '&type=100' + '&orderId=' + dataItem.id
								});
								break;
						}

						break;
					case 's1':
						switch (this.typeTwo) {
							case 'waiting_self_confirm':
								uni.navigateTo({
									url: './issue?title=发货单' + '&type=2' + '&orderId=' + dataItem.id
								});
								break;
							case 'waiting_pay_money':
								uni.navigateTo({
									url: './issue?title=发货单' + '&type=3' + '&orderId=' + dataItem.id
								});
								break;
						}

						break;
					default:
					// console.log(this.typeTwo);
				}
			} else if (this.userType == 'supplier') {
				//供应商
				switch (this.typeTab) {
					case 'b':
						switch (this.typeTwo) {
							case 'waiting_provider_confirm':
								uni.navigateTo({
									url: './order?title=销售单' + '&type=5' + '&orderId=' + dataItem.id
								});
								break;
							case 'waiting_send_goods':
								uni.navigateTo({
									url: './order?title=销售单' + '&type=4' + '&orderId=' + dataItem.id
								});
								break;
							case 'cancelled':
								uni.navigateTo({
									url: './order?title=销售单' + '&type=8' + '&orderId=' + dataItem.id
								});
								break;
						}
						break;
					case 's1':
						switch (this.typeTwo) {
							case 'waiting_self_confirm':
								uni.navigateTo({
									url: './issue?title=发货单' + '&type=2' + '&orderId=' + dataItem.id
								});
								break;
							case 'received_goods':
								uni.navigateTo({
									url: './issue?title=发货单' + '&type=3' + '&orderId=' + dataItem.id
								});
								break;
						}

						break;
					default:
					// console.log(this.typeTwo);
				}
			} else if (this.userType == 'dealer') {
				//经销商
				switch (this.typeTab) {
					case 's':
						switch (this.typeTwo) {
							case 'waiting_dealer_confirm':
								uni.navigateTo({
									url: './order?title=采购单' + '&type=5' + '&orderId=' + dataItem.id +'&newFalg=1'
								});
								break;
							case 'sent_goods':
								uni.navigateTo({
									url: './order?title=采购单' + '&type=100' + '&orderId=' + dataItem.id
								});
								break;
							case 'cancelled':
								uni.navigateTo({
									url: './order?title=采购单' + '&type=100' + '&orderId=' + dataItem.id
								});
								break;
						}
						break;
					default:
					// console.log(this.typeTwo);
				}
			}
		},
		// 获取列表
		getMoneyList: function() {
			var d1 = new Date(this.startDateOne.replace(/\-/g, '\/'));
			var d2 = new Date(this.endDateOne.replace(/\-/g, '\/'));
			if (!d1) {
				uni.showToast({
					title: '请选择开始日期',
					icon: 'none',
					duration: 2000,
					position: 'center'
				});
			} else if (!d2) {
				uni.showToast({
					title: '请选择结束日期',
					icon: 'none',
					duration: 2000,
					position: 'center'
				});
			} else if (d1 > d2) {
				uni.showToast({
					title: '结束时间不能小于开始日期',
					icon: 'none',
					duration: 2000,
					position: 'center'
				});
				this.startDateOne = getDate('start');
				this.endDateOne = getDate('end');
				return;
			}
		
		
			if (this.startDateOne == '请选择') {
				this.startDateOne = '';
			}
			if (this.endDateOne == '请选择') {
				this.endDateOne = '';
			}
			return;
			// console.log(this.dataIndex);
			var data = {
				mbId: uni.getStorageSync('userId'),
				endTime: this.endDateOne,
				limit: 20,
				page: this.pageNum,
				startTime: this.startDateOne,
				type: this.dataIndex
			};
			this.$http.get('/api/account/flow', data, true).then(res => {
				if (res.data.code == 200) {
					if (this.pageNum > 1) {
						if (res.data.data.length > 0) {
							this.productList = this.productList.concat(res.data.data);
						}
					} else {
						this.productList = res.data.data;
					}
				}
			});
		}
	}
};
</script>

<style lang="less">
.tab_item {
	width: 33%;
	text-align: center;
	height: 70upx;
	line-height: 70upx;
	font-size: 25upx;
	color: #293539;
	display: inline-block;
}
.tab_item_s {
	width: 50%;
	text-align: center;
	height: 70upx;
	line-height: 70upx;
	font-size: 25upx;
	color: #293539;
	display: inline-block;
}
.time_moudel {
	width: 45%;
	height: 70upx;
	background-color: #f9f6ee;
	opacity: 1;
	border-radius: 3upx;
}
.tab_moudel {
	width: 100%;
	background: #f9f6ee;
	box-shadow: 0upx 3upx 10upx rgba(0, 0, 0, 0.5);
	opacity: 1;
	border-radius: 3upx;
	margin-top: -70upx;
	.item {
		display: inline-block;
		width: 23%;
		margin-right: 2%;
		background-color: #ffffff;
		height: 110upx;
		background: #ffffff;
		border: 1px solid #a77845;
		border-radius: 5upx;
		text-align: center;
		margin-top: 30upx;
		color: #a77845;
		font-size: 25upx;
		font-weight: 600;
		align-items: center;
	}
}
.item_line {
	line-height: 110upx;
}
</style>
