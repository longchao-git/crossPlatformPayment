<template>
	<view class="content relative ">
		<image src="/static/loginIConbanck.png" mode="aspectFill" class="loginIConbanck"
			style="width: 750rpx;height: 100vh;"></image>
		<view class="flex-wrp relative "
			style="z-index: 2; flex-direction: column; justify-content: center;height: 100vh;">
			<image src="/static/logo.png" style="width: 212rpx;height: 212rpx;" mode="aspectFill"></image>
			<view class="mt48 font40 color-2c2c2c font-weight-bold">数据中台</view>
			<view class="  mt28 font36 colf center line96"
				style="background:#EA623D;margin-top: 160rpx;width: 650rpx;height: 96rpx;border-radius: 124rpx;"
				@click="handleClicktap(0)">
				登录
			</view>
			<view class="flex-wrp font24" style="margin-top: 48rpx;padding-bottom: 200rpx;">
				<image @click="handClickview(0)"
					:src="setTionBoolan?'/static/iconSettionYes.png':'/static/iconSettionNO.png'" mode="aspectFill"
					class="icon36"></image>
				<view class="color-EA623D ml20">我已阅读并同意</view>
				<view @click="handClickview(1)" class="color-141414">《用户协议》</view>
				<text class="color-141414">及</text>
				<view @click="handClickview(2)" class="color-141414">《隐私条款》</view>
			</view>
		</view>

	</view>
</template>

<script>
	import api from '@/api/api.js'
	import common from '@/utils/common.js'
	export default {

		data() {
			return {
				setTionBoolan: false,
				code: '',
			}
		},
		async onLoad(options) {
			uni.login({
				success: res => {
					this.code = res.code
				}
			});
		},

		methods: {
			handClickview(type) {
				if (type == 0) {
					this.setTionBoolan = !this.setTionBoolan
				} else if (type == 1) {
					uni.navigateTo({
						url: '/pages/login/policy?type=' + 0
					})
				} else {
					uni.navigateTo({
						url: '/pages/login/policy?type=' + 1
					})
				}
			},

			handleClicktap(type) {
				if (!this.setTionBoolan) {
					uni.showToast({
						title: '请勾选用户协议及隐私条款',
						icon: 'none'
					})
					return
				}
				api.loginWx({
					code: this.code,
				}).then(res => {
					uni.setStorageSync('token', res.token)
					uni.setStorageSync('userInfo', res)
					if (!res.userName || !res.headImg) {
						uni.navigateTo({
							url: '/pages/login/codeLogin?userId=' + res.userId
						})
					} else {
						uni.switchTab({
							url: '/pages/tabbar/home/home'
						})
					}
				})


			},

		}
	}
</script>

<style lang="less" scoped>
	page {
		background: #ffffff;
	}

	.content {
		height: 100vh;
		overflow: hidden;

		.loginIConbanck {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1;
		}
	}
</style>