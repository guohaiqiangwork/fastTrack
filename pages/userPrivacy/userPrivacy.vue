<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			this.getInit()
		},
		methods: {
			getInit:function(){
				let data ={
					type:1
				}
				this.$http.post('/v1/policy/detail',data,'','').then(res=>{
					console.log(res)
				})
			}
			
		}
	}
</script>

<style>

</style>
