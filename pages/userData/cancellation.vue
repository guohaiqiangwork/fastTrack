<template>
	<view>
		<view class="moudel_width pb-30">
			<view class="moudel_list mt-30">
				<view class="fs-30 fw-700">申请注销账户</view>
				<view class="fs-30">
					1、您仅能申请注销您的汇拓客账户，并依照我们的流程进行注销。</br> 
					2、您可以通过本APP提供的注销账户入口申请注销账户。</br>
					3、您申请注销的账户处于正常状态，即您的账户信息是最新完整正确的，月账户未被采取有关机关冻结等限制措施。</br>
					4、为了维护您和其他用户的合法利益，您申请注销账户，应当不存在未了解的权利义务或其他因为注销该账户会产</br>
					5、汇拓客账户注销后，您将无法使用我们的服务，双方的权利义务终止(本协议另有约定不得终止的或依其性质不能终止的除外)，同时还可能产生如下结果:</br>
					(1)与账户关联的权益(如数据查看、收益计算等)均将作废。</br>
					 (2)如您在注销账户前存在违约、侵权等不当行为或未完结合同的您仍应当承担相应责任。
					点击“申请注销”后代表您知晓并同意以上内容
				</view>
			</view>
			
			<view class="mt-30 bn_b" @click="goLogin">
				申请注销
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		goLogin:function(){
			uni.reLaunch({
				url:'../login/login'
			})
		}
	}
};
</script>

<style></style>
