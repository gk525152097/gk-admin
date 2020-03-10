<template>
  <el-container class="container">
    <el-aside :style="{width: isCollapse ? '64px' : '200px', transition: 'all 0.3s'}">
      <div class="logo-wrapper" :style="isCollapse ? 'height: 80px' : ''">
        <Logo />
      </div>

      <SideMenu />
    </el-aside>

    <el-container style="flex-direction: column">
      <Header />

      <el-main>
        <router-view/>
        <Footer />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from './components/header'
import SideMenu from './components/sideMenu'
import Footer from './components/footer'
import Logo from './components/logo'
import { mapState } from 'vuex'
export default {
  name: 'baseLayout',
  components: {
    Header,
    SideMenu,
    Logo,
    Footer
  },
  computed: {
    ...mapState({
      isCollapse: state => state.global.isCollapse
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  .logo-wrapper  {
    transition: all 0.3s;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
