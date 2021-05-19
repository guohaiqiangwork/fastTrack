<template>
	<view>
		
		<view class="DrawerPage" :class="modalName == 'viewModal' ? 'show' : ''">
			<view class="pb-30">
				<!-- top -->
				<view class="bg-2d" style="padding-top: var(--status-bar-height)">
					<view class="moudel_width pt-30 pb-30">
						<!-- 头信息 -->
						<view class="flex justify-between">
							<view class="flex wp-80">
								<view class="left_img" @tap="showModal" data-target="viewModal"><image class="wh-100" src="../../../static/images/icon/menu.png" mode=""></image></view>
								<view class="fs-34 color-ff mt-15 ml-30 text-cut">知者创物科技</view>
								<view class="vip_img ml-20 mt-20"><image class="wh-100" src="../../../static/images/vip.png" mode=""></image></view>
							</view>
						</view>
						<!-- 极具 -->
						<view class="flex justify-between mt-30">
							<view class="flex">
								<view class="left_flag bg-f5"></view>
								<view class="fs-28 color-aa ml-20">总机具数（台）</view>
							</view>
							<view class="flex" @click="goPageUrl('machines')">
								<view class="fs-22 color-ff mt-8">查看详情</view>
								<view class="ml-20 "><image style="width: 10upx;height: 16upx;" src="../../../static/images/icon/rightf.png" mode=""></image></view>
							</view>
						</view>
						<view class="fs-60 fw-700 color-ff">146</view>
				
						<view class="flex">
							<view class="flex wp-50">
								<view class="left_flag bg-3c"></view>
								<view class="fs-28 color-aa ml-20">总开通数（台）</view>
							</view>
							<view class="flex wp-50">
								<view class="left_flag bg-fc"></view>
								<view class="fs-28 color-aa ml-20">未开通数（台）</view>
							</view>
						</view>
						<view class="flex color-ff" style="font-size: 44upx;">
							<view class="wp-50">100</view>
							<view class="wp-50">100</view>
						</view>
				
					</view>
				</view>
				<!-- 选择列表 -->
				<view class="moudel_width">
					<view class="tab_moudel mt-30">
						<view class="flex">
							<view class="tab_item" @click="goPageUrl(item.url)" style="width: 25%;" v-for="(item, index) in tabList" :key="index">
								<view class=""><image :src="item.icon" style="width:48upx;height: 48upx;" mode=""></image></view>
								<view class="fs-26 color-33">{{ item.title }}</view>
							</view>
						</view>
					</view>
					<!-- 激活数据 -->
					<view class="moudel_list mt-30" >
						<scroll-view scroll-x="true" class="wrapper">
							<view :animation="animationData" @click="swichListTab(item.id, index)" class="tab_item" v-for="(item, index) in listTab" :key="index">
								<view class="color-99 fs-30" :class="listFalg == index ? 'color-33 fw-700' : ''">{{ item.title }}</view>
								<view v-if="listFalg == index" class="border_bt"></view>
							</view>
						</scroll-view>
						<!-- 直营 -->
						<view @click="goPageUrl('statistics')" class="border_bottom pb-30">
							<view class="flex">
								<view class="left_flag  bg-3c mt-15"></view>
								<view class="fs-30 color-33 fw-700 ml-20">直营</view>
							</view>
							<view class="flex mt-30">
								<view class="wp_33">
									<view class="fs-28 color-aa">总机具数（台）</view>
									<view class="fs-44 color-33">30</view>
								</view>
								<view class="wp_33">
									<view class="fs-28 color-aa">已激活（台）</view>
									<view class="fs-44 color-33">30</view>
								</view>
								<view class="wp_33">
									<view class="fs-28 color-aa">未激活（台）</view>
									<view class="fs-44 color-33">30</view>
								</view>
							</view>
						</view>
						<!-- 非直营 -->
						<view  class=" pt-30">
							<view class="flex justify-between">
								<view class="flex">
									<view class="left_flag  bg-fc mt-15"></view>
									<view  class="fs-30 color-33 fw-700 ml-20">团队</view>
								</view>
								<view class="flex" @click="goPageUrl('statisticsDetail')">
									<view class="fs-22 color-99 mt-8">
										查看详情
									</view>
									<view class="ml-10 ">
										<image style="width: 10upx;height: 16upx;" src="../../../static/images/icon/right6.png" mode=""></image>
									</view>
								</view>
								
							</view>
							<view class="flex mt-30">
								<view class="wp_33">
									<view class="fs-28 color-aa">总机具数（台）</view>
									<view class="fs-44 color-33">30</view>
								</view>
								<view class="wp_33">
									<view class="fs-28 color-aa">已激活（台）</view>
									<view class="fs-44 color-33">30</view>
								</view>
								<view class="wp_33">
									<view class="fs-28 color-aa">未激活（台）</view>
									<view class="fs-44 color-33">30</view>
								</view>
							</view>
						</view>
					</view>
				
					<!-- 风险预警 -->
					<view class="moudel_list mt-30" @click="goPageUrl('riskWarning')">
						<view class="flex justify-between">
							<view class="mt-10"><image style="width: 177upx;height: 42upx;" src="../../../static/images/icon/threef.png" mode=""></image></view>
							<view class="flex">
								<view class="fs-22 color-99 mt-8">查看详情</view>
								<view class="ml-20 "><image style="width: 10upx;height: 16upx;" src="../../../static/images/icon/right6.png" mode=""></image></view>
							</view>
						</view>
				
						<view class="flex mt-30">
							<view class="wp_33">
								<view class="fs-28 color-aa">总机具数（台）</view>
								<view class="fs-44 color-33">30</view>
							</view>
							<view class="wp_33">
								<view class="fs-28 color-aa">直营（台）</view>
								<view class="fs-44 color-33">30</view>
							</view>
							<view class="wp_33">
								<view class="fs-28 color-aa">非直营（台）</view>
								<view class="fs-44 color-33">30</view>
							</view>
						</view>
						
						
						<!-- 公告栏 -->
						<view class="flex gong_g_m mt-30">
							<view class="img_cnter"><image src="../../../static/images/icon/threey.png" style="width: 125upx;height: 44upx;" mode=""></image></view>
							<!-- 公告内容 -->
							<view class="uni-swiper-msg ml-20 wp-70">
								<swiper class="swiper" vertical="true" autoplay="false" duration="500" interval="2000">
									<swiper-item v-for="(item, index) in msg" :key="index" class="swiper_item_font text_hidden ">
										<view >{{ item.title }}</view>
									</swiper-item>
								</swiper>
							</view>
						</view>
						<!-- 公告栏end -->
					
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
			tabList: [
				{ title: '机具划拨', icon: '../../../static/images/icon/three1.png',url:'transfer' },
				{ title: '机具回收', icon: '../../../static/images/icon/three2.png',url:'recovery' },
				{ title: '机具申领', icon: '../../../static/images/icon/three3.png' ,url:'apply'},
				{ title: '申领记录', icon: '../../../static/images/icon/three4.png',url:'list' }
			],
			listTab: [
				{ title: '全部', id: '1' },
				{ title: '乐刷', id: '2' },
				{ title: '快钱', id: '3' },
				{ title: '金控', id: '4' },
				{ title: '乐刷电签', id: '5' },
				{ title: '未知', id: '6' }
			],
			listFalg: 0,
			animationData: {},
			msg: [{ title: '但是积分啦空间建立开放解开了但是积分啦空间建立开放解开了但是积分啦空间建立开放解开了' }, { title: 'jflksaj klj s决定分开了撒娇接口' }]
		};
	},
	onLoad() {
		// uni.hideTabBar();
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
		},
		// 去极具查询页
		
		goPageUrl:function(url){
			uni.navigateTo({
				url:'./' + url
			})
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

.tab_moudel {
	opacity: 1;
	background: #ffffff;
	border-radius: 10upx;
}
.tab_item {
	width: 20%;
	text-align: center;
	display: inline-block;
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
	margin-left: 35%;
}


.gong_g_m {
	background: #F5F5F5;
	padding-left: 2%;
	height: 82upx !important;
	line-height: 82upx;
	border-radius: 10upx;
	padding-left: 30upx;
}
.img_cnter {
	text-align: center;
	height: 44upx;
	width: 25%;
	margin-top: 20upx;
	border-right: 1px solid #ebebeb;
}
</style>
