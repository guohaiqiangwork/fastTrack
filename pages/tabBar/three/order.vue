<template>
	<view class="pb-80">
		<!-- 采购单 -->
		<block v-if="title == '采购单'">
			<view class="">
				<image src="../../../static/images/bjt.png" mode="" class="image_width"></image>
				<view class="login_moudel">
					<view class="flex justify-between fs-25 color-29 pt-30 ">
						<view class="">
							<view class="fw-600">发货人信息</view>
							<view class="">河北兴农谷物销售有限公司</view>
						</view>
						<view class=""><image style="width: 69upx;height: 69upx;" src="../../../static/images/three.png" mode=""></image></view>
					</view>

					<view class=" bor_bottom pb-20">62166102000****7010</view>
					<view class=" fw-700 mt-10">收货人信息</view>
					<view class="mt-10">名称：石家庄市金谷粮食加工厂</view>
					<view class="flex mt-10">
						<view class="wp-50">联系人：张三三</view>
						<view class="">电话：13022335566</view>
					</view>
					<view class="mt-10">地址：石家庄市桥西区红旗大街与南二环交口南行500米 金 谷粮食加工厂</view>
				</view>
			</view>

			<view class="moudel_list pt-30 pb-20 color-ff fs-25" style="background-color: #CAB88F;border-radius: 0;">
				<view class="flex justify-between pb-10 " style="border-bottom: 1px solid #FFFFFF;">
					<view class="">订单号：2021122000001</view>
					<view class="">日期：2021-12-20</view>
				</view>
				<view class="mt-15">货运信息</view>
				<view class="">名称：刘师傅</view>
				<view class="flex">
					<view class="wp-40">车牌号：冀A12345</view>
					<view class="">电话：13022335566</view>
				</view>
				<view class="">运费：100.00元</view>
			</view>

			<view class="moudel_width mt-50">
				<view class="moudel_list fs-25" style="border-radius: 0;">
					<view class="pt-20" v-for="(item, index) in productlist" :key="index">
						<view class="flex justify-between">
							<view class=" color-29 fw-700">
								名称：{{ item.name }}
								<input v-if="item.type != 1" @input="getName" type="text" v-model="item.name" value="item.name" placeholder="请输入名称" />
							</view>
							<view class="color-98" @click="okList(index)" v-if="item.type != 1">确认</view>
							<!-- <view class=" color-e7" @click="delList(index)" v-else>删除</view> -->
						</view>
						<view class="flex  bor_bottom_s pb-20" style="color: #979D9F;">
							<view class="">
								单价：{{ item.price }}
								<input v-if="!item.price" type="text" value="" placeholder="请输入单价" />
							</view>
							<view class="">
								数量：{{ item.size }}
								<input v-if="!item.size" type="text" value="" placeholder="请输入数量" />
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="moudel_width">
				<view class="btn_bd_t">总金额：1250000.00（元）</view>
				<block v-if="model != 8">
					<view class="two_btn" v-if="model != 5">
						<view class="wp-50" style="border-right: 1px solid #A77845;">不同意</view>
						<view class="wp-50">同意</view>
					</view>
					<view class="two_btn justify-center" v-else>点击收货</view>
				</block>
				<block v-else>
					<view class="moudel_list mt-40 pt-20">
						<view class="flex ">
							<view class="fs-25 wp-15">备注：</view>
							<view class="wp-80"><textarea style="height: 210upx;" value="" placeholder="请填写备注" /></view>
						</view>
					</view>
				</block>
			</view>
		</block>

		<!-- 销售单 -->
		<block v-else>
			<view class="">
				<image src="../../../static/images/bjt1.png" mode="" class="image_width"></image>
				<view class="login_moudel">
					<view class="flex justify-between fs-25 color-29 pt-30 ">
						<view class="">
							<view class="fw-600">发货人信息</view>
							<view class="">河北兴农谷物销售有限公司</view>
						</view>
						<view class=""><image style="width: 69upx;height: 69upx;" src="../../../static/images/three.png" mode=""></image></view>
					</view>

					<view class=" bor_bottom pb-20">62166102000****7010</view>
					<view class=" fw-700 mt-10">收货人信息</view>
					<view class="mt-10">名称：石家庄市金谷粮食加工厂</view>
					<view class="flex mt-10">
						<view class="wp-50">联系人：张三三</view>
						<view class="">电话：13022335566</view>
					</view>
					<view class="mt-10">地址：石家庄市桥西区红旗大街与南二环交口南行500米 金 谷粮食加工厂</view>
				</view>
			</view>

			<view class="moudel_list pt-30 pb-20 color-ff fs-25" style="background-color: #CAB88F;border-radius: 0;">
				<view class="flex justify-between pb-10 " style="border-bottom: 1px solid #FFFFFF;">
					<view class="">订单号：2021122000001</view>
					<view class="">日期：2021-12-20</view>
				</view>
				<view class="flex justify-between">
					<view class="">
						<view class="mt-15">货运信息</view>
						<view class="">名称：刘师傅</view>
					</view>
					<view class="r_btn" v-if="model != 4 && model != 8" @click="goUrl('transport')">编辑货运信息</view>
				</view>
				<view class="flex">
					<view class="wp-40">车牌号：冀A12345</view>
					<view class="">电话：13022335566</view>
				</view>
				<view class="">运费：100.00元</view>
			</view>

			<view class="moudel_width mt-50">
				<view class="moudel_list fs-25" style="border-radius: 0;">
					<view class="pt-20" v-for="(item, index) in productlist" :key="index">
						<view class="flex justify-between">
							<view class=" color-29 fw-700">
								名称：{{ item.name }}
								<input v-if="item.type != 1" @input="getName" type="text" v-model="item.name" value="item.name" placeholder="请输入名称" />
							</view>
							<view class="color-98" @click="okList(index)" v-if="item.type != 1">确认</view>
							<!-- <view class=" color-e7" @click="delList(index)" v-else>删除</view> -->
						</view>
						<view class="flex  bor_bottom_s pb-20" style="color: #979D9F;">
							<view class="">
								单价：{{ item.price }}
								<input v-if="!item.price" type="text" value="" placeholder="请输入单价" />
							</view>
							<view class="">
								数量：{{ item.size }}
								<input v-if="!item.size" type="text" value="" placeholder="请输入数量" />
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="moudel_width">
				<view class="btn_bd_t">总金额：{{model}}1250000.00（元）</view>
				<block v-if="model != 8">
					<view class="two_btn" v-if="model == 5">
						<view class="wp-50" style="border-right: 1px solid #A77845;">不同意</view>
						<view class="wp-50">同意</view>
					</view>
					<view class="two_btn justify-center" v-else>
						{{model == 4 ? '发货' : '点击收货'}}
					</view>
				</block>
				<block v-else>
					<view class="moudel_list mt-40 pt-20">
						<view class="flex ">
							<view class="fs-25 wp-15">备注：</view>
							<view class="wp-80"><textarea style="height: 210upx;" value="" placeholder="请填写备注" /></view>
						</view>
					</view>
				</block>
			</view>
		</block>
	</view>
