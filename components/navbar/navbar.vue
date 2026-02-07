<template>
	<view class="navbar" :style="{'padding-top': navigationHeight + 'px'}">
		<view class="navbar-content"
			:style="{'padding-top': navigationHeight + 'px', 'background': navbar.backgroundColor ? navbar.backgroundColor : '#fff'}">
			<view class="navbar-content-left">
				<template v-if="navbar.backIconState && navbar.backIconState !== 0">
					<image v-if="navbar.backIconState === 1" src="/static/icon_lineIcon.png"
						@click="handleClickOperation(0)" style="width: 48upx; height: 48upx;" mode="aspectFill">
					</image>
				</template>
			</view>

			<view class="navbar-content-middle" :style="{'color': navbar.color ? navbar.color : '#000'}">
				{{navbar.title ? navbar.title : ''}}
			</view>

			<view class="navbar-content-right"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "navbar",
		props: {
			// 导航数据
			navbar: {
				type: Object,
				default: () => ({
					// title: '',					// 标题
					// color: '',					// 标题文字颜色
					// backgroundColor: '',		// 导航背景颜色
					// backIconState: '',			// 返回按钮状态 - 0: 不显示  1: 显示
				}),
			}
		},
		data() {
			return {
				// 顶部导航高度
				navigationHeight: 0,
			};
		},
		mounted() {
			// 获取系统信息
			this.getSystemInfo();
		},
		methods: {
			/** 获取系统信息 */
			getSystemInfo() {
				this.navigationHeight = uni.getSystemInfoSync().statusBarHeight;
			},

			/** 处理点击操作按钮 - 0: 点击返回 */
			handleClickOperation(type) {
				if (type === 0) {
					uni.navigateBack();
				}
			},
		}
	}
</script>

<style scoped lang="scss">
	.navbar {
		height: 88upx;
	}

	.navbar-content {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		height: 88upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 32upx;
		font-size: 16px;

		>view {
			height: 100%;
			display: flex;
			align-items: center;
		}

		.navbar-content-left {
			flex: 1;

		}

		.navbar-content-middle {
			flex: 2.5;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.navbar-content-right {
			flex: 1;
		}
	}
</style>