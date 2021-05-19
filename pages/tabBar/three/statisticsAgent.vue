<template>
	<view>
		<cu-custom bgColor="bg-2d-2d" :isBack="true"><block slot="content">代理商机具统计</block></cu-custom>
		<view class="bg-2d-m pt-30" style="height: 50vh;">
			<view class="moudel_width">
				<view class=" moudel_bgff pt-30 pb-30 pl-30 pr-30">
					<view class="flex justify-center">
						<view class="" @click="onShowDatePicker()">{{ date[0] }} -- {{ date[1] }}</view>
						<view class="ml-20"><image style="width: 16upx;height: 10upx;" src="../../../static/images/icon/down33.png" mode=""></image></view>
					</view>
					<view class="moudel_list bg-fa fs-26 color-33 mt-30">
						<view class="">代理商名称：王大锤</view>
						<view class="">代理商编号：822192050946724</view>
					</view>
					<view class="text-center mt-30">
						<view class="fs-26 color-99 ">总机具数</view>
						<view class="fs-60 color-f5 fw-700" style="line-height: 1;">14,660.00</view>
					</view>
				</view>
				<view class="moudel_list mt-30">
					<scroll-view scroll-x="true" class="wrapper">
						<view :animation="animationData" @click="swichListTab(item.id, index)" class="tab_item" v-for="(item, index) in listTab" :key="index">
							<view class="color-99 fs-30" :class="listFalg == index ? 'color-33 fw-700' : ''">{{ item.title }}</view>
							<view v-if="listFalg == index" class="border_bt"></view>
						</view>
					</scroll-view>
					<view class="flex bg-fa pt-20 pd-20 mt-30">
						<view class="flex wp_33 justify-center">
							<picker @change="PickerChange" :value="index" :range="picker" :range-key="'name'">
								<view class="picker color-99 fs-24">{{ index > -1 ? picker[index + 1].name : '' }}</view>
							</picker>
							<view class="ml-20" style="margin-top: -8upx;">
								<image style="width: 16upx;height: 10upx;" src="../../../static/images/icon/down99.png" mode=""></image>
							</view>
						</view>
						<view class="flex wp_33 justify-center">
							<picker @change="PickerChange" :value="index" :range="picker" :range-key="'name'">
								<view class="picker color-99 fs-24">{{ index > -1 ? picker[index + 2].name : '' }}</view>
							</picker>
							<view class="ml-20" style="margin-top: -8upx;">
								<image style="width: 16upx;height: 10upx;" src="../../../static/images/icon/down99.png" mode=""></image>
							</view>
						</view>
						<view class="flex wp_33 justify-center">
							<picker @change="PickerChange" :value="index" :range="picker" :range-key="'name'">
								<view class="picker color-99 fs-24">{{ index > -1 ? picker[index + 3].name : '' }}</view>
							</picker>
							<view class="ml-20" style="margin-top: -8upx;">
								<image style="width: 16upx;height: 10upx;" src="../../../static/images/icon/down99.png" mode=""></image>
							</view>
						</view>
					</view>

					<view class="text-center mt-30">
						<view class="fs-26 color-99">{{listTab[listFalg].title}}已开通(台)</view>
						<view class="fs-48 color-33 fw-700 " style="line-height: 1;">300</view>
					</view>

					<!-- 自有机具 -->
					<view class="flex mt-30">
						<view class="fs-30 color-f5 fw-700 wp_33">传统POS活动</view>
						<view class="fs-30 color-f5 wp_33 fw-700">
							<text class="fs-22 color-99 fw-600 mr-10">已开通:</text>
							300
						</view>
						<view class="flex fs-22 color-99 wp_33 justify-end mt-8" @click="showM">
							{{ moudelFalg ? '收起' : '展开' }}
							<image v-if="moudelFalg" class="ml-10 mt-18" style="width: 16upx;height: 10upx;" src="../../../static/images/icon/up99.png" mode=""></image>
							<image v-else class="ml-10 mt-18" style="width: 16upx;height: 10upx;" src="../../../static/images/icon/down99.png" mode=""></image>
						</view>
					</view>
					<!-- 隐藏内容 -->
					<view class="mt-20 border_bottom pb-20" v-if="moudelFalg">
						<view class="flex">
							<view class="fs-26 color-99 wp_33 mt-10">激活</view>
							<view class="fs-30 color-f5 wp_33 fw-700">
								<text class="fs-22 color-99 fw-600 mr-10">累计:</text>
								300
							</view>
						</view>
						<view class="flex">
							<view class="fs-26 color-99 wp_33 mt-10">达标</view>
							<view class="fs-30 color-f5 wp_33 fw-700">
								<text class="fs-22 color-99 fw-600 mr-10">累计:</text>
								300
							</view>
						</view>
					</view>
				</view>

				<view class="moudel_bgff mt-30 pd-30">
					<view class="flex">
						<view class="left_flag bg-f5 mt-15"></view>
						<view class="color-33 fs-30 fw-700 ml-10">代理商机具</view>
					</view>

					<view class="flex mt-30  text-center fs-26 color-99">
						<view class="wp-20">
							日期
						</view>
						<view class="wp-20 ">
							总激活
							<br />
							机具数
						</view>
						<view class="wp-20">
							手机
							<br />
							POS
						</view>
						<view class="wp-20 ">快钱</view>
						<view class="wp-20 ">乐刷</view>
					</view>

					<view v-for="(item, index) in [1, 2, 3]" :key="index" @click="goAgent" class="flex mt-30 color-33 fs-26 text-center border_bottom  pb-30">
						<view class="wp-20 fw-700">20210330</view>
						<view class="wp-20 color-f5">20</view>
						<view class="wp-20">50</view>
						<view class="wp-20">2</view>
						<view class="wp-20">10</view>
						<view class="wp-20">1</view>
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
			picker: [{ name: '终端维度', id: '1' }, { name: '结算类型', id: '2' }, { name: '活动类型', id: '3' }, { name: '终端属性', id: '3' }],
			index: 0,
			type: '1', //那个详情
			listTab: [{ title: '手机pos', id: '2' }, { title: '快钱', id: '3' }, { title: '乐刷', id: '4' }, { title: '乐刷电签', id: '5' }, { title: '未知', id: '6' }],
			listFalg: 1,
			animationData: '',
			moudelFalg: false //自有极具
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
		// 自有机具
		showM: function(item) {
			this.moudelFalg = !this.moudelFalg;
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
		}
	}
};
</script>

<style>
.moudel_bgff {
	background: #ffffff;
	border-radius: 14upx;
}

.tab_item {
	width: 33%;
	text-align: center;
	display: inline-block;
	color: #333333;
}

.border_bt {
	width: 36upx;
	height: 6upx;
	opacity: 1;
	background: #f55050;
	border-radius: 3upx;
	box-shadow: 0upx 4upx 6upx 0upx rgba(245, 80, 80, 0.3);
	margin-left: 40%;
}
</style>
