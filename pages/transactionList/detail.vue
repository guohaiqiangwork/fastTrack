<template>
	<view>
		<cu-custom bgColor="bg-ff" :isBack="true">
			<block slot="content">直营交易明细</block>
			<block slot="right">
				<!-- <view class="action" @click="seachF">
					<image style="width: 30upx;height: 30upx;" class="mr-10" src="../../static/images/icon/screen.png" mode=""></image>
					筛选
				</view> -->
			</block>
		</cu-custom>
		<view class="bg-ff mt-30">
			<view class="moudel_width">
				<view class="flex input_list ">
					<view class="wp-10 text-center mt-10"><image style="width: 26upx;height: 30upx;" src="../../static/images/icon/search.png" mode=""></image></view>
					<view class="wp-80 pl-10 ">
						<input type="text" :model="searchD" :value="searchD" placeholder="代理商姓名、电话" placeholder-style="color:#999999;font-size:30upx" />
					</view>
					<view class="wp-10 text-center" v-if="searchD.length > 1" @click="closeI">
						<image style="width: 30upx;height: 30upx;" src="../../static/images/icon/colse.png" mode=""></image>
					</view>
				</view>
			</view>

			<view 
			v-for="(item,index) in [1,2,3]" :key="index"
			class="moudel_list mt-30 border_bottomD">
				<view class="flex justify-between">
					<view class="flex">
						<view class="left_btn mt-10">正常</view>
						<view class="fs-30 fw-700 ml-20">华容水果批发</view>
					</view>
					<view class="fs-22 color-99">2021-03-25 12:00:00</view>
				</view>
				<view class="flex justify-between">
					<view class="fs-26 color-99">
						商户编号 :
						<text class="color-33 ml-20">812190072300314</text>
					</view>
					<view class=""><image style="width: 21upx;height: 22upx;" src="../../static/images/icon/phonef5.png" mode=""></image></view>
				</view>

				<view class="fs-26 color-99">
					交易金额 :
					<text class="color-33 ml-20">812190072300314</text>
				</view>
				
				<view class="flex justify-between">
					<view class="fs-26 color-99 wp-60">
						交易时间 :
						<text class="color-33 ml-20">2021.03.23 08:00:00</text>
					</view>
					<view class="flex wp-40 justify-end">
						<view class="left_btn_list">
							交易查询
						</view>
						<view class="right_btn_list">
							达标查询
						</view>
					</view>
				</view>
			</view>
		</view>
		
		
		
		
		<!-- 原来的页面 -->
		<view class="" v-if="false">
			<view class="bg-2d-2d" style="margin-top: -10upx;">
				<view class="moudel_width pt-30">
					<view class="" v-if="searchFalg">
						<view class="flex input_list mt-30">
							<view class="wp-10 text-center mt-10"><image style="width: 26upx;height: 30upx;" src="../../static/images/icon/search.png" mode=""></image></view>
							<view class="wp-80 pl-10 color-ff">
								<input @input="getSearch" type="text" :value="searchD" placeholder="请输入商户名称、商户编号" placeholder-style="color:#999999;font-size:30upx" />
							</view>
							<view class="wp-10 text-center" v-if="searchD.length > 1" @click="closeI">
								<image style="width: 30upx;height: 30upx;" src="../../static/images/icon/colse.png" mode=""></image>
							</view>
						</view>
						<view class="flex justify-between mt-30">
							<view
								class="list_iten_one"
								@click="daySwich(item.type)"
								:class="item.type == dayType ? 'color-ff bg-f5' : ''"
								v-for="(item, index) in dayList"
								:key="index"
							>
								{{ item.title }}
							</view>
			
							<view class="color-ff fs-24 wp-50 flex">
								<view class="" @click="onShowDatePicker()">{{ date[0] }} - {{ date[1] }}</view>
								<view class="ml-20"><image style="width: 16upx;height: 10upx;" src="../../static/images/icon/down99.png" mode=""></image></view>
							</view>
						</view>
					</view>
			
					<view class="flex justify-between pb-20 mt-30">
						<view class="mt-30">
							<view class="flex">
								<view class="left_flag bg-f5"></view>
								<view class="fs-26 color-aa ml-10">总收益（元）</view>
							</view>
							<view class="fs-60 color-ff fw-700">14,660.00</view>
						</view>
					</view>
			
					<view class="flex justify-between pb-20 ">
						<view class="wp-50">
							<view class="flex">
								<view class="left_flag bg-3c"></view>
								<view class="fs-26 color-aa ml-10">总笔数（笔）</view>
							</view>
							<view class="fs-44 color-ff ">14,660.00</view>
						</view>
						<view class="wp-50">
							<view class="flex">
								<view class="left_flag bg-fc"></view>
								<view class="fs-26 color-aa ml-10">D0笔数（笔）</view>
							</view>
							<view class="fs-44 color-ff ">14,660.00</view>
						</view>
					</view>
				</view>
			</view>
			<view class="bg-2d-m pt-30 " style="margin-top: -10upx;height: 40vh;">
				<view class="moudel_width pb-50">
					<view class="moudel_list mt-30" v-for="(item, index) in [1, 2, 3]" :key="index" @click="goDetail">
						<view class="border_bottom pb-30">
							<view class="flex justify-between fs-30 color-33">
								<view class="fw-700">华容水果批发市场</view>
								<view class="fw-700 color-f5">贷记卡</view>
							</view>
							<view class="fs-26 color-33">商户编号：822192050946724</view>
							<view class="flex justify-between fs-26 color-33">
								<view class="">交易金额：12000.00元</view>
								<view class="color-3c">交易成功</view>
							</view>
						</view>
						<view class="flex justify-between fs-26 color-33 mt-20">
							<view class="">交易时间：2021.03.2309:00:00</view>
							<view class="">D0</view>
						</view>
					</view>
				</view>
			</view>
			
			<!-- 日期选择期 -->
			<tn-date-picker
				:beforeDateDisable="false"
				color="rgb(230,86,86)"
				:show="showPicker"
				:format="'yyyy-mm-dd'"
				:monthNum="6"
				:value="value"
				:show-tips="true"
				:begin-text="'开始'"
				:end-text="'结束'"
				@confirm="onSelected"
				@cancel="onSelected"
			/>
				
				
		</view>
	
	</view>
