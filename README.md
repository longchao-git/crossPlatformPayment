## uni-app项目架构

---/api/
	|---api.js                      全局导出请求接口
	|---config.js                   全局公用域名
	|---http.js                     请求接口封装

---/components/                   公用组件
	|---navbar						  	头部导航栏组件
	|---tabbar						  	底部导航栏组件		
	|---rich-text-editor			 	富文本组件组件
	|---drawImage			 	 		canvas绘制图片组件
	|---buttom-popup			 	 	底部弹框组件
	|---popup			 	 			普通的弹框组件

---/lib/                          外部资源文件

---/pages/                        项目页面路径 
	|---test					  测试模块

---/mixins/                       存放mixins的文件
	|---common.js                 	 常用的mixin
	|---webSocket.js                 webSocket的mixin
	|---upload.js                    文档中的上传API的mixin

---/utils/                        全局公共方法
	|---dateTools.js                  格式化时间
	|---util.js                       字符串、数组等优化处理
	|---util.wxs                      wxs文件，在wxml内部对动态数据进行优化
	|---validationTools.js            身份证，邮箱等正则判断

---/static/                       存放资源的文件
	|---image                  		  存放图片资源

|---index.css                  	  全局公共的CSS样式
# crossPlatformPayment
