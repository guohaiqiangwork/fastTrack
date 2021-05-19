<template>
	<view>
		<view class="moudel_list  pb-40" v-if="model == 'register'">
			<view class="text-center fs-32 pt-90">
				此账号已经存在
				<br />
				是否关联为相同账户身份？
			</view>

			<view class="btn_bd mt-90" @click="okButtom">确认</view>
		</view>
		<!-- 首页添加商品 -->
		<view class="moudel_list  pb-40" v-if="model == 'product'">
			<view class="flex pt-30">
				<view class="fs-25 color-29 wp-20 mt-25 text-center">名称：</view>
				<view class="wp-80 "><input class="input_m pl-20" v-model="productName" type="text" value="" placeholder="请输入名称" /></view>
			</view>
			<view class="flex pt-30">
				<view class="fs-25 color-29 wp-20 mt-25 text-center">单价：</view>
				<view class="wp-80 "><input class="input_m pl-20" v-model="productPrice" type="text" value="" placeholder="请输入单价" /></view>
			</view>

			<view class="btn_bd mt-60" @click="okButtom">确认</view>
		</view>
		<!-- 订单页添加商品 -->
		<block v-if="model == 'two'">
			<view class="listName" style="background-color: #CAB88F;">{{ listName }}</view>
			<view class="moudel_list  pb-40">
				<view class="flex pt-30">
					<view class="fs-25 color-29 wp-20 mt-25 text-center">单价：</view>
					<view class="wp-80 "><input class="input_m pl-20" type="text" value="" v-model="price" placeholder="请输入单价（元/KG）" disabled="false" /></view>
				</view>
				<view class="flex pt-30">
					<view class="fs-25 color-29 wp-20 mt-25 text-center">数量：</view>
					<view class="wp-80 "><input class="input_m pl-20" type="number" value="" v-model="number" placeholder="请输入数量（KG）" /></view>
				</view>

				<view class="btn_bd mt-60" @click="okButtom">确认</view>
			</view>
		</block>

		<view class="moudel_list pb-70" v-if="model == 'order'">
			<view style="margin-left: 10%;" class="wp-80 pt-50 "><input class="input_m pl-20" v-model="reason" maxlength="199" type="text" value="" placeholder="请输入取消订单原因" /></view>
			<view class="btn_bd mt-60" style="background-color: #A77845;" @click="okButtom">确认</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			model: '',
			title: '',
			listName: '', //订单页新增商品
			number: '', //重量
			prictAll: '',
			productName: '',
			productPrice: '',
			reason: ''
		};
	},
	onLoad(option) {
		console.log(option);
		this.model = option.type;
		this.title = option.title;
		if (option.listName) {
			this.listName = option.listName;
			this.price = option.price;
			this.productId = option.productId;
		}
		if (option.typeId) {
			this.typeId = option.typeId;
		}
		uni.setNavigationBarTitle({
			title: this.title
		});

		let that = this;
		uni.getStorage({
			key: 'prictList_key',
			success(res) {
				that.prictAll = res.data;
				console.log(that.prictAll);
			}
		});
	},
	methods: {
		okButtom: function() {
			if (this.model == 'register') {
				uni.reLaunch({
					url: './noModel'
				});
			} else if (this.model == 'product') {
				let data = {
					typeId: this.typeId,
					productName: this.productName,
					price: Number(this.productPrice)
				};

				this.$http.post('/system/product', data, true).then(res => {
					console.log(res);
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
			} else if (this.model == 'two') {
				let that = this;
				console.log('00');
				var data = {
					weight: this.number,
					price: this.price,
					productName: this.listName,
					productId: Number(this.productId),
					type: 1
				};
				if (!this.number) {
					uni.showToast({
						title: '请检查数量',
						time: 2000,
						icon: 'none'
					});
					return;
				}
				if (that.prictAll == '') {
					this.prictAll = [];
				}

				that.prictAll.push(data);
				uni.setStorage({
					key: 'prictList_key',
					data: that.prictAll,
					success: function() {
						uni.switchTab({
							url: '../tabBar/two/two'
						});
					}
				});
			} else if (this.model == 'order') {
				uni.setStorageSync('reason',this.reason)
				uni.navigateBack({
					
				})
			}
		}
	}
};
</script>

<style lang="less">
page {
	background-color: #f2f2f2;
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
	// position: absolute;
	// bottom: 5%;
	// width: 94%;
}

.input_m {
	height: 80upx;
	line-height: 80upx;
	align-items: center;
	background: #ffffff;
	border: 1px solid #a77845;
	opacity: 1;
	border-radius: 3upx;
}
</style>
