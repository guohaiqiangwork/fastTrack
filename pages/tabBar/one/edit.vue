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
				<view class="" v-if="item.type == 'new'"><input type="text" placeholder="请填写分类名称" @input="getTabName" /></view>
				<view class="wp-60" v-else>
					<view class="" v-if="tabTwo == index"><input type="text" placeholder="" :value="item.name" @input="getEditName" /></view>
					<view class="" v-else>{{ item.name }}</view>
				</view>

				<view class="">
					<text v-if="item.type == 'new'" @click.stop="tabSwich('null')" @click="okTab()" style="color:#98D0AB">确认</text>
					<view class="" v-else>
						<text style="color:#E7322B" @click="delectTab(item.id)">删除</text>
						<text class="ml-20" style="color:#98D0AB" @click="editTab(item)">确认</text>
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
			tabList: [],

			tabTwo: 1,
			editName: '',
			newName: ''
		};
	},
	onLoad() {
		this.getTablist();
	},
	methods: {
		// 获取新增
		getTabName: function(e) {
			this.newName = e.detail.value;
		},
		// 获取修改
		getEditName: function(e) {
			this.editName = e.detail.value;
		},
		// 保存tab
		okTab: function() {
			let data = {
				name: this.newName
			};
			this.$http.post('/system/productType', data, true).then(res => {
				if (res.data.code == 200) {
					uni.showToast({
						title: '添加成功',
						time: 2000,
						icon: 'none'
					});
					setTimeout(function() {
						uni.navigateBack({});
					}, 1500);
				} else {
					uni.showToast({
						title: res.data.msg,
						time: 2000,
						icon: 'none'
					});
				}
			});
		},
		// 删除tab
		delectTab: function(item) {
			let url = '/system/productType/' + item;
			this.$http.delete(url, '', true).then(res => {
				if (res.data.code == 200) {
					uni.showToast({
						title: '删除成功',
						icon: 'none',
						duration: 2000,
						position: 'center'
					});
					this.getTablist();
				} else {
					uni.showToast({
						title: res.data.msg,
						icon: 'none',
						duration: 2000,
						position: 'center'
					});
				}
			});
		},
		// 修改
		editTab: function(item) {
			console.log(item);

			let data = {
				name: this.editName == '' ? item.name : this.editName,
				parentId: item.pId,
				id: item.id
			};

			this.$http.put('/system/productType', data, true).then(res => {
				if (res.data.code == 200) {
					uni.showToast({
						title: '修改成功',
						icon: 'none',
						duration: 2000,
						position: 'center'
					});
					this.getTablist();
				} else {
					uni.showToast({
						title: res.data.msg,
						icon: 'none',
						duration: 2000,
						position: 'center'
					});
				}
			});
		},
		// 获取tab
		getTablist: function() {
			this.$http.get('/system/productType/treeselect', '', true).then(res => {
				if (res.data.code == 200) {
					this.tabList = res.data.data;
				} else {
					uni.showToast({
						title: res.data.msg,
						icon: 'none',
						duration: 2000,
						position: 'center'
					});
				}
			});
		},
		tabSwich: function(item) {
			console.log(item);
			this.tabTwo = item;
		},

		goUrl: function(item) {
			uni.navigateTo({
				url: './' + item
			});
		},
		addList: function() {
			let item = {
				name: '',
				type: 'new'
			};
			this.tabList.push(item);
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
