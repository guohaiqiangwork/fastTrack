<template>
	<view>
		<cu-custom bgColor="bg-2d-2d" :isBack="true">
			<!-- <block slot="backText"></block> -->
			<block slot="content">代理商收益</block>
		</cu-custom>
		<view class="bg-2d-m pt-30">
			<view class="moudel_width">
				<view class=" moudel_bgff pt-30 pb-30 pl-30 pr-30">
					<view class="flex justify-end">
						<view class="" @click="onShowDatePicker()">{{ date[0] }} -- {{ date[1] }}</view>
						<view class="ml-20"><image style="width: 16upx;height: 10upx;" src="../../static/images/icon/down33.png" mode=""></image></view>
					</view>
					<view class="moudel_list bg-fa fs-26 color-33 mt-30">
						<view class="">代理商名称：王大锤</view>
						<view class="">代理商编号：822192050946724</view>
					</view>
				
				</view>
				<view class="moudel_bgff mt-30 pt-30 pl-30 pr-30 pd-20 text-center">
					<scroll-view scroll-x="true" class="wrapper">
						<view :animation="animationData" @click="swichListTab(item.id, index)" class="tab_item" v-for="(item, index) in listTab" :key="index">
							<view class="color-99 fs-30" :class="listFalg == index ? 'color-33 fw-700' : ''">{{ item.title }}</view>
							<view v-if="listFalg == index" class="border_bt"></view>
						</view>
					</scroll-view>

					<view class="fs-26 color-99 text-center mt-30">收益(元)</view>
					<view class="fs-48 color-33 text-center" style="line-height: 1;">1200.00</view>

					<view class="flex justify-start mt-30">
						<view class="fs-26 color-99 wp-30">分润收益</view>
						<view class="fs-26 color-33">
							<text class="fs-22 color-99">收益:</text>
							900.00
						</view>
					</view>
					<view class="flex justify-start ">
						<view class="fs-26 color-99 wp-30">激活收益</view>
						<view class="fs-26 color-33">
							<text class="fs-22 color-99">收益:</text>
							900.00
						</view>
					</view>
					<view class="flex justify-start ">
						<view class="fs-26 color-99 wp-30">达标收益</view>
						<view class="fs-26 color-33">
							<text class="fs-22 color-99">收益:</text>
							900.00
						</view>
					</view>
					<view class="flex justify-start ">
						<view class="fs-26 color-99 wp-30">推广收益</view>
						<view class="fs-26 color-33">
							<text class="fs-22 color-99">收益:</text>
							900.00
						</view>
					</view>
				</view>

				<view class="moudel_bgff mt-30 pd-30">
					<view class="flex mt-30  text-center fs-26 color-99">
						<view class="wp-16">日期</view>
						<view class="wp-16 ">
							总收益
							<br />
							金额
						</view>
						<view class="wp-16">
							NFC
							<br />
							支付
						</view>
						<view class="wp-16 ">
							扫脸
							<br />
							支付
						</view>
						<view class="wp-16 ">
							扫码
							<br />
							支付
						</view>
						<view class="wp-16">
							快捷
							<br />
							支付
						</view>
					</view>

					<view style="align-items: center;" v-for="(item, index) in [1, 2, 3]" :key="index" class="flex mt-30 color-33 fs-26 text-center border_bottom  pb-30">
						<view class="wp-16 ">202103 23</view>
						<view class="wp-16 color-f5">200.00</view>
						<view class="wp-16">50.00</view>
						<view class="wp-16">20.00</view>
						<view class="wp-16">10.00</view>
						<view class="wp-16">10.00</view>
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
// import TnDatePicker from '@/components/tn-datepicker/tn-datepicker.vue';
export default {
	// components: {
	// 	TnDatePicker
	// },
	data() {
		return {
			showPicker: false,
			date: ['2021/01/01', '2021/01/06'],
			value: ['2021/01/01', '2021/01/06'],
			picker: [{ name: '昨日', id: '1' }, { name: '今日', id: '2' }, { name: '本月', id: '3' }],
			index: 1,
			type: '1', //那个详情
			listTab: [{ title: '乐刷', id: '2' }, { title: '快钱', id: '3' }, { title: '金控', id: '4' }, { title: '乐刷电签', id: '5' }, { title: '未知', id: '6' }],
			listFalg: 1
		};
	},
	onLoad() {
		this.animation = uni.createAnimation();
	},
	methods: {
		swichListTab: function(e, index) {
			this.listFalg = index;

			if (this.listFalg > 2) {
				this.animation.translateX(-50).step({ duration: 500 });
				this.animationData = this.animation.export();
			} else if (this.xFalg - this.listFalg > 0) {
				this.animation.translateX(5).step({ duration: 500 });
				this.animationData = this.animation.export();
			}
			this.xFalg = index;
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
		},
		// 下拉列表
		PickerChange(e) {
			this.index = e.detail.value;
		},
		goDetail: function() {
			console.log('哦我 ');
			uni.navigateTo({
				url: '../revenueListDetail/revenueListDetail?type=' + this.type
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
.tab_item {
	width: 25%;
	text-align: center;
	display: inline-block;
	color: #333333;
	/* 	padding-top: 10upx;
	padding-bottom: 30upx; */
}

.border_bt {
	width: 36upx;
	height: 6upx;
	opacity: 1;
	background: #f55050;
	border-radius: 3upx;
	box-shadow: 0upx 4upx 6upx 0upx rgba(245, 80, 80, 0.3);
	margin-left: 35%;
}
</style>
