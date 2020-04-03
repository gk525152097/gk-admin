# vue使用api调用组件

## 基本流程
> 1、创建组件 xx.vue xx.js
 .vue文件写组件 .js写构造方法

> 2、.js内容 主要是处理构造器 和 将组件挂载在页面上
```html
import Vue from 'vue'
import index from './index.vue' // 引入组件

const Profile = Vue.extend(index) // 构造器

const Message = () => { // 处理函数
  const instance = new Profile({
    data: {}
  }).$mount()
  document.body.appendChild(instance.$el) // 将组件挂载在节点上
}

export default Message
```

> 3、.vue内容 主要是将组件删除
```html
<template>
</template>

<script>
  export default {
  name: 'index',
  mounted() {
    setTimeout(() => { // 定时器 删除节点
      this.$destroy(true)
      this.$el.remove()
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
}
</style>
```

>4、使用 i:在main.js里引入方法 并使用portotype进行api化
```js
import message2 from './components/Message/index'

Vue.prototype.$message2 = message2
```

ps： https://www.cnblogs.com/hentai-miao/p/10271652.html
