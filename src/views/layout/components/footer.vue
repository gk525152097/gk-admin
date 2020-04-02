<template>
  <div class="footer">
    <div class="content">
      <span>GK-Admin</span>
      <el-divider direction="vertical"></el-divider>
      <span>
        <img src="../../../assets/github.svg" alt="">
      </span>
      <el-divider direction="vertical"></el-divider>
      <span>GK黎光</span>
    </div>
    <div class="copyright">
      COPYRIGHT © 2020 - {{new Date().toLocaleString().slice(0 ,4)}} BY GK黎光
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
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
  mounted () {
  },
  destroyed () {
  }
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--padding);
  flex-direction: column;
  margin: var(--margin);
  .content {
    padding: var(--padding);
    color: var(--sub-color4);
    span {
      font-size: 12px;
      cursor: pointer;
      img {
        width: 12px;
      }
      &:hover {
        color: var(--main-color);
        img {
          color: var(--main-color);
        }
      }
    }
  }
  .copyright {
    padding: var(--padding);
    border-top: 1px solid var(--sub-color2);
    color: var(--sub-color4);
    font-size: 12px;
  }
}
</style>
