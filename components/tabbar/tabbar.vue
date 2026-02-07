<template>
	<view class="tabbar" :style="{'padding-bottom': bottomHeight + 'px'}">
		<view class="tabbar-content" :style="{'padding-bottom': bottomHeight + 'px'}">
			<view @click="handleChangeItem(index)" v-for="(item, index) in tabbarList" :key="index" class="tabbar-item">
				<view>
					<image style="width: 48upx; height: 48upx;" :src="selected === index ? item.selectedIconPath : item.iconPath"></image>
				</view>
				<view :style="'color: ' + (selected === index ? selectedColor : color)">{{ item.text }}</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: "tabbar",
	props:{
		// 当前选中的下标
		selected:{
			type: Number,
			default: -1,
		},
	},
	data() {
		return {
			// 文字颜色
			color: '#1E2929',
			// 选中的文字颜色
			selectedColor: '#EF6E15',
			// tabbar列表
			tabbarList: [
				{
					pagePath: '/pages/tabbar/test/test',
					text: '页面1',
					iconPath: '',
					selectedIconPath: '',
				},
				{
					pagePath: '/pages/tabbar/test/test',
					text: '页面2',
					iconPath: '',
					selectedIconPath: '',
				},
				{
					pagePath: '/pages/tabbar/test/test',
					text: '页面3',
					iconPath: '',
					selectedIconPath: '',
				},
				{
					pagePath: '/pages/tabbar/test/test',
					text: '页面4',
					iconPath: '',
					selectedIconPath: '',
				},
			],
			// 距离底部的高度
			bottomHeight: 0,
		};
	},
	mounted() {
		// 获取系统信息
		this.getSystemInfo();
	},
	methods: {
		/**
		 * 获取系统信息
		 * */
		getSystemInfo() {
			this.bottomHeight = uni.getSystemInfoSync().safeAreaInsets.bottom;
		},
		
		/** 处理切换选项 */
		handleChangeItem(index) {
			if(this.selected !== index) {
				uni.switchTab({ url: this.tabbarList[index].pagePath });
			}
		},
	}
}
</script>

<style scoped lang="scss">
.tabbar {
	height: 120upx;
	// padding-bottom: var(--window-bottom);
	// padding-bottom: env(safe-area-inset-bottom);
	// padding-bottom: constant(safe-area-inset-bottom);
}

.tabbar-content {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 120upx;
	background: #fafafa;
	display: flex;
	z-index: 9;
	font-size: 32upx;
}

.tabbar-item {
	flex: 1;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
</style>
