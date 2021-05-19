<template>
	<view>
		<cu-custom bgColor="bg-2d-2d" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">代理详情</block>
			<block slot="right">
				<view class=" mr-30 fs-30 color-ff  flex justify-end" @click="openMoudel">
					<view class="mt-10">风险预警</view>
					<view class="ml-10 mt-10"><image style="width: 30upx;height: 32upx;" src="../../../static/images/icon/screen.png" mode=""></image></view>
				</view>
			</block>
		</cu-custom>
		
			<!-- top -->
			<view class="bg-2d" style="padding-top: var(--status-bar-height)">
				<view class="moudel_width pt-30 pb-80">
					<!-- 头信息 -->
					<view class="top_moudel pd-30">
						<view class="flex">
							<view class="fs-30 color-ff">
								赵钱
							</view>
							<view class="falg ml-20 mt-10">
								组长
							</view>
						</view>
						<view class="fs-26 mt-10" style="color: #C1C1C1;">
							代理商编号：50948888
						</view>
					</view>
					<!-- 金额统计 -->
					<view class="">
						<view class="flex pt-40">
							<view class="wp-33 text-center" style="color: #FFF9F9;" >
								<view class="fs-24">直营代理商（人）</view>
								<view class="fs-43 fw-700 mt-10 mr-40">99</view>
								<view class="bottom_flag bg-f5 " style="margin-left: 35%;"></view>
							</view>
							<view class="wp-33 text-center" style="color: #FFF9F9;" >
								<view class="fs-24">非直营代理商（人）</view>
								<view class="fs-43 fw-700 mt-10 mr-40">99</view>
								<view class="bottom_flag  " style="margin-left: 35%;background-color: #2F70C7;"></view>
							</view>
							<view class="wp-33 text-center" style="color: #FFF9F9;">
								<view class="fs-24">商户（人）</view>
								<view class="fs-43 fw-700 mt-10 mr-40">99</view>
								<view class="bottom_flag  " style="margin-left: 35%;background-color: #70CC81;"></view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<!-- center -->
			<view class="centen_moudel pb-30">
				<view class="moudel_width pt-30">
					<view class="flex input_list mt-20">
						<view class="wp-10 text-center mt-10"><image style="width: 26upx;height: 30upx;" src="../../../static/images/icon/search.png" mode=""></image></view>
						<view class="wp-80 pl-10 color-ff">
							<input @input="getSearch" type="text" :value="searchD" placeholder="请输入代理商名称、手机号码" placeholder-style="color:#999999;font-size:30upx" />
						</view>
						<view class="wp-10 text-center" v-if="searchD.length > 1" @click="closeI">
							<image style="width: 30upx;height: 30upx;" src="../../../static/images/icon/colse.png" mode=""></image>
						</view>
					</view>

					<!-- 直营代理 -->

					<view v-if="shopType == 1" class="mt-30" @click="goDetailD(item)" v-for="(item, index) in [1, 2, 3]" :key="index">
						<view class="flex">
							<view class="wp-20 text-center">
								<view class=" fs-30 color-33 fw-600">赵钱</view>
								<view class="bottom_flag bg-f5 ml-50" :class="index == 1 ? 'bg-27' : ''"></view>
							</view>
							<view class="wp-70 flex mt-15">
								<view class="list_right ml-10">伪激活</view>
								<view class="list_right ml-10">伪激活预警</view>
								<view class="list_right ml-10">绑定未激活预警</view>
							</view>
							<view class="wp-10 text-center mt-30" @click="goPhone">
								<image style="width: 21upx;height: 20upx;" src="../../../static/images/icon/phonef5.png" mode=""></image>
							</view>
						</view>

						<view class="flex justify-between mt-20">
							<view class="flex">
								<view class="fs-26 color-99 ml-30">
									下级代理：
									<text class="color-33">5</text>
								</view>
								<view class="fs-26 color-99 ml-30">
									开通商户：
									<text class="color-33">18</text>
								</view>
							</view>
							<view class="fs-22 color-99">2021-03-25 12:00:00</view>
						</view>
					</view>

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
						<view class="fs-42  ml-20 fw-700">代理商</view>
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
			modalName: 'null',
			myList: [
				{ icon: '../../../static/images/icon/my_list1.png', title: '收货地址' },
				{ icon: '../../../static/images/icon/my_list2.png', title: '安全管理' },
				{ icon: '../../../static/images/icon/my_list3.png', title: '晋升说明' },
				{ icon: '../../../static/images/icon/my_list4.png', title: '意见反馈' },
				{ icon: '../../../static/images/icon/my_list5.png', title: '检查更新' },
				{ icon: '../../../static/images/icon/my_list6.png', title: '关于我们' }
			],
			msg: [{ title: '但是积分啦空间建立开放解开了但是积分啦空间建立开放解开了但是积分啦空间建立开放解开了' }, { title: 'jflksaj klj s决定分开了撒娇接口' }],
			tabList: [{ name: '代理商总数', number: '50', id: '1' }, { name: '直属代理商', number: '30', id: '2' }, { name: '非直属代理商', number: 20, id: '3' }],
			tabOneList: [{ name: '代理商', id: '1' }, { name: '商户', id: '2' }],
			tabFalg: 1,
			searchD: '', //搜索值
			tabOneFalg: 1,
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
			shopType: 1
		};
	},
	onLoad() {
		// uni.hideTabBar();
	},
	methods: {
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
		goDetailD:function(item){
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
.left_img {
	width: 80upx;
	height: 80upx;
	border-radius: 50%;
	overflow: hidden;
}
.vip_img {
	width: 81upx;
	height: 32upx;
}
.tui_m {
	line-height: 44upx;
	text-align: center;
	color: #ffffff;
	font-size: 26upx;
	font-weight: 700;
	background-color: #f55050;
	border-radius: 10upx;
	height: 44upx;
	line-height: 44upx;
	padding-left: 5upx;
	padding-right: 5upx;
	margin-left: 30upx;
	margin-top: 10upx;
}
.right_btn {
	width: 175upx;
	height: 56upx;
	opacity: 1;
	background: #f55050;
	border-radius: 28upx;
	color: #ffffff;
	font-size: 26upx;
	align-items: center;
	margin-top: 20upx;
}
.input_list {
	background-color: #eeeeee;
	height: 68upx;
	border-radius: 50upx;
	line-height: 68upx;
	align-items: center;
	padding-left: 20upx;
	padding-right: 20upx;
}

.moudel_two {
	opacity: 1;
	background: #eeeeee;
	border-radius: 10upx;
}

.colse_btn {
	width: 90%;
	height: 88upx;
	line-height: 88upx;
	text-align: center;
	color: #f55050;
	font-size: 30upx;
	background: #ffffff;
	border-radius: 20upx;
	position: absolute;
	bottom: 5%;
}

.centen_moudel {
	background-color: #ffffff;
	border-top-left-radius: 30upx;
	border-top-right-radius: 30upx;
	margin-top: -30upx;
}

.moudel_bottom {
	background-color: #ffffff;
	border-radius: 14upx;
	margin-top: 30upx;
}
.tab_item {
	width: 33%;
	text-align: center;
	display: grid;
	color: #333333;
	padding-top: 30upx;
	padding-bottom: 30upx;
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

.list_right {
	// width: 120upx;
	padding-left: 10upx;
	padding-right: 10upx;
	height: 44upx;
	opacity: 1;
	background: #ffffff;
	border: 1px solid #f55050;
	border-radius: 7upx;
	line-height: 44upx;
	text-align: center;
	color: #f55050;
	font-size: 22upx;
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

.top_moudel{
	width: 95%;
	margin-left: 2.5%;
	background: #3e3c3c ;
	border-radius: 14px;
	.falg{
		width: 90upx;
		height: 40upx;
		opacity: 1;
		background: #f55050 ;
		border-radius: 6upx;
		text-align: center;
		line-height: 40upx;
		color: #FFFFFF;
		font-size: 24upx;
	}
	
}
</style>
