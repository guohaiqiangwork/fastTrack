<template>
	<view class="pb-80">
		<view class="bg-ff pt-20 ">
			<view :class="typeTab == item.type ? 'border_bottom' : ' '" class="tab_item" @click="tabOne(item.type)" v-for="(item, index) in tabList" :key="index">
				{{ item.title }}
			</view>
		</view>

		<block v-if="typeTab == 1">
			<view class="moudel_width">
				<view class="input_mo flex">
					<view class="mt-5 wp-20">名称：</view>
					<view class="wp-80 fs-25"><input class="" placeholder="请输入名称" type="text" :value="name" :moudel="name" @input="getName" /></view>
				</view>

				<view class="input_mo flex">
					<view class="mt-5 wp-20">联系人：</view>
					<view class="wp-80 fs-25"><input class="" placeholder="请输入联系人" type="text" :value="name" :moudel="name" @input="getName" /></view>
				</view>
				<view class="input_mo flex">
					<view class="mt-5 wp-20">电话：</view>
					<view class="wp-80 fs-25"><input class="" placeholder="请输入电话" type="text" :value="name" :moudel="name" @input="getName" /></view>
				</view>
				<view class="input_mo flex">
					<view class="mt-5 wp-20">身份：</view>
					<view class="wp-80 fs-25">
						<picker @change="bindPickerChange" :range="array" >
							<label class="">{{ array[index] }}</label>
						</picker>
					</view>
				</view>

				<view class="btn_bd" @click="okEdit">确认</view>
			</view>
		
		</block>
		
		<block v-else>
			<view class="moudel_width">
				<view class="input_mo flex">
					<view class="mt-5 wp-20">原密码：</view>
					<view class="wp-80 fs-25"><input class="" placeholder="请输入原密码" type="text" :value="name" :moudel="name" @input="getName" /></view>
				</view>
			
				<view class="input_mo flex">
					<view class="mt-5 wp-20">新密码：</view>
					<view class="wp-80 fs-25"><input class="" placeholder="请输入新密码" type="text" :value="name" :moudel="name" @input="getName" /></view>
				</view>
				<view class="input_mo flex">
					<view class="mt-5 wp-20">新密码：</view>
					<view class="wp-80 fs-25"><input class="" placeholder="请再次输入新密码" type="text" :value="name" :moudel="name" @input="getName" /></view>
				</view>
				
			
				<view class="btn_bd" @click="okEdit">确认</view>
			</view>
					
		</block>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tabList: [
				{
					title: '添加联系人',
					type: 1
				},
				{
					title: '密码设置',
					type: 2
				}
			],
			typeTab: 1,
			array: [
				'请选择联系人身份',
				'供应商',
				'经销商'
			],
			index: 0
		};
	},
	methods: {
		tabOne: function(item) {
			this.typeTab = item;
		}
	}
};
</script>

<style lang="less">
.tab_item {
	width: 50%;
	text-align: center;
	height: 70upx;
	line-height: 70upx;
	font-size: 25upx;
	color: #293539;
	display: inline-block;
}
.btn_bd {
	height: 90upx;
	background: #98d0ab;
	border-radius: 10upx;
	text-align: center;
	align-items: center;
	color: #ffffff;
	font-size: 30upx;
	line-height: 90upx;
	margin-top: 30upx;
	border-radius: 50upx;
	position: absolute;
	bottom: 5%;
	width: 90%;
}
.input_mo {
	background-color: #ffffff;
	margin-top: 30upx;
	border: 1px solid #a77845;
	height: 80upx;
	line-height: 80upx;
	align-items: center;
	font-size: 25upx;
	color: #293539;
	padding-left: 20upx;
}
</style>
