<template>
	<view>
		<view class="listName">发货人信息</view>
		<view class="moudel_width">
			<!-- 采购单 -->
			<block v-if="type == 'cg'">
				<view class="input_mo">
					<input
						class="mt-15"
						placeholder="请输入发货人信息"
						placeholder-class="fs-25"
						type="text"
						:value="consignorData.name"
						:moudel="consignorData.name"
						@input="getName"
					/>
				</view>
				<view class="searcMoudel" v-if="searchFalg">
					<view class="ml-20 mt-10" v-for="(item, index) in searchList" :key="index" @click="getItem(item)">{{ item.comName }}</view>
				</view>
			</block>
			<!-- 销售单 -->
			<block v-else>
				<view class="input_mo color-33 ">{{ consignorData.name }}</view>
			</block>
			<!-- 采购单 -->
			<block v-if="type == 'cg'">
				<view class="input_mo">
					<input
						class="mt-15"
						placeholder="请输入发货人卡号"
						placeholder-class="fs-25"
						type="text"
						:value="consignorData.bankCard"
						:moudel="consignorData.bankCard"
						disabled="true"
					/>
				</view>
			</block>
			<!-- 销售单 -->
			<block v-else>
				<view class="input_mo color-33">{{ consignorData.bankCard }}</view>
			</block>
		</view>

		<view class="listName mt-30">收货人信息</view>
		<view class="moudel_width">
			<view class="input_mo flex">
				<view class="mt-5 wp-20">名称：</view>
				<view class="" v-if="type == 'cg'">
					{{consigneeData.comName}}
				</view>
				<view class="wp-80 fs-25" v-else>
					<input
						class=""
						placeholder="请输入收货人名称"
						type="text"
						@input="getName"
						data-type="comName" 
						:value="consigneeData.comName"
						:moudel="consigneeData.comName"
					/>
				</view>
				<view class="searcMoudel" v-if="searchFalgXs" style="left: 5%;margin-top: 280upx;">
					<view class="ml-20 mt-10" v-for="(item, index) in searchList" :key="index" @click="getItem(item)">{{ item.comName }}</view>
				</view>
			</view>

			<view class="input_mo flex">
				<view class="mt-5 wp-20">联系人：</view>
				<view class="" v-if="type == 'cg'">
					{{consigneeData.leader}}
				</view>
				<view class="wp-80 fs-25" v-else>
					<input class="" placeholder="请输入联系人" type="text" :value="consigneeData.leader" :moudel="consigneeData.leader" @input="getInput" data-type="leader" />
				</view>
			</view>
			<view class="input_mo flex">
				<view class="mt-5 wp-20">电话：</view>
				<view class="" v-if="type == 'cg'">
					{{consigneeData.phone}}
				</view>
				<view class="wp-80 fs-25" v-else>
					<input
						class=""
						placeholder="请输入联系人电话"
						type="number"
						maxlength="11"
						:value="consigneeData.phone"
						:moudel="consigneeData.phone"
						@input="getInput"
						data-type="phone"
					/>
				</view>
			</view>
			<view class="input_mo flex">
				<view class="mt-5 wp-20">地址：</view>
				<view class="" v-if="type == 'cg'">
					{{consigneeData.address}}
				</view>
				<view class="wp-80 fs-25" v-else>
					<input class="" placeholder="请输入收货地址" type="text" :value="consigneeData.address" :moudel="consigneeData.address" @input="getInput" data-type="address" />
				</view>
			</view>

			<view class="moudel_list mt-40 pt-20">
				<view class="flex ">
					<view class="fs-25 wp-15">备注：</view>
					<view class="wp-80"><textarea style="height: 210upx;" value="" placeholder="请填写备注" /></view>
				</view>
			</view>

			<view class="btn_bd" @click="okEdit">确认</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			name: '河北兴农谷物销售有限公司',
			idCard: '62166102000****7010',

			consigneeData: {
				comName: '',
				address: '',
				leader: '',
				phone: ''
			}, //收货人信息
			consignorData: {
				name: '',
				bankCard: ''
			}, //发货人信息
			type: '',
			searchList: '',
			searchFalg: false,
			searchFalgXs: false
		};
	},
	onLoad(option) {
		console.log(option.type);
		if (option.type == 'cg') {
			//销售单数据获取
			this.type = option.type;
			this.consigneeData.comName = uni.getStorageSync('comName');
			this.consigneeData.address = uni.getStorageSync('address');
			this.consigneeData.phone = uni.getStorageSync('phone');
			this.consigneeData.leader = uni.getStorageSync('leader');
			if (uni.getStorageSync('consignor')) {
				this.consignorData = uni.getStorageSync('consignor');
			}
		} else {
			this.type = option.type;
			this.consignorData.name = uni.getStorageSync('comName');
			this.consignorData.bankCard = uni.getStorageSync('bankAccount');
			console.log(this.consignorData)
			// 获取收货人信息
			if (uni.getStorageSync('consigneeDataX')) {
				this.consigneeData = uni.getStorageSync('consigneeDataX');
			}
		}
	},
	methods: {
		// 销售单数据获取
		getInput: function(e) {
			console.log(e.currentTarget.dataset.type);
			switch (e.currentTarget.dataset.type) {
				case 'leader':
					this.consigneeData.leader = e.detail.value;
					break;
				case 'comName':
					this.consigneeData.comName = e.detail.value;
					break;
				case 'address':
					this.consigneeData.address = e.detail.value;
					break;
				case 'phone':
					this.consigneeData.phone = e.detail.value;
					break;
				default:
					console.log(e.currentTarget.dataset.type);
			}
		},

		// 获取 发货人信息
		getName: function(e) {
			console.log(e.detail.value);
			let dataName = e.detail.value;
			console.log(dataName);
			if(e.currentTarget.dataset.type  == 'comName'){
				this.consigneeData.comName = e.detail.value;
			}
			if (dataName.length > 2) {
				let data = {
					type: this.type == 'cg' ? 'supplier' : 'dealer',
					name: dataName
				};
				this.$http.post('/system/company/search', data, true).then(res => {
					if (res.data.code == 200) {
						if (res.data.data.length > 0) {
							if (this.type == 'cg') {
								this.searchFalg = true;
							} else {
								this.searchFalgXs = true;
							}

							this.searchList = res.data.data;
						}
					}
				});
			} else {
				this.searchFalg = false;
				this.searchFalgXs = false;
			}
		},
		// 选择发货人
		getItem: function(item) {
			console.log(item);
			if (this.type == 'cg') {
				this.searchFalg = false;
				this.consignorData.name = item.comName;
				this.consignorData.bankCard = item.bankAccount;
				this.consignorData.phone = item.phone;
			} else {
				this.searchFalgXs = false;
				this.consigneeData.comName = item.comName;
				this.consigneeData.leader = item.leader;
				this.consigneeData.phone = item.phone;
				
			}
		},
		okEdit: function() {
			console.log(this.consigneeData);
			// 采购订单
			if (this.type == 'cg') {
				uni.setStorageSync('consignor', this.consignorData);
			} else {
				uni.setStorageSync('consigneeDataX', this.consigneeData);
			}
			uni.navigateBack({});
		}
	}
};
</script>

<style lang="less">
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
}
.searcMoudel {
	background-color: #cab88f;
	overflow-y: auto;
	height: 200upx;
	width: 90%;
	position: absolute;
	z-index: 9999;
	color: #ffffff;
}
</style>
