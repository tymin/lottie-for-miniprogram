# lottie-for-miniprogram
可参考该代码片段：https://developers.weixin.qq.com/s/2TYvm9mJ75bF。
根据https://github.com/wechat-miniprogram/lottie-miniprogram微信小程序官方demo做的。
1、植入步骤修改，没有使用npm，而是直接将工程中的package.json以及其他依赖直接考入工程。其他的使用参考官方文档


2、json文件的使用与导入
https://github.com/airbnb/lottie-web
或者使用https://design.alipay.com/emotion
下载好的json文件
将json数据改成js格式，加入module.exports=代码即可使用require方式导入
