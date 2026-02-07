<template>
	<view class="container">
		<block v-if="addressList.length > 0">
			<view class="address_item" v-for="(item,index) in addressList" :key="item.shopAddressId">
				<view class="item_top" @click="setAddress(item)">
					<view class="address_city beyond1">{{item.address}}阿萨擦撒擦合成卡</view>
					<view class="address_detail beyond1">{{item.addressDetail}}阿萨擦撒擦合成卡</view>
					<view class="user_info">
						<view class="name">{{item.name}}cascaccacakl</view>
						<view class="phone">{{item.phone}}</view>
					</view>
				</view>
				<view class="item_bottom">

					<view class="operation_btn">
						<image @click="editAddress(item)" class="icon48 btn" src="/static/edit.png" mode="aspectFill">
						</image>
						<image @click="deleteAddress(item)" class="icon48 btn" src="/static/delete.png"
							mode="aspectFill"></image>
					</view>
				</view>
			</view>
		</block>
		<block v-else>
			<view class="state_none">
				<image class="state_icon" src="/static/icon_none.png" mode="aspectFill"></image>
				<view class="state_desc">暂无收货地址</view>
			</view>
		</block>
		<view class="fiex_view">
			<view @click="editAddress()">添加地址</view>
		</view>
	</view>
</template>
<script>
	import api from "@/api/api.js";


	export default {

		data() {
			return {
				addressList: [1, 2, 3, ],
				type: '',
			}
		},
		onLoad(options) {
			if (options.type) this.type = options.type;
		},
		onShow() {
			// this.getMyAddress();
		},

		methods: {
			getMyAddress() {
				api.myAddress().then(res => {
					this.addressList = res;
				})
			},
			editAddress(item) {
				uni.navigateTo({
					url: '/pages/home/address/addressDetail?type=edit&addressInfo=' + JSON.stringify(item)
				})
			},
			deleteAddress(item) {
				uni.showModal({
					content: '确认删除此收货地址吗？',
					success: res => {
						if (res.confirm) {
							api.deleteAddress({
								shopAddressId: item.shopAddressId
							}).then(res => {
								uni.showToast({
									title: '删除成功',
									icon: 'success'
								})
								setTimeout(() => {
									this.getMyAddress();
								}, 500)
							})
						}
					}
				})
			},
			handleAddress() {
				uni.navigateTo({
					url: '/pagesA/my/addressDetail?type=add'
				})
			},
			setAddress(item) {
				if (this.type === 'confirmOrder') {
					uni.setStorageSync('address', item);
					uni.navigateBack();
				}
			},
			// 设置默认地址
			setDefault(item, index) {
				if (item.isDefault === 0) return;
				for (let i = 0; i < this.addressList.length; i++) {
					this.addressList[i].isDefault = 1;
				}
				this.addressList[index].isDefault = 0;
				api.updateAddress({
					shopAddressId: item.shopAddressId,
					isDefault: 0
				}).then(res => {
					if (this.type === 'confirmOrder') {
						uni.removeStorageSync('address');
						uni.navigateBack();
					}
					console.log('默认地址修改成功')
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		padding: 0 32rpx 200rpx;

		.state_none {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 160rpx;

			.state_icon {
				width: 480rpx;
				height: 480rpx;
			}
		}

		.address_item {
			padding: 32rpx 24rpx 0;
			background-color: #FFFFFF;
			border-radius: 16rpx;
			margin-top: 32rpx;

			.item_top {
				padding-bottom: 24rpx;
				border-bottom: 1px solid #EEEEEE;

				.address_city {
					color: #5E5E5E;
					font-size: 24rtpx;
					margin-bottom: 16rpx;
				}

				.address_detail {
					color: #181818;
					font-weight: bold;
					margin-bottom: 16rpx;
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

			.item_bottom {
				padding: 24rpx 0;
				border-bottom: 1px solid #EEEEEE;
				display: flex;
				align-items: center;
				justify-content: flex-end;

				.set_default {
					display: flex;
					align-items: center;
					font-size: 24rpx;
					color: #3B57CB;
					font-weight: bold;

					.default_icon {
						margin-right: 24rpx;
					}
				}

				.operation_btn {
					display: flex;
					align-items: center;

					.btn {
						margin-left: 32rpx;
					}
				}
			}
		}

		.fiex_view {
			background: #FFF;
			box-shadow: 0px -2rpx 2rpx 0px rgba(0, 0, 0, 0.06);
			width: 750rpx;
			height: 160rpx;
			position: fixed;
			bottom: 0;
			left: 0;

			>view {
				position: absolute;
				top: 32rpx;
				right: 32rpx;
				width: 686rpx;
				height: 96rpx;
				background: #EA623D;
				border-radius: 124rpx;
				text-align: center;
				line-height: 96rpx;
				color: #FFF;
				font-weight: 500;
			}
		}
	}
</style>