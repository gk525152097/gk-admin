# 小程序基础逻辑封装

## 一、问题-路由控制

> 小程序没有明确的方法监听路由的方法 导致页面可控性低 所以需要进行路由封装

> 方法：https://www.jianshu.com/p/8f33a38a671a // 别人的方法
> 思路就是封装整个page在 onshow 或者 onload 进行方法处理 与 vue的路由守卫相差很多 但是也是现阶段里 比较方便的方法

> 使用：
routerFillter.js 封装
```js
// routerFillter.js
const appGlobalData = getApp().globalData;
/**
 * routerFillter --全局路由拦截器
 * @function
 * @param{Object} pageObj 当前页面的page对象
 * @param{Boolean} flag 是否开启权限判断
 */
exports.routerFillter = function (pageObj, flag = false) {
  if (flag) {
    let _onShow = pageObj.onShow
    pageObj.onShow = function () {
      let _this = this

      if ( something === true) {
        _onShow.call(_this) // 关键
      } else {
        wx.redirectTo({
          url: `../login/login`
        })
      }
    }
  }
  return Page(pageObj)
}
```
修改小程序page.js
```js
// 小程序 .js文件
// 官方写法
Page({
  data: {

  }
})
// 将Page替换
import { routerFillter } from '../../utils/routerFillter.js';
routerFillter({
  // 内部一样
}, true)
```

## 二、页面间传餐问题

> 问题：JSON.parse 不能转换特殊字符的问题
> 方法: encodeURIComponent decodeURIComponent处理
> 主要表现 在页面之前传餐有地址相关的字段时候 参数的拼接有特殊字符 导致无法传输

```js
/**
 * 为了解决 JSON.parse 不能转换特殊字符的问题
 * 使用encodeURIComponent decodeURIComponent处理
 */

// Object -> String
const stringify = (data) => {
  return encodeURIComponent(JSON.stringify(data))
}

// Stirng -> Object
const parse = (data) => {
  return JSON.parse(decodeURIComponent(data))
}


module.exports = {
  stringify: stringify,
  parse: parse
};
```


