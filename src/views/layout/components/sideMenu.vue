<script>
import { mapState } from 'vuex'
export default {
  name: 'index',
  computed: {
    ...mapState({
      isCollapse: state => state.global.isCollapse,
      treeMenu: state => state.user.treeMenu
    })
  },
  render (h) {
    return h(
      'el-menu',
      {
        props: {
          collapse: this.isCollapse
        }
      },
      this.treeMenu.map(child => this.handleMenuItem(h, child))
    )
  },
  methods: {
    handleMenuItem (h, item) {
      // 判定是否存在子节点
      const haveChild = item.children && item.children.length
      // 是否唯一子节点
      const onlyChild = haveChild && item.children.length === 1
      // 唯一子节点是否隐藏
      const onlyChildHidden = onlyChild && item.children[0].hidden
      // 隐藏子节点path PS:需要拼接父节点地址
      const redirectPath = onlyChildHidden ? item.children[0].path : null
      // 菜单隐藏
      if (item.hidden) {
        return null
      }
      if (haveChild && !onlyChild) {
        return h(
          'el-submenu',
          {
            props: {
              index: `'${item.id}'`,
              path: item.path
            },
            on: {
              click: () => this.handleRouter(item.path)
            }
          },
          [
            h(
              'template',
              { slot: 'title' },
              [
                h(
                  'i',
                  { class: item.icon }
                ),
                h(
                  'span',
                  { slot: 'title' },
                  item.name
                )
              ]
            ),
            ...item.children.map(child => this.handleMenuItem(h, child))
          ]
        )
      } else if (haveChild && onlyChild && !onlyChildHidden) {
        return h(
          'el-submenu',
          {
            props: {
              index: `'${item.id}'`,
              path: redirectPath
            },
            on: {
              click: () => this.handleRouter(redirectPath)
            }
          },
          [
            h(
              'template',
              { slot: 'title' },
              [
                h(
                  'i',
                  { class: item.icon }
                ),
                h(
                  'span',
                  { slot: 'title' },
                  item.name
                )
              ]
            ),
            ...item.children.map(child => this.handleMenuItem(h, child))
          ]
        )
      } else {
        return h(
          'el-menu-item',
          {
            props: {
              index: `'${item.id}'`,
              path: item.path
            },
            on: {
              click: () => this.handleRouter(item.path)
            }
          },
          [
            h(
              'i',
              { class: item.icon }
            ),
            h(
              'span',
              {
                slot: 'title'
              },
              item.name
            )
          ]
        )
      }
    },
    handleRouter (path) {
      this.$router.push({path: path})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  }
}
</script>
