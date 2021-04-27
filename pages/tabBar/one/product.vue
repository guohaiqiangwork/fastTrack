<template>
	<view>
		<view class="bg-ff">
			<view :class="typeTab == item.type ? 'border_bottom' : ' '" class="tab_item" @click="tabOne(item.type)" v-for="(item, index) in tabList" :key="index">
				{{ item.title }}
			</view>
		</view>

		<view class="mt-30 moudel_width">
			<view class="btn_p" @click="goModel">添加商品</view>

			<view
				@click="tabSwich(index)"
				v-for="(item, index) in [1, 2, 3, 4]"
				:key="index"
				:class="tabTwo == index ? 'bg-active' : ''"
				class="flex justify-between moudel_list fs-25 color-29 pt-20 pb-20 mt-30"
			>
				<view class="">硬粟（1级）</view>
				<view class="">单价：4.3（元/KG）</view>
			</view>
			
			<view class="btn_b" @click="goUrl('edit')">
				编辑分类
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
			
			tabTwo: 1
		};
	},
	methods: {
		tabOne: function(item) {
			this.typeTab = item;
		},
		tabSwich: function(item) {
			this.tabTwo = item;
		},
		
		goUrl:function(item){
			uni.navigateTo({
				url:'./' +item
			})
		},
		// 去添加商品也
		goModel:function(){
			uni.navigateTo({
					url:'../../model/model?title=添加商品'  + '&type=product'
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
	background-color: #FFFFFF;
	height: 80upx;
	border-radius: 50upx;
	text-align: center;
	line-height: 80upx;
	color: #A77845;
	font-size: 25upx;
	border: 1px solid #A77845;
	position: absolute;
	bottom: 4%;
	width: 90%;
}
.bg-active {
	background-color: #e7e7e7;
}
</style>
