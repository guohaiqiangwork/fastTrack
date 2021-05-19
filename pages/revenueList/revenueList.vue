<template>
	<view>
		<cu-custom bgColor="bg-2d-2d" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">收益管理</block>
			<block slot="right"><view @click="goDetail" class="action">收益明细</view></block>
		</cu-custom>
		<view class="bg-2d pb-50">
			<view class="moudel_width">
				<view class="text-center color-ff  pt-30 pb-30">
					<view class="flex justify-center">
						<view class="" @click="onShowDatePicker()">{{ date[0] }} -- {{ date[1] }}</view>
						<view class="ml-20"><image style="width: 16upx;height: 10upx;" src="../../static/images/icon/down33.png" mode=""></image></view>
					</view>
					<view class="flex mt-30">
						<view class="tab_item">
							<view class="fs-24" style="color: #AAAAAA;">收益汇总（元）</view>
							<view class="fs-44">6180.50</view>
						</view>
						<view class="tab_item">
							<view class="fs-24" style="color: #AAAAAA;">直营收益（元）</view>
							<view class="fs-44">6180.50</view>
						</view>
						<view class="tab_item">
							<view class="fs-24" style="color: #AAAAAA;">团队收益（元）</view>
							<view class="fs-44">6180.50</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="bg-ff" style="border-radius:30upx 30upx 0 0 ;margin-top: -25upx;">
			<view class="moudel_width">
				<view class="moudel_list" style="border-radius: 0;">
					<view class="flex justify-between ">
						<view class="">
							<view class="color-33 fs-30">分润收益</view>
							<view class="fs-20">2020-03-24 13:00:00</view>
						</view>
						<view class="fs-30 color-f5 fw-700 mt-20">+299.00</view>
					</view>
					<view class="flex justify-between mt-30">
						<view class="">
							<view class="color-33 fs-30">新增代理</view>
							<view class="fs-20">2020-03-24 13:00:00</view>
						</view>
						<view class="fs-30 color-f5 fw-700 mt-20">+299.00</view>
					</view>
					<view class="flex justify-between mt-30">
						<view class="">
							<view class="color-33 fs-30">推广奖励</view>
							<view class="fs-20">2020-03-24 13:00:00</view>
						</view>
						<view class="fs-30 color-f5 fw-700 mt-20">+299.00</view>
					</view>
					<view class="flex justify-between mt-30">
						<view class="">
							<view class="color-33 fs-30">新增商户</view>
							<view class="fs-20">2020-03-24 13:00:00</view>
						</view>
						<view class="fs-30 color-f5 fw-700 mt-20">+299.00</view>
					</view>
					<view class="flex justify-between mt-30">
						<view class="">
							<view class="color-33 fs-30">激活奖励</view>
							<view class="fs-20">2020-03-24 13:00:00</view>
						</view>
						<view class="fs-30 color-f5 fw-700 mt-20">+299.00</view>
					</view>

					<view class="flex mt-30">
						<view class="left_list"></view>
						<view class="center_list"></view>
						<view class="right_list"></view>
					</view>

					<view class="flex justify-between mt-60">
						<view class="">
							<view class="color-33 fs-30">达标商户</view>
							<view class="fs-20">2020-03-24 13:00:00</view>
						</view>
						<view class="fs-30 color-f5 fw-700 mt-20">+299.00</view>
					</view>
					<view class="flex justify-between mt-30">
						<view class="">
							<view class="color-33 fs-30">达标奖励</view>
							<view class="fs-20">2020-03-24 13:00:00</view>
						</view>
						<view class="fs-30 color-f5 fw-700 mt-20">+299.00</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 日期选择期 -->
		<tn-date-picker
			:beforeDateDisable="false"
			color="rgb(230,86,86)"
			:show="showPicker"
			:format="'yyyy-mm-dd'"
			:monthNum="6"
			:value="value"
			:show-tips="true"
			:begin-text="'开始'"
			:end-text="'结束'"
			@confirm="onSelected"
			@cancel="onSelected"
		/>
	</view>
</template>

<script>
export default {
	data() {
		return {
			showPicker: false,
			date: ['2021/01/01', '2021/01/06'],
			value: ['2021/01/01', '2021/01/06'],
			picker: [{ name: '昨日', id: '1' }, { name: '今日', id: '2' }, { name: '本月', id: '3' }],
			index: 1,
			type: '1' //那个详情
		};
	},
	methods: {
		// 时间显示
		onShowDatePicker: function() {
			//显示
			this.showPicker = true;
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
				url: '../revenueListDetail/revenueListDetail?type=' + this.type
			});
		},
		// 去代理商收益
		goAgent: function() {
			uni.navigateTo({
				url: '../revenueAgent/revenueAgent'
			});
		}
	}
};
</script>

<style lang="less">
page {
	background-color: #ffffff;
}
.tab_item {
	display: inline-block;
	width: 33%;
	text-align: center;
	background-color: #333333;
}

.moudel_bgff {
	background: #ffffff;
	border-radius: 14upx;
}
.wp-16 {
	width: 16% !important;
}
.left_list{
	position: absolute;
	width: 40upx;
	background-color: #000000;
	height: 40upx;
	border-radius: 50%;
	margin-left: -75upx;
}
.center_list{
	border-bottom: 1px dashed #707070;
	width: 100%;
	margin-top: 20upx;
}
.right_list{
	position: absolute;
	width: 40upx;
	background-color: #000000;
	height: 40upx;
	border-radius: 50%;
	right: 0;
	margin-right: -20upx;
}
</style>
