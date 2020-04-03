<template>
  <div class="index">
    ceshi
  </div>
</template>

<script>
  export default {
  name: 'index',
  components: {},
  data () {
    return {}
  },
  props: {},
  watch: {},
  methods: {},
  computed: {},
  created () {
  },
  mounted() {
    setTimeout(() => {
      this.$destroy(true)
      this.$el.remove()
    }, 1000)
  },
  destroyed () {
  }
}
</script>

<style lang="scss" scoped>
.index {
  display: flex;
  z-index: 500;
}
</style>
