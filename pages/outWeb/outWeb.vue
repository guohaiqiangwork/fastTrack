<template>
    <web-view :src="url"></web-view>
</template>
 
<script>
    export default {
        data() {
            return {
                url: null  //要打开的外部链接
            }
        },
        onLoad: function (option) {
			let Url = 'https://api.lovecantouch.com/wxmp/webgl/customizations.html?spuid={{spuid}}&user_uid={{uid}}&user_sessionid={{sessionid}}#wechat_redirect'
            this.url = Url
        }
    }
</script>