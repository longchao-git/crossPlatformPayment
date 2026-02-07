<template>
	<view class="container">
		<navbar :navbar="navbar"></navbar>



		<view class="pdx32">
			<productList :list='list'></productList>
		</view>
	</view>
</template>

<script>
	import api from '@/api/api.js'

	export default {
		data() {
			return {
				// bannerList: [1, 2, 3, ],
				navigationHeight: 0,
				list: [],
				navbar: {
					title: '首页',
					backgroundColor: 'transparent',

				},
				pageNo: 1,
				pageSize: 10,
				total: 0,

			}
		},
		onLoad(options) {

			this.navigationHeight = uni.getSystemInfoSync().statusBarHeight;
			this.getProductList()

		},
		onReachBottom() {
			if (this.total > this.list.length) {
				this.pageNo++
				this.getProductList()
			}

		},
		methods: {
			getProductList() {
				api.getProductList({
					pageNo: this.pageNo,
					pageSize: this.pageSize,
					// productState: 1
				}).then(res => {
					this.total = res.total
					for (let i in res.records) {
						res.records[i].headImg = JSON.parse(res.records[i].headImg)
					}
					if (this.pageNo == 1) {
						this.list = res.records
					} else {
						this.list = this.list.concat(res.records)
					}
				})
			},



		}
	}
</script>

<style lang="less" scoped>
	.container {
		background: linear-gradient(180deg, #FDA38A 4.46%, #F5F7FB 56.01%);
		min-height: 100vh;
		width: 750rpx;
		padding-bottom: 60rpx;
	}
</style>