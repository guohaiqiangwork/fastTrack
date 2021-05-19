<template>
	<view>
		<view class="moudel_width">
			<view class="moudel_list mt-30">
				<view class="flex justify-between fs-30 border_bottom pb-20">
					<view class="">
						原密码
					</view>
					<view class="text-right">
						<input type="password" value=""  placeholder="请输入原密码"/>
					</view>
				</view>
				<view class="flex justify-between fs-30 border_bottom pb-20 pt-20">
					<view class="">
						新密码
					</view>
					<view class="text-right">
						<input type="password" value=""  placeholder="请输入新密码"/>
					</view>
				</view>
				<view class="flex justify-between fs-30   pt-20">
					<view class="">
						确认密码
					</view>
					<view class="text-right">
						<input type="password" value=""  placeholder="请输入确认密码"/>
					</view>
				</view>
			</view>
			
			<view class="bn_b mt-30" @click="goBanck">
				确认修改
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goBanck:function(){
				uni.navigateBack({
					
				})
			}
		}
	}
</script>

<style>

</style>
