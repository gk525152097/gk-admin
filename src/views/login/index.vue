<template>
  <div class="login-box">
    <div class="login-img"/>
    <div class="form-wrapper">
      <div class="header">{{ $t('system.login') }} <span>{{defaultSettings.systemName}}</span></div>
      <el-form class="body" ref="form" :model="form" :rules="rules">
        <!--用户名-->
        <el-form-item prop="username">
          <el-input
            v-model="form.username"
            placeholder="请输入用户名"
            prefix-icon="el-icon-user"
          />
        </el-form-item>
        <!--密码-->
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
          />
        </el-form-item>
        <!--验证码-->
        <el-form-item prop="code">
          <el-input
            v-model="form.code"
            placeholder="请输入验证码"
            prefix-icon="el-icon-bangzhu"
          />
        </el-form-item>
        <!--登陆按钮-->
        <el-button @click="onSubmit('form')" class="login-btn">登陆</el-button>
        <div class="login-info">
          <span>用户手册</span>
        </div>
      </el-form>
      <div class="footer">
        <a :href="defaultSettings.copyRightLink">{{defaultSettings.copyRight}} CopyRight 2020 - {{new Date().toLocaleString().slice(0, 4)}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import defaultSettings from '@/defaultSettings'
export default {
  name: 'index',
  data () {
    return {
      defaultSettings,
      form: {
        username: '',
        password: '',
        code: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    }
  },
  component: {
    ...mapState({

    })
  },
  methods: {
    ...mapActions({
      handleLogin: 'user/handleLogin'
    }),

    /**
     * 提交登陆
     * @param formName
     */
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 请求登陆
          this.handleLogin(valid)
            .then(res => {
              // 存储系统时间
              localStorage.setItem('systemTime', new Date().valueOf())
              // 存储用户数据到本地
              localStorage.setItem('userInfo', JSON.stringify(res))
              // 跳转首页
              this.$router.push({path: '/'})
            })
            .catch(err => {
              console.log(err)
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-box {
  width: 1080px;
  height: 560px;
  display: flex;
  justify-content: stretch;
  background: #fff left center;
  border-radius: 12px;
  margin: 0 auto;
  overflow: hidden;
  .login-img {
    width: 66%;
    height: 100%;
    background: var(--login-bg);
    background-position: center;
  }
  .form-wrapper {
    flex: 1;
    padding: 24px;
    display: flex;
    flex-direction: column;
    .header {
      font-size: 24px;
      font-weight: bold;
      padding: 90px 0 30px;
      span {
        font-size: 12px;
        color: var(--sub-text-color);
      }
    }
    .body {
      flex: 1;
      .input-wrapper {
        width: 100%;
        margin: 0 0 24px 0;
      }
      .login-btn {
        width: 100%;
        background: var(--main-color);
        color: var(--main-text-color);
      }
      .login-info {
        span {
          cursor: pointer;
          font-size: 12px;
          color: var(--sub-text-color);
          &:hover {
            color: var(--main-color);
          }
        }
      }
    }
    .footer {
      a {
        color: var(--sub-text-color);
      }
      font-size: 12px;
    }
  }
}
</style>
