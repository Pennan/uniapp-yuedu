<template>
	<view>
        <!-- #ifdef MP-WEIXIN -->
        <button type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo">使用微信登录</button>
        <!-- #endif -->
    </view>
</template>

<script>
	var _self, pageOptions, session_key, openid;
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			// #ifdef MP-WEIXIN
			getUserInfo : (info) => {
				info = info.mp.detail.userInfo;
				//userInfo {"nickName":"深海","gender":1,...avatarUrl":"https://7tdPvkPaJlkaLFFbLAffGVApluZdanLkDVplNlAhq1EJA/132"}
				// 与服务器交互将数据提交到服务端数据库
				uni.request({
					url: _self.apiServer+'member&m=login',
					method: 'POST',
					header: {'content-type' : "application/x-www-form-urlencoded"},
					data: {
						openid : openid,
						name   : info.nickName,
						face   : info.avatarUrl,
					},
					success: res => {
						console.log(res);
						res = res.data;
						// 登录成功 记录会员信息到本地
						if(res.status == 'ok'){
							uni.showToast({title:"登录成功"});
							uni.setStorageSync('SUID' , res.data.u_id + '');
							uni.setStorageSync('SRAND', res.data.u_random + '');
							uni.setStorageSync('SNAME', res.data.u_name + '');
							uni.setStorageSync('SFACE', res.data.u_face + '');
							// 跳转
							if(pageOptions.backtype == 1){
								uni.redirectTo({url:pageOptions.backpage});
							}else{
								uni.switchTab({url:pageOptions.backpage});
							}
						}else{
							uni.showToast({title:res.data});
						}
					},
					fail: (e) => {
						console.log(JSON.stringify(e));
					}
				});
				
			},
			// #endif
		},
		onLoad(options) {
			_self = this;
			pageOptions = options;
			// #ifdef MP-WEIXIN
			// 调用 微信 login 获取 code
			uni.login({
				success: (res) => {
					uni.request({
						url:_self.apiServer+'member&m=codeToSession&code='+res.code,
						success: (sessions) => {
							// sessions.date 数据格式
							// expires_in:7200
							// openid:"oS6of0V0rdp9nY_BuvCnQUasOHYc"
							// session_key:"87sE2oDD8lc+aDJj0tB6+g=="
							// 获取 unionId
							session_key = sessions.data.session_key;
							openid      = sessions.data.openid;
						},
					});
				}
			});
			// #endif
			// app
			// #ifdef APP-PLUS
			uni.login({
				provider: 'weixin',
				success: (res) => {
					uni.getUserInfo({
						success:function(info){
							console.log(JSON.stringify(info));
							var sign = uni.getStorageSync('sign');
							uni.request({
								url: _self.apiServer+'member&m=login',
								method: 'POST',
								header: {'content-type' : "application/x-www-form-urlencoded"},
								data: {
									openid : info.userInfo.openId,
									name   : info.userInfo.nickName,
									face   : info.userInfo.avatarUrl,
									sign   : sign
								},
								success: res => {
									console.log(JSON.stringify(res));
									res = res.data;
									if(res.status == 'ok'){
										uni.showToast({title:"登录成功"});
										uni.setStorageSync('SUID' , res.data.u_id + '');
										uni.setStorageSync('SRAND', res.data.u_random + '');
										uni.setStorageSync('SNAME', res.data.u_name + '');
										uni.setStorageSync('SFACE', res.data.u_face + ''); 
										// 跳转
										if(options.backtype == 1){
											uni.redirectTo({url:options.backpage});
										}else{
											uni.switchTab({url:options.backpage});
										}
									}else{
										console.log(JSON.stringify(res));
										uni.showToast({title:res.data});
									}
								},
								fail: (res) => {
									console.log(res);
								},
								complete: () => {}
							});
						},
						fail:function(){
							uni.showToast({title:"微信登录授权失败", icon:"none"});
						}
					})
				},
				fail: () => {
					uni.showToast({title:"微信登录授权失败",  icon:"none"});
				}
			})
			// #endif
		}
	}
</script>

<style>

</style>
