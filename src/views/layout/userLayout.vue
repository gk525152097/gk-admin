<template>
  <div class="login">
    <div class="content-wrapper">
      <router-view class="content"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userLayout'
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  position: relative;
  background-image: var(--login-bg);
  background-position: center;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    filter: blur(5px);
    background-image: inherit;
    background-position: center;
  }
  .content-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    .content {
      z-index: 1;
    }
  }
}
</style>
