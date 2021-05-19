<template>
	<view>
		<view class="moudel_width ">
			<view class="moudel_list mt-30" v-for="(item,index)  in [1,2,3]" :key="index">
				<view class="flex justify-between border_bottom pb-30">
					<view class="fs-30 fw-600">2021-04-08</view>
					<view class="" @click="openM(index)">
						<image style="width: 16upx;height: 10upx;" src="../../../static/images/icon/down33.png" mode=""></image>
					</view>
				</view>
				<view class="border_bottom pb-30" v-if="openFalg == index">
					<view class="fs-30 mt-30">乐刷</view>
					<view class="flex fs-24 color-99">
						<view class="">机具类型：</view>
						<view class="">传统POS机</view>
					</view>
					<view class="flex fs-24 color-99">
						<view class="">机具数量：</view>
						<view class="">3台</view>
					</view>
					<view class="flex fs-24 color-99">
						<view class="">机具SN号：</view>
						<view class="">0003102962002289916</view>
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
			openFalg:0
		};
	},
	methods: {
		openM:function(i){
			this.openFalg = i
		}
	}
};
</script>

<style></style>
