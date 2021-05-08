<template>
	<view>
		<view class="bg-ff">
			<view :class="typeTab == item.id ? 'border_bottom' : ' '" class="tab_item" @click="tabOne(item.id)" v-for="(item, index) in tabList" :key="index">
				{{ item.title }}
			</view>
		</view>

		<view class="mt-30 moudel_width">
			<view
				@click="tabSwich(index, item)"
				v-for="(item, index) in productList"
				:key="index"
				:class="tabTwo == index ? 'bg-active' : ''"
				class="flex justify-between moudel_list fs-25 color-29 pt-20 pb-20 mt-30"
			>
				<view class="">{{item.productName}}</view>
				<view class="">单价：{{item.price}}（元/KG）</view>
			</view>
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

			tabTwo: null,
			productList:[]
		};
	},
	onLoad() {
		this.getTablist();
		this.getList();//默认获取全部列表
	},
	methods: {
		// 获取tab
		getTablist: function() {
			this.$http.get('/system/productType/treeselect', '', true).then(res => {
				if (res.data.code == 200) {
					this.tabList = this.tabList.concat(res.data.data);
					console.log(this.tabList);
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
		getList:function(){
			let geturl = '/system/product/list/' +  this.typeTab
			this.$http.get(geturl,'', true).then(res => {
				if (res.data.code == 200) {
					this.productList = res.data.rows
					console.log(this.productList)
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
			this.getList();//默认获取全部列表
		},
		tabSwich: function(item, name) {
			this.tabTwo = item;
			this.goModel(name); //去添加商品
		},

		goUrl: function(item) {
			uni.navigateTo({
				url: './' + item
			});
		},
		// 去添加商品也
		goModel: function(item) {
			console.log('我在啊这而是')
			uni.navigateTo({
				url: '../../model/model?title=添加商品' + '&type=two' + '&listName=' + item.productName + '&price=' + item.price + '&productId=' + item.id
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

.bg-active {
	background-color: #e7e7e7;
}
</style>
