<template>
	<view>
		<view class="DrawerPage" id="contHieght" :class="modalName == 'viewModal' ? 'show' : ''">
			<!-- top -->
			<view class="bg-2d" style="padding-top: var(--status-bar-height);border-radius: 0 0 30upx 30upx">
				<view class="moudel_width pt-30 pb-80">
					<!-- 头信息 -->
					<view class="flex justify-between">
						<view class="flex wp-80">
							<view class="left_img" @tap="showModal" data-target="viewModal"><image class="wh-100" src="../../../static/images/icon/menu.png" mode=""></image></view>
							<view class="fs-34 color-ff mt-15 ml-30 text-cut">知者创物科技</view>
							<view class="vip_img ml-20 mt-20"><image class="wh-100" src="../../../static/images/vip.png" mode=""></image></view>
						</view>
						<view class="wp-20 justify-end flex" @click="goUrlPage('msg')">
							<view class="right_img mt-20"><image class="wh-100" src="../../../static/images/icon/msg.png" mode=""></image></view>
						</view>
					</view>
					<!-- 金额统计 -->
					<view class="mt-50">
						<!-- <view class="">
							<button type="default" @click="openUrl">打开外部链接</button>
						</view> -->
						<view class="flex" @click="goUrlPage('transactionList')">
							<view class="fs-26 color-aa text-right wp-60">交易量{{ ondData.totalAmount | formatMoneyName }}</view>
							<view class="flex wp-40 justify-end">
								<view class="fs-22 color-99 mt-8">查看详情</view>
								<view class="ml-20 "><image style="width: 10upx;height: 16upx;" src="../../../static/images/icon/right6.png" mode=""></image></view>
							</view>
						</view>

						<view class="fs-60 color-ff fw-700 text-center ">{{ ondData.totalAmount | formatMoney }}</view>
						<view class="flex mt-30">
							<view class="wp-50 text-center" @click="goUrlPage('transactionList')">
								<view class="fs-26 color-aa">直营交易{{ ondData.allMoney | formatMoneyName }}</view>
								<view class="fs-44 color-ff  ">{{ ondData.allMoney | formatMoney }}</view>
							</view>
							<view class="wp-50 text-center" @click="goUrlPage('teamList')">
								<view class="fs-26 color-aa">团队交易{{ ondData.teamAmt | formatMoneyName }}</view>
								<view class="fs-44 color-ff  ">{{ ondData.teamAmt | formatMoney }}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- center -->
			<view class="centen_moudel pb-30 mt-10">
				<view class="moudel_width">
					<!-- 公告栏 -->
					<view class="flex gong_g_m">
						<view class="img_cnter"><image src="../../../static/images/icon/notice.png" style="width: 125upx;height: 44upx;" mode=""></image></view>
						<!-- 公告内容 -->
						<view class="uni-swiper-msg ml-20 wp-70">
							<swiper class="swiper" vertical="true" autoplay="false" duration="500" interval="2000">
								<swiper-item v-for="(item, index) in msg" :key="index" class="swiper_item_font text_hidden ">
									<view @tap="goUrlPage('msg')">{{ item.title }}</view>
								</swiper-item>
							</swiper>
						</view>
					</view>
					<!-- 公告栏end -->

					<!-- 轮播 -->
					<view class="mt-30">
						<swiper style="height: 150upx;" class="" :indicator-dots="false" :circular="true" :autoplay="true" interval="4500" duration="1000">
							<swiper-item v-for="(item, index) in swiperList" :key="index">
								<image :src="item.url" mode="aspectFill" v-if="item.type == 'image'" class="image_s"></image>
								<!-- <video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video> -->
							</swiper-item>
						</swiper>
					</view>
					<!-- 结束 -->
					<view class="moudel_bottom">
						<view class="flex">
							<view @click="swichTab(item.id)" class="tab_item" v-for="(item, index) in tabList" :key="index">
								<view class="color-99 fs-30" :class="tabFalg == item.id ? 'color-33 fw-700' : ''">{{ item.name }}</view>
								<view v-if="tabFalg == item.id" class="border_bt"></view>
							</view>
						</view>

						<!-- 收益数据 -->
						<view class="pl-30 pr-30" @click="goUrlPage('revenueList')">
							<view class="flex justify-between">
								<view class="wp-60">
									<view class="fs-26 color-aa mt-10">收益汇总{{ ondData.allAmt | formatMoneyName }}</view>
									<view class=" color-33 fs-54 fw-700">{{ ondData.allAmt | formatMoney }}</view>
								</view>

								<view class="flex">
									<view class="fs-22 color-99 mt-8">查看详情</view>
									<view class="ml-20 "><image style="width: 10upx;height: 16upx;" src="../../../static/images/icon/right6.png" mode=""></image></view>
								</view>
							</view>

							<view class="flex mt-30">
								<view class="wp_33">
									<view class="fs-26 color-aa">交易总量{{ ondData.tradGross | formatMoneyName }}</view>
									<view class="fs-44 color-33 fw-700">{{ ondData.tradGross | formatMoney }}</view>
								</view>
								<view class="wp_33">
									<view class="fs-26 color-aa">交易分润{{ ondData.profitShareAmt | formatMoneyName }}</view>
									<view class="fs-44 color-33 fw-700">{{ ondData.profitShareAmt | formatMoney }}</view>
								</view>
							</view>
							<view class="flex ">
								<view class="wp_33">
									<view class="fs-26 color-aa">推广奖励{{ ondData.promoteAmt | formatMoneyName }}</view>
									<view class="fs-44 color-33 fw-700">{{ ondData.promoteAmt | formatMoney }}</view>
								</view>
								<view class="wp_33">
									<view class="fs-26 color-aa">激活奖励{{ ondData.activationAmt | formatMoneyName }}</view>
									<view class="fs-44 color-33 fw-700">{{ ondData.activationAmt | formatMoney }}</view>
								</view>
								<view class="wp_33">
									<view class="fs-26 color-aa">达标奖励{{ ondData.reachAmt | formatMoneyName }}</view>
									<view class="fs-44 color-33 fw-700">{{ ondData.reachAmt | formatMoney }}</view>
								</view>
							</view>
							<view class="flex">
								<view class="wp_33">
									<view class="fs-26 color-aa">新增代理(人)</view>
									<view class="fs-44 color-33 fw-700">{{ ondData.newAgency | formatMoney }}</view>
								</view>
								<view class="wp_33">
									<view class="fs-26 color-aa">新增用户(人)</view>
									<view class="fs-44 color-33 fw-700">{{ ondData.newUser | formatMoney }}</view>
								</view>
								<view class="wp_33">
									<view class="fs-26 color-aa">新增激活(台)</view>
									<view class="fs-44 color-33 fw-700">{{ ondData.newActivate | formatMoney }}</view>
								</view>
							</view>
						</view>
					</view>

					<view class="fs-34 fw-700 mt-30">奖励领取</view>
					<view class="flex mt-30">
						<view class="" @click="goReward"><image class="img_btn" src="../../../static/images/icon/home-by11.png" mode=""></image></view>
						<view class=" ml-30" @click="goApply"><image class="img_btn" src="../../../static/images/icon/home-by2.png" mode=""></image></view>
					</view>
				</view>
			</view>

			<!-- 悬浮按钮 -->
			<hch-menu @menuClick="floatTouchClick" />
			<hover-menu :contentHeight="cHeight" @tabItemTap="floatTouchClick"></hover-menu>
		</view>
		<!-- 左面菜单 -->
		<view class="DrawerWindow" :class="modalName == 'viewModal' ? 'show' : ''">
			<view class="bg-fa">
				<view class="moudel_width5 pt-80" style="min-height: 100vh;">
					<view class="flex justify-between">
						<view class="flex">
							<view @click="hideModal" class="" style="width: 80upx;height: 80upx;">
								<image class="wh-100" src="../../../static/images/icon/menu.png" mode=""></image>
							</view>
							<view class="ml-20" @click="goUrlPage('user')">
								<view class="fs-30">赵**</view>
								<view class="fs-24">代理商编号：20385177</view>
							</view>
						</view>

						<view class="mt-20"><image style="width: 14upx;height: 22upx;" src="../../../static/images/icon/right6.png" mode=""></image></view>
					</view>

					<view class="list_moudel mt-80">
						<view class="border_bottom fs-24 color-99 pb-30">其他</view>
						<view @click="goUrl(item.url)" v-for="(item, index) in myList" :key="index" :class="index == '0' ? 'mt-30' : ''" class="flex justify-between pb-60 ">
							<view class="flex">
								<image class="mt-10" style="width: 26upx;height: 30upx;" :src="item.icon" mode=""></image>
								<view class="ml-40">{{ item.title }}</view>
							</view>
							<view class=""><image style="width: 10upx;height: 18upx;" src="../../../static/images/icon/right3.png" mode=""></image></view>
						</view>
					</view>

					<!-- <view class="colse_btn" @click="goUrlPage('login')">退出登录</view> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import hoverMenu from '../../../components/hover-menu.vue';
