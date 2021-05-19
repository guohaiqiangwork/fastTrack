<template name="float-menu">
	<view>
		<view @touchmove.stop.prevent="doNothing">
			<!-- 主图标，不可隐藏 -->
			<view class="box" :style="{ top: top + 'px', left: left + 'px' }" :animation="animationBox" @click="showMenu" @touchmove="touchmove" @touchend="touchend">
				<image class="image" style="width: 50px;height: 50px;" src="./static/main.png" mode="" />
			</view>
			<view class="menu_list" :class="[menuCls(1)]" :style="{ top: top - 75 + 'px' }" @tap="menuItemClick(1)">
				<image class="image " style="width: 60px;height: 50px;" src="./static/menu1.png" mode="" />
			</view>
			<view class="menu_list" :class="[menuCls(2)]" :style="{ top: top - 52 + 'px' }" @tap="menuItemClick(2)">
				<image class="image" style="width: 50px;height: 50px;" src="./static/menu2.png" mode="aspectFill" />
			</view>
			<view class="menu_list" :class="[menuCls(3)]" :style="{ top: top + 2 + 'px' }" @tap="menuItemClick(3)">
				<image class="image" style="width: 50px;height: 50px;" src="./static/menu3.png" mode="aspectFill" />
			</view>
			<!-- <view class="menu_list" :class="[menuCls(4)]" :style="{ top: top + 56 + 'px' }" @tap="menuItemClick(4)">
				<image class="image" style="width: 30px;height: 30px;" src="./static/menu_setting.png" mode="aspectFill" />
			</view>
			<view class="menu_list" :class="[menuCls(5)]" :style="{ top: top + 79 + 'px' }" @tap="menuItemClick(5)">
				<image class="image wh-100" style="width: 30px;height: 30px;" src="./static/main.png" mode="aspectFill" />
			</view> -->
		</view>
	</view>
</template>

<script>
/**
 * 可拖拽悬浮菜单，可展开5个按钮（主按钮直径50，菜单按钮直径45）
 * 主按钮top - 菜单按钮top = 75，因此2个按钮的圆心相聚77
 * 菜单按钮的TOP和LEFT值如下：
 * 1: 	TOP  = top - 75					= top - 75
 *    	LEFT = 10 + 25 - 23 			= 10  + 2
 * 2: 	TOP  = top - (77/√2 - 25 + 23) 	= top - 52
 * 		LEFT = 10 + (77/√2 + 25 - 23) 	= 10  + 56
 * 3:	TOP  = top + 25 - 23 			= top + 2
 *    	LEFT = 10 + 77 + 25 - 23		= 10  + 79
 * 4:	TOP  = top + (77/√2 + 25 - 23)	= top + 56
 *    	LEFT = 10 + (77/√2 + 25 - 23) 	= 10  + 56
 * 5:	TOP  = top + 77 + 25 - 23		= top + 79
 *    	LEFT = 10 + 25 - 23 			= 10  + 2
 * 备注：LEFT中的10是主按钮的left值，TOP中的top是主按钮的top值
 */
export default {
	name: 'hch-menu',
	props: {
		imgLists: {
			type: Array,
			default: data => {
				return ['./static/menu_release.png', './static/menu_edit.png', './static/menu_delete.png', './static/menu_search.png', './static/menu_setting.png'];
			}
		},
		imgMenu: {
			type: String,
			default: './static/main.png'
		}
	},
	data() {
		return {
			isShow: false, // 是否显示菜单按钮，true-显示，false-隐藏
			isLeft: true, // 主菜单是否在左边，true-左边，false-右边
			top: 200, //主菜单的top值
			left: 10, //主菜单的left值
			animationBox: '' // 主菜单动画
		};
	},
	methods: {
		/**
		 * 菜单按钮的单击事件
		 * @param {Object} index 菜单按钮序号，从1开始
		 */
		menuItemClick(index) {
			this.showMenu();
			this.$emit('menuClick', index);
		},
		/**
		 * 获取菜单按钮的style对象
		 * @param {Object} number 菜单按钮序号，从1开始
		 */
		menuCls(number) {
			let num = this.isShow ? number : 0;
			let pos = this.isLeft ? 'L' : 'R';
			return 'menu' + num + pos;
		},
		doNothing() {},
		/**
		 * 显示/隐藏菜单按钮，并执行动画
		 */
		showMenu() {
			console.log('据说是显示');
			var animation = uni.createAnimation({
				duration: 200,
				timingFunction: 'ease'
			});
			this.isShow = !this.isShow;
			let rotate = this.isShow ? 135 : 0;
			animation.rotate(rotate).step();
			this.animationBox = animation.export();
		},
		touchmove(e) {
			console.log('8098');
			if (this.isShow) return;
			let wh = uni.getSystemInfoSync().windowHeight,
				py = e.touches[0].pageY;
			this.left = e.touches[0].pageX;
			if (py > 100 && py + 100 < wh) this.top = py - 20;
		},
		touchend(e) {
			console.log('这是是什么');
			let ww = uni.getSystemInfoSync().windowWidth,
				px = e.changedTouches[0].clientX;
			this.isLeft = px <= ww * 0.5;
			this.left = this.isLeft ? 10 : ww - 50 - 10;
		}
	}
};
</script>

<style lang="scss">
.box {
	position: fixed;
	z-index: 99;
	width: 50px;
	height: 50px;
	top: 50%;
	left: 10px;
	border-radius: 50%;
	// background-color: rgba($color: #000, $alpha: 0.5);
	background-color: #16c4af;
}

.image {
	width: 45px;
	height: 45px;
	z-index: 99;
	border-radius: 50%;
}

.menu_list {
	justify-content: center;
	align-items: center;
	display: flex;
	position: fixed;
	width: 45px;
	height: 45px;
	border-radius: 50%;
	z-index: 9;
	color: white;
	// border: 2px solid #16c4af;
	background-color: rgba($color: #000, $alpha: 0);
}

.menu0L {
	left: 12px;
	opacity: 0;
	transition: top 0.2s, left 0.2s, opacity 0.2s;
}

.menu1L {
	left: 12px;
	transition: top 0.2s, left 0.2s, opacity 0.2s;
}

.menu2L {
	left: 66px;
	transition: top 0.2s, left 0.2s, opacity 0.2s;
}

.menu3L {
	left: 89px;
	transition: top 0.2s, left 0.2s, opacity 0.2s;
}

.menu4L {
	left: 66px;
	transition: top 0.2s, left 0.2s, opacity 0.2s;
}

.menu5L {
	left: 12px;
	transition: top 0.2s, left 0.2s, opacity 0.2s;
}

.menu0R {
	right: 12px;
	opacity: 0;
	transition: top 0.2s, right 0.2s, opacity 0.2s;
}

.menu1R {
	right: 12px;
	transition: top 0.2s, right 0.2s, opacity 0.2s;
}

.menu2R {
	right: 66px;
	transition: top 0.2s, right 0.2s, opacity 0.2s;
}

.menu3R {
	right: 89px;
	transition: top 0.2s, right 0.2s, opacity 0.2s;
}

.menu4R {
	right: 66px;
	transition: top 0.2s, right 0.2s, opacity 0.2s;
}

.menu5R {
	right: 12px;
	transition: top 0.2s, right 0.2s, opacity 0.2s;
}
</style>
