import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
import {
	http
} from './components/http/http.js'

Vue.prototype.$http = http;

import cuCustom from './components/colorui/components/cu-custom.vue'
Vue.component('cu-custom', cuCustom)

import 'js_sdk/ican-H5Api/ican-H5Api.js'
import member from './common/index.js'
Vue.prototype.$member = member;

const app = new Vue({
	...App
})
app.$mount()
