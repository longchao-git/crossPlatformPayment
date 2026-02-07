<template>
	<view>
		<view class="address">
			<image class="icon48 address_icon" src="/static/goods_location.png" mode="aspectFill"></image>

			<view class="item_right" @click="selectAddress">
				<view class="none_state" v-if="!defaultAddress.shopAddressId">请添加地址哦！</view>
				<view v-if="defaultAddress.shopAddressId" class="address_city beyond1">{{defaultAddress.address}}</view>
				<view v-if="defaultAddress.shopAddressId" class="address_detail beyond1">
					{{defaultAddress.addressDetail}}
				</view>
				<view v-if="defaultAddress.shopAddressId" class="user_info">
					<view class="name">{{defaultAddress.name}}</view>
					<view class="phone">{{defaultAddress.phone}}</view>
				</view>
			</view>
			<image class="icon32 icon_right" src="/static/icon_right.png" mode="aspectFill"></image>
		</view>
		<view class="mx24 mt24 br16 pd32 flex-wrp bgf">
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
			<view class="flex-wrp flex-jun color-181818 font-weight-500 pdy24"
				style="border-bottom: 1rpx solid #eeeeee;">
				<view class="font32">商品合计</view>
				<view class="font32">¥1120</view>
			</view>
			<view class="flex-wrp flex-jun  font-weight-500 pdy24">
				<view class="font32" style="color: #5E5E5E;">订单备注</view>
				<view class="font32">
					<input placeholder="请填写订单备注" style="text-align: right;" placeholder-class="color-A6A6A6" />
				</view>
			</view>
		</view>

		<view class="buy_way mx24 mt24 br16">
			<view class="buy_way_title">结算方式</view>
			<view class="buy_select">
				<view class="select_left">
					<image class="icon80 wechat" src="/static/wechat.png" mode="aspectFill"></image>
					<view class="wechat_text">微信支付</view>
				</view>
				<image class="icon56 select_right" src="/static/select_pay.png" mode="aspectFill"></image>
			</view>
		</view>
		<view class="sub_buy">
			<view class="total">
				<text>共2件，合计：</text>
				<view class="product_price">
					<text class="price_icon">￥</text>
					<text>1200</text>
				</view>
			</view>
			<button class="sub_btn" @click="handleSubmitOrder">提交订单</button>
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
			handleSubmitOrder() {
				uni.navigateTo({
					url: '/pages/home/confirmSucceed/confirmSucceed'
				})
			},
			selectAddress() {
				uni.navigateTo({
					url: '/pages/home/address/address'
				})
			}

		}
	}
</script>

<style lang="less" scoped>
	.address {
		padding: 24rpx;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		border-radius: 8rpx;
		margin-bottom: 24rpx;

		.address_icon {
			flex-shrink: 0;
			margin-right: 16rpx;
		}

		.icon_right {
			flex-shrink: 0;
			margin-left: 16rpx;
		}

		.item_right {
			flex: 1;

			.none_state {
				color: #5E5E5E;
				font-size: 28rpx;
			}

			.address_city {
				color: #5E5E5E;
				font-size: 24rtpx;
				margin-bottom: 8rpx;
			}

			.address_detail {
				color: #181818;
				font-weight: bold;
				margin-bottom: 8rpx;
			}

			.user_info {
				display: flex;
				align-items: center;
				color: #181818;
				font-size: 24rtpx;

				.name {
					margin-right: 16rpx;
				}
			}
		}
	}

	.buy_way {
		padding: 0 32rpx;
		background-color: #FFFFFF;
		border-radius: 8rpx;

		.buy_way_title {
			color: #171D1E;
			font-size: 36rpx;
			font-weight: bold;
			padding: 16rpx 0;
		}

		.buy_select {
			padding: 24rpx 0;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.select_left {
				display: flex;
				align-items: center;

				.wechat {
					margin-right: 16rpx;
					flex-shrink: 0;
				}

				.wechat_text {
					color: #181818;
					font-weight: bold;
				}
			}

			.select_right {
				flex-shrink: 0;
			}
		}
	}

	.sub_buy {
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		width: 100%;
		background-color: #FFFFFF;
		bottom: 0;
		left: 0;
		padding: 32rpx;
		box-sizing: border-box;

		.total {
			display: flex;
			align-items: center;
			font-size: 28rpx;
			font-weight: 500;

			.product_price {
				color: #EA623D;
				font-weight: 500;
				font-size: 40rpx;

				.price_icon {
					font-size: 28rpx;
					font-weight: normal;
				}
			}
		}

		.sub_btn {
			width: 208rpx;
			height: 96rpx;
			box-sizing: border-box;
			padding: 16rpx 24rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-shrink: 0;
			border-radius: 8rpx;
			background: #EA623D;
			color: #FFFFFF;
			font-weight: 500;
		}
	}
</style>