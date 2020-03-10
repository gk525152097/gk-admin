<template>
  <div class="logo-wrapper-c">
    <div class="logo" :style="isCollapse ? 'width: 40px; height: 40px' : ''">
      <img :src="defaultSetting.logoImg" :alt="defaultSetting.systemName">
    </div>
    <div v-if="!isCollapse" class="text">{{ defaultSetting.systemName }}</div>
  </div>
</template>

<script>
import defaultSetting from '../../../defaultSettings'
import { mapState } from 'vuex'
export default {
  name: 'logo',
  data () {
    return {
      defaultSetting
    }
  },
  computed: {
    ...mapState({
      isCollapse: state => state.global.isCollapse
    })
  }
}
</script>

<style lang="scss" scoped>
.logo-wrapper-c {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .logo {
    transition: all 0.3s;
    width: 60px;
    height: 60px;
    background: var(--main-color);
    border-radius: 50%;
    box-shadow: 5px 5px 20px 5px var(--sub-color2);
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .text {
    transition: all 0.3s;
    margin-top: 12px;
    font-weight: 400;
    color: var(--main-text-color2);
  }
}
</style>
