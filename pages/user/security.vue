<template>
	<view>
		<view class="moudel_width">
			<view class="moudel_list mt-30 pb-5">
				<view class="flex justify-between border_bottom pb-30" @click="goUserData('userData/bankCard')">
					<view class="fs-30">银行卡</view>
					<view class="flex">
						<view class="fs-30">1502**********0087</view>
						<view class="ml-20"><image style="width: 10upx;height: 18upx;" src="../../static/images/icon/right3.png" mode=""></image></view>
					</view>
				</view>
				<view class="flex justify-between border_bottom pb-20 pt-20" @click="goUserData('userData/userData')">
					<view class="fs-30">实名认证</view>
					<view class=""><image style="width: 10upx;height: 18upx;" src="../../static/images/icon/right3.png" mode=""></image></view>
				</view>
				<view class="flex justify-between border_bottom pb-20 pt-20" @click="goUserData('userData/password')">
					<view class="fs-30">修改密码</view>
					<view class=""><image style="width: 10upx;height: 18upx;" src="../../static/images/icon/right3.png" mode=""></image></view>
				</view>
				<view class="flex justify-between border_bottom pb-20 pt-20" @click="goUserData('userData/jurisdiction')">
					<view class="fs-30">权限管理</view>
					<view class=""><image style="width: 10upx;height: 18upx;" src="../../static/images/icon/right3.png" mode=""></image></view>
				</view>
				<view class="flex justify-between  pb-20 pt-20" @click="goUserData('userData/cancellation')">
					<view class="fs-30">注销</view>
					<view class=""><image style="width: 10upx;height: 18upx;" src="../../static/images/icon/right3.png" mode=""></image></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		goUserData:function(item){
			uni.navigateTo({
				url:'../' + item
			})
		}
	}
};
</script>

<style></style>
