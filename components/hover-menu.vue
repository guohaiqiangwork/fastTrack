<template>
	<view>
		<view :class="['top_moudel', { show: show }]" :style="{ top: top + 'px' }" draggable="true" @touchstart="touchstart" @touchmove.stop.prevent="touchmove">
			<view class="heart" v-if="!show" @tap="show = !show"><image class="wh-100" src="./hch-menu/static/main.png" mode=""></image></view>

			<view class="tab_list" v-if="show" >
				<view class="item_moudel"
				@tap="tabItemTap(index + 1)"
				  v-for="(item, index) in menuList" :key="index">
					<view class="">
						<image v-if="index == 0" class="icon_wd" src="./hch-menu/static/menu1.png" mode=""></image>
						<image v-if="index == 1" class="icon_wd" src="./hch-menu/static/menu2.png" mode=""></image>
						<image v-if="index == 2" class="icon_wd" src="./hch-menu/static/menu3.png" mode=""></image>
					</view>
					<view class="fs-24 ">{{ item.title }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'hover-menu',
	props: {
		contentHeight: {
			type: Number,
			default: uni.getSystemInfoSync().windowHeight
		}
	},
	data() {
		return {
			top: 300, // 顶端距离
			show: false,
			menuList: [
				{
					title: '商户入网',
					icon: './hch-menu/static/menu1.png',
					url: 'newlyAdded'
				},
				{
					title: '新增代理',
					icon: './hch-menu/static/menu2.png',
					url: 'newlyAdded'
				},
				{
					title: '钱包',
					icon: './hch-menu/static/menu3.png',
					url: 'wallet'
				}
			]
		};
	},

	methods: {
		// 点击事件
		tabItemTap:function(item){
			console.log(item)
			this.show = false
			this.$emit('tabItemTap', item);
		},
		
		// 拖动开始，记录一下偏移量
		touchstart: function(e) {
			var touch = e.touches[0] || e.changedTouches[0];
			this.deviationTop = touch.clientY - this.top;
			console.log(this.deviationTop);
		},
		// 上下拖动时
		touchmove: function(e) {
			let _this = this;
			var touch = e.touches[0] || e.changedTouches[0];
			var top = touch.clientY;
			top = top - this.deviationTop;
			// 拖拽不超出顶部
			if (top < 60) {
				top = 60;
			}
			console.log(_this.contentHeight + '据说传过来的数据');
			if (top > _this.contentHeight - 100) {
				top = _this.contentHeight - 80;
			}
			this.top = top;
			return false;
		}
	}
};
</script>

<style lang="less">
.top_moudel {
	position: absolute;
	top: 5%;
	right: 3%;
}
/*实现缩放效果的时候对父元素操作即可*/
.heart {
	width: 100upx;
	height: 100upx;
	position: relative;
	animation-name: shake;
	animation-duration: 5s;
	animation-iteration-count: infinite;
	// background-color: red;
	border-radius: 50%;
}
/* 动画： 定义一个关键帧 为元素去调用这个动画  */
/* 关键帧 每一步中所执行的效果 */
@keyframes shake {
	0% {
		transform: scale(0.9, 0.9);
	}
	100% {
		transform: scale(1.2, 1.2);
	}
}
.show {
	position: absolute;
	top: 5%;
	right: 0 !important;
	width: 100%;
}
.tab_list {
	background-color: #000000;
	// opacity: 0.8;
	color: #ffffff;
	width: 60%;
	margin-left: 49.9%;
	animation-name: moudel;
	animation-duration: 2.5s;
	border-radius: 30upx 0  0 30upx;
	// animation-iteration-count: infinite;//循环
	.item_moudel {
		display: inline-block;
		width: 30%;
		text-align: center;
		padding-top: 20upx;
		padding-bottom: 20upx;
	}
}
@keyframes moudel {
	0% {
		transform: translateX(100px);
	}
}
.icon_wd {
	width: 80upx;
	height: 80upx;
	border-radius: 50%;
}
</style>
