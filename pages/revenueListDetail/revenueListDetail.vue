<template>
	<view>
		<cu-custom bgColor="bg-ff" :isBack="true">
			<block slot="content">收益明细</block>
			<block slot="right">
				<view  class="action" @click="seachF">
					<image style="width: 30upx;height: 30upx;" class="mr-10" src="../../static/images/icon/screen.png" mode=""></image>
					筛选
				</view>
			</block>
		</cu-custom>
		<view class="moudel_width">
			<view class="moudel_list mt-30" v-for="(item,index) in [1,2,3]" :key="index" @click="goDetail">
				<view class="fs-30 fw-600">
					商户：  瑞恩娜美容美发
				</view>
				<view class="flex justify-between">
					<view class="fs-26">
						商户编号：812190072300314
					</view>
					<view class="color-f5 fw-600" style="font-size: 45upx;margin-top: -15upx;">
						+550.00
					</view>
				</view>
				<view class="fs-30 ">
					S/N：：  00002402066688009462
				</view>
				
			</view>
		</view>
		<!-- 日期选择期 -->
		<tn-date-picker
			:beforeDateDisable="false"
			color="rgb(230,86,86)"
			:show="showPicker"
			:format="'yyyy-mm-dd'"
			:monthNum="6"
			:value="value"
			:show-tips="true"
			:begin-text="'开始'"
			:end-text="'结束'"
			@confirm="onSelected"
			@cancel="onSelected"
		/>
	
	</view>
</template>

<script>
export default {
	data() {
		return {
			showPicker: false,
			date: ['2021/01/01', '2021/01/06'],
			value: ['2021/01/01', '2021/01/06'],
			
			searchFalg:false
		};
	},
	methods: {
		// 筛选
		seachF:function(){
			this.searchFalg = !this.searchFalg
		},
		// 时间显示
		onShowDatePicker: function() {
			//显示
			this.showPicker = true;
		},
		// 时间选择
		onSelected: function(e) {
			//选择
			this.showPicker = false;
			if (e) {
				this.date = e.value;
				//选择的值
				console.log('value => ' + e.value);
				//原始的Date对象
				console.log('date => ' + e.date);
			}
		},
		goDetail:function(data){
			let da = '33'
			uni.navigateTo({
				url:'../revenueDetailed/revenueDetailed?id=' + da
			})
		}
	}
};
</script>

<style lang="less">
	page{
		background-color: #FAFAFA;
	}
</style>