// import helper from '../../../common/public.js';
export default {
	components: {
		hoverMenu
	},
	data() {
		return {
			cHeight: 0, //获取内容高度
			modalName: 'null',
			myList: [
				{ icon: '../../../static/images/icon/my_list1.png', title: '钱包', url: 'wallet' },
				{ icon: '../../../static/images/icon/my_list1.png', title: '收货地址', url: 'user/address' },
				{ icon: '../../../static/images/icon/my_list2.png', title: '安全管理', url: 'user/security' },
				{ icon: '../../../static/images/icon/my_list3.png', title: '晋升说明', url: 'user/promotion' },
				{ icon: '../../../static/images/icon/my_list4.png', title: '意见反馈', url: 'user/feedback' },
				{ icon: '../../../static/images/icon/my_list5.png', title: '检查更新' },
				{ icon: '../../../static/images/icon/my_list6.png', title: '关于我们', url: 'user/about' }
			],
			msg: [{ title: '但是积分啦空间建立开放解开了但是积分啦空间建立开放解开了但是积分啦空间建立开放解开了' }, { title: 'jflksaj klj s决定分开了撒娇接口' }],
			tabList: [{ name: '昨日', id: '4' }, { name: '今日', id: '5' }],
			tabFalg: 5,
			swiperList: [
				{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				},
				{
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg'
				},
				{
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				},
				{
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				},
				{
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				},
				{
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				},
				{
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}
			],
			ondData: ''
		};
	},
	onLoad() {
		let numberCard = '6215590603009119061';
		console.log(this.$bankType(numberCard));
		this.getOneData();
	},
	mounted() {
		const query = uni.createSelectorQuery().in(this);
		query
			.select('#contHieght')
			.boundingClientRect(data => {
				console.log('得到布局位置信息' + JSON.stringify(data));
				console.log('节点离页面顶部的距离为' + data.height);
				this.cHeight = data.height;
			})
			.exec();
	},
	onHide() {
		uni.showTabBar(); //显示tab
	},
	methods: {
		// 获取首页数据
		getOneData: function() {
			let data = {
				agencyId: uni.getStorageSync('agencyId'),
				agentId: uni.getStorageSync('userId'),
				flag: this.tabFalg
			};
			this.$http.get('/v1/notice/selectHomePage', data, true, true).then(res => {
				if (res.data.code == 200) {
					console.log(res.data);
					this.ondData = res.data.data;
				}
			});
		},

		// 打开外部链接
		openUrl: function() {
			let Url = 'https://api.lovecantouch.com/wxmp/webgl/customizations.html?spuid={{spuid}}&user_uid={{uid}}&user_sessionid={{sessionid}}#wechat_redirect';
			// #ifdef H5
			console.log('我是H5');
			window.location.href = Url;
			// #endif
			//#ifdef APP-PLUS
			console.log('我是app');
			plus.runtime.openURL(Url);
			//#endif
			//#ifdef MP-TOUTIAO
			uni.navigateTo({
				url: '../../outWeb/outWeb'
			});
			//#endif
			//#ifdef MP-WEIXIN
			uni.navigateTo({
				url: '../../outWeb/outWeb'
			});
			//#endif
		},

		// 悬浮点击
		floatTouchClick(e) {
			console.log(e + '应用');
			let url = '';
			switch (e) {
				case 1:
					url = '';
					break;
				case 2:
					url = 'newlyAdded';
					break;
				case 3:
					url = 'wallet';
					break;
				default:
					url = '';
			}
			if (url)
				uni.navigateTo({
					url: './' + url
				});
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
		swichTab: function(item) {
			this.tabFalg = item;
			this.getOneData()
		},
		// 页面跳转
		goUrlPage: function(url) {
			this.modalName = null;
			uni.navigateTo({
				url: '../../' + url + '/' + url
			});
		},
		// 个人中心页面跳转
		goUrl: function(url) {
			console.log(url);
			this.modalName = null;
			if (url == 'wallet') {
				uni.navigateTo({
					url: './wallet'
				});
			} else {
				uni.navigateTo({
					url: '../../' + url
				});
			}
		},

		// 去极具申领
		goApply: function() {
			uni.navigateTo({
				url: '../three/apply'
			});
		},
		// 去达标奖励
		goReward: function() {
			uni.navigateTo({
				url: './reward'
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
.right_img {
	width: 34upx;
	height: 34upx;
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
.top_moudel_list {
	background-color: #333333;
	border-radius: 10upx;
	padding-top: 30upx;
	padding-bottom: 30upx;
	.right_one {
		border-right: 1px solid #666666;
	}
}
.centen_moudel {
	background-color: #fafafa;
	border-top-left-radius: 30upx;
	border-top-right-radius: 30upx;
	margin-top: -50upx;
	padding-top: 30upx;
}

// 通知栏

.gong_g_m {
	background: #ffffff;
	padding-left: 2%;
	height: 88upx !important;
	line-height: 88upx;
	border-radius: 14upx;
	padding-left: 30upx;
}

.img_cnter {
	text-align: center;
	height: 44upx;
	width: 25%;
	margin-top: 20upx;
	border-right: 1px solid #ebebeb;
}

.swiper_item_font {
	color: #333333;
	font-size: 26upx;
	margin-left: 2%;
}

.image_s {
	height: 150upx;
	border-radius: 20upx;
	width: 100%;
}
.moudel_bottom {
	background-color: #ffffff;
	border-radius: 14upx;
	margin-top: 30upx;
	padding-bottom: 30upx;
}
.tab_item {
	width: 50%;
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
	margin-left: 44.5%;
}
.img_btn {
	width: 330upx;
	height: 160upx;
	opacity: 1;
	background: #ffffff;
	border-radius: 14upx;
	box-shadow: 0upx 2upx 12upx 0upx rgba(0, 0, 0, 0.1);
}
</style>
