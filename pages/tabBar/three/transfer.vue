<template>
	<view>
		<cu-custom bgColor="bg-2d-2d" :isBack="true"><block slot="content">机具划拨</block></cu-custom>
		<view class="bg-2d-2d pt-30 pb-60" v-if="!peopleMoudel">
			<view class="flex ">
				<view @click="swichListTab(item.id)" class="tab_item wp_33" v-for="(item, index) in tabOneList" :key="index">
					<view class=" fs-30" :class="listFalg == item.id ? ' fw-700 color-ff' : ''">{{ item.title }}</view>
					<view v-if="listFalg == item.id" class="border_bt" style="margin-left: 44%;"></view>
				</view>
			</view>

			<view class="moudel_width" v-if="listFalg != 3">
				<view class="flex mt-30">
					<view class="left_flag bg-f5"></view>
					<view class="fs-28 color-aa ml-20">可划拨机具数（台）</view>
				</view>
				<view class="fs-60 color-ff fw-700" style="line-height: 1;">46</view>
			</view>
			<!-- 划拨查询 -->
			<view class="moudel_width" v-else>
				<view class="flex input_list mt-20" style="background-color: #444444;">
					<view class="wp-10 text-center mt-10"><image style="width: 26upx;height: 30upx;" src="../../../static/images/icon/search.png" mode=""></image></view>
					<view class="wp-80 pl-10 color-99">
						<input @input="getSearch" type="text" :value="searchD" placeholder="请输入序列号ID" placeholder-style="color:#999999;font-size:30upx" />
					</view>
					<view class="wp-10 text-center" v-if="searchD.length > 1" @click="closeI">
						<image style="width: 30upx;height: 30upx;" src="../../../static/images/icon/colse.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>

		<view class="moudel_list_number" v-if="!peopleMoudel">
			<!-- 选择划拨 -->
			<view class="moudel_width pt-30" v-if="listFalg == 1">
				<view class="fs-30 color-33 fw-700">请选择要划拨的机具ID</view>
				<view class="flex input_list mt-20">
					<view class="wp-10 text-center mt-10"><image style="width: 26upx;height: 30upx;" src="../../../static/images/icon/search.png" mode=""></image></view>
					<view class="wp-80 pl-10 color-99">
						<input @input="getSearch" type="text" :value="searchD" placeholder="请输入序列号ID" placeholder-style="color:#999999;font-size:30upx" />
					</view>
					<view class="wp-10 text-center" v-if="searchD.length > 1" @click="closeI">
						<image style="width: 30upx;height: 30upx;" src="../../../static/images/icon/colse.png" mode=""></image>
					</view>
				</view>

				<view class="mt-30 pd-30">
					<view class="flex pb-20" v-for="(item, index) in numberList" :key="index">
						<view class="">
							<checkbox-group @change="changeCheckbox('', item.id, index)">
								<label><checkbox value="String(item)" :class="{ checked: item.oneChecked }" :checked="item.oneChecked ? true : false"></checkbox></label>
							</checkbox-group>
						</view>
						<view class="fs-30 color-33">序列号：0003102962002289920</view>
					</view>

					<view v-if="numberList.length == 0" class="text-center " style="margin-top: 50px;">
						<image style="width: 422upx;height: 354upx;" src="../../../static/images/noData/noOrder.png" mode=""></image>
						<view class=" fs-30 color-99">暂无内容</view>
					</view>
				</view>
			</view>
			<!-- 区间划拨 -->
			<view class="moudel_width pt-30 pb-30" v-if="listFalg == 2">
				<view class="fs-30 color-33 fw-700">请选择要划拨的机具ID</view>
				<view class="flex mt-30 justify-between picker_moudel ">
					<picker class="wp-80" @change="PickerChange" :value="index" :range="picker" :range-key="'name'">
						<view class="picker color-99 fs-28">{{ index > -1 ? picker[index].name : '请选择起始序列号ID' }}</view>
					</picker>
					<view class="ml-20" style="margin-top: -8upx;"><image style="width: 16upx;height: 10upx;" src="../../../static/images/icon/down99.png" mode=""></image></view>
				</view>
				<view class="mt-30" style="height: 200upx;border-left: 1px solid #CCCCCC;margin-left: 50%;"></view>
				<view class="flex mt-30 justify-between picker_moudel ">
					<picker class="wp-80" @change="PickerChange" :value="index" :range="picker" :range-key="'name'">
						<view class="picker color-99 fs-28">{{ index > -1 ? picker[index].name : '请选择终止序列号ID' }}</view>
					</picker>
					<view class="ml-20" style="margin-top: -8upx;"><image style="width: 16upx;height: 10upx;" src="../../../static/images/icon/down99.png" mode=""></image></view>
				</view>
				
				<view class="ok_btn" @click="openMoudel('1')">确认</view>
			</view>
			<!-- 划拨查询 -->
			<view class="moudel_width pt-30" v-if="listFalg == 3">
				<view class="moudel_width pt-30">
					<view class="flex fs-30 color-99 text-center">
						<view class="wp-25 " style="line-height: 1.5;">
							机具序
							<br />
							列号
						</view>
						<view class="wp-25 " style="line-height: 1.5;">
							划拨代理商
							<br />
							名称
						</view>
						<view class="wp-25 " style="line-height: 1.5;">划拨时间</view>
						<view class="wp-25 ">
							<view class="flex justify-center  ">
								<picker class="" @change="PickerChange" :value="index" :range="picker" :range-key="'name'">
									<view class="picker color-99 fs-28">{{ index > -1 ? picker[index].name : '状态' }}</view>
								</picker>
								<view class="ml-20" style="margin-top: -8upx;">
									<image style="width: 16upx;height: 10upx;" src="../../../static/images/icon/down99.png" mode=""></image>
								</view>
							</view>
						</view>
					</view>
					<view @click="openMoudel('2')" v-for="(item, index) in [1, 2, , 3]" :key="index" class="flex fs-30 color-33 text-center border_bottom pb-20 pt-20 fw-600">
						<view class="wp-25">0003102962 002289920</view>
						<view class="wp-25">李冰</view>
						<view class="wp-25">2021-03-30 009:00:00</view>
						<view class="wp-25" :class="index == 1 ? 'color-fc' : 'color-70'">处理中</view>
					</view>
				</view>
			</view>
		</view>

		<view class="bottom_moudel_ " v-if="!peopleMoudel && listFalg == 1">
			<view class="moudel_width flex justify-between mt-30">
				<view class="flex fs-30 mt-20 wp-60">
					<view class="flex">
						<checkbox-group @change="changeCheckbox('q')">
							<label>
								<checkbox value="String(item)" :class="{ checked: oneCheckedq }" :checked="oneCheckedq ? true : false"></checkbox>
								<text class="mt-10">全选</text>
							</label>
						</checkbox-group>
					</view>
					<view class="">总计：{{ checkList.length > 0 ? checkList.length : 0 }}台</view>
				</view>
				<view class="btn_b" @click="openMoudel('1')">确认</view>
			</view>
		</view>

		<!-- 提示框 -->
		<view class="cu-modal" :class="modalFalg == 1 ? 'show' : ''">
			<view class="cu-dialog wp-80">
				<view class="fs-36 color-33 mt-20 fw-700">提示</view>
				<view class="fs-34 mt-30">共1台，可划拨1台</view>
				<view class="mt-30 pb-30">
					<button style="border: 1px solid #333333;height: 78upx;" class="cu-btn wp-40 bg-ff color-33" @tap="hideModal">取消</button>
					<button style="height: 78upx" class="cu-btn bg-2d color-ff wp-40 ml-70" @tap="okModal">确定</button>
				</view>
			</view>
		</view>

		<!-- 人员选择 -->
		<view class="bg-2d-2d pt-30 pb-60" v-if="peopleMoudel">
			<view class="moudel_width">
				<view class="flex input_list mt-20" style="background-color: #444444;">
					<view class="wp-10 text-center mt-10"><image style="width: 26upx;height: 30upx;" src="../../../static/images/icon/search.png" mode=""></image></view>
					<view class="wp-80 pl-10 color-99">
						<input @input="getSearch" type="text" :value="searchD" placeholder="请输入代理商名称" placeholder-style="color:#999999;font-size:30upx" />
					</view>
					<view class="wp-10 text-center" v-if="searchD.length > 1" @click="closeI">
						<image style="width: 30upx;height: 30upx;" src="../../../static/images/icon/colse.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>

		<view class="moudel_list_number" v-if="peopleMoudel">
			<view class="moudel_width pt-30">
				<view class="flex fs-30 color-99 text-center">
					<view class="wp_33   ">代理商名称</view>
					<view class="wp_33 ">代理商编号</view>
					<view class="wp_33">手机号</view>
				</view>
				<view @click="openMoudel('2')" v-for="(item, index) in [1, 2, , 3]" :key="index" class="flex fs-30 color-33 text-center border_bottom pb-20 pt-20">
					<view class="wp_33   ">李冰</view>
					<view class="wp_33 ">23980800</view>
					<view class="wp_33 ">150****3304</view>
				</view>
			</view>
		</view>

		<!-- 提示框 -->
		<view class="cu-modal" :class="modalFalg == 2 ? 'show' : ''">
			<view class="cu-dialog wp-80">
				<view class="fs-36 color-33 mt-20 fw-700">提示</view>
				<view class="fs-34 mt-30">是否将机具划拨给李冰？</view>
				<view class="mt-30 pb-30">
					<button style="border: 1px solid #333333;height: 78upx;" class="cu-btn wp-40 bg-ff color-33" @tap="hideModal">取消</button>
					<button style="height: 78upx" class="cu-btn bg-2d color-ff wp-40 ml-70" @tap="okModalP">确定</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			picker: [{ name: '终端维度', id: '1' }, { name: '结算类型', id: '2' }, { name: '活动类型', id: '3' }, { name: '终端属性', id: '3' }],
			index: -1,
			type: '1', //那个详情
			tabOneList: [{ title: '选择划拨', id: '1' }, { title: '区间划拨', id: '2' }, { title: '划拨查询', id: '3' }],
			listFalg: 3,
			searchD: '',
			oneChecked: true,
			numberList: [{ id: 1, oneChecked: true }, { id: 1, oneChecked: true }, { id: 1, oneChecked: false }],
			oneCheckedq: false, //全选
			checkList: [], //存储机具号
			modalFalg: null, //询问框
			peopleMoudel: false //人员选择
		};
	},
	onLoad() {},
	methods: {
		// 获取搜索值
		getSearch: function(e) {
			this.searchD = e.target.value;
		},
		swichListTab: function(e, index) {
			this.listFalg = e;
		},
		closeI: function() {
			this.searchD = '';
		},
		// 单选
		changeCheckbox: function(type, id, index) {
			// 全选
			if (type == 'q') {
				if (this.oneCheckedq) {
					this.oneCheckedq = false;
					this.numberList.forEach(item => {
						item.oneChecked = false;
					});
				} else {
					this.oneCheckedq = true;
					this.numberList.forEach(item => {
						item.oneChecked = true;
					});
				}
				console.log(this.numberList);
			} else {
				this.numberList[index].oneChecked = !this.numberList[index].oneChecked;
			}

			this.getNumbList(); //计算总素
		},

		//获取已选极具
		getNumbList: function() {
			this.checkList = [];
			this.numberList.forEach(item => {
				if (item.oneChecked) {
					this.checkList.push(item);
				}
			});
		},
		openMoudel: function(item) {
			this.modalFalg = item;
		},
		// 操作提示框
		hideModal: function() {
			this.modalFalg = null;
		},
		// 机器选择
		okModal: function() {
			console.log('8797');
			this.modalFalg = null;
			this.peopleMoudel = true;
		},
		// 人员选择在
		okModalP: function() {
			this.modalFalg = null;
			this.peopleMoudel = false;
		},

		// 下拉列表
		PickerChange(e) {
			this.index = e.detail.value;
		}
	}
};
</script>

