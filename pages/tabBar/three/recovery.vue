<template>
	<view>
		<cu-custom bgColor="bg-2d-2d" :isBack="true"><block slot="content">机具划拨</block></cu-custom>
		<view class="bg-2d-2d pt-30 pb-60">
			<view class="flex ">
				<view @click="swichListTab(item.id)" class="tab_item wp-50" v-for="(item, index) in tabOneList" :key="index">
					<view class=" fs-30" :class="listFalg == item.id ? ' fw-700 color-ff' : ''">{{ item.title }}</view>
					<view v-if="listFalg == item.id" class="border_bt" style="margin-left: 44%;"></view>
				</view>
			</view>
		</view>

		<view class="moudel_list_number">
			<!-- 选择划拨 -->
			<view class="moudel_width ">
				<view class="flex justify-between border_bottom pb-20 pt-20">
					<view class="fs-30">机具品牌</view>
					<view class="">
						<view class="flex">
							<picker class="wp-80" @change="PickerChange" :value="index" :range="picker" :range-key="'name'">
								<view class="picker color-99 fs-30">{{ index > -1 ? picker[index].name : '请选择' }}</view>
							</picker>
							<view class="ml-20"><image style="width: 16upx;height: 10upx;" src="../../../static/images/icon/down99.png" mode=""></image></view>
						</view>
					</view>
				</view>
				<view class="flex justify-between border_bottom pb-20 pt-20">
					<view class="fs-30">机具型号</view>
					<view class="">
						<view class="flex">
							<picker class="wp-80" @change="PickerChange" :value="index" :range="picker" :range-key="'name'">
								<view class="picker color-99 fs-30">{{ index > -1 ? picker[index].name : '请选择' }}</view>
							</picker>
							<view class="ml-20"><image style="width: 16upx;height: 10upx;" src="../../../static/images/icon/down99.png" mode=""></image></view>
						</view>
					</view>
				</view>
				<view class="flex justify-between border_bottom pb-20 pt-20" v-if="listFalg == 1">
					<view class="fs-30">机具SN号</view>
					<view class="fs-30 color-99 text-right"><input type="text" value="" placeholder-class="fs-30 color-99" placeholder="请输入机具SN号" /></view>
				</view>
				<block v-if="listFalg == 2">
					<view class="pb-20 pt-20 fs-30">机具SN号</view>
					<view class="flex mt-30 justify-between picker_moudel ">
						<picker class="wp-80" @change="PickerChange" :value="index" :range="picker" :range-key="'name'">
							<view class="picker color-99 fs-28">{{ index > -1 ? picker[index].name : '请选择起始序列号ID' }}</view>
						</picker>
						<view class="ml-20" style="margin-top: -8upx;">
							<image style="width: 16upx;height: 10upx;" src="../../../static/images/icon/down99.png" mode=""></image>
						</view>
					</view>
					<view class="mt-30" style="height: 30upx;border-left: 1px solid #CCCCCC;margin-left: 50%;"></view>
					<view class="flex mt-30 justify-between picker_moudel ">
						<picker class="wp-80" @change="PickerChange" :value="index" :range="picker" :range-key="'name'">
							<view class="picker color-99 fs-28">{{ index > -1 ? picker[index].name : '请选择终止序列号ID' }}</view>
						</picker>
						<view class="ml-20" style="margin-top: -8upx;">
							<image style="width: 16upx;height: 10upx;" src="../../../static/images/icon/down99.png" mode=""></image>
						</view>
					</view>
				</block>
				<view class="pb-20 pt-20 fs-30">机具情况</view>
				<view class="pb-20">
					<textarea
						value=""
						placeholder="如：全新未拆箱等"
						placeholder-class="fs-26 color-99"
						class="pl-30 fs-26 color-99 bg-ee wp-100 pt-30"
						style="height: 150upx;border-radius: 10upx;"
					/>
				</view>
				<view class="btn_33">提交</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tabOneList: [{ title: '选择回收', id: '1' }, { title: '区间回收', id: '2' }],
			listFalg: 1,
			picker: [{ name: '终端维度', id: '1' }, { name: '结算类型', id: '2' }, { name: '活动类型', id: '3' }, { name: '终端属性', id: '3' }],
			index: -1
		};
	},
	onLoad() {},
	methods: {
		swichListTab: function(e, index) {
			console.log(e);
			this.listFalg = e;
		}
	}
};
</script>

<style lang="less">
page {
	background: #ffffff;
}
.moudel_bgff {
	background: #ffffff;
	border-radius: 14upx;
}
.wp-16 {
	width: 16% !important;
}
.tab_item {
	text-align: center;
	display: inline-block;
	color: #cccccc;
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
.moudel_list_number {
	opacity: 1;
	background: #ffffff;
	border-radius: 30upx 30upx 0 0;
	margin-top: -30upx;
}
.btn_33 {
	line-height: 88upx;
	color: #ffffff;
	font-size: 30upx;
	text-align: center;
	height: 88upx;
	opacity: 1;
	background: #2d2d2d;
	border-radius: 44upx;
	margin-top: 40upx;
}
.picker_moudel {
	background-color: #eeeeee;
	height: 68upx;
	border-radius: 50upx;
	width: 100%;
	align-items: center;
	padding-left: 30upx;
	padding-right: 30upx;
}
</style>
