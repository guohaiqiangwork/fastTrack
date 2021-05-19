<template>
	<view class="content">
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">卡片</block>
		</cu-custom>

		<view class="wp-35 bg-red">测试</view>
		<view class="bg-white flex-sub radius shadow-lg">
			<image src="https://image.weilanwl.com/gif/loading-white.gif" mode="aspectFit" class="gif-white response" style="height:240upx"></image>
		</view>
		<view class="cu-card case" :class="isCard ? 'no-card' : ''">
			<view class="cu-item shadow">
				<view class="image">
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" mode="widthFix"></image>
					<view class="cu-tag bg-blue">史诗</view>
					<view class="cu-bar bg-shadeBottom">
						<text class="text-cut">我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。</text>
					</view>
				</view>
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
						<view class="content flex-sub">
							<view class="text-grey">正义天使 凯尔</view>
							<view class="text-gray text-sm flex justify-between">
								十天前
								<view class="text-gray text-sm">
									<text class="cuIcon-attentionfill margin-lr-xs"></text>
									10
									<text class="cuIcon-appreciatefill margin-lr-xs"></text>
									20
									<text class="cuIcon-messagefill margin-lr-xs"></text>
									30
								</view>
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
			isCard: true
		};
	},
	onLoad() {
		// let data ={
		// 	a:'1'
		// }
		// this.$http.post('/api/bank/save', data, true).then(res => {
		// 	console.log(res)
		// })
	},
	methods: {}
};
</script>

<style></style>
