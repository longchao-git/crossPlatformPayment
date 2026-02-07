<template>
	<view class="container">
		<view class="swiperTop relative">
			<swiper circular="true" :autoplay="true" style='height:750rpx;width: 750rpx ;' :interval='3000'
				:disable-programmatic-animation='true' :disable-touch='true' easing-function='linear'
				:indicator-dots='true' indicator-color='rgba(255, 255, 255, 0.55)' indicator-active-color='#ffffff'>
				<swiper-item v-for="(item,index) in productInfo.headImg" :key="index">
					<view class="color-62540B font24 relative">
						<image :src="item" class="homeBaner" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="bgf pd32" style="border-radius: 0 0 12rpx 12rpx;">
			<view class="line54 font-weight-500 font36 " style="color: #000000;">{{productInfo.productTitle}}</view>
			<view class="flex-wrp color-E9471A mt16">
				<view class="font32">¥</view>
				<view class="font-weight-500 font48">{{productInfo.productPrice}}</view>
			</view>
		</view>
		<view class="mt16 bgf" style="padding-bottom: 160rpx;">
			<view class="pd32 font32 font-weight-500" style="color:#171D1E;">商品详情</view>
			<view class="pdx32 pdy16 color-62540B font28 line42">
				{{productInfo.infoDesc}}
			</view>
			<view class="flex-wrp pdx32" style="flex-direction: column;">

				<image :src="item" v-for="(item,index) in productInfo.infoImgs" :key="index" style="width: 686rpx;"
					class="homeBaner" mode="widthFix"></image>
			</view>
		</view>
		<view class="fiex_view">
			<view @click="bindViewClick()">立即下单</view>
		</view>
	</view>
</template>

<script>
	import api from '@/api/api.js'
	export default {
		data() {
			return {

				productInfo: {}
			}
		},
		onLoad(options) {
			this.productId = options.productId
			this.productGet()
		},
		methods: {
			productGet() {
				api.productGet({
					productId: this.productId,
				}).then(res => {
					res.infoImgs = JSON.parse(res.infoImgs)
					res.headImg = JSON.parse(res.headImg)

					this.productInfo = res
				})
			},
			async bindViewClick() {
				let loginFalse = await getApp().judgeIsLogin()
				console.log(loginFalse)
				if (!loginFalse) {
					return
				}
				uni.navigateTo({
					url: '/pages/home/confirmOrder/confirmOrder'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.container {
		background: #f2f2f2;
	}

	.swiperTop {


		width: 750rpx;
		height: 750rpx;

		.homeBaner {
			width: 750rpx;
			height: 750rpx;
		}
	}

	.fiex_view {
		background: #FFF;
		box-shadow: 0px -2rpx 2rpx 0px rgba(0, 0, 0, 0.06);
		width: 750rpx;
		height: 160rpx;
		position: fixed;
		bottom: 0;

		>view {
			position: absolute;
			top: 32rpx;
			right: 32rpx;
			width: 224rpx;
			height: 96rpx;
			background: #EA623D;
			border-radius: 124rpx;
			text-align: center;
			line-height: 96rpx;
			color: #FFF;
			font-weight: 500;
		}
	}
</style>