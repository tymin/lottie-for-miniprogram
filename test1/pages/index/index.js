const app = getApp()
import lottie from '../../lottie-miniprogram'

Page({
  data: {

  },
  onLoad: function () {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
    this.init();
  
  },
  init() {
    if (this._inited) {
      return
    }
    wx.createSelectorQuery().selectAll('#c1').node(res => {
      const canvas = res[0].node
      const context = canvas.getContext('2d')

      canvas.width = 300
      canvas.height = 300

      lottie.setup(canvas)
      this.ani = lottie.loadAnimation({
        loop: true,
        autoplay: true,
        animationData: require('../../json/catrim.js'),
        rendererSettings: {
          context,
        },
      })
      this._inited = true
    }).exec()
  },
  play() {
    this.ani.play()
  },
  pause() {
    this.ani.pause()
  },
})
