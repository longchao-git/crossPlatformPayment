/**
 *  常用的Mixin方法等...
 */
import { configData } from '../api/api.js';

// 定义一个mixin对象
const uploadMixin = {
    methods: {
		/**
		 * 从本地相册选择图片或使用相机拍照
		 * @param {number} count	选择的图片张数 默认1
		 */
		chooseImage(count = 1) {
			return new Promise((resolve, reject) => {
				uni.chooseImage({
					count,
					success: res => {
						resolve(configData.imgHead + res.tempFilePaths[0]);
					},
					fail: () => {
						reject();
					}
				});
			});
		},
		
		/**
		 * 保存图片到系统相册
		 * @param {string} url		图片路径
		 */
		saveImageToPhotosAlbum(url) {
			return new Promise((resolve, reject) => {
				uni.getImageInfo({
					src: url,
					success: image => {
						uni.saveImageToPhotosAlbum({
							filePath: image.path,
							success: () => {
								resolve();
							},
							fail: () => {
								reject();
							},
						});
					},
					fail: () => {
						reject();
					},
				});
			});
		},
		
		/**
		 * 拍摄视频或从手机相册中选视频，返回视频的临时文件路径
		 */
		chooseVideo() {
			return new Promise((resolve, reject) => {
				uni.chooseVideo({
					success: res => {
						resolve(res.tempFilePath[0]);
					},
					fail: () => {
						reject();
					},
				});
			});
		},
	}
}


// 导出...
export default uploadMixin;