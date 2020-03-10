<script>
export default {
  name: 'markDownMenu',
  components: {},
  data () {
    return {}
  },
  props: {
    isCollapse: {
      default: false
    },
    markDownList: {
      default: []
    }
  },
  watch: {},
  methods: {
    handleMenuItem (h, item) {
      return h(
        'el-menu-item',
        {
          props: {
            index: `'${item.name}'`
          },
          on: {
            click: () => this.$emit('handleFile', item)
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
  computed: {},
  created () {
  },
  mounted () {
  },
  destroyed () {
  },
  render (h) {
    return h(
      'el-menu',
      {
        props: {
          collapse: this.isCollapse
        }
      },
      this.markDownList.map(child => this.handleMenuItem(h, child))
    )
  }
}
</script>

<style lang="scss" scoped>
    .markDownMenu {
    }
</style>
