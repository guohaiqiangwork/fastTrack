<template>
	<view>
		
		<view class="moudel_list pb-40" v-if="model == 'tips'">
			<view class="text-center fs-32 pt-90">
				程序仅提供中游加工商使用功能	<br />
				非中游加工商请勿自主注册
			</view>
			
			<view class="two_btn" v-if="model != 5">
				<view class="wp-50" style="border-right: 1px solid #A77845;" @click="okButtom">返回登入</view>
				<view class="wp-50" @click="goRegister">继续注册</view>
			</view>
		</view>
		
		
		<view class="moudel_list  pb-40" v-else>
			<view class="text-center fs-32 pt-90">
				此账号已经存在
				<br />
				是否关联为相同账户身份？
			</view>

			<view class="btn_bd mt-90" @click="okButtom">返回登入</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title:'',
			model:''
		};
	},
	onLoad(option) {
		console.log(option);
		if(option){
			this.model = option.type;
			this.title = option.title;
			uni.setNavigationBarTitle({
				title: this.title
			});
		}
		
	},
	
	methods: {
		okButtom:function(){
			uni.reLaunch({
				url:'../login/login'
			})
		},
		goRegister:function(){
			uni.reLaunch({
				url:'../login/register'
			})
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
	background: #FBC941;
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
.two_btn {
	display: flex;
	height: 80upx;
	border-radius: 50upx;
	background-color: #ffffff;
	border: 1px solid #a77845;
	margin-top: 80upx;
	color: #a77845;
	font-size: 32upx;
	text-align: center;
	align-items: center;
	font-weight: 700;
}
</style>