</template>

<script>
export default {
	data() {
		return {
			productlist: [
				{
					name: '硬粟（1级）',
					price: '4.3（元/KG）',
					size: '4000（KG）',
					type: 1
				}
			]
		};
	},
	onLoad(option) {
		console.log(option);
		this.model = option.type;
		this.title = option.title;
		if (option.listName) {
			this.listName = option.listName;
		}
		uni.setNavigationBarTitle({
			title: this.title
		});
	},

	methods: {
		tabOne: function(item) {
			this.typeTab = item;
		},
		delList: function(item) {
			this.productlist.splice(item);
		},
		goUrl: function(item) {
			uni.navigateTo({
				url: './' + item
			});
		},
		getName: function(e, index) {
			console.log(e.detail.value);
		},
		okList: function(item) {
			if (!this.productlist[item].price || !this.productlist[item].size || !this.productlist[item].name) {
				uni.showToast({
					title: '请检查内容',
					time: 2000,
					icon: 'none'
				});
				return;
			}
			this.productlist[item].type = 1;
			this.$set(this.productlist);
		}
	}
};
</script>

<style lang="less">
.image_width {
	position: absolute;
	width: 100%;
	height: 500upx;
}

.login_moudel {
	position: relative;
	width: 90%;
	margin-left: 5%;
}
.r_btn {
	height: 80upx;
	font-size: 25upx;
	color: #a77845;
	line-height: 80upx;
	text-align: center;
	border: 1px solid #a77845z;
	padding-left: 12upx;
	padding-right: 12upx;
	font-weight: 700;
	background-color: #ffffff;
	margin-top: 20upx;
}

.btn_bd_t {
	height: 80upx;
	background: #fbc941;
	border-radius: 10upx;
	text-align: center;
	align-items: center;
	color: #ffffff;
	font-size: 32upx;
	line-height: 80upx;
	// margin-top: -30upx;
}
.two_btn {
	display: flex;
	height: 80upx;
	border-radius: 50upx;
	background-color: #ffffff;
	border: 1px solid #a77845;
	margin-top: 80upx;
	color: #a77845;
	font-size: 32upx;
	text-align: center;
	align-items: center;
	font-weight: 700;
}
.titl_m {
	background-color: #cab88f;
	color: #ffffff;
	font-size: 25upx;
	height: 80upx;
	line-height: 80upx;
	align-items: center;
}
</style>
