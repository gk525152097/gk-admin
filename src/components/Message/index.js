import Vue from 'vue'
import index from './index.vue'

// 构造器
const Profile = Vue.extend(index)

const Message = () => {
  const instance = new Profile({
    data: {

    }
  }).$mount()
  document.body.appendChild(instance.$el)
}

export default Message
