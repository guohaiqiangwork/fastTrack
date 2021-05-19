<template>
	<view>
		<view class="moudel_width">
			<view class="color-33" v-for="(items, index) in listMoudel" :key="index">
				<view class="fs-30 mt-30">{{ items.title }}</view>
				<view  v-for="(item, index) in items.list" :key="index" class="moudel_list flex justify-between mt-30">
					<view class="fs-28" @tap="openM('1')">{{ item.name }}</view>
					<view class="flex">
						<view class="mr-20" v-if="item.number != 0" @click="add('dwon', item)">
							<image class="img_m" src="../../../static/images/icon/jian.png" mode=""></image>
						</view>
						<view class="" style="line-height: 1.5;">{{ item.number }}</view>
						<view class="ml-20" @click="add('up', item)"><image class="img_m" src="../../../static/images/icon/jia.png" mode=""></image></view>
					</view>
				</view>
			</view>
		</view>

		<view class="flex bt_m">
			<view class="wp-20">
				<view class="number_m">66</view>
				<image style="width: 120upx;height: 120upx;border-radius: 50%;margin-top: -10upx;" src="../../../static/images/icon/shop.png" mode=""></image>
			</view>
			<view class="wp-80 btn" @click="openM('2')">立即申领</view>
		</view>

		<!-- 详情 -->
		<view class="cu-modal bottom-modal" :class="modalName == '1' ? 'show' : ''" @tap="hideModal">
			<view class="cu-dialog pt-30" style="border-radius: 30upx 30upx 0 0;">
				<view class="moudel_width">
					<view class="flex mt-20">
						<view class="fs-36 fw-600 wp-60 text-right">机具详情</view>
						<view @click="hideModal" class="mt-15 wp-30 text-right">
							<image style="width: 30upx;height: 30upx;" src="../../../static/images/icon/colse99.png" mode=""></image>
						</view>
					</view>
					<view class="mt-30 flex pb-30" style="align-items: center;">
						<view class="wp-40 text-center"><image style="width: 240upx;height: 240upx;" src="../../../static/images/bj.png" mode=""></image></view>
						<view class="fs-28 color-33 ml-20 wp-50 text-center">
							机具政策机具政策机具政策机具政策机具政策机具政策机具政策机具政策机具政策机具政策机具政策机具政策机具政策机具政策机具政策机具政策机具政策机具政策机具政策机具政策机具政策政策机具政策机具政策机具政策机具政策机具政策机具政策机具政策机具政策机具政策机具
							政策机具政策机具政策机具政策
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 支付方式 -->
		<view class="cu-modal " :class="modalName == '2' ? 'show' : ''" >
			<view class="cu-dialog pt-30 bg-ff">
				<view class="moudel_width">
					<view class="moudel_list">
						<view class="flex ">
							<view class="mt-15 wp-15" @tap="hideModal"><image style="width: 30upx;height: 30upx;" src="../../../static/images/icon/colse99.png" mode=""></image></view>
							<view class="fs-36 fw-600 wp-65 ml-20 text-center">支付方式</view>
						</view>

						<view class="fs-26 mt-20 ">需支付</view>
						<view class="fs-60 fw-600 " style="line-height: 1;">￥100.00</view>

						<view class="flex justify-between mt-30">
							<view class="flex"> 
								<view class="mt-5"><image style="width: 42upx;height: 42upx;" src="../../../static/images/icon/wxp.png" mode=""></image></view>
								<view class="fs-30 ml-30">微信支付</view>
							</view>
							<view class="">
								<checkbox-group @change="changeCheckbox('q')">
									<label>
										<checkbox value="String(item)" :class="{ checked: oneCheckedq }" :checked="oneCheckedq ? true : false"></checkbox>
									</label>
								</checkbox-group>
							</view>
						</view>
						<view class="flex justify-between mt-30 border_bottom pb-30">
							<view class="flex"> 
								<view class="mt-5"><image style="width: 42upx;height: 42upx;" src="../../../static/images/icon/zfp.png" mode=""></image></view>
								<view class="fs-30 ml-30">微信支付</view>
							</view>
							<view class="">
								<checkbox-group @change="changeCheckbox('q')">
									<label>
										<checkbox value="String(item)" :class="{ checked: !oneCheckedq }" :checked="!oneCheckedq ? true : false"></checkbox>
									</label>
								</checkbox-group>
							</view>
						</view>
						
						<view class="m_btn" @click="goResult">
							确认支付
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
			number: 0,
			modalName: null,
			oneCheckedq:false,
			listMoudel: [
				{
					title: '快钱',
					list: [
						{
							name: '考拉宝3.0传统POS机',
							number: 0
						},
						{
							name: '智能POS',
							number: 0
						}
					]
				},
				{
					title: '乐刷',
					list: [
						{
							name: '传统POS',
							number: 0
						},
						{
							name: '智能POS',
							number: 0
						}
					]
				}
			]
		};
	},
	methods: {
		add: function(type, item) {
			if (type == 'dwon') {
				item.number -= 1;
			} else {
				item.number += 1;
			}
		},
		openM: function(item) {
			this.modalName = item;
		},
		hideModal: function() {
			this.modalName = null;
		},
		
		changeCheckbox:function(){
			this.oneCheckedq = !this.oneCheckedq
		},
		// 去申请结果
		goResult: function() {
			uni.navigateTo({
				url:'./result'
			})
		}
	}
};
</script>

<style lang="less">
.img_m {
	width: 30upx;
	height: 30upx;
	border-radius: 50%;
}
.bt_m {
	position: absolute;
	bottom: 0;
	width: 92%;
	margin-left: 4%;
	height: 150upx;
	.btn {
		color: #ffffff;
		font-size: 30upx;
		height: 88upx;
		opacity: 1;
		background: #f55050;
		border-radius: 44upx;
		line-height: 88upx;
		text-align: center;
	}
	.number_m {
		height: 28upx;
		opacity: 1;
		background: #f55050;
		border-radius: 14upx;
		text-align: center;
		line-height: 28upx;
		color: #ffffff;
		font-size: 22upx;
		padding-left: 10upx;
		padding-right: 10upx;
		position: absolute;
		z-index: 9;
		margin-left: 70upx;
	}
}
.m_btn{
	width: 300upx;
	height: 88upx;
	opacity: 1;
	background: #2d2d2d;
	border-radius: 44upx;
	line-height: 88upx;
	text-align: center;
	line-height: 88upx;
	color: #FFFFFF;
	font-size: 30upx;
	margin-top: 30upx;
	margin-left: 150upx;
}
</style>
