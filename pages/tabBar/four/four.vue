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
					<view class="wp-80 fs-25"><input v-model="comName" class="" placeholder="请输入名称" type="text" /></view>
				</view>

				<view class="input_mo flex">
					<view class="mt-5 wp-20">联系人：</view>
					<view class="wp-80 fs-25"><input v-model="leader" class="" placeholder="请输入联系人" type="text" /></view>
				</view>
				<view class="input_mo flex">
					<view class="mt-5 wp-20">电话：</view>
					<view class="wp-80 fs-25"><input v-model="phone" maxlength="11" type="number" class="" placeholder="请输入电话" /></view>
				</view>
				<view class="input_mo flex">
					<view class="mt-5 wp-20">身份：</view>
					<view class="wp-80 fs-25">
						<picker @change="bindPickerChange" :range="array" range-key="name">
							<label class="">{{ array[index].name }}</label>
						</picker>
					</view>
				</view>

				<view class="btn_bd" @click="addPeople">确认</view>
			</view>
		</block>

		<block v-else>
			<view class="moudel_width">
				<view class="input_mo flex">
					<view class="mt-5 wp-20">原密码：</view>
					<view class="wp-80 fs-25"><input class="" v-model="currentPassword" placeholder="请输入原密码" type="password" /></view>
				</view>

				<view class="input_mo flex">
					<view class="mt-5 wp-20">新密码：</view>
					<view class="wp-80 fs-25"><input class="" v-model="newPassword" placeholder="请输入新密码" type="password" /></view>
				</view>
				<view class="input_mo flex">
					<view class="mt-5 wp-20">新密码：</view>
					<view class="wp-80 fs-25"><input class="" v-model="confirmPassword" placeholder="请再次输入新密码" type="password" /></view>
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
				{
					name: '请选择联系人身份',
					comType: ''
				},
				{
					name: '供应商',
					comType: 'supplier'
				},
				{
					name: '经销商',
					comType: 'dealer'
				}
			],
			index: 0,

			comName: '',
			phone: '',
			leader: '',
			currentPassword: '',
			newPassword: '',
			confirmPassword: ''
		};
	},
	onLoad() {},
	methods: {
		okEdit: function() {
			let data = {
				currentPassword: this.currentPassword,
				newPassword: this.newPassword,
				confirmPassword: this.confirmPassword
			};
			if (this.newPassword != this.confirmPassword) {
				uni.showToast({
					title: '新密码不一致',
					time: 2000,
					icon: 'none'
				});
				return;
			}
			this.$http.post('/system/user/resetPassword', data, true).then(res => {
				if (res.data.code == 200) {
					uni.showToast({
						title: '设置成功',
						time: 2000,
						icon: 'none'
					});
					this.currentPassword = '';
					this.newPassword = '';
					this.confirmPassword = '';
				} else {
					uni.showToast({
						title: res.data.msg,
						time: 2000,
						icon: 'none'
					});
				}
			});
		},
		tabOne: function(item) {
			this.typeTab = item;
		},
		bindPickerChange: function(e) {
			console.log(e.detail.value);
			this.index = e.detail.value;
		},
		// 添加联系人
		addPeople: function() {
			let data = {
				comType: this.array[this.index].comType,
				comName: this.comName,
				phone: this.phone,
				leader: this.leader
			};
			if (!this.comName || !this.phone || !this.leader) {
				uni.showToast({
					title: '有数据未填写',
					icon: 'none',
					duration: 2000,
					position: 'center'
				});
				return;
			}
			this.$http.post('/system/company/add/party', data, true).then(res => {
				console.log(JSON.stringify(res));
				if (res.data.code == 200) {
					uni.navigateTo({
						url: './add?shareId=' + res.data.data
					});
				} else {
					uni.showToast({
						title: res.data.msg,
						icon: 'none',
						duration: 2000,
						position: 'center'
					});
				}
			});
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
