<template>
	<view>
		<view class="">
			<view class="">
				<image class="top_img" src="../../../static/images/img/bj.png" mode=""></image>
				<view class="one_moudel">
					<view class="fs-32 color-29 text-center fw-600">石家庄金谷粮食加工厂</view>
					<!-- 	<view class="input_moudel flex mt-30">
						<view class="wp-15 text-center mt-10 mb-10" style="border-right: 1px solid #293539;">
							<image class="mt-15" style="width: 30upx;height: 30upx;" src="../../../static/images/icon/code.png" mode=""></image>
						</view>
						<view class="wp-70 pl-20 fs-25">
							<input type="text" value="" placeholder="请扫描或输入订单码" placeholder-style="font-size:25upx" placeholder-class="color-29" />
						</view>
						<view class="wp-15 right_btn">收货</view>
					</view>
 -->
					<view class="flex bg-ff mt-30">
						<view class="wp-50 moudel_list text-center pt-20 pb-20">
							<view class="fs-25 color-29">收入(元)</view>
							<view class="fs-35 color-a7 fw-600">+{{ moneyData.totalIncome }}</view>
						</view>
						<view class="mt-20" style="width: 1px;height: 69upx;border-right: 1px solid #A77845;"></view>
						<view class="wp-50 moudel_list text-center pt-20 pb-20">
							<view class="fs-25 color-29">支出(元)</view>
							<view class="fs-35 color-a7 fw-600">-{{ moneyData.totalPaid }}</view>
						</view>
					</view>

					<view class="text-center" @click="goUrl('product')">
						<image style="width: 76upx;height: 76upx;margin-top: -40upx;" src="../../../static/images/img/one.png" mode=""></image>
						<view class="fs-25 color-29" style="line-height: 1;">商品管理</view>
					</view>
				</view>
			</view>
			<view class="mt-40 flex"  v-if="this.userType == 'fabricators'">
				<view @click="tabSwich('s')" :class="active == 's' ? 'color-ff bg-ca' : 'color-a7 bg-ff'" class="wp-42 f-25  left_btn ml-40">销售统计</view>
				<view @click="tabSwich('b')" :class="active == 'b' ? 'color-ff bg-ca' : 'color-a7 bg-ff'" class="wp-42 f-25  left_btn ml-40">采购统计</view>
			</view>
			<view class="mt-40"  v-else style="margin-left: 30%;">
				<view @click="tabSwich('b')"  :class="active == 'b' ? 'color-ff bg-ca' : 'color-a7 bg-ff'" class="wp-42 f-25  left_btn ml-40">采购统计</view>
			</view>

			<view class="mt-30 bg-ff">
				<view :class="typeTab == item.type ? 'border_bottom' : ' '" class="tab_item" @click="tabOne(item.type)" v-for="(item, index) in tabList" :key="index">
					{{ item.title }}
				</view>
				<view class="" v-if="typeTab == 1">
					<!-- 时间选择 -->
					<view class="" style="background-color: #979d9f;height: 120upx;">
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
					<!-- 图表 -->
					<view class="eacher_moudel">
						<view class="eacher">
							<view class="item_border" v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="index"></view>
							<view class="item_number">
								<view class="number_moudel mt-20" :style="{ width: item.value }" v-for="(item, index) in dataList" :key="index">
									<text class="pl-30" style="font-size: 21upx;position: absolute;">{{ item.label }}</text>
								</view>
							</view>
						</view>
						<view class="item_moudel">
							<view class="item" v-for="(item, index) in [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]" :key="index">{{ item }}%</view>
						</view>
					</view>
				</view>
				<view class="" v-else>
					<view class="" style="background-color: #979d9f;height: 120upx;">
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
					<view class="eacher_moudel">
						<qiun-data-charts type="column" :chartData="chartData" :inScrollView="true" :disableScroll="true" background="none" :animation="false" />
					</view>
				</view>

				<view class="mt-10 pl-20" style="background-color: #F9F6EE;">
					<view class="fs-21" style="line-height: 1.2;" v-if="active == 's'">{{ endDate }} 销售商品（种类）</view>
					<view class="fs-21" style="line-height: 1.2;" v-else>{{ endDate }} 采购商品（种类）</view>
					<view class="flex justify-between mt-10 pb-10" style="border-bottom: 1px dashed #293539;">
						<view class="fs-32 color-29 ">{{ totalBottom }}</view>
						<view class="fs-25 color-a7 mr-20" @click="goUrlD()">点击查看详情</view>
					</view>
					<view v-for="(item, index) in bottomList" :key="index" class="fs-21 mt-20 pb-10" style="color: #979D9F;border-bottom: 1px dashed #293539;">
						<view class="wp-40">名称：</view>
						<view class="flex">
							<view class="wp-40">单价：{{ item.productPrice }}（元/KG）</view>
							<view class="wp-40">数量：{{ item.productWeight }}（KG）</view>
						</view>

						<view class="fs-25 fw-700" style="color: #293539">订单金额（元）：{{ item.amount }}</view>
					</view>
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
		return {
			active: 's',
			tabList: [
				{
					title: '金额占比报表',
					type: 0
				},
				{
					title: '商品占比报表',
					type: 1
				}
			],
			typeTab: 1,
			chartData: {
				categories: ['2016', '2017', '2018', '2019', '2020', '2021'],
				series: [
					{
						data: [35, 36, 31, 33, 13, 34]
					}
				]
			},
			moneyData: '', //首页金额
			startDateOne: getDate('start'),
			endDateOne: getDate('end'),
			startDate: '1993-01-01',
			endDate: getDate('end'),
			date: getDate({
				format: true
			}),

			dataList: [], //商品占比数据
			totalBottom: 0,
			bottomList: [],
			userType: ''
		};
	},
	onShow() {
		// supplier
		this.userType = uni.getStorageSync('comType');
		if(this.userType != 'fabricators'){
			this.active = 'b'
		}
		this.getMoney(); //获取金额
		this.getEacherData(); //获取产品数据图表
		this.getBottomList(); //获取列表数据
	},
	methods: {
		//获取开始时间
		bindDateChange: function(e) {
			console.log(e.detail.value);
			this.startDateOne = e.detail.value;
		},
		// 获取结束时间
		bindDateChangeEnd: function(e) {
			console.log(e.detail.value);
			this.endDateOne = e.detail.value;
			this.getBottomList(); //获取列表数据
		},
		// 获取首页金额
		getMoney: function() {
			console.log('wodsfjksa ');
			this.$http.get('/system/company/self', '', true).then(res => {
				console.log(res.data);
				if (res.data.code == 200) {
					this.moneyData = res.data.data;
				}
			});
		},
		// 获取首页采购统计资金或产品占比报表
		getEacherData: function() {
			// orderType: b(采购), s(销售)
			// reportType: 0(金额), 1(产品)
			let data = {
				orderType: this.active,
				reportType: this.typeTab,
				startDate: this.startDateOne,
				endDate: this.endDateOne
			};
			this.$http.post('/report', data, true).then(res => {
				if (res.data.code == 200) {
					console.log(res.data.data);
					var resData = res.data.data;
					if (this.typeTab == 1) {
						let valueList = []; //计算总价
						let datalist = [];
						let totalNumber = '';
						for (let i = 0; i < resData.length; i++) {
							console.log(resData[i].value);
							valueList.push(Number(resData[i].value));
						}
						totalNumber = eval(valueList.join('+'));
						// console.log()
						for (let i = 0; i < resData.length; i++) {
							console.log(resData[i].value);
							let item = {
								value: (Number(resData[i].value) / Number(totalNumber)) * 100 + '%',
								label: resData[i].label
							};
							datalist.push(item);
						}
						this.dataList = datalist;
					} else {
						let catList = []; //x数据
						let seriesList = []; //y数据
						for (let i = 0; i < resData.length; i++) {
							catList.push(resData[i].label.substring(6));
							seriesList.push(Number(resData[i].value));
						}
						this.chartData.categories = catList;
						this.chartData.series[0].data = seriesList;
					}
				}
			});
		},
		// 获取列表数据
		getBottomList: function() {
			let data = {
				orderType: this.active,
				date: this.endDateOne
				// date:'2021-4-24'
			};
			this.$http.post('/report/detail', data, true).then(res => {
				console.log(res);
				if (res.data.code == 200) {
					let resData = res.data.data;
					let priceList = [];
					this.totalBottom = 0;
					if (resData.length > 0) {
						for (let i = 0; i < resData.length; i++) {
							priceList.push(Number(resData[i].amount));
						}
						this.totalBottom = eval(priceList.join('+')).toFixed(2);
					}

					this.bottomList = resData;
				}
			});
		},
		tabSwich: function(item) {
			this.active = item;
			this.getEacherData(); //获取数据
			this.getBottomList(); //获取列表数据
		},
		tabOne: function(item) {
			this.typeTab = item;
			this.getEacherData(); //获取数据
			this.getBottomList(); //获取列表数据
		},
		goUrl: function(item) {
			uni.navigateTo({
				url: './' + item
			});
		},
		goUrlD: function() {
			uni.navigateTo({
				url: './details?type=' + this.active
			});
		}
	}
};
</script>

