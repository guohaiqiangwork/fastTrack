<template>
	<view>
		<view class="mt-30 moudel_width">
			<view class="btn_p" @click="addList">添加分类</view>
			<view
			@click="tabSwich(index)"
				v-for="(item, index) in tabList"
				:key="index"
				:class="tabTwo == index ? 'bg-active' : ''"
				class="flex justify-between moudel_list fs-25 color-29 pt-20 pb-20 mt-30"
			>
				<view class="" v-if="tabTwo == index"><input type="text" :value="item.title" /></view>
				<view class="wp-60"  v-else>{{ item.title }}</view>

				<view class="">
					<text v-if="tabTwo == index" @click.stop="tabSwich('null')" style="color:#98D0AB">确认</text>
					<text v-else style="color:#E7322B">删除</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tabList: [
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
		tabSwich: function(item) {
			console.log(item);
			this.tabTwo = item;
		},

		goUrl: function(item) {
			uni.navigateTo({
				url: './' + item
			});
		},
		addList:function(){
			let item ={
				title: '',
				type: ''
			}
			this.tabList.push(item)
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

.bg-active {
	background-color: #e7e7e7;
}
</style>
