<template>
	<view>
		<cu-custom bgColor="bg-ff" :isBack="true">
			<block slot="content">直营交易详情</block>
			<block slot="right">
				<!-- <view @click="goDetail" class="action">交易明细</view> -->
				<view class="action" @click="goDetail">
					<image style="width: 30upx;height: 30upx;" class="mr-10" src="../../static/images/icon/screen.png" mode=""></image>
					交易明细
				</view>
			</block>
		</cu-custom>
		<view class="bg-ff">
			<view class="moudel_width">
				<view class=" moudel_bgff pt-30  flex justify-between">
					<view class="wp-40">
						<view @click="oneSwich(item.type)" class="tab_one_moudel" :class="oneType != item.type ? 'bg-44' : ''" v-for="(item, index) in oneTab" :key="index">
							{{ item.title }}
						</view>
					</view>
					<view class="flex wp-60 ">
						<view class="flex  justify-end" style="width: 100%;">
							<view class="time_moudel">
								<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
									<view class="text-center ">{{ startDateOne }}</view>
								</picker>
							</view>
							<view class="">—</view>
							<view class="time_moudel">
								<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChangeEnd">
									<view class="text-center ">{{ endDateOne }}</view>
								</picker>
							</view>
						</view>

						<!-- <view @click="showPickerD" class="fs-22 fw-700">{{ chooseDate }}</view> -->
						<!-- <view class="ml-20" style="margin-top: -8upx;"><image style="width: 16upx;height: 10upx;" src="../../static/images/icon/down33.png" mode=""></image></view> -->
					</view>
				</view>
				<view class="moudel_bgff  pt-50 pl-30 pr-30 pd-20 text-center">
					<view class="flex mt-30 ">
						<view class="wp-50 pb-20" style="border-right: 1px solid #CCCCCC;">
							<view class="fs-44 color-f5 ">{{ oneData.allMoney | formatMoney }}</view>
							<view class="fs-24 color-99" style="line-height: 1;">交易量汇总{{ oneData.allMoney | formatMoneyName }}</view>
						</view>
						<view class="wp-50 pb-20">
							<view class="fs-44 color-f5 ">{{ oneData.profitAmt | formatMoney }}</view>
							<view class="fs-24 color-99" style="line-height: 1;">分润收益{{ oneData.profitAmt | formatMoneyName }}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="moudel_width">
			<view v-for="(item, index) in transOrderItem" :key="index">
				<view class="moudel_list flex justify-between mt-30">
					<view class="fs-30 color-33 fw-700">{{ item.tansSuccTime }}</view>
					<view class="flex" @click="openList(index)">
						<view class="fs-30 color-f5">￥{{ item.transAmt }}</view>
						<view class="ml-20"><image style="width: 20upx;height: 12upx;" src="../../static/images/icon/down33.png" mode=""></image></view>
					</view>
				</view>

				<view @click="goDetail" v-if="listFalg == index" class="flex justify-between fs-30 mt-20 pl-30 pr-30" v-for="(item, one) in item.list" :key="one">
					<view class="">2021-04-04</view>
					<view class="">￥3000.00</view>
				</view>
			</view>
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
		// const currentDate = this.getDate({
		// 	format: true
		// });
		return {
			showPicker: false,

			picker: [{ name: '机具品牌', id: '1' }, { name: '机具类型', id: '2' }, { name: '本月', id: '3' }],
			index: 1,
			type: '1', //那个详情
			// 时间选择
			startDateOne: getDate('start'),
			endDateOne: getDate('end'),
			startDate: '1993-01-01',
			endDate: getDate('end'),
			date: getDate({
				format: true
			}),

			value1: [],
			oneTab: [
				{
					title: '全部',
					type: ''
				},
				{
					title: '本月',
					type: 2
				}
			],
			oneType: '',
			listFalg: '',
			oneData: '',

			transOrderItem: [
				{
					tansSuccTime: '2021-04-18 00:00:00',
					transAmt: 60.0,
					list: [
						{
							tansSuccTime: '2021-04-17 00:00:00',
							transAmt: 60.0
						},
						{
							tansSuccTime: '2021-04-16 00:00:00',
							transAmt: 60.0
						},
						{
							tansSuccTime: '2021-04-15 00:00:00',
							transAmt: 60.0
						},
						{
							tansSuccTime: '2021-04-14 00:00:00',
							transAmt: 60.0
						},
						{
							tansSuccTime: '2021-04-13 00:00:00',
							transAmt: 60.0
						}
					]
				},
				{
					tansSuccTime: '2021-04-18 00:00:00',
					transAmt: 60.0
				}
			]
		};
	},
	onLoad() {
		console.log(this.nowDate);
		this.getInitData();
	},
	methods: {
		// 获取数据
		getInitData: function() {
			let data = {
				agencyId: uni.getStorageSync('agencyId'),
				agentId: uni.getStorageSync('userId'),
				endTime: this.endDateOne,
				flag: this.oneType,
				startTime: this.startDateOne
			};
			this.$http.get('/v1/agentTrans/selectDeal', data, true, '').then(res => {
				console.log(res);
				if (res.data.code == 200) {
					this.oneData = res.data.data;
				}
			});
		},
		//获取开始时间
		bindDateChange: function(e) {
			console.log(e.detail.value);
			this.startDateOne = e.detail.value;
			this.oneType = 3;
		},
		// 获取结束时间
		bindDateChangeEnd: function(e) {
			console.log(e.detail.value);
			this.endDateOne = e.detail.value;
			this.oneType = 3;
			this.getInitData(); //获取列表数据
		},

		oneSwich: function(item) {
			this.oneType = item;
			this.getInitData();
		},
		openList: function(item) {
			console.log(item);
			this.listFalg = item;
		},
		// 时间显示
		onShowDatePicker: function() {
			//显示
			this.showPicker = true;
		},
		// 时间选择
		showPickerD(e) {
			this.isShow = true;
		},
		bindChange(data) {
			console.log(data);
			this.chooseDate = data[0] + '--' + data[1];
		},
		showchange() {
			this.isShow = !this.isShow;
		},
		getDate(type) {
			console.log(type);
			const date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let day = date.getDate();
			month = month > 9 ? month : '0' + month;
			day = day > 9 ? day : '0' + day;
			return `${year}-${month}-${day}`;
		},
		// 时间选择
		onSelected: function(e) {
			//选择
			this.showPicker = false;
			if (e) {
				this.date = e.value;
				//选择的值
				console.log('value => ' + e.value);
				//原始的Date对象
				console.log('date => ' + e.date);
			}
		},
		// 下拉列表
		PickerChange(e) {
			this.index = e.detail.value;
		},
		// 收益详情
		goDetail: function() {
			console.log('哦我 ');
			uni.navigateTo({
				url: './detail?type=' + this.type
			});
		},
		// 去代理商管理
		goAgent: function() {
			uni.navigateTo({
				url: './administration'
			});
		}
	}
};
</script>

<style>
.moudel_bgff {
	background: #ffffff;
	border-radius: 14upx;
}
.wp-16 {
	width: 16% !important;
}
.tab_one_moudel {
	display: inline-block;
	font-size: 24upx;
	color: #ffffff;

	width: 40%;
	margin-left: 5%;
	line-height: 44upx;
	height: 44upx;
	opacity: 1;
	background: #d22222;
	border-radius: 6upx;
	text-align: center;
}
.time_moudel {
	/* width: 50%; */
	font-size: 22upx;
}
</style>
