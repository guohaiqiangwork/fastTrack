<template>
	<view>
		<view class="moudel_width">
			<view class="moudel_list mt-30 pb-5">
				<view
					v-for="(item, index) in listData"
					:key="index"
					:class="index != 2 ? 'border_bottom' : index  == 2 ? 'pt-20' : ''"
					:style="index == 1 ? 'paddingTop:20upx' : ''"
					class="flex justify-between  pb-20"
					@click="goDetail(item)"
				>
					<view class="fs-30">{{ item.title }}</view>
					<view class=""><image style="width: 10upx;height: 18upx;" src="../../static/images/icon/right3.png" mode=""></image></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			listData: [
				{
					title: '位置权限',
					type: '0',
				},
				{
					title: '相机权限',
					type: '1'
				},
				{
					title: '相册储存权限',
					type: '2'
				}
			]
		};
	},
	methods: {
		goDetail:function(item){
			uni.navigateTo({
				url:'./jDetail?item='+ JSON.stringify(item) 
			})
		}
	}
};
</script>

<style></style>
