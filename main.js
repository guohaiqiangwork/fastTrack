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
// 

const app = new Vue({
	...App
})
app.$mount()
