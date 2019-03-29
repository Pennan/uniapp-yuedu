import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
/**
 * 检查是否的登录
 * backpage: 返回到哪个页面
 * backtype: 返回的页面的类型 1: 普通页面 2: tabbar页面
 */
Vue.prototype.checkLogin  = function(backpage, backtype){
	var SUID  = uni.getStorageSync('SUID'); // 用户id
	var SRAND = uni.getStorageSync('SRAND'); // 用户的随机码
	var SNAME = uni.getStorageSync('SNAME'); // 用户名称
	var SFACE = uni.getStorageSync('SFACE'); // 用户头像
	if(SUID == '' || SRAND == '' || SFACE == ''){
		uni.redirectTo({
			url:"../login/login?backpage=" + backpage + "&backtype=" + backtype
		});
		return false;
	}
	return [SUID, SRAND, SNAME, SFACE];
}
var APITOKEN  = 'api2019';
var STATIC_SERVER = 'http://192.168.200.230/';
Vue.prototype.apiServer = STATIC_SERVER + 'index.php?token='+APITOKEN+'&c=';
Vue.prototype.staticServer = STATIC_SERVER;
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
