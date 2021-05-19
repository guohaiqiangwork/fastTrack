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
// 时间插件
import TnDatePicker from '@/components/tn-datepicker/tn-datepicker.vue';
Vue.component('tn-date-picker', TnDatePicker)
import rangeDatePick from '@/components/pyh-rdtpicker/pyh-rdtpicker.vue';

Vue.component('rangeDatePick', rangeDatePick)

// 过滤器全局引入
import * as filters from './common/filter.js' // * as必须携带
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})
// 银行卡校验
import {bankType} from './common/bankType.js' 
Vue.prototype.$bankType = bankType;


const app = new Vue({
	...App
})
app.$mount()
