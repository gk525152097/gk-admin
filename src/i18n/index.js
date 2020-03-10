import Vue from 'vue'
import VueI18n from 'vue-i18n'

// 语言配置文件
import zh from './config/zh'
import en from './config/en'

Vue.use(VueI18n)

// 实例化i18n
const i18n = new VueI18n({

  locale: localStorage.getItem('locale') || 'zh',

  messages: {
    zh, // 中文
    en // 英语
  }

})

export default i18n
