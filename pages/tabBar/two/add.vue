<template>
	<view>
		<view class="bg-ff">
			<view :class="typeTab == item.type ? 'border_bottom' : ' '" class="tab_item" @click="tabOne(item.type)" v-for="(item, index) in tabList" :key="index">
				{{ item.title }}
			</view>
		</view>

		<view class="mt-30 moudel_width">

			<view
				@click="tabSwich(index,'硬粟（1级)')"
				v-for="(item, index) in [1, 2, 3, 4]"
				:key="index"
				:class="tabTwo == index ? 'bg-active' : ''"
				class="flex justify-between moudel_list fs-25 color-29 pt-20 pb-20 mt-30"
			>
				<view class="">硬粟（1级）</view>
				<view class="">单价：4.3（元/KG）</view>
			</view>
		
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			typeTab: 1,
			tabList: [
				{
					title: '全部',
					type: 1
				},
				{
					title: '油类',
					type: 2
				},
				{
					title: '豆类',
					type: 3
				},
				{
					title: '面粉类',
					type: 4
				}
			],
			
			tabTwo: null
		};
	},
	methods: {
		tabOne: function(item) {
			this.typeTab = item;
		},
		tabSwich: function(item,name) {
			this.tabTwo = item;
			this.goModel(name);//去添加商品
		},
		
		goUrl:function(item){
			uni.navigateTo({
				url:'./' +item
			})
		},
		// 去添加商品也
		goModel:function(name){
			uni.navigateTo({
					url:'../../model/model?title=添加商品'  + '&type=two' + '&listName=' + name
			})
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
