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

<style>
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
  text-overflow:ellipsis;
  white-space: nowrap;
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
