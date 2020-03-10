<template>
  <div class="header">
    <div class="title" @click="handleMenuCollapse">
      <i class="el-icon-s-fold"></i>
    </div>
    <div class="user-info">
      <el-dropdown>
        <span class="el-dropdown-link user-info">
          <el-avatar class="avatar" size="small" :src="defaultSettings.logoImg"></el-avatar>
          gkAdmin
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <span @click="() => handleLogout()">退出系统</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import defaultSettings from '../../../defaultSettings'
import { mapActions } from 'vuex'
export default {
  name: 'header',
  data () {
    return {
      defaultSettings
    }
  },
  methods: {
    ...mapActions({
      handleMenuCollapse: 'global/handleMenuCollapse'
    }),
    handleLogout () {
      localStorage.clear()
      this.$router.push({path: 'user/login'})
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 12px;
  margin: 20px;
  background: var(--sub-color);
  border-radius: 12px;
  box-shadow: 5px 5px 20px 5px var(--sub-color2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 50px;
  }
  .user-info {
    color: var(--main-text-color2);
    display: flex;
    align-items: center;
    justify-content: center;
    .avatar {
      margin-right: 8px;
      justify-content: center;
    }
    &:hover {
      color: var(--main-color);
    }
    &:focus {
      outline: none;
    }
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: var(--main-color);
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
