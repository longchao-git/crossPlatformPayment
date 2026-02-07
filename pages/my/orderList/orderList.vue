<template>
	<view class="container pdx32">
		<view class="br8 bgf mt32 pdy24 pdx24" v-for="(item,index) in list" @click="bindCilckTap">
			<view class="flex-wrp flex-jun">
				<view class="font28" style="color: #777;">订单号 2023090955886</view>
				<view class="color-181818 font28">已购买</view>
			</view>
			<view class="mt32 br8 flex-wrp">
				<image src="/static/logo.png" mode="aspectFill" style="width: 216rpx;height: 216rpx;"></image>
				<view style="height: 216rpx;flex-direction: column;align-items: flex-start;"
					class="ml16 flex-wrp flex-jun ">
					<view class="font28 color-2c2c2c beyond2" style="width: 406rpx;">0天专业课程，助你从小白逆袭成为大神</view>
					<view class="flex-wrp flex-jun" style="width: 406rpx;">
						<view class="font28" style="color: #8B8B8B;">x1</view>
						<view class="flex-wrp color-E9471A mt4">
							<view class="font28">¥</view>
							<view class="font-weight-500 font32">400</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [1, 2, 3, 4, 5, 6]
			}
		},
		onLoad(options) {
			console.log(options)
		},
		methods: {
			bindCilckTap() {
				uni.navigateTo({
					url: '/pages/my/orderList/orderDetails'
				})
			}
		}
	}
</script>

<style>
	.container {
		height: 100vh;
		background: #f2f4f8;
	}
</style>