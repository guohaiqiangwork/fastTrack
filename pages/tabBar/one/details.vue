<template>
	<view>
		<view class="">
			<scroll-view style="height: 100vh;">
				<image src="../../../static/images/bjd.png" mode="" class="image_width"></image>
				<view class="login_moudel">
					<view v-if="type == 's'" class="moudel_list mt-30 pt-20 pb-20" v-for="(item, index) in productList" :key="index">
						<view class="fs-32 " style="color: #98D0AB;">商品：{{item.productName}}</view>
						<view class="fs-25 color-29 mt-10">总占比：{{item.percent}}</view>
						<view class="fs-25 color-29">总金额（元）：{{item.amount}}</view>
					</view>
					<view v-else class="moudel_list mt-30 pt-20 pb-20" v-for="(item, index) in productList" :key="index">
						<view class="fs-32 " style="color: 	#FBC941;">商品：{{item.productName}}</view>
						<view class="fs-25 color-29 mt-10">总占比：{{item.percent}}</view>
						<view class="fs-25 color-29">总金额（元）：{{item.amount}}</view>
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
			productList: []
		};
	},
	onLoad(option) {
		console.log(option.type);
		this.type = option.type;
		option.type == 's' ? (this.title = '销售商品占比详情') : (this.title = '采购商品占比详情');
		uni.setNavigationBarTitle({
			title: this.title
		});
		this.getList()
	},
	methods: {
		getList: function() {
			let data = {
				orderType: this.type,
				startDate: '',
				endDate: ''
			};
			this.$http.post('/report/product/detail', data, true).then(res => {
				if (res.data.code == 200) {
					this.productList = res.data.data;
				}
			});
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
	max-height: 95%;
}
</style>
