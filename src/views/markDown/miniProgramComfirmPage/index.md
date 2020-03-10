# 小程序统一确认页面制作
目的：实现所有提交操作后跳转至确认页面并作出下一步操作
### 一、使用的微信api
1、wx.redirectTo(Object object) \
关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。\
主要作用：使得用户不能再返回到提交页面
```javascript
wx.redirectTo({
    url: '',
    success: function(res) {},
    fail: function(res) {},
    complete: function(res) {},
})
```
2、wx.switchTab(Object object) \
跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面 \
主要作用：在确认页面里 制作 回到首页 按钮
```javascript
wx.switchTab({
    url: '',
    success: function(res) {},
    fail: function(res) {},
    complete: function(res) {},
})
```
3、wx.reLaunch(Object object) \
关闭所有页面，打开到应用内的某个页面 \
主要作用：在确认页面里 制作 "下一页" 按钮
```javascript
wx.reLaunch({
    url: '',
    success: function(res) {},
    fail: function(res) {},
    complete: function(res) {},
})
```

### 二、页面制作
1、.js
```javascript
// pages/comfirmPage/comfirmPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: 'success',
    confirmLeft: '返回首页',
    confirmRight: '下一页',
    confirmLeftUrl: '/pages/index/index',
    confirmRightUrl: '../index/index',
    message: '欢迎使用'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(JSON.parse(options.confirmOBJ))
    if (options.confirmOBJ) {
      const confirmOBJ = JSON.parse(options.confirmOBJ)
      this.setData({
        status: confirmOBJ.status || 'success',
        confirmLeft: confirmOBJ.confirmLeft || '返回首页',
        confirmRight: confirmOBJ.confirmRight || '下一页',
        confirmLeftUrl: confirmOBJ.confirmLeftUrl || '/pages/index/index',
        confirmRightUrl: confirmOBJ.confirmRightUrl || '../index/index',
        message: confirmOBJ.message || '欢迎使用'
      })
    }
  },

  /**
   * 点击左边按钮
   */
  handleConfirmLeft: function () {
    console.log('handleConfirmLeft')
    const _this = this
    wx.switchTab({
      url: _this.data.confirmLeftUrl
    })
  },

  /**
   * 点击右边按钮
   */
  handleConfirmRight: function () {
    console.log('handleConfirmRight')
    const _this = this
    wx.reLaunch({
      url: _this.data.confirmRightUrl
    })
  }
})
```
2、.json
```javascript
{
  "navigationBarTitleText": "提示",
  "usingComponents": {
    "van-icon": "../../miniprogram_npm/vant-weapp/icon/index"
  }
}
```
3、.wxml
```haml
<!--pages/comfirmPage/comfirmPage.wxml-->
<view class="comfirmPage">
  <view class="comfirmPage-wrapper">
    <view class="info-icon">
    <van-icon class="icon success" wx:if="{{ status === 'success' }}" name="checked" />
    <van-icon class="icon error" wx:if="{{ status === 'error' }}" name="clear" />
    <van-icon class="icon warning" wx:if="{{ status === 'warning' }}" name="warning" />
    <van-icon class="icon question" wx:if="{{ status === 'question' }}" name="question" />
    <view class="message">
      {{ message }}
    </view>
  </view>
  <view class="btn-wrapper">
    <button
      class="btn-item main"
      bindtap="handleConfirmRight"
    > {{ confirmRight }} </button>
    <button
      class="btn-item home"
      bindtap="handleConfirmLeft"
    > {{ confirmLeft }} </button>
  </view>
  </view>
</view>

```
4、.wxss
```css
/* pages/comfirmPage/comfirmPage.wxss */
.comfirmPage {
  background-image: url('http://61.160.148.40:9000/group1/M00/00/00/wKhDWl3gg7mAZbm8AA1rp1SWa_Y136_big.png');
  background-size:100% 100%;
  -moz-background-size:100% 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.info-icon {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  box-sizing: border-box;
}

.icon {
  font-size: 6rem;
  display: flex;
  align-items: center;
  margin: 0 auto;
}

.icon.success {
  color: #07cb7c;
}

.icon.error {
  color: #fd6b6d;
}

.icon.warning {
  color: #ffc41e;
}

.icon.question {
  color: #5560f7;
}

.message {
  margin-top: 0.5rem;
  text-align: center;
}

.btn-wrapper {
  margin: 0 0.5rem;
}

.btn-item {
  width: 100%;
  margin: 0 0 0.5rem 0;
  border-radius: 28px;
}

.main {
  background: #4674c9;
  color: #fff;
}

.home {
  background: #fff;
  color: #000;
}
```

### 3、使用说明
1、本页面使用里vant的组件库 \
2、提交返回结构后 使用 wx.redirectTo()跳转到确认页面 并附带相关信息
```javascript
const confirmOBJ = {
    status: 'success',
    confirmLeft: '返回首页',
    confirmRight: '下一页面',
    confirmLeftUrl: '/pages/index/index',
    confirmRightUrl: '../nextPage/nextPage',
    message: '提交成功！进入下一页或返回首页！'
}
wx.redirectTo({
    url: `../confirmPage/confirmPage?confirmOBJ=${JSON.stringify(confirmOBJ)}`,
})
```
3、相关信息说明 \
status：显示的状态图片判定字段 \
confirmLeft: 左侧按钮提示字 \
confirmRight: 右侧按钮提示字 \
confirmLeftUrl: 点击左侧按钮跳转的地址 一般是首页 \
confirmRightUrl: 点击左侧按钮跳转的地址 一般是下一页 \
message: 显示提示 \
4、左侧按钮使用了wx.switchTab(Object object)方法 则会回到tab页面 \
右侧按钮使用了wx.reLaunch(Object object)方法 则会关闭所有页面 跳转至目标页面 使得用户不能再返回确认提示页面

