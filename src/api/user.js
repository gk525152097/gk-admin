// import request from '@/utils/request'
// import { stringify } from 'qs'

// 登陆
export function handleLogin (params) {
  // return request({
  //   url: `/alarmrecord/pagedata`,
  //   method: 'POST',
  //   data: params
  // })
  return Promise.resolve({
    data: {
      userName: '测试',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      role: 'SYSTEM_ADMIN'
    }
  })
}

// 获取菜单
export function handleMenu (params) {
  // return request({
  //   url: `/alarmrecord/pagedata`,
  //   method: 'POST',
  //   data: params
  // })
  return Promise.resolve({
    data: [
      {
        id: 1,
        parentId: null,
        name: 'markDown',
        path: '/markDown',
        component: '/layout/baseLayout',
        redirect: '/markDown/index',
        hidden: 0,
        icon: 'el-icon-folder-opened'
      },
      {
        id: 2,
        parentId: 1,
        name: 'markDown',
        path: '/markDown/index',
        component: '/markDown/index',
        redirect: null,
        hidden: 1,
        icon: 'null'
      }
    ]
  })
}
