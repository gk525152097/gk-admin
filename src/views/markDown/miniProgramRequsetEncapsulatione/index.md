# 微信小程序 请求拦截器

##### 虽然说 小程序支持了npm 但是吧 axios占时不好用

## 1、请求基础 使用微信自带的 wx.request 请求
```js
wx.request({
    url: '',
    data: '',
    header: {},
    method: 'GET',
    dataType: 'json',
    responseType: 'text',
    success: function(res) {},
    fail: function(res) {},
    complete: function(res) {},
})
```

## 2、再是使用Promise进行封装 进行返回拦截
```js
const request = ({url, data, method = 'POST', header}) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: data,
      header: header,
      method: method,
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        // http返回处理
        resolve(res)
      },
      fail: function(err) {
        // http错误处理
        reject(err)
      },
      complete: function(fna) {
        // 请求完成处理
        console.log(fna)
      },
    })
  }
}
```

## 3、在外层调用方法的时候 进行请求拦截
 使用var声明getHeader方法 因为 使用 const 会导致 wx.getStorageSync保存上一次获取的Authorization（网关Authorization）\
 使用...header 是因为请求入参方式不一样的时候 需要进行处理 虽然一开始写了 /json 的方式 但是 ...header会将同名属性替换掉 \
  "content-type": "application/x-www-form-urlencoded" \
  "Content-Type": "multipart/form-data" \
 使用baseUrl做统一路径 一般是网关地址 之后由网关进行请求分发
```js
const baseUrl = 'http://xxxxxxxx.cn'

var getHeader = function (header) {
  return {
    'content-type': 'application/json',
    'Authorization': wx.getStorageSync('Authorization'),
    ...header
  }
}

const request = ({url, data, method = 'POST', header}) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${baseUrl}${url}`, // 请求地址拼接
      data: data,
      header: getHeader(header), // 动态替换http request header
      method: method,
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        // http返回处理
        // http返回code 200为正常 不为200的时候提示错误
        if (res.code !== 200) {
          wx.showToast({
            title: `${res.code}错误`
          })
        }
        resolve(res.data)
      },
      fail: function(err) {
        // http错误处理
        reject(err)
        wx.showToast({
          title: '网络请求失败，请重新请求！'
        })
      },
      complete: function(fna) {
        // 请求完成处理
        console.log(fna)
      },
    })
  }
}

```
