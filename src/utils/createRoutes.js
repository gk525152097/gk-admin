/**
 * 动态创建路由
 * 接收一个数组
 * 主要作用 更换 baseLayout 和 修改 component
 */

const buildRoutes = (menuList) => {
  menuList = menuList.map(menu => {
    if (menu.children) {
      menu.children = buildRoutes(menu.children)
    }
    if (menu.component.length === 0) {
      delete menu.component
    } else {
      menu.component = (_ => () => import('@/views' + _))(menu.component)
    }
    return menu
  })
  return menuList
}

/**
 * 添加 404 页面
 */

const createRoutes = (menuList) => {
  const route = buildRoutes(menuList)
  route.push({ path: '*', redirect: '/error/404', hidden: true })
  return route
}

export default createRoutes