</template>

<script>
export default {
	data() {
		return {
			showPicker: false,
			date: ['2021/01/01', '2021/01/06'],
			value: ['2021/01/01', '2021/01/06'],

			searchFalg: false, //是否显示赛选
			searchD: '', //搜素值
			dayList: [{ title: '今天', type: 1 }, { title: '昨天', type: 2 }, { title: '近7天', type: 3 }],
			dayType: 1
		};
	},
	onLoad(){
		this.init()
	},
	methods: {
		init:function(){
			this.$http.get('/v1/agentTrans/selectDetail',data,true,).then(res=>{
				console.log(res)
			})
		},
		// 获取搜索值
		getSearch: function(e) {
			this.searchD = e.target.value;
		},
		daySwich: function(e) {
			this.dayType = e;
		},
		// 筛选
		seachF: function() {
			this.searchFalg = !this.searchFalg;
		},
		// 时间显示
		onShowDatePicker: function() {
			//显示
			this.showPicker = true;
		},
		// 时间选择
		onSelected: function(e) {
			//选择
			this.showPicker = false;
			if (e) {
				this.date = e.value;
				//选择的值
				console.log('value => ' + e.value);
				//原始的Date对象
				console.log('date => ' + e.date);
			}
		},
		goDetail: function(data) {
			let da = '33';
			uni.navigateTo({
				url: '../revenueDetailed/revenueDetailed?id=' + da
			});
		}
	}
};
</script>

<style lang="less">
page {
	background-color: #fafafa;
}
.input_list {
	background-color: #eeeeee;
	height: 68upx;
	border-radius: 50upx;
	line-height: 68upx;
	align-items: center;
	padding-left: 20upx;
	padding-right: 20upx;
}

.left_btn {
	width: 86upx;
	height: 35upx;
	opacity: 1;
	background: #33cc99;
	border-radius: 4upx;
	font-size: 20upx;
	color: #ffffff;
	text-align: center;
	line-height: 35upx;
}
.left_btn_list{
	width: 104upx;
	height: 36upx;
	opacity: 1;
	background: #ffffff;
	border: 1px solid #f77d7d;
	border-radius: 5upx;
	font-size: 20upx;
	color: #F55050;
	text-align: center;
	line-height: 36upx;
	margin-right: 5%;
}
.right_btn_list{
	width: 104upx;
	height: 36upx;
	opacity: 1;
	background: #ffffff;
	border: 1px solid #333333;
	border-radius: 5upx;
	font-size: 20upx;
	color: #333333;
	text-align: center;
	line-height: 36upx;
}

.border_bottomD{
	border-bottom: 1px solid #EEEEEE;
}

.list_iten_one {
	width: 96upx;
	height: 44upx;
	opacity: 1;
	background: #444444;
	border-radius: 6upx;
	text-align: center;
	line-height: 44upx;
	font-size: 24upx;
	display: inline-block;
	color: #999999;
}
</style>
