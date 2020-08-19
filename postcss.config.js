const AutoPrefixer = require("autoprefixer")
const px2rem = require("postcss-px2rem")
module.exports = ({ file }) => {
  let remUnit // 判断条件 请自行调整 我使用的是 mand-mobile ui 没有对vant引入进行测试
  console.log('1111' + file.dirname.indexOf('vant'))
  if (file && file.dirname && file.dirname.indexOf('mand-mobile')>-1) {
    remUnit = 75
  } else {
    remUnit = 37.5
  } return {
    plugins: [
      px2rem({
        remUnit: remUnit
      }),
      AutoPrefixer({
        overrideBrowserslist: ["last 20 versions", "android >= 4.0"]
      })
    ]
  }
}
