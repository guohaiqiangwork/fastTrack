<template>
	<view>
		<view class="">
			<view class="">
				<image class="top_img" src="../../../static/images/img/bj.png" mode=""></image>
				<view class="one_moudel">
					<view class="fs-32 color-29 text-center fw-600">石家庄金谷粮食加工厂</view>
					<view class="input_moudel flex mt-30">
						<view class="wp-15 text-center mt-10 mb-10" style="border-right: 1px solid #293539;">
							<image class="mt-15" style="width: 30upx;height: 30upx;" src="../../../static/images/icon/code.png" mode=""></image>
						</view>
						<view class="wp-70 pl-20 fs-25">
							<input type="text" value="" placeholder="请扫描或输入订单码" placeholder-style="font-size:25upx" placeholder-class="color-29" />
						</view>
						<view class="wp-15 right_btn">收费</view>
					</view>

					<view class="flex bg-ff mt-30">
						<view class="wp-50 moudel_list text-center pt-20 pb-20">
							<view class="fs-25 color-29">收入(元)</view>
							<view class="fs-35 color-a7 fw-600">+888888.88</view>
						</view>
						<view class="mt-20" style="width: 1px;height: 69upx;border-right: 1px solid #A77845;"></view>
						<view class="wp-50 moudel_list text-center pt-20 pb-20">
							<view class="fs-25 color-29">支出(元)</view>
							<view class="fs-35 color-a7 fw-600">-888888.88</view>
						</view>
					</view>

					<view class="text-center" @click="goUrl('product')">
						<image style="width: 76upx;height: 76upx;margin-top: -40upx;" src="../../../static/images/img/one.png" mode=""></image>
						<view class="fs-25 color-29" style="line-height: 1;">商品管理</view>
					</view>
				</view>
			</view>
			<view class="mt-40 flex">
				<view @click="tabSwich(1)" :class="active == 1 ? 'color-ff bg-ca' : 'color-a7 bg-ff'" class="wp-42 f-25  left_btn ml-40">销售统计</view>
				<view @click="tabSwich(2)" :class="active == 2 ? 'color-ff bg-ca' : 'color-a7 bg-ff'" class="wp-42 f-25  left_btn ml-40">采购统计</view>
			</view>

			<view class="mt-30 bg-ff">
				<view :class="typeTab == item.type ? 'border_bottom' : ' '" class="tab_item" @click="tabOne(item.type)" v-for="(item, index) in tabList" :key="index">
					{{ item.title }}
				</view>
				<view class="" style="background-color: #979D9F;height: 410upx;"></view>
				<view class="mt-10 ml-20" style="background-color: #F9F6EE;">
					<view class="fs-21" style="line-height: 1.2;" v-if="active == 1">销售商品（种类）</view>
					<view class="fs-21" style="line-height: 1.2;" v-else>采购商品（种类）</view>
					<view class="flex justify-between mt-10">
						<view class="fs-32 color-29 ">11200</view>
						<view class="fs-25 color-a7 mr-20" @click="goUrlD()">点击查看详情</view>
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
			active: 1,
			tabList: [
				{
					title: '金额占比报表',
					type: 1
				},
				{
					title: '商品占比报表',
					type: 2
				}
			],
			typeTab: 1
		};
	},
	methods: {
		tabSwich: function(item) {
			this.active = item;
		},
		tabOne: function(item) {
			this.typeTab = item;
		},
		goUrl:function(item){
			uni.navigateTo({
				url:'./' + item
			})
		},
		goUrlD:function(){
			uni.navigateTo({
				url:'./details?type=' + this.active
			})
		}
	}
};
</script>

<style lang="less">
.top_img {
	position: absolute;
	width: 100%;
	height: 306upx;
}
.one_moudel {
	position: relative;
	width: 80%;
	margin-left: 10%;
	padding-top: 50upx;
}
.input_moudel {
	background-color: #cab88f;
	height: 80upx;
	align-items: center;
	.right_btn {
		height: 80upx;
		background: #a77845;
		opacity: 1;
		border-radius: 0upx 3upx 3upx 0upx;
		font-size: 25upx;
		text-align: center;
		line-height: 80upx;
		color: #ffffff;
	}
}
.left_btn {
	background-color: #ffffff;
	height: 70upx;
	text-align: center;
	line-height: 70upx;
}
.tab_item {
	width: 50%;
	text-align: center;
	height: 70upx;
	line-height: 70upx;
	font-size: 25upx;
	color: #293539;
	display: inline-block;
}

</style>
