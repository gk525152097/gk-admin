import _ from 'lodash'

/**
 * 数组转树
 * @param arr
 * @returns {*}
 */
function transformTree (_arr) {
  // 深拷贝
  let arrs = _.cloneDeep(_arr)

  // 数组排序
  arrs = _.sortBy(arrs, item => {
    return item.id // 根据id对数据进行升序排序，如果降序则改为：return -item.id
  })

  let arr = []
  arrs.forEach(item => {
    if (!item.parentId) {
      arr.push(item)
    }
  })

  return arrs.reduce((h, m) => {
    if (m.parentId) {
      foo(h, m)
    }

    function foo (arr, cur) {
      arr.forEach(item => {
        if (item.id === cur.parentId) {
          if (!item.children) {
            item.children = []
          }
          item.children.push(cur)
        } else if (item.children) {
          foo(item.children, cur)
        }
      })
    }

    return h
  }, arr)
}

export default transformTree
