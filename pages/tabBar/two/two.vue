<template>
	<view>
		<view class="DrawerPage" :class="modalName == 'viewModal' ? 'show' : ''">
			<!-- top -->
			<view class="bg-2d" style="padding-top: var(--status-bar-height)">
				<view class="moudel_width pt-30 pb-80">
					<!-- 头信息 -->
					<view class="flex justify-between">
						<view class="flex wp-70">
							<view class="left_img" @tap="showModal" data-target="viewModal"><image class="wh-100" src="../../../static/images/icon/menu.png" mode=""></image></view>
							<view class="fs-34 color-ff mt-15 ml-30 text-cut">知者创物科技</view>
							<view class="vip_img ml-20 mt-20"><image class="wh-100" src="../../../static/images/vip.png" mode=""></image></view>
						</view>
						<view class="wp-30 fs-30 color-ff mt-20 flex justify-end" @click="openMoudel">
							<view class="">风险预警</view>
							<view class="ml-10"><image style="width: 30upx;height: 32upx;" src="../../../static/images/icon/screen.png" mode=""></image></view>
						</view>
					</view>
					<!-- 金额统计 -->
					<view class="mt-50">
						<!-- <view class="flex justify-between">
							<view class="">
								<view class="flex">
									<view class="fs-34 color-ff fw-700">王**</view>
									<view class="tui_m">推荐人</view>
								</view>
								<view class="fs-26 color-ff">184****0024</view>
							</view>
							<view class="right_btn flex justify-center">
								<image style="width: 26upx;height: 26upx;" src="../../../static/images/icon/phone.png" mode=""></image>
								<view class="" style="margin-left: 3%;" @click="goPhone">拨打电话</view>
							</view>
						</view>-->
						<view class="flex pt-40">
							<view class="wp-33 text-center" style="color: #FFF9F9;" @click="swichShop('1')">
								<view class="fs-24">直营代理商（人）</view>
								<view class="fs-43 fw-700 mt-10 mr-40">99</view>
								<view class="bottom_flag bg-f5 " style="margin-left: 35%;"></view>
							</view>
							<view class="wp-33 text-center" style="color: #FFF9F9;" @click="swichShop('1')">
								<view class="fs-24">非直营代理商（人）</view>
								<view class="fs-43 fw-700 mt-10 mr-40">99</view>
								<view class="bottom_flag  " style="margin-left: 35%;background-color: #2F70C7;"></view>
							</view>
							<view class="wp-33 text-center" style="color: #FFF9F9;" @click="swichShop('2')">
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


					<!-- 商户列表 -->
					<view class="" v-else>
						<view class="border_bottom pb-30 pt-30" v-for="(item, index) in [1, 2, 3]" :key="index">
							<view class="flex justify-between" @click="goDetail(index)">
								<view class=" flex ">
									<view class="mt-10 "><image style="width: 80upx;height: 34upx;" src="../../../static/images/icon/three_listF.png" mode=""></image></view>
									<view class="fs-30 ml-20 fw-700">瑞恩娜美容美发</view>
								</view>

								<view class="fs-22 color-99">2021-03-25 12:00:00</view>
							</view>
							<view class="flex justify-between ">
								<view class="flex fs-26">
									<view class=" color-99">快 钱：</view>
									<view class=" color-33">0036180</view>
								</view>
								<view @click="goTd" class="list_right ">交易查询</view>
							</view>

							<view class="flex justify-between mt-10">
								<view class="flex fs-26">
									<view class=" color-99">伪激活：</view>
									<view class=" color-33">剩余时间29天，剩余金额9000元</view>
								</view>
								<view @click="goDb" class="list_right ">达标查询</view>
							</view>
						</view>
					</view>
					<!--  -->
				</view>
			</view>

			<!-- center -->
			<view class="centen_moudel pb-30 mt-90" style="display: none;">
				<view class="moudel_width">
					<view class="moudel_bottom">
						<view class="flex mt-20">
							<view @click="swichTab(item.id)" class="tab_item wp-50" v-for="(item, index) in tabOneList" :key="index">
								<view class="color-99 fs-30" :class="tabFalg == item.id ? 'color-33 fw-700' : ''">{{ item.name }}</view>
								<view v-if="tabFalg == item.id" class="border_bt" style="margin-left: 44%;"></view>
							</view>
						</view>
						<view class="moudel_two mt-20" v-if="tabFalg == 1">
							<view class="flex">
								<view @click="swichTabOne(item.id)" class="tab_item" v-for="(item, index) in tabList" :key="index">
									<view class="color-99 fs-30" :class="tabOneFalg == item.id ? 'color-33 fw-700' : ''">{{ item.number }}</view>
									<view class="color-99 fs-30" :class="tabOneFalg == item.id ? 'color-33 fw-700' : ''">{{ item.name }}</view>
									<view v-if="tabOneFalg == item.id" class="border_bt"></view>
								</view>
							</view>
						</view>
						<view class="moudel_two mt-20" v-if="tabFalg == 2">
							<view class="flex">
								<view @click="swichTabOne(item.id)" class="tab_item" v-for="(item, index) in tabList" :key="index">
									<view class="color-99 fs-30" :class="tabOneFalg == item.id ? 'color-33 fw-700' : ''">{{ item.number }}</view>
									<view class="color-99 fs-30" :class="tabOneFalg == item.id ? 'color-33 fw-700' : ''">{{ item.name }}</view>
									<view v-if="tabOneFalg == item.id" class="border_bt"></view>
								</view>
							</view>
						</view>
					</view>
					<!-- 代理商列表 -->
					<view class="" v-if="tabFalg == 1">
						<view class="border_bottom pb-30 pt-30" v-for="(item, index) in [1, 2, 3]" :key="index">
							<view class="flex justify-between">
								<view class="flex fs-26">
									<view class=" color-99">代理编号：</view>
									<view class=" color-33">0036180</view>
								</view>
								<view class="fs-22 color-99">2021-03-25 12:00:00</view>
							</view>

							<view class="flex fs-26">
								<view class=" color-99">代理名称：</view>
								<view class=" color-33">徐倩倩</view>
							</view>
							<view class="flex justify-between">
								<view class="flex fs-26">
									<view class=" color-99">手机号码：</view>
									<view class=" color-33">180****5668</view>
								</view>
								<view class="list_right" @click="goPhone">拨打电话</view>
							</view>
						</view>
					</view>

					<!-- 商户列表 -->
					<view class="" v-else>
						<view class="border_bottom pb-30 pt-30" v-for="(item, index) in [1, 2, 3]" :key="index">
							<view class="flex justify-between" @click="goDetail(index)">
								<view class=" flex ">
									<view class="fs-30 fw-700">瑞恩娜美容美发</view>
									<view class="mt-10 ml-20"><image style="width: 80upx;height: 34upx;" src="../../../static/images/icon/three_listF.png" mode=""></image></view>
								</view>

								<view class="fs-22 color-99">2021-03-25 12:00:00</view>
							</view>
							<view class="flex justify-between">
								<view class="flex fs-26">
									<view class=" color-99">商户编号：</view>
									<view class=" color-33">0036180</view>
								</view>
								<view class="fs-22 color-99">2021-03-25 12:00:00</view>
							</view>

							<view class="flex fs-26">
								<view class=" color-99">机具sn号：</view>
								<view class=" color-33">00003102962002298325</view>
							</view>

							<view class="flex justify-between">
								<view class="flex fs-26">
									<view class=" color-99">伪激活：</view>
									<view class=" color-33">剩余时间29天，剩余金额9000元</view>
								</view>
								<view @click="goTd" class="list_right ">交易查询</view>
							</view>
						</view>
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

		<!-- 左面菜单 -->
		<view class="DrawerWindow" :class="modalName == 'viewModal' ? 'show' : ''">
			<view class="bg-fa">
				<view class="moudel_width5 pt-80" style="min-height: 100vh;">
					<view class="flex justify-between" @click="hideModal">
						<view class="flex">
							<view class="" style="width: 80upx;height: 80upx;"><image class="wh-100" src="../../../static/images/icon/menu.png" mode=""></image></view>
							<view class="ml-20">
								<view class="fs-30">赵**</view>
								<view class="fs-24">代理商编号：20385177</view>
							</view>
						</view>

						<view class="mt-20"><image style="width: 14upx;height: 22upx;" src="../../../static/images/icon/right6.png" mode=""></image></view>
					</view>

					<view class="list_moudel mt-80">
						<view class="border_bottom fs-24 color-99 pb-30">其他</view>
						<view v-for="(item, index) in myList" :key="index" :class="index == '0' ? 'mt-30' : ''" class="flex justify-between pb-60 ">
							<view class="flex">
								<image class="mt-5" style="width: 26upx;height: 30upx;" :src="item.icon" mode=""></image>
								<view class="ml-40">{{ item.title }}</view>
							</view>
							<view class=""><image style="width: 10upx;height: 8upx;" src="../../../static/images/icon/right3.png" mode=""></image></view>
						</view>
					</view>

					<view class="colse_btn">退出登录</view>
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
			shopType: 2
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
		// 去查看达标
		goDb:function(){
			uni.navigateTo({
				url:'../one/reward'
			})
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
</style>
