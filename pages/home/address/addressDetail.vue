<template>
	<view class="container">
		<view class="address_form">
			<view class="form_item border_bottom">
				<view class="label required">联系人</view>
				<view class="value">
					<input v-model="addFormData.userName" class="value_input" type="text" placeholder="请输入"
						placeholder-class="input_place">

				</view>
			</view>
			<view class="form_item border_bottom">
				<view class="label required">手机号码</view>
				<view class="value">
					<input v-model="addFormData.userPhone" class="value_input" type="text" placeholder="请输入"
						placeholder-class="input_place">

				</view>
			</view>
			<view class="form_item border_bottom">
				<view class="label required">所在地区</view>
				<view class="value">
					<picker mode="region" :range="selectAddress" @change="changeAddress">
						<view class="value_select" :class="{'input_place': !addFormData.asAddress}">
							{{ addFormData.asAddress ? addFormData.asAddress : '请选择地址信息'}}
						</view>
					</picker>
					<image class="select_address icon48" src="/static/select_address.png" mode="aspectFill">
					</image>
				</view>
			</view>
			<view class="form_item border_bottom">
				<view class="label required">详细地址</view>
				<view class="value">
					<input v-model="addFormData.addressDetail" class="value_input" type="text" placeholder="街道、楼牌号"
						placeholder-class="input_place">

				</view>
			</view>
		</view>
		<view class="fiex_view">
			<view @click="editAddress()">保存</view>
		</view>

	</view>
</template>
<script>
	import api from "@/api/api.js";

	import {
		validationPhone
	} from "@/utils/validationUtils.js";

	export default {

		data() {
			return {
				type: 'add',
				addFormData: {
					userName: '',
					userPhone: '',
					asAddress: '',
					addressDetail: '',
					floor: '',
					elevator: 1,
					isNormal: false,
					id: -1
				},
				selectAddress: [],
			}
		},
		onLoad(options) {
			if (options.type) this.type = options.type;
			if (options.addressInfo) {
				const item = JSON.parse(options.addressInfo);
				this.addFormData.userName = item.name;
				this.addFormData.userPhone = item.phone;
				this.addFormData.asAddress = item.address;
				this.addFormData.addressDetail = item.addressDetail;
				this.addFormData.floor = item.floor;
				this.addFormData.elevator = item.isElevator === 0 ? 1 : 2;
				this.addFormData.isNormal = item.isDefault === 0 ? true : false;
				this.addFormData.id = item.shopAddressId;
			}
		},
		onReady() {
			if (this.type === 'edit') {
				uni.setNavigationBarTitle({
					title: '编辑地址'
				})
			}
		},

		methods: {
			// 清除输入框
			delInputVal(key) {
				this.addFormData[key] = '';
			},
			//选择地址
			changeAddress(e) {
				this.addFormData.asAddress = e.detail.value[0] + e.detail.value[1] + e.detail.value[2]
			},
			// 是否有电梯
			changeHasElevator(type) {
				this.addFormData.elevator = type;
			},
			// 默认开关
			changeSwitch(e) {
				this.addFormData.isNormal = e.detail.value;
			},
			// 创建地址
			createAddress() {
				if (!this.addFormData.userName) {
					uni.showToast({
						title: '请填写联系人',
						icon: 'error'
					})
					return
				}
				if (!this.addFormData.userPhone) {
					uni.showToast({
						title: '请填写手机号',
						icon: 'error'
					})
					return
				}
				if (!validationPhone(this.addFormData.userPhone)) {
					uni.showToast({
						title: '填写正确手机',
						icon: 'error'
					})
					return
				}
				if (!this.addFormData.asAddress) {
					uni.showToast({
						title: '请选择地区',
						icon: 'error'
					})
					return
				}
				if (!this.addFormData.addressDetail) {
					uni.showToast({
						title: '请填写详细地址',
						icon: 'error'
					})
					return
				}
				let param = {
					name: this.addFormData.userName,
					phone: this.addFormData.userPhone,
					address: this.addFormData.asAddress,
					addressDetail: this.addFormData.addressDetail,
					floor: this.addFormData.floor,
					isElevator: this.addFormData.elevator === 1 ? 0 : 1,
					isDefault: this.addFormData.isNormal ? 0 : 1
				}
				if (this.type === 'add') {
					api.createAddress(param).then(res => {
						uni.showToast({
							title: '添加成功',
							icon: 'success'
						})
						setTimeout(() => {
							uni.navigateBack();
						}, 500)
					})
				} else {
					param['shopAddressId'] = this.addFormData.id;
					api.updateAddress(param).then(res => {
						uni.showToast({
							title: '编辑成功',
							icon: 'success'
						})
						setTimeout(() => {
							uni.navigateBack();
						}, 500)
					})
				}
			},
		}
	}
</script>
<style lang="less">
	.value {
		.input_place {
			color: #C5C5C5;
		}
	}
</style>
<style lang="less" scoped>
	.container {
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

		.border_bottom {
			border-bottom: 1px solid #ededed;
		}

		.address_form {
			padding: 0 32rpx;
			background-color: #FFFFFF;
			margin-bottom: 16rpx;

			.form_item {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 32rpx 0;

				.label {
					width: 160rpx;
					margin-right: 60rpx;
					flex-shrink: 0;
					padding-left: 24rpx;
				}

				.value_radio {
					flex: 1;
					display: flex;
					align-items: center;

					.radio {
						display: flex;
						align-items: center;
						margin-right: 32rpx;

						.radio_icon {
							margin-right: 16rpx;
							flex-shrink: 0;
						}

						.radio_label {
							color: #13161B;
							font-size: 28rpx;
						}

						.radio_label.active {
							color: #3B57CB;
						}
					}
				}

				.value {
					flex: 1;
					display: flex;
					align-items: center;
					justify-content: space-between;

					.value_input {
						height: 48rpx;
						line-height: 48rpx;
						margin-right: 8rpx;
						flex: 1;

						image {
							margin-left: 8rpx;
							flex-shrink: 0;
						}
					}

					.value_select {
						flex: 1;
					}

					.select_address {
						margin-left: 8rpx;
						flex-shrink: 0;
					}
				}
			}
		}

		.set_default {
			background-color: #FFFFFF;
			padding: 32rpx;
			margin-bottom: 60rpx;

			.set_top {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.title {
					color: #181818;
				}
			}

			.desc {
				color: #777777;
				font-size: 24rpx;
			}
		}
	}
</style>