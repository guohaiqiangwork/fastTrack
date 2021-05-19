<template>
	<view>
		<cu-custom bgColor="bg-ff" :isBack="true">
			<!-- <block slot="backText"></block> -->
			<block slot="content">团队交易详情</block>

			<block slot="right">
				<!-- <view @click="goDetail" class="action">交易明细</view> -->
				<view class="action" @click="seachF">
					<image style="width: 30upx;height: 30upx;" class="mr-10" src="../../static/images/icon/screen.png" mode=""></image>
					筛选
				</view>
			</block>
		</cu-custom>
		<view class="bg-ff">
			<view class="moudel_width">
				<view class=" moudel_bgff pt-30  flex justify-between">
					<view class="wp-50">
						<view @click="oneSwich(item.type)" class="tab_one_moudel" :class="oneType == item.type ? 'bg-44' : ''" v-for="(item, index) in oneTab" :key="index">
							{{ item.title }}
						</view>
					</view>
					<view class="flex wp-50 justify-end">
						<view @click="showPickerD" class="fs-22 fw-700">{{ chooseDate }}</view>
						<view class="ml-20" style="margin-top: -8upx;"><image style="width: 16upx;height: 10upx;" src="../../static/images/icon/down33.png" mode=""></image></view>
					</view>
				</view>
				<view class="flex justify-between">
					<view class="mt-30">
						<view class="flex">
							<view class="tab_one_moudel mt-10" style="width: 74upx;height: 34upx;line-height: 34upx;">团长</view>
							<view class="fs-34 ml-30 fw-700">知者创物</view>
						</view>
						<view class="fs-26 mt-10">代理商编号：50946724</view>
					</view>

					<view class="">
						<view class="fs-54 color-f5 fw-700">200.00</view>
						<view class="fs-26 ">交易量（万元）</view>
					</view>
				</view>
			</view>
		</view>
		
		
		<view class="flex input_list mt-30 ">
			<view class="wp-10 text-center mt-10"><image style="width: 26upx;height: 30upx;" src="../../static/images/icon/search.png" mode=""></image></view>
			<view class="wp-80 pl-10 ">
				<input type="text" :model="searchD" :value="searchD" placeholder="代理商姓名、电话" placeholder-style="color:#999999;font-size:30upx" />
			</view>
			<view class="wp-10 text-center" v-if="searchD.length > 1" @click="closeI">
				<image style="width: 30upx;height: 30upx;" src="../../static/images/icon/colse.png" mode=""></image>
			</view>
		</view>
			
			
		<view class="moudel_width">
			<view v-for="(item, index) in [1, 2, 3, 3, 4]" :key="index" @click="openList(index)">
				<view class="moudel_list flex justify-between mt-30">
					<view class="fs-30 color-33 fw-700">2021-04-05</view>
					<view class="flex">
						<view class="fs-30 color-f5">￥5000.00</view>
						<view class="ml-20"><image style="width: 20upx;height: 12upx;" src="../../static/images/icon/down33.png" mode=""></image></view>
					</view>
				</view>
				<view v-if="listFalg == index" class="flex justify-between fs-30 mt-20 pl-30 pr-30" v-for="(item, one) in [1, 2, 3]" :key="one">
					<view class="">2021-04-04</view>
					<view class="">￥3000.00</view>
				</view>
			</view>
		</view>

		<!-- 日期选择期 -->
		<tn-date-picker
			:beforeDateDisable="false"
			color="rgb(230,86,86)"
			:show="showPicker"
			:format="'yyyy-mm-dd'"
			:monthNum="19"
			:value="value"
			:show-tips="true"
			:begin-text="'开始'"
			:end-text="'结束'"
			@confirm="onSelected"
			@cancel="onSelected"
		/>
		<!-- 时间选择器 -->
		<rangeDatePick
			:show="isShow"
			@showchange="showchange"
			start="2021-01-01"
			:end="nowDate"
			:value="value1"
			@change="bindChange"
			@cancel="bindCancel"
			themeColor="#4C83D6"
			fields="day"
		></rangeDatePick>
	</view>
</template>

<script>
export default {
	data() {
		const currentDate = this.getDate({
			format: true
		});
		return {
			showPicker: false,
			date: ['2021/01/01', '2021/01/06'],
			value: ['2021/01/01', '2021/01/06'],
			picker: [{ name: '机具品牌', id: '1' }, { name: '机具类型', id: '2' }, { name: '本月', id: '3' }],
			index: 1,
			type: '1', //那个详情
			// 时间选择
			chooseDate: currentDate + '--' + currentDate,
			isShow: false,
			nowDate: currentDate, //获取当前时间
			value1: [],
			oneTab: [
				{
					title: '全部',
					type: 1
				},
				{
					title: '7天',
					type: 2
				},
				{
					title: '本月',
					type: 3
				}
			],
			oneType: 2,
			listFalg: '',
			searchD: ''
		};
	},
	onLoad() {
		console.log(this.nowDate);
	},
	methods: {
		oneSwich: function(item) {
			this.oneType = item;
		},
		openList: function(item) {
			console.log(item);
			this.listFalg = item;
		},
		closeI:function(){
			this.searchD = ''
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
	page{
		background-color:  #FAFAFA
	}
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

	width: 28%;
	margin-left: 2%;
	line-height: 44upx;
	height: 44upx;
	opacity: 1;
	background: #d22222;
	border-radius: 6upx;
	text-align: center;
}
.input_list {
	background-color: #eeeeee;
	height: 68upx;
	border-radius: 50upx;
	line-height: 68upx;
	align-items: center;
	padding-left: 20upx;
	padding-right: 20upx;
	width: 94%;
	margin-left: 3%;
}
</style>
