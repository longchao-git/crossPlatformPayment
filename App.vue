<script>
	export default {
		onLaunch: function() {},
		onShow: function() {
			// 检测小程序token是否过期 
			this.checkToken()
		},
		onHide: function() {},
		methods: {
			checkToken() {
				if (uni.getStorageSync('token')) {
					this.userId = uni.getStorageSync('loginUserInfo').userId
					api.checkToken().then(res => {

					})
				}
			},
			/**
			 * 
			 * 判断用户是否登录 - 判断
			 */
			judgeIsLogin(type) {
				return new Promise(resolve => {
					if (!uni.getStorageSync('token') || !uni.getStorageSync('userInfo')) {
						uni.showModal({
							title: "提示",
							content: "点击登录后即可体验更多功能！",
							cancelText: "暂不登录",
							confirmText: "立即登录",
							success: res => {
								if (res.confirm) {
									uni.navigateTo({
										url: '/pages/login/login'
									});
								}
							},
							complete: () => {
								resolve(false);
							}
						});
						resolve(false)
					} else {
						resolve(true);
					}
				});
			},
			bindpay(data) {
				// 
				return new Promise(resolve => {
					let tempData = {};
					// 判断当前所在的环境 - 1: 抖音  2: 微信
					tempData = {
						timeStamp: data.timeStamp,
						nonceStr: data.nonceStr,
						package: data.package,
						signType: data.signType,
						paySign: data.paySign,
					}
					uni.requestPayment({
						...tempData,
						service: 1,
						success(res) {
							resolve(res)
						},
						fail(res) {
							uni.showToast({
								title: res.message,
								icon: 'none'
							})
						},
					});
				})
			},


		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./index.css");
</style>