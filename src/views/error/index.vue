<template>
  <div class="error">
    <div class="content">
      <div class="title">{{type}}</div>
      <div class="btn-wrapper">
        <router-link :to="{ name: 'home' }"><div class="btn">返回首页</div></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      type: 404
    }
  },
  mounted () {
    console.log(this)
    this.type = this.$router.currentRoute.name
  }
}
</script>

<style lang="scss" scoped>
.error {
  width: 100%;
  height: 100%;
  background: url('../../assets/errorBG.png') no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  .content {
    width: 100%;
      .title {
      text-align: center;
      font-size: 100px;
      font-weight: bold;
      color: #fff;
    }
    .btn-wrapper {
      .btn {
        width: fit-content;
        padding: 8px 12px;
        border: 1px solid #fff;
        border-radius: 4px;
        margin: 40px auto;
        color: #fff;
      }
    }
  }
}
</style>
