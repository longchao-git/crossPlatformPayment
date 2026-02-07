<template>
	<view class="container">
		<view class="mx48 flex-wrp" style="flex-direction: column;">
			<image src="/static/logo.png" mode="aspectFill" style="width: 400rpx;height: 400rpx;margin-top: 120rpx;">
			</image>
			<view class="color-2c2c2c font36 font-weight-500 mt16">（长按识别图中二维码）</view>
			<view class="mt48 pdt32 flex-wrp flex-jun buttomView">
				<view class="left">返回首页</view>
				<view class="right">我的订单</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	.container {
		height: 100vh;
		background: white;
	}

	.buttomView {
		width: 100%;

		>view {
			width: 256rpx;
			height: 96rpx;
			line-height: 96rpx;
			border-radius: 124rpx;
			text-align: center;
			font-weight: 500;
		}

		.left {
			background: #EA623D;
			color: #fff;
		}

		.right {
			background: #F2F4F8;
			color: #383838;
		}
	}
</style>