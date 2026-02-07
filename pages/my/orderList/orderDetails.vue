<template>
	<view class="container">
		<navbar :navbar="navbar"></navbar>
		<view class="pd32 flex-wrp">
			<image src="/static/icon_jiaoyiguanbi.png" mode="aspectFill" class="icon60"></image>
			<view class="ml16 colf font-weight-500">
				交易取消
			</view>
		</view>
		<view class="mx24  br16 pd32 flex-wrp bgf">
			<image src="/static/logo.png" mode="aspectFill" style="width: 216rpx;height: 216rpx;"></image>
			<view style="height: 216rpx;flex-direction: column;align-items: flex-start;"
				class="ml16 flex-wrp flex-jun ">
				<view class="font28 color-2c2c2c beyond2" style="width: 432rpx;">0天专业课程，助你从小白逆袭成为大神</view>
				<view class="flex-wrp flex-jun" style="width: 432rpx;">
					<view class="font28" style="color: #8B8B8B;">x1</view>
					<view class="flex-wrp color-E9471A mt4">
						<view class="font28">¥</view>
						<view class="font-weight-500 font40">400</view>
					</view>
				</view>
			</view>
		</view>
		<view class="mx24 mt24 br16 pdx32  bgf">
			<view class="flex-wrp flex-jun  font-weight-500 pdy24" style="border-bottom: 1rpx solid #eeeeee;">
				<view class="font32" style="color: #5E5E5E;">商品合计</view>
				<view class="font32 color-181818">¥1120</view>
			</view>

			<view class="flex-wrp flex-jun color-181818 font-weight-500 pdy24"
				style="border-bottom: 1rpx solid #eeeeee;">
				<view class="font32">商品合计</view>
				<view class="font32 color-E9471A">¥1120</view>
			</view>
		</view>
		<view class="mx24 mt24 br16 pdx32  bgf">
			<view class="flex-wrp flex-jun  font-weight-500 pdy24" style="border-bottom: 1rpx solid #eeeeee;">
				<view class="font32" style="color: #5E5E5E;">订单编号</view>
				<view class="font32 color-181818 flex-wrp">
					<view class="">2023090955886</view>
					<image src="/static/icon_file_copy_line.png" mode="aspectFill" class="ml8 icon40"></image>
				</view>
			</view>

			<view class="flex-wrp flex-jun color-181818 font-weight-500 pdy24"
				style="border-bottom: 1rpx solid #eeeeee;">
				<view class="font32" style="color: #5E5E5E;">创建时间</view>
				<view class="font32">2023-09-26 15:16:49</view>
			</view>
			<view class="flex-wrp flex-jun color-181818  font-weight-500 pdy24">
				<view class="font32 ">订单备注</view>
				<view class="font32 font-weight-400 ">这是订单的备注</view>
			</view>
		</view>
		<view class="fiex_view">
			<view @click="bindViewClick()">删除订单</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bannerList: [1, 2, 3],
				navbar: {
					title: '订单详情',
					backgroundColor: 'transparent',
					color: '#fff',
					backIconState: 1,
				}
			}
		},
		methods: {
			bindViewClick() {
				uni.navigateTo({
					url: '/pages/home/confirmOrder/confirmOrder'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.container {
		background: linear-gradient(180deg, #EA623D 12.76%, rgba(235, 169, 149, 0.00) 45.79%);
		min-height: 100Vh;
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