 <template>
 	<view class="content relative ">
 		<view class="bgf mt32 mx32 br16">

 			<view class="flex-wrp flex-jun pd32" style="border-bottom: 1rpx solid #f2f4f8;">
 				<view class="color-181818 line48">昵称</view>
 				<input type="text" v-model="userInfo.userName" :maxlength="10" style="text-align: right;flex: 1;"
 					class="line48 color-181818 font32" placeholder="请输入昵称" placeholder-class="color-979797 ">
 			</view>
 			<view class="flex-wrp flex-jun pd32">
 				<view class="color-181818 line48">手机号码</view>
 				<input type="number" v-model="userInfo.userName" :maxlength="11" style="text-align: right;flex: 1;"
 					class="line48 color-181818 font32" placeholder="请输入手机号码" placeholder-class="color-979797 ">
 			</view>
 		</view>

 		<view style="z-index: 2;width: 750rpx;">
 			<view class="mx50 mt96 mt36 line96 colf center right" style="background:#EA623D;border-radius: 116rpx;"
 				@click="handleClicktap(0)">认证
 			</view>
 		</view>
 	</view>
 </template>

 <script>
 	import api from '@/api/api.js'
 	import common from '@/utils/common.js'
 	import {
 		validationPhone
 	} from '@/utils/validationUtils.js'
 	export default {

 		data() {
 			return {
 				userInfo: {},
 				navigationHeight: 0,
 			}
 		},
 		onLoad(options) {
 			this.userInfo = uni.getStorageSync('userInfo')
 		},

 		methods: {


 			getPhone(e) {
 				if (e.detail.errMsg === 'getPhoneNumber:ok') {
 					api.getPhone({
 						code: e.detail.code
 					}).then(res => {
 						this.$set(this.userInfo, 'userPhone', res.phone_info.phoneNumber)
 					})
 				} else {
 					uni.showToast({
 						title: '手机号授权失败',
 						icon: 'error'
 					})
 				}
 			},
 			handleClicktap(type) {
 				if (!this.userInfo.userName) {
 					uni.showToast({
 						title: '请输入昵称',
 						icon: 'none'
 					})
 					return
 				}
 				if (!this.userInfo.headImg) {
 					uni.showToast({
 						title: '请上传头像',
 						icon: 'none'
 					})
 					return
 				}
 				if (!this.userInfo.userPhone) {
 					uni.showToast({
 						title: '请输入手机号',
 						icon: 'none'
 					})
 					return
 				}
 				if (!validationPhone(this.userInfo.userPhone)) {
 					uni.showToast({
 						title: '请输入正确手机号',
 						icon: 'none'
 					})
 					return
 				}
 				api.userUpdate({
 					headImg: this.userInfo.headImg,
 					userName: this.userInfo.userName,
 					userPhone: this.userInfo.userPhone,
 					userId: this.userInfo.userId
 				}).then(res => {
 					common.getUserDetail({
 						id: this.userInfo.userId
 					}).then(res => {
 						uni.showToast({
 							title: '修改成功',
 						})
 						setTimeout(() => {
 							uni.navigateBack()
 						}, 1500)
 					})

 				})

 			},

 		}
 	}
 </script>

 <style lang="less" scoped>
 	page {
 		background: #ffffff;
 	}

 	.get_phone {
 		color: #EA623D;
 		width: 144rpx;
 		height: 60rpx;
 		text-align: center;
 		font-size: 28rpx;
 		line-height: 60rpx;
 		border-radius: 8rpx;
 		border: 1px solid #EA623D;
 		margin-left: 12rpx;

 	}

 	.content {
 		height: 100vh;
 		overflow: hidden;

 	}

 	.bottom_img {
 		bottom: 0;
 		width: 750rpx;
 		height: 498rpx;
 		z-index: -1;
 	}

 	.loginInput {

 		padding: 0 32rpx;
 	}

 	.code_view {
 		width: 220rpx;
 		height: 68rpx;

 		border-radius: 20rpx;
 		text-align: center;
 		line-height: 68rpx;
 		font-size: 28rpx;
 		color: #ffffff;
 		position: absolute;
 		right: 8rpx;
 	}
 </style>