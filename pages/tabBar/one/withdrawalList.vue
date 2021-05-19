<template>
	<view>
		<cu-custom bgColor="bg-ff" :isBack="true">
			<block slot="content">{{ title }}</block>
			<block slot="right">
				<view class="action" @click="seachF">
					<image style="width: 30upx;height: 30upx;" class="mr-10" src="../../../static/images/icon/screen.png" mode=""></image>
					筛选
				</view>
			</block>
		</cu-custom>
		<view class="flex justify-center color-33 pt-20 pb-30 bg-ff" v-if="seachFalg">
			<view class="" @click="onShowDatePicker()">{{ date[0] }} - {{ date[1] }}</view>
			<view class="ml-20"><image style="width: 16upx;height: 10upx;" src="../../../static/images/icon/down99.png" mode=""></image></view>
		</view>

		<view class="moudel_width">
			<view class="moudel_list mt-30 pt-10 pb-10" v-for="(ite, index) in [1, 2, 3, 4, 5]" :key="index">
				<view class="flex justify-between" style="align-items: center;">
					<view class="">
						<view class="fs-30">分润</view>
						<view class="fs-20 color-99">2020-03-24 13:00:00</view>
					</view>
					<view class="fs-34 color-33 fw-700">+299.00</view>
				</view>
			</view>
			<!-- 无内容 -->
			<!-- <view class="text-center" style="margin-top: 240upx;">
				<image style="width: 422upx;height: 354upx;" src="../../../static/images/noData/noList.png" mode=""></image>
				<view class="fs-30 color-99">
					暂无内容
				</view>
			</view> -->
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

			seachFalg: true,
			title: '收支明细'
		};
	},
	onLoad(option) {
		if (option.type != 1) {
			this.title = '待调账明细';
		}
	},
	methods: {
		seachF: function() {
			this.seachFalg = !this.seachFalg;
		},
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
		}
	}
};
</script>

<style></style>
