import Api, {
	imgHead
} from "@/api/api.js"

/** 
 * 全局调用的公共接口
 **/
const commonData = {
	/**
	 * 选择视频
	 */
	goChoiceVideo() {
		return new Promise((resolve, reject) => {
			uni.chooseVideo({
				sourceType: ['album', 'camera'],
				maxDuration: 60,
				camera: 'back',
				compressed: false,
				success: res => {
					uni.showToast({
						title: '正在上传...',
						icon: 'none'
					})
					let tempFilePath = res.tempFilePath;
					var tempFilesSize = res.size;
					let tempFileDetail = res
					if (tempFilesSize / 1024 / 1024 <= 150) {
						this.uploadFiles(tempFilePath).then(res => {
							resolve(imgHead + res)
							uni.hideLoading()
						}).finally(() => {
							uni.hideLoading()
						})
					} else {
						uni.showToast({
							title: '上传视频不能大于150M!',
							icon: 'none'
						})
						// uni.hideLoading()
					}
				},
				fail: () => {
					reject();
				},
			})
		})
	},

	/**
	 * 选择图片
	 */
	chooseImg(count = 1) {
		return new Promise((resolve, reject) => {
			uni.chooseImage({
				count: count,
				sizeType: ['original', 'compressed'],
				sourceType: ['album', 'camera'],
				success: res => {
					if (count == 1) {
						uni.showLoading({
							title: '上传中',
							mask: true
						})
						this.uploadFiles(res.tempFilePaths[0]).then(res => {
							resolve(imgHead + res)
						}).finally(() => {
							uni.hideLoading()
						})
					} else {
						let list = []
						let listLength = res.tempFilePaths.length
						uni.showLoading({
							title: '上传中',
							mask: true
						})
						for (let i in res.tempFilePaths) {
							this.uploadFiles(res.tempFilePaths[i]).then(res => {
								list.push(imgHead + res)
								if (list.length == listLength) {
									resolve(list)
								}
							}).finally(() => {
								uni.hideLoading()
							})
						}
					}
				}
			});
		});
	},


	// 上传图片和视频到oss
	uploadFiles: data => {
		return new Promise((resolve, reject) => {
			// 获取阿里云上传参数
			Api.systemgetAliyunOssConfig().then(res => {
				let accessid = res.accessKeyId;

				let policy = res.postPolicy;
				let signature = res.postSignature;
				let fPath = res.ossPrefix
				let fType = data.substring(data.lastIndexOf("."), data.length);
				let fileName = new Date().getTime() + Math.floor(Math.random() * 150) + fType;
				fPath = fPath + fileName;
				uni.uploadFile({
					url: res.ossPrefix,
					formData: {
						'Filename': fileName,
						'Content-Disposition': 'filename=' +
							fileName, //文件描述 这里可以设置直接下载还是可以在线查看
						'key': fPath, //key 是阿里云储存路径
						'policy': policy,
						'OSSAccessKeyId': accessid,
						'success_action_status': '200', //让服务端返回200,不然，默认会返回204
						'signature': signature
					},
					name: 'file',
					filePath: data,
					header: {
						'content-type': 'multipart/form-data;boundary'
					},
					success: res => {
						if (res.statusCode == 200) {
							resolve(fPath)
						} else {
							uni.hideLoading();
							uni.showToast({
								title: '请联系开发人员',
								icon: 'none',
							})
						}
					},
					fail(err) {
						uni.hideLoading();
						uni.showToast({
							title: '上传失败',
							icon: 'none',
						})
					}

				})

			})
		});
	},


	/**
	 * 获取小程序二维码  获取小程序
	 **/
	getWxCode: data => {
		return new Promise((resolve, reject) => {
			let url = Api.urlServer.baseURl + '/system/wxCode/getWxCode?scene=' + data.scene +
				'&page=' + data.page
			resolve(url)
		});
	},

}
module.exports = {
	...commonData
};