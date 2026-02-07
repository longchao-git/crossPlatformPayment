<template>
	<view class="container">
		<navbar :navbar="navbar"></navbar>
		<view class="swiperTop flex-wrp flex-jun" @click="bindTapCiclk">
			<view class="flex-wrp">
				<image src="/static/logo.png" mode="aspectFill" class="nameUser"></image>
				<view class="ml32">
					<view class="flex-wrp">
						<view class="color-181818 font40 font-weight-500 beyond" style="max-width: 400rpx;">
							Hello,赵小赵小磊赵小磊赵小磊磊
						</view>
						<image src="/static/icon_renz.png" mode="aspectFill" class="icon40 ml8"></image>
					</view>
					<view class="mt8 " style="color: #383838;">欢迎使用山林</view>
				</view>
			</view>
			<image src="/static/icon_line.png" mode="aspectFill" class="icon48"></image>
		</view>
		<view class="mx32 flex-wrp flex-jun viewFbg">
			<view class="flex-wrp" @click="bindCilckOrder(1)">
				<image src="/static/icon_dingdna.png" mode="aspectFill" class="icon96"></image>
				<view class="ml16 font-weight-500 color-181818 font32">全部订单</view>
			</view>
			<view class="flex-wrp" @click="bindCilckOrder(2)">
				<image src="/static/icon_renz-1.png" mode="aspectFill" class="icon96"></image>
				<view class="ml16 font-weight-500 color-181818 font32">员工认证</view>
			</view>
		</view>


	</view>
</template>

<script>
	import api from '@/api/api.js'

	export default {
		data() {
			return {
				bannerList: [1, 2, 3, ],
				navigationHeight: 0,
				list: [1, 2, 3, 4, 5, 6],
				navbar: {
					title: '我的',
					backgroundColor: 'transparent'
				}
			}
		},
		onLoad(options) {

			this.navigationHeight = uni.getSystemInfoSync().statusBarHeight;


		},
		onShow(options) {


		},
		methods: {
			bindTapCiclk() {
				uni.navigateTo({
					url: '/pages/login/codeLogin'
				})
			},
			bindCilckOrder(type) {
				if (type == 1) {
					uni.navigateTo({
						url: '/pages/my/orderList/orderList?type=1'
					})
				} else {
					uni.navigateTo({
						url: '/pages/my/certification/certification'
					})
				}

			}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		background: linear-gradient(180deg, #FAE8DE 0%, #F7F7F7 44.79%);
		min-height: 100vh;
		width: 750rpx;
		padding-bottom: 60rpx;
	}

	.swiperTop {
		padding: 48rpx 32rpx;

		.nameUser {
			border-radius: 20rpx;
			border: 4rpx solid #ffffff;
			width: 132rpx;
			height: 132rpx;
		}
	}

	.viewFbg {
		>view {
			background: #ffffff;
			padding: 32rpx;
			border-radius: 16rpx;
			width: 256rpx;
		}
	}
</style>