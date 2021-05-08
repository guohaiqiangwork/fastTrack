<template>
	<view>
		<view class="bg-ff">
			<view :class="typeTab == item.id ? 'border_bottom' : ' '" class="tab_item" @click="tabOne(item.id)" v-for="(item, index) in tabList" :key="index">
				{{ item.title }}
			</view>
		</view>

		<view class="mt-30 moudel_width">
			<view class="btn_p" @click="goModel">添加商品</view>

			<view
				@click="tabSwich(index)"
				v-for="(item, index) in productList"
				:key="index"
				:class="tabTwo == index ? 'bg-active' : ''"
				class="flex justify-between moudel_list fs-25 color-29 pt-20 pb-20 mt-30"
			>
				<view class="">{{ item.productName }}</view>
				<view class="">单价：{{ item.price }}（元/KG）</view>
			</view>

			<view class="btn_b" @click="goUrl('edit')">编辑分类</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			typeTab: -1,
			tabList: [
				{
					title: '全部',
					id: -1
				}
			],

			productList: [],

			tabTwo: 1
		};
	},

	onShow() {
		this.getTablist();
		this.getList();
	},

	methods: {
		// 获取tab
		getTablist: function() {
			this.$http.get('/system/productType/treeselect', '', true).then(res => {
				if (res.data.code == 200) {
					this.tabList = [
						{
							title: '全部',
							id: -1
						}
					];
					this.tabList = this.tabList.concat(res.data.data);
				} else {
					uni.showToast({
						title: res.data.msg,
						icon: 'none',
						duration: 2000,
						position: 'center'
					});
				}
			});
		},

		// 获取列表
		getList: function() {
			let geturl = '/system/product/list/' + this.typeTab;
			this.$http.get(geturl, '', true).then(res => {
				if (res.data.code == 200) {
					this.productList = res.data.rows;
					console.log(this.productList);
				} else {
					uni.showToast({
						title: res.data.msg,
						icon: 'none',
						duration: 2000,
						position: 'center'
					});
				}
			});
		},

		tabOne: function(item) {
			this.typeTab = item;
			this.getList(); //默认获取全部列表
		},
		tabSwich: function(item) {
			this.tabTwo = item;
		},

		goUrl: function(item) {
			uni.navigateTo({
				url: './' + item
			});
		},
		// 去添加商品也
		goModel: function() {
			uni.navigateTo({
				url: '../../model/model?title=添加商品' + '&type=product' + '&typeId=' + this.typeTab
			});
		}
	}
};
</script>

<style lang="less">
.tab_item {
	width: 25%;
	text-align: center;
	height: 70upx;
	line-height: 70upx;
	font-size: 25upx;
	color: #293539;
	display: inline-block;
}
.btn_p {
	background-color: #cab88f;
	height: 80upx;
	border-radius: 50upx;
	text-align: center;
	line-height: 80upx;
	color: #ffffff;
	font-size: 25upx;
}
.btn_b {
	background-color: #ffffff;
	height: 80upx;
	border-radius: 50upx;
	text-align: center;
	line-height: 80upx;
	color: #a77845;
	font-size: 25upx;
	border: 1px solid #a77845;
	position: absolute;
	bottom: 4%;
	width: 90%;
}
.bg-active {
	background-color: #e7e7e7;
}
</style>
