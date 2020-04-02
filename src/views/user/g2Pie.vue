<template>
  <div class="g2Pie">
    <div id="container"></div>
  </div>
</template>

<script>
const G2 = require('@antv/g2')
export default {
  name: 'g2Pie',
  components: {},
  data () {
    return {}
  },
  props: {
    data: {
      default: []
    }
  },
  watch: {
    data () {
      this.handelRender()
    }
  },
  methods: {
    handelRender () {
      // 可以通过调整这个数值控制分割空白处的间距，0-1 之间的数值
      const sliceNumber = 0.01

      // 自定义 other 的图形，增加两条线
      G2.registerShape('interval', 'slice-shape', {
        draw (cfg, container) {
          const points = cfg.points
          let path = []
          path.push(['M', points[0].x, points[0].y])
          path.push(['L', points[1].x, points[1].y - sliceNumber])
          path.push(['L', points[2].x, points[2].y - sliceNumber])
          path.push(['L', points[3].x, points[3].y])
          path.push('Z')
          path = this.parsePath(path)
          return container.addShape('path', {
            attrs: {
              fill: cfg.color,
              path
            }
          })
        }
      })

      const chart = new G2.Chart({
        container: 'container',
        autoFit: true,
        height: 200
      })

      chart.data(this.data)
      chart.coordinate('theta', {
        radius: 0.75,
        innerRadius: 0.6
      })
      chart.tooltip({
        showTitle: false,
        showMarkers: false
      })
      chart
        .interval()
        .adjust('stack')
        .position('value')
        .color('type')
        .shape('slice-shape')

      chart.render()
    }
  },
  computed: {},
  created () {
  },
  mounted () {
    this.handelRender()
  },
  destroyed () {
  }
}
</script>

<style lang="scss" scoped>
    .g2Pie {
    }
</style>
