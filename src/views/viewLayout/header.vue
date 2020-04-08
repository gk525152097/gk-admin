<template>
  <div class="header">
    {{ defaultSettings.systemName }}
  </div>
</template>

<script>
import defaultSettings from '../../defaultSettings'
export default {
  name: 'header',
  components: {},
  data () {
    return {
      defaultSettings
    }
  },
  props: {},
  watch: {},
  methods: {},
  computed: {},
  created () {
  },
  mounted () {
  },
  destroyed () {
  }
}
</script>

<style lang="scss" scoped>
.header {
}
</style>
