<template>
	<view>
		<cu-custom bgColor="bg-2d-2d" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">机具列表</block>
			<block slot="right">
				<view class=" mr-30 fs-30 color-ff  flex justify-end" @click="openMoudel">
					<view class="mt-10">筛选</view>
					<view class="ml-10 mt-10"><image style="width: 30upx;height: 32upx;" src="../../../static/images/icon/screen.png" mode=""></image></view>
				</view>
			</block>
		</cu-custom>

		<view class="moudel_width">
			<view class="flex input_list mt-20">
				<view class="wp-10 text-center mt-10"><image style="width: 26upx;height: 30upx;" src="../../../static/images/icon/search.png" mode=""></image></view>
				<view class="wp-80 pl-10">
					<input @input="getSearch" type="text" :value="searchD" placeholder="请输入机具序列号" placeholder-style="color:#999999;font-size:30upx" />
				</view>
				<view class="wp-10 text-center" v-if="searchD.length > 1" @click="closeI">
					<image style="width: 30upx;height: 30upx;" src="../../../static/images/icon/colse.png" mode=""></image>
				</view>
			</view>
			<view v-for="(item, index) in [1, 2, 3]" :key="index" class="pt-20 pb-20 border_bottom">
				<view class="flex">
					<view class="mt-10" v-if="false"><image style="width: 80upx;height: 34upx;" src="../../../static/images/icon/list1.png" mode=""></image></view>
					<view class="mt-10"><image style="width: 80upx;height: 34upx;" src="../../../static/images/icon/list2.png" mode=""></image></view>
					<view class="fs-30 color-33 fw-700 ml-20">魔方</view>
				</view>
				<view class="flex">
					<view class="mt-10"><image style="width: 130upx;height: 115upx;" src="../../../static/images/icon/three2.png" mode=""></image></view>
					<view class="ml-25">
						<view class="flex">
							<view class="fs-26 color-99">机具号：</view>
							<view class="fs-26 color-33">00003102962002298325</view>
						</view>
						<view class="flex">
							<view class="fs-26 color-99">活动类型：</view>
							<view class="fs-26 color-33">考拉宝3.0传统非押版活动</view>
						</view>
						<view class="flex">
							<view class="fs-26 color-99">激活倒计时：</view>
							<view class="fs-26 color-33">仅剩-180天</view>
						</view>
					</view>
				</view>
				<view class="flex justify-end" @click="goDetail">
					<view class="list_btn mt-20 mr-20">极具划拨</view>
					<view class="list_btn mt-20">详情查询</view>
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
						<view class="fs-42  ml-20 fw-700">品牌</view>
					</view>
					<view class="">
						<view class="item_font" @click="tabOne(item.type)" :class="tabType == item.type ? 'color-f5 fw-700' : ''" v-for="(item, index) in itemTab" :key="index">
							{{ item.title }}
						</view>
					</view>
					<view class="flex mt-30">
						<view style="background-color: #70CC81;" class="left_flag mt-25 "></view>
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
			searchD: '',
			picker: [{ name: '机具类型', id: '1' }, { name: '状态', id: '2' }, { name: '活动', id: '3' }],
			index: 1,
			moudelFalg:false,
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
		};
	},
	methods: {
		openMoudel:function(){
			this.moudelFalg = true
		},
		colseModel:function(){
			this.moudelFalg =false
		},
		// 获取搜索值
		getSearch: function(e) {
			this.searchD = e.target.value;
		},
		closeI: function() {
			this.searchD = '';
		},
		goBack: function() {
			uni.navigateBack({
				delta: 1
			});
		},
		goDetail: function() {
			uni.navigateTo({
				url: './machinesDetail'
			});
		}
	}
};
</script>

<style lang="less">
page {
	background-color: #fafafa;
}
.input_list {
	background-color: #eeeeee;
	height: 68upx;
	border-radius: 50upx;
	line-height: 68upx;
	align-items: center;
	padding-left: 20upx;
	padding-right: 20upx;
	color: #999999;
}
.list_btn {
	width: 120upx;
	height: 44upx;
	opacity: 1;
	background: #ffffff;
	border: 1px solid #f55050;
	border-radius: 7upx;
	line-height: 44upx;
	text-align: center;
	font-size: 22upx;
	color: #f55050;
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
