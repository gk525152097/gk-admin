<template>
  <div id="app">
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "./assets/styles/global";
body {
  font-size: 12px;
}
:root {
  --login-bg: url("./assets/login_bg.png");
  --main-color: #409EFF;
  --sub-color: #FFFFFF;
  --sub-color2: #CCCCCC;
  --sub-color3: #000000;
  --sub-color4: #999999;

  --background-color: #FFFFFFF;
  --padding: 12px;
  --margin: 12px;

  --main-text-color: #FFFFFF;
  --main-text-color2: #000000;

  --sub-text-color: #B1B1B1;

  --border-radius: 12px;
  --box-shadow: 5px 5px 10px 1px var(--sub-color2);
  --box-shadow-active: 5px 5px 10px 1px var(--sub-color4);
}

.shenglue{
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box; /* 将对象作为弹性伸缩盒子模型显示 */
  -webkit-line-clamp: 1; /* 控制最多显示几行 */
  -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */
}
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
#app{
  width: 100%;
  height: 100%;
}
</style>
