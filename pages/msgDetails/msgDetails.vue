<template>
	<view class="">
		<view class="fs-30 ml-30 color-33 fw-700">
			用户处理通知
		</view>
		<view class="fs-22 color-99 ml-30">
			2020-03-11
		</view>
		<view class="border_top mt-30">
			<view class="msg_moudel">
				<view class="fs-28 ">
					尊敬的合作伙伴：
				</view>
				<view class="fs-28 mt-50" style="text-indent: 2em;">
					{{msgDetails.content}}
				</view>
			</view>
		</view>
		
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				msgDetails: {
					title:'手机打开房间',
					content:'根据人民银行85号文要求，3月起我司将关闭连续多月无交易的终端收单功能，当前为您推送的沉寂用户于21年3月31日前仍无交易的将被视为无效用户，我司会进行后续的终端解绑等工作，请知悉！'
				}, //详情
			}
		},

		onLoad(option) {
			this.msgId = option.msgId
			// this.getMsgDetails(); //获取列表
		},
		methods: {
			// 获取消息详情
			getMsgDetails() {
				var data={
					id:this.msgId
				}
				this.$http.get('/api/message/find',data,true).then(res => {
					if (res.data.code == 200) {
						this.msgDetails = res.data.data
					}
				}).catch(err => {})
			}
		}
	}
</script>

<style lang="less">
	page{
		background-color: #FFFFFF;
	}
	.msg_moudel {
		width: 92%;
		margin-left: 4%;
		margin-top: 3%;
	}

	.border_top {
		border-top: 1px solid #CCCCCC;
	}
</style>
