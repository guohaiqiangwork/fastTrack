<template>
	<view>
		<view class="bg-ff pt-20 ">
			<view :class="typeTab == item.type ? 'border_bottom' : ' '" class="tab_item" @click="tabOne(item.type)" v-for="(item, index) in tabList" :key="index">
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
				<view :class="typeTwo == item.type ? 'bg-ca color-ff' : ''" class="item" @click="twoSwcih(item.type)" v-for="(item, index) in twoList" :key="index">
					<view class="wp-80 text-center" :class="item.title.length > 3 ? '' : 'item_line'" style="margin-left: 10%;height: 110upx;">{{ item.title }}</view>
				</view>
			</view>

			<scroll-view scroll-y="true" class="pb-80" :style="typeTab == 3 ? 'height: 55vh;' : 'height: 45vh'">
				<!-- 采购单 -->
				<block v-if="typeTab == 1">
					<view class=" mt-30" v-for="(item, index) in [1, 2, 3]" :key="index">
						<view style="background-color: #FBC941;" class="flex justify-between fs-25 color-ff pt-20 pb-20 pl-20 pr-20">
							<view class="">订单号：2021122000001</view>
							<view class="">日期：2021-12-20</view>
						</view>
						<view class="moudel_list pb-20  pt-20 fs-25 color-29" style="border-radius: 0;">
							<view class="fs-32 color-a7 fw-700 ">河北兴农谷物销售有限公司</view>
							<view class=" ">商品：硬粟米（1级）</view>
							<view class="flex justify-between">
								<view class="">订单状态：未提交</view>
								<view class="color-a7" @click="goUrl" v-if="typeTwo != 2 && typeTwo != 4 && typeTwo != 6 && typeTwo != 7">点击查看</view>
							</view>
						</view>
					</view>
				</block>

				<!-- 销售单 -->
				<block v-if="typeTab == 2">
					<view class=" mt-30" v-for="(item, index) in [1, 2, 3]" :key="index">
						<view style="background-color: #FBC941;" class="flex justify-between fs-25 color-ff pt-20 pb-20 pl-20 pr-20">
							<view class="">订单号：2021122000001</view>
							<view class="">日期：2021-12-20</view>
						</view>
						<view class="moudel_list pb-20  pt-20 fs-25 color-29" style="border-radius: 0;">
							<view class="fs-32 color-a7 fw-700 ">河北兴农谷物销售有限公司</view>
							<view class=" ">商品：硬粟米（1级）</view>
							<view class="flex justify-between">
								<view class="">订单状态：未提交</view>
								<view class="color-a7" @click="goUrl" v-if="typeTwo == 1 || typeTwo == 4 || typeTwo == 8">点击查看</view>
							</view>
						</view>
					</view>
				</block>

				<!-- 发货单 -->
				<block v-if="typeTab == 3">
					<view class=" mt-30" v-for="(item, index) in [1, 2, 3]" :key="index">
						<view style="background-color: #FBC941;" class="flex justify-between fs-25 color-ff pt-20 pb-20 pl-20 pr-20">
							<view class="">订单号：2021122000001</view>
							<view class="">日期：2021-12-20</view>
						</view>
						<view class="moudel_list pb-20  pt-20 fs-25 color-29" style="border-radius: 0;">
							<view class="fs-32 color-a7 fw-700 ">河北兴农谷物销售有限公司</view>
							<view class=" ">商品：硬粟米（1级）</view>
							<view class="flex justify-between">
								<view class="">订单状态：未提交</view>
								<view class="color-a7" @click="goUrl" v-if="typeTwo == 2 || typeTwo == 3">点击查看</view>
							</view>
						</view>
					</view>
				</block>
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
	} else if (type === 'end') {
		year = year + 1;
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
					type: 1
				},
				{
					title: '销售单管理',
					type: 2
				},

				{
					title: '发货单管理',
					type: 3
				}
			],
			typeTab: 2,
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
					type: 1
				},
				{
					title: '待供应商确认',
					type: 2
				},
				{
					title: '待己方确认',
					type: 3
				},
				{
					title: '待发货',
					type: 4
				},
				{
					title: '已发货',
					type: 5
				},
				{
					title: '已收货',
					type: 6
				},
				{
					title: '已付款',
					type: 7
				},
				{
					title: '已取消',
					type: 8
				}
			],

			typeTwo: 1
		};
	},
	methods: {
		tabOne: function(item) {
			if (item == 3) {
				this.twoList = [
					{
						title: '待采购商确认',
						type: 1
					},

					{
						title: '待己方确认',
						type: 2
					},
					{
						title: '待付款',
						type: 3
					},
					{
						title: '已付款',
						type: 4
					}
				];
			} else {
				this.twoList = [
					{
						title: '未提交',
						type: 1
					},
					{
						title: '待供应商确认',
						type: 2
					},
					{
						title: '待己方确认',
						type: 3
					},
					{
						title: '待发货',
						type: 4
					},
					{
						title: '已发货',
						type: 5
					},
					{
						title: '已收货',
						type: 6
					},
					{
						title: '已付款',
						type: 7
					},
					{
						title: '已取消',
						type: 8
					}
				];
			}
			this.typeTab = item;
		},
		twoSwcih: function(item) {
			this.typeTwo = item;
		},
		// 去查看
		goUrl: function() {
			switch (this.typeTab) {
				case 1:
					switch (this.typeTwo) {
						case 1:
							uni.switchTab({
								url: '../two/two'
							});
							break;
						case 3:
							uni.navigateTo({
								url: './order?title=采购单' + '&type=1'
							});
							break;
						case 5:
							uni.navigateTo({
								url: './order?title=采购单' + '&type=5'
							});
							break;
						case 8:
							uni.navigateTo({
								url: './order?title=采购单' + '&type=8'
							});
							break;
					}
					break;
				case 2:
					switch (this.typeTwo) {
						case 1:
							uni.navigateTo({
								url: './order?title=销售单' + '&type=5'
							});
							break;
						case 3:
							uni.navigateTo({
								url: './order?title=销售单' + '&type=5'
							});
							break;
						case 4:
							uni.navigateTo({
								url: './order?title=销售单' + '&type=4'
							});
							break;
						case 8:
							uni.navigateTo({
								url: './order?title=销售单' + '&type=8'
							});
							break;
					}

					break;
				case 3:
					switch (this.typeTwo) {
						case 2:
							uni.navigateTo({
								url: './issue?title=发货单' + '&type=2'
							});
							break;
						case 3:
							uni.navigateTo({
								url: './issue?title=发货单' + '&type=3'
							});
							break;
					}

					break;
				default:
					console.log(this, typeTwo);
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
			console.log(this.dataIndex);
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
		display: inline-grid;
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
