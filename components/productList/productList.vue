<template>
	<view class="flex-wrp flex-jun" style="flex-wrap: wrap;">
		<view class="course_item mb24 br16" v-for="(item,index) in list" :key="index"
			@click="bindCickTap(item.productId)">
			<image :src="item.headImg[0]" class="match_course" mode="aspectFill">
			</image>
			<view class="pdx24 mt12 pdb24">
				<view class="beyond2 font28 font-weight-500 line42" style="width: 280rpx;color: #000000;">
					{{item.productTitle}}
				</view>
				<view class="flex-wrp color-E9471A mt4">
					<view class="font28">¥</view>
					<view class="font-weight-500 font40">{{item.productPrice}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		props: {
			list: {
				type: Array,
				default: []
			},
		},
		methods: {
			async bindCickTap(productId) {
				// let isLogin = await getApp().judgeIsLogin()
				// if (!isLogin) return
				uni.navigateTo({
					url: '/pages/home/productDetails/productDetails?productId=' + productId
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.course_item {
		width: 328rpx;
		height: 512rpx;
		overflow: hidden;
		background: white;

		.match_course {
			width: 328rpx;
			height: 328rpx;
		}
	}
</style>