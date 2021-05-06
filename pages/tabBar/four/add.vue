<template>
	<view>
		<view class="moudel_width">
			<view class="moudel_list mt-30" style="overflow-y: auto; background-color: #E7E7E7;height: 83upx;line-height: 83upx;pl-20;border-radius: 0;">
				<view class="">{{ shareIdUrl }}</view>
			</view>

			<view class="btn_bd" @click="copyUrl">复制链接</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			shareIdUrl: '',
			memberData: ''
		};
	},
	onLoad(option) {
		this.memberData = this.$member.memberObj;
		this.shareIdUrl = this.memberData.hostUrl + '/#/' + 'pages/login/register?shareId=' + option.shareId + '&title=' + '信息补全';
		console.log(this.shareIdUrl);
	},
	methods: {
		copyUrl: function() {
			uni.setClipboardData({
				data: this.shareIdUrl,
				success: function(data) {
					uni.showToast({
						title: '复制成功',
						icon: 'none',
						duration: 2000,
						position: 'top'
					});
				},
				fail: function(err) {},
				complete: function(res) {}
			});
		}
	}
};
</script>

<style lang="less">
.btn_bd {
	height: 90upx;
	background: #98d0ab;
	border-radius: 10upx;
	text-align: center;
	align-items: center;
	color: #ffffff;
	font-size: 30upx;
	line-height: 90upx;
	margin-top: 70upx;
	border-radius: 50upx;
}
</style>