<style lang="less">
page {
	background: #ffffff;
}
.moudel_bgff {
	background: #ffffff;
	border-radius: 14upx;
}
.wp-16 {
	width: 16% !important;
}
.tab_item {
	width: 33%;
	text-align: center;
	display: inline-block;
	color: #cccccc;
}

.border_bt {
	width: 36upx;
	height: 6upx;
	opacity: 1;
	background: #f55050;
	border-radius: 3upx;
	box-shadow: 0upx 4upx 6upx 0upx rgba(245, 80, 80, 0.3);
	margin-left: 40%;
}
.moudel_list_number {
	opacity: 1;
	background: #ffffff;
	border-radius: 30upx 30upx 0 0;
	margin-top: -30upx;
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
.bottom_moudel_ {
	height: 138upx;
	position: fixed;
	width: 100%;
	bottom: 0;
	line-height: 138upx;
	align-items: center;
	background-color: #ffffff;
}
.btn_b {
	width: 220upx;
	height: 78upx;
	opacity: 1;
	background: #2d2d2d;
	border-radius: 39upx;
	line-height: 78upx;
	text-align: center;
	color: #ffffff;
	font-size: 30upx;
}
.picker_moudel {
	background-color: #eeeeee;
	height: 68upx;
	border-radius: 50upx;
	width: 100%;
	align-items: center;
	padding-left: 30upx;
	padding-right: 30upx;
}
.ok_btn {
	margin-top: 300upx;
	height: 88upx;
	opacity: 1;
	background: #2d2d2d;
	border-radius: 44upx;
	line-height: 88upx;
	font-size: 30upx;
	color: #ffffff;
	text-align: center;
}
</style>
