<template>
	<view>
		<cu-custom bgColor="bg-2d-2d" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">机具统计</block>
			<block slot="right">
				<view class=" mr-30 fs-30 color-ff  flex justify-end" @click="openMoudel">
					<view class="mt-10">筛选</view>
					<view class="ml-10 mt-10"><image style="width: 30upx;height: 32upx;" src="../../../static/images/icon/screen.png" mode=""></image></view>
				</view>
			</block>
		</cu-custom>

		<!-- top -->
		<view class="bg-2d pb-40" style="padding-top: var(--status-bar-height)">
			<view class="moudel_width pt-30 ">
				<!-- 头信息 -->
				<view class="top_moudel pd-30">
					<view class="flex">
						<view class="falg  mt-8">组长</view>
						<view class="fs-30 color-ff ml-20">赵钱</view>
					</view>
					<view class="fs-26 mt-10" style="color: #C1C1C1;">代理商编号：50948888</view>
				</view>
				<!-- 金额统计 -->
				<view class=""></view>
			</view>

			<view class="mt-30">
				<view :class="tabOneFalg == item.type ? 'bg-f5' : ''" @click="oneTab(item.type)" class="item_top" v-for="item in tabOneList" :key="item">{{ item.title }}</view>
			</view>
		</view>

		<view class="moudel_width">
			<view v-for="(item, index) in [1, 2, 3]" :key="index" class="pt-20 pb-20 border_bottom">
				<view class="flex">
					<view class="mt-10" v-if="false"><image style="width: 80upx;height: 34upx;" src="../../../static/images/icon/list1.png" mode=""></image></view>
					<view class="mt-10"><image style="width: 80upx;height: 34upx;" src="../../../static/images/icon/list2.png" mode=""></image></view>
					<view class="fs-30 color-33 fw-700 ml-20">魔方</view>
				</view>
				<view class="flex">
					<view class="mt-10"><image style="width: 114upx;height: 101upx;" src="../../../static/images/icon/three2.png" mode=""></image></view>
					<view class="ml-25">
						<view class="flex">
							<view class="fs-26 color-99">机具号：</view>
							<view class="fs-26 color-33">00003102962002298325</view>
						</view>
						<view class="flex">
							<view class="fs-26 color-99">激活时间：</view>
							<view class="fs-26 color-33">2021-03-25 12:00:00</view>
						</view>
						<view class="flex">
							<view class="fs-26 color-99">所属代理：</view>
							<view class="fs-26 color-33">王大锤</view>
						</view>
						<view class="flex">
							<view class="fs-26 color-99">所属机构：</view>
							<view class="fs-26 color-33">知者创物</view>
						</view>
					</view>
				</view>
			</view>

			<view class="flex justify-center">
				<view class="">-</view>
				<view class="left_flag bg-f5 ml-30"></view>
				<view class="fs-28 color-aa ml-10">机具总数（台）</view>
				<view class="fs-26 color-33">900</view>
				<view class="ml-30">-</view>
			</view>
		</view>

		<!-- 筛选条件 -->
		<view v-if="moudelFalg">
			<view class="moudel_bg">
				<view class="bottom_moudel  pd-30">
					<view class="flex" @click="colseModel">
						<view class="mt-20"><image style="width: 33upx;height: 33upx;" src="../../../static/images/icon/colse99.png" mode=""></image></view>
						<view class=" ml-30 fs-42 fw-700">筛选</view>
					</view>
					<view class="flex mt-30">
						<view style="background-color: #2F70C7;" class="left_flag mt-25 "></view>
						<view class="fs-42  ml-20 fw-700">品牌</view>
					</view>
					<view class="">
						<view class="item_font" @click="tabOne(item.type)" :class="tabType == item.type ? 'color-f5 fw-700' : ''" v-for="(item, index) in itemTab" :key="index">
							{{ item.title }}
						</view>
					</view>
					<view class="flex mt-30">
						<view style="background-color: #2F70C7;" class="left_flag mt-25 "></view>
						<view class="fs-42  ml-20 fw-700">状态</view>
					</view>
					<view class="">
						<view class="item_font" @click="tabOne(item.type)" :class="tabType == item.type ? 'color-f5 fw-700' : ''" v-for="(item, index) in itemTab" :key="index">
							{{ item.title }}
						</view>
					</view>

					<view class="flex mt-30">
						<view class="left_flag mt-25 bg-f5"></view>
						<view class="fs-42  ml-20 fw-700">风险预警</view>
					</view>
					<view class="">
						<view
							class="item_font wp-50  mt-20"
							@click="tabOne(item.type)"
							style="padding-left: 7%; text-align: left;"
							:class="tabType == item.type ? 'color-f5 fw-700' : ''"
							v-for="(item, index) in itemTabTwo"
							:key="index"
						>
							{{ item.title }}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			moudelFalg: false, //筛选条件
			itemTab: [
				{
					title: '全部',
					type: 1
				},
				{
					title: '组长',
					type: 2
				},
				{
					title: '组员',
					type: 3
				}
			],
			tabType: 1,
			itemTabTwo: [
				{
					title: '伪激活',
					type: 1
				},
				{
					title: '伪激活预警',
					type: 2
				},
				{
					title: '绑定未激活预警',
					type: 3
				}
			],
			shopType: 1,
			tabOneList: [
				{
					title: '全部',
					type: 1
				},
				{
					title: '快钱',
					type: 2
				},
				{
					title: '乐刷',
					type: 3
				},
				{
					title: '海科',
					type: 4
				}
			],
			tabOneFalg: 1
		};
	},
	onLoad() {
		// uni.hideTabBar();
	},
	methods: {
		oneTab: function(item) {
			this.tabOneFalg = item;
		},
		// 打开筛选
		openMoudel: function() {
			this.moudelFalg = true;
			uni.hideTabBar(); //隐藏tab
		},
		colseModel: function() {
			this.moudelFalg = false;
			uni.showTabBar(); //显示tab
		},
		tabOne: function(item) {
			this.tabType = item;
		},
		// 商户切换
		swichShop: function(item) {
			this.shopType = item;
		},
		// 获取搜索值
		getSearch: function(e) {
			this.searchD = e.target.value;
		},
		closeI: function() {
			this.searchD = '';
		},
		// 显示菜单
		showModal(e) {
			this.modalName = e.currentTarget.dataset.target;
			uni.hideTabBar(); //隐藏tab
		},
		// 隐藏菜单
		hideModal(e) {
			this.modalName = null;
			uni.showTabBar(); //显示tab
		},
		// 代理商 商户切换
		swichTab: function(item) {
			if (item == 2) {
				this.tabList = [{ name: '商户总数', number: '50', id: '1' }, { name: '直属商户', number: '50', id: '2' }, { name: '非直属商户', number: '50', id: '3' }];
			}
			this.tabFalg = item;
		},
		swichTabOne: function(item) {
			this.tabOneFalg = item;
		},
		// 去商户详情
		goDetail: function(item) {
			uni.navigateTo({
				url: './shopDetail?type=' + item
			});
		},
		// 去交易详情
		goTd: function(item) {
			uni.navigateTo({
				url: './transactionDetail?type=' + item
			});
		},
		// 去代理详情
		goDetailD: function(item) {
			uni.navigateTo({
				url: './detail?item=' + item
			});
		},
		// 拨打电话
		goPhone: function() {
			uni.makePhoneCall({
				// 手机号
				phoneNumber: '15049372463',

				// 成功回调
				success: res => {
					console.log('调用成功!');
				},
				// 失败回调
				fail: res => {
					console.log('调用失败!');
				}
			});
		}
	}
};
</script>

<style lang="less">
.item_top {
	width: 96upx;
	height: 44upx;
	opacity: 1;
	background: #444444;
	border-radius: 6upx;
	text-align: center;
	line-height: 44upx;
	font-size: 24upx;
	color: #ffffff;
	margin-left: 5%;
	display: inline-block;
}

.moudel_bg {
	.bottom_moudel {
		width: 100%;
		// max-height: 480upx;
		background-color: #ffffff;
		position: absolute;
		bottom: 0;
		z-index: 11;
		height: 800upx;
		border-radius: 30upx 30upx 0 0;
		.item_font {
			width: 33%;
			text-align: center;
			display: inline-block;
			color: #000000;
			font-size: 42upx;
		}
	}
}

.top_moudel {
	width: 95%;
	margin-left: 2.5%;
	background: #3e3c3c;
	border-radius: 14px;
	.falg {
		width: 90upx;
		height: 40upx;
		opacity: 1;
		background: #f55050;
		border-radius: 6upx;
		text-align: center;
		line-height: 40upx;
		color: #ffffff;
		font-size: 24upx;
	}
}
</style>
