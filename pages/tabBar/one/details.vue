<template>
	<view>
		<view class="">
			<scroll-view style="height: 100vh;">
				<image src="../../../static/images/bjd.png" mode="" class="image_width"></image>
				<view class="login_moudel">
					<view v-if="type == 's'" class="moudel_list mt-30 pt-20 pb-20" v-for="(item, index) in productList" :key="index">
						<view class="fs-32 " style="color: #98D0AB;">商品：硬粟米（1级）</view>
						<view class="fs-25 color-29 mt-10">总占比：25.00%</view>
						<view class="fs-25 color-29">总金额（元）：1150000.00</view>
					</view>
					<view v-else class="moudel_list mt-30 pt-20 pb-20" v-for="(item, index) in productList" :key="index">
						<view class="fs-32 " style="color: 	#FBC941;">商品：硬粟米（1级）</view>
						<view class="fs-25 color-29 mt-10">总占比：25.00%</view>
						<view class="fs-25 color-29">总金额（元）：1150000.00</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: '',
			type: '',
			productList:[]
		};
	},
	onLoad(option) {
		
		this.type = option.type;
		option.type == 's' ? (this.title = '销售商品占比详情') : (this.title = '采购商品占比详情');
		uni.setNavigationBarTitle({
			title: this.title
		});
	},
	methods: {
		getList:function(){
			this.$http.get('',data,true).then(res=>{
				
			})
		}
	}
};
</script>

<style lang="less">
.image_width {
	position: absolute;
	width: 100%;
	height: 45%;
	bottom: 0;
}

.login_moudel {
	position: relative;
	width: 90%;
	margin-left: 5%;
}
</style>
