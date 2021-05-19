<template>
	<view>
		<cu-custom bgColor="bg-2d-2d" :isBack="true"><block slot="content">商户交易详情</block></cu-custom>

		<view class="bg-2d-m" style="height: 50vh;">
			<view class="moudel_width pt-30">
				<view class="mt-30 moudel_list">
					<view class="flex justify-between fs-30">
						<view class="">
							商户名称
						</view>
						<view class="">
							瑞恩娜美容美发
						</view>
					</view>
					<view class="flex justify-between fs-30 mt-20">
						<view class="">
							商户编号
						</view>
						<view class="">
							822192072301807
						</view>
					</view>
				</view>
				
				<view class="mt-30 moudel_list" v-for="(item,index) in [1,2,3,]" :key="index">
					
					<view class="flex justify-between border_bottom pb-20" @click="tabItem()">
						<view class="">
							2021-07
						</view>
						<view class="flex">
							<view class="fs-30 color-f5">
								￥5000.00
							</view>
							<view class="ml-10">
								<image style="width: 20upx;height: 12upx;" src="../../../static/images/icon/down99.png" mode=""></image>
							</view>
						</view>
					</view>
					<view class="" v-if="listFalg == item.id">
						<view class="flex justify-between fs-30 pt-30" v-for="(item,index) in [1,2,3]" :key="index">
							<view class="">
								2021-07-31
							</view>
							<view class="">
								￥3000.00
							</view>
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
			showPicker: false,
			date: ['2021/01/01', '2021/01/06'],
			value: ['2021/01/01', '2021/01/06'],
			listFalg:''
		};
	},
	methods: {
		tabItem:function(item){
			this.listFalg = item
		}
	}
};
</script>

<style lang="less">
page {
	background-color: #fafafa;
}
</style>