<style lang="less">
.top_img {
	position: absolute;
	width: 100%;
	height: 306upx;
}
.one_moudel {
	position: relative;
	width: 80%;
	margin-left: 10%;
	padding-top: 50upx;
}
.input_moudel {
	background-color: #cab88f;
	height: 80upx;
	align-items: center;
	.right_btn {
		height: 80upx;
		background: #a77845;
		opacity: 1;
		border-radius: 0upx 3upx 3upx 0upx;
		font-size: 25upx;
		text-align: center;
		line-height: 80upx;
		color: #ffffff;
	}
}
.left_btn {
	background-color: #ffffff;
	height: 70upx;
	text-align: center;
	line-height: 70upx;
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
.eacher_moudel {
	background-color: #979d9f;
	height: 310upx;
	padding-top: 20upx;
	.eacher {
		width: 90%;
		margin-left: 5%;
		height: 220upx;
		border-left: 1px solid #ffffff;
		border-bottom: 1px solid #ffffff;
		.item_border {
			border-right: 1px dashed #c5c9ca;
			width: 1px;
			height: 220upx;
			margin-left: 10%;
			display: inline-block;
		}
		.item_number {
			margin-top: -240upx;
			.number_moudel {
				height: 40upx;
				line-height: 40upx;
				background: linear-gradient(270deg, #98d0ab 0%, rgba(151, 157, 159, 0) 100%);
				opacity: 1;
				border-radius: 0upx 21upx 21upx 0upx;
				width: 60%;
				font-size: 21upx;
				color: #ffffff;
			}
		}
	}

	.item_moudel {
		width: 90%;
		margin-left: 5%;
		.item {
			display: inline-block;
			width: 10%;
			font-size: 21upx;
			color: #c5c9ca;
			text-align: right;
		}
	}
}
.time_moudel {
	width: 45%;
	height: 70upx;
	background-color: #f9f6ee;
	opacity: 1;
	border-radius: 3upx;
}
</style>
