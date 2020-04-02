<template>
  <div class="homeCard">
    <div class="title-wrapper">
      <div class="title" :title="title">{{ title }}</div>
      <div class="sub-title" :title="subTitle">{{ subTitle }}</div>
      <div class="line" />
      <div class="text" :title="text">{{ text }}</div>
    </div>
    <div class="icon-wrapper">
      <img :src="icon" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeCard',
  components: {},
  props: {
    title: {
      required: true
    },
    subTitle: {
      default: ''
    },
    text: {
      default: ''
    },
    icon: {
      default: ''
    },
    cardStyle: {
      default: ''
    }
  },
  data () {
    return {}
  },
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
.homeCard {
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    .icon-wrapper {
      img {
        transform:rotate(360deg);
        -ms-transform:rotate(360deg); /* IE 9 */
        -moz-transform:rotate(360deg); /* Firefox */
        -webkit-transform:rotate(360deg); /* Safari 和 Chrome */
        -o-transform:rotate(360deg); /* Opera */
      }
    }
  }
  .title-wrapper {
    flex: 1;
    .title {
      font-size: 24px;
      font-weight: 300;
      color: var(--sub-color3);
      @include ellipsis(1)
    }
    .sub-title {
      font-size: 14px;
      font-weight: 300;
      color: var(--sub-color4);
      @include ellipsis(1)
    }
    .line {
      border-top: 1px solid var(--sub-color2);
      margin: 4px;
    }
    .text {
      font-weight: 300;
      color: var(--sub-color4);
      @include ellipsis(1)
    }
  }
  .icon-wrapper {
    padding-left: var(--padding);
    display: flex;
    align-items: center;
    justify-items: center;
    img {
      width: 40px;
      height: 40px;
      background: var(--main-color);
      transition: all 2s;
    }
  }
}
</style>
