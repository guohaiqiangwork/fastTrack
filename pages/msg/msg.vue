<template>
	<view class="">
		<view class="flex bg-ff">
			<view @click="swichTab(item.id)" class="tab_item" v-for="(item, index) in tabList" :key="index">
				<view class="color-99 fs-30" :class="tabFalg == item.id ? 'color-33 fw-700' : ''">{{ item.title }}</view>
				<view v-if="tabFalg == item.id" class="border_bt"></view>
			</view>
		</view>

		<view class="" v-if="productList.length > 0">
			<view class="msg_moudel" v-for="(item, index) in productList" :key="index" @click="goToProduct(item)">
				<view class="border_bottom pb-30">
					<view class="fs-28 ml-30 mr-30 mt-20 text_hidden2 ">{{ item.content }}</view>
				</view>
				<view class="flex justify-between mt-20">
					<view class="flex wp-50">
						<view class="ml-30 fs-26 fw-600 text_hidden ">{{ item.title }}</view>
						<view class="msg_falg" v-if="!item.read"></view>
					</view>
					<view class="mr-30 fs-22 color-99 mt-5">{{ item.createTime }}</view>
				</view>
			</view>
			<!-- 组件加载刷新 -->
			<view v-if="productList.length > 9"><uni-load-more :status="status" :content-text="contentText" color="#007aff" /></view>
		</view>

		<view v-if="productList.length == 0" class="text_center margin_top18">
			<!-- <image src="../../static/image/default/noMsg.png" class="no_img_msg" mode=""></image> -->
			<view class="font_size28 color-99 margin_top5">暂无消息~</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tabList: [
				{
					title: '系统消息',
					id: '1'
				},
				{
					title: '个人消息',
					id: '2'
				}
			],
			tabFalg: 1,

			productList: [
				{
					read: false,
					title: '测试框架测试框架测试框架测试框架',
					createTime: '2010-39-22',
					content:
						'尊敬的合作伙伴：根据人民银行85号文要求，3月起我司将关闭连续多月无交易的终端收单功能，...尊敬的合作伙伴：根据人民银行85号文要求，3月起我司将关闭连续多月无交易的终端收单功能，...尊敬的合作伙伴：根据人民银行85号文要求，3月起我司将关闭连续多月无交易的终端收单功能，...尊敬的合作伙伴：根据人民银行85号文要求，3月起我司将关闭连续多月无交易的终端收单功能，...'
				},
				{
					read: false,
					title: '测试框架测试框架测试框架测试框架',
					createTime: '2010-39-22',
					content:
						'尊敬的合作伙伴：根据人民银行85号文要求，3月起我司将关闭连续多月无交易的终端收单功能，...尊敬的合作伙伴：根据人民银行85号文要求，3月起我司将关闭连续多月无交易的终端收单功能，...尊敬的合作伙伴：根据人民银行85号文要求，3月起我司将关闭连续多月无交易的终端收单功能，...尊敬的合作伙伴：根据人民银行85号文要求，3月起我司将关闭连续多月无交易的终端收单功能，...'
				}
			], //消息列表
			status: 'more',
			statusTypes: [
				{
					value: 'more',
					text: '加载前'
				},
				{
					value: 'loading',
					text: 'loading'
				},
				{
					value: 'noMore',
					text: '没有更多'
				}
			],
			contentText: {
				contentdown: '没有更多',
				contentrefresh: 'loading',
				contentnomore: '没有更多'
			},
			pageNum: 1 //页码
		};
	},
	// 上拉加载
	onReachBottom() {
		let _self = this;
		this.status = 'loading';
		// uni.showNavigationBarLoading()
		this.pageNum = this.pageNum + 1;
		this.getMsgList(); //调取列表
		_self.status = 'more';
		// uni.hideNavigationBarLoading()
	},
	// 下拉刷新
	onPullDownRefresh() {
		console.log('refresh');
		this.pageNum = 1;
		this.getMsgList(); //调取列表
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 1000);
	},

	onLoad() {
		// this.getMsgList(); //调取列表
	},
	onShow() {
		// this.getMsgList(); //获取列表
	},
	mounted() {
		// /this.getMsgList(); //获取列表
	},
	methods: {
		swichTab: function(e) {
			this.tabFalg = e;
		},

		// 去详情
		goToProduct(item) {
			uni.navigateTo({
				url: '../../pages/msgDetails/msgDetails?msgId=' + item.id
			});
		},
		// 获取消息列表
		getMsgList() {
			var keyword = {
				mbId: uni.getStorageSync('userId'),
				page: this.pageNum,
				limit: '10'
			};
			this.$http
				.get('/api/message/list', keyword, true)
				.then(res => {
					if (res.data.code == 200) {
						if (this.pageNum > 1) {
							if (res.data.data.length > 0) {
								this.productList = this.productList.concat(res.data.data);
							}
						} else {
							this.productList = res.data.data;
						}
					}
				})
				.catch(err => {});
		}
	}
};
</script>

<style lang="less">
.tab_item {
	width: 50%;
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
	margin-left: 45%;
}

page {
	background-color: #fafafa;
}
.msg_moudel {
	width: 92%;
	background-color: #ffffff;
	margin-left: 4%;
	border-radius: 20upx;
	-moz-box-shadow: 0px 5px 5px #cccccc;
	-webkit-box-shadow: 0px 0px 5px #cccccc;
	box-shadow: 0px 0px 5px #cccccc;
	margin-top: 4%;
	padding-bottom: 3%;
	padding-top: 3%;
}

.msg_falg {
	background-color: #f55050;
	width: 13upx;
	height: 13upx;
	border-radius: 50%;
	margin-left: 3%;
	margin-top: 5%;
}
</style>
