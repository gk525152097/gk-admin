<template>
  <div class="g2Bar">
    <div id="container"></div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2'
export default {
  name: 'g2Bar',
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
      this.handleRender()
    }
  },
  methods: {
    handleRender () {
      const chart = new Chart({
        container: 'container',
        autoFit: true,
        height: 200
      })

      chart.data(this.data)
      chart.scale('sales', {
        nice: true
      })

      chart.tooltip({
        showMarkers: false
      })
      chart.interaction('active-region')

      chart.interval().position('year*sales')

      chart.render()
    }
  },
  computed: {},
  created () {
  },
  mounted () {
    this.handleRender()
  },
  destroyed () {
  }
}
</script>

<style lang="scss" scoped>
    .g2Bar {
    }
</style>
