<template>
	<view class="container_pri">
		<view class="fixedView" style="background: #f4f5f5;" :style="{'height': navigationHeight + 'px'}"></view>
		<rich-text :nodes="html"></rich-text>
	</view>
</template>

<script>
	import privacyPolicy from "@/utils/privacyPolicy.js";
	export default {
		data() {
			return {
				html: '',
				navigationHeight: 0,
			};
		},
		components: {},
		props: {},
		onShow: function() {

		},
		onLoad(options) {

			if (options.type == 1) {
				uni.setNavigationBarTitle({
					title: '隐私条款'
				})
				this.html = privacyPolicy.user_privacy_policy_content
			} else {
				uni.setNavigationBarTitle({
					title: '用户协议'
				})
				this.html = privacyPolicy.user_uesr_content
			}
		},
		methods: {
			bindBackCiclk() {
				uni.navigateBack()
			},
		}

	};
</script>
<style>
	page {
		width: 750rpx;
		margin: 0 auto;
		background: white;
	}

	.container_pri {
		width: 90%;
		height: 100vh;
		margin: 0 auto;

	}

	.fixedView {
		width: 750rpx;
		position: fixed;
		top: 0;
		left: 0;
	}

	p {
		margin-top: 20px;
	}
</style>