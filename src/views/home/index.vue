<template>
  <div class="index">
    <!--  header  -->
    <el-row :gutter="12">
      <el-col :xs="24" :sm="12" :lg="6" v-for="(item, index) in headerInfos" :key="index">
        <div class="box-item">
          <homeCard :title="item.title" :subTitle="item.subTitle" :text="item.text" :icon="item.icon"/>
        </div>
      </el-col>
    </el-row>
    <!-- g2   -->
    <el-row :gutter="12">
      <el-col :xs="24" :sm="16" :lg="16">
        <div class="box-item">
          <div class="item-title">G2-bar</div>
          <g2Bar :data="bar"></g2Bar>
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" :lg="8">
        <div class="box-item">
          <div class="item-title">G2-pie</div>
          <g2Pie :data="pie"></g2Pie>
        </div>
      </el-col>
    </el-row>
    <!--  miniprogram  -->
    <el-row :gutter="12">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="box-item">
          <div class="item-title">小程序-home <span class="spot" title="更多" /></div>
          <img style="width: 100%" src="../../assets/miniProgram1.jpg" alt="">
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="box-item">
          <div class="item-title">小程序-confirmPage <span class="spot" title="更多" /></div>
          <img style="width: 100%" src="../../assets/miniProgram2.jpg" alt="">
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="box-item">
          <div class="item-title">小程序-detail <span class="spot" title="更多" /></div>
          <img style="width: 100%" src="../../assets/miniProgram3.jpg" alt="">
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import defaultSettings from '../../defaultSettings'
import homeCard from './homeCard'
import g2Bar from './g2Bar'
import g2Pie from './g2Pie'
export default {
  name: 'index',
  components: {
    homeCard,
    g2Bar,
    g2Pie
  },
  data () {
    return {
      defaultSettings,
      userInfo: {},
      headerInfos: [
        { title: '企划', subTitle: '方向企划阶段', text: '12month-1cycle', icon: '' },
        { title: '变动', subTitle: '企划解构', text: '计划赶不上变化', icon: '' },
        { title: '悸动', subTitle: '乱绪下重组', text: '捉襟见肘的诚惶诚恐', icon: '' },
        { title: 'DONE', subTitle: '周而复始', text: 'done to done', icon: '' }
      ],
      bar: [
        { year: 'css', sales: 84 },
        { year: 'html', sales: 88 },
        { year: 'js', sales: 82 },
        { year: 'node', sales: 68 },
        { year: 'vue', sales: 89 },
        { year: 'react', sales: 60 },
        { year: '小程序', sales: 76 }
      ],
      pie: [
        { type: 'css', value: 20 },
        { type: 'html', value: 15 },
        { type: 'js', value: 22 },
        { type: 'node', value: 10 },
        { type: 'vue', value: 23 },
        { type: 'react', value: 10 },
        { type: '小程序', value: 15 }
      ]
    }
  },
  mounted () {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.index {
  width: 100%;
  min-height: 1px;
}
.box-item {
  border-radius: var(--border-radius);
  background: var(--background-color);
  box-shadow: var(--box-shadow);
  padding: var(--padding);
  margin-bottom: var(--margin);
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:hover {
    box-shadow: var(--box-shadow-active);;
  }
  .item-title {
    font-size: 22px;
    font-weight: 300;
    padding: var(--padding);
    .spot {
      display: inline-block;
      margin-left: var(--margin);
      width: 8px;
      height: 8px;
      background: var(--main-color);
      transition: all 1s;
      cursor: pointer;
      &:hover {
        transform:rotate(360deg);
        -ms-transform:rotate(360deg); /* IE 9 */
        -moz-transform:rotate(360deg); /* Firefox */
        -webkit-transform:rotate(360deg); /* Safari 和 Chrome */
        -o-transform:rotate(360deg); /* Opera */
      }
    }
  }
  .item-content {
    width: 100%;
    display: flex;
  }
}
.header-icon {
  box-sizing: border-box;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
}
.user-info {
  flex: 1;
  display: flex;
  align-items: center;
  .info-item {
    margin-bottom: var(--margin);
    display: flex;
    .title {
      flex: 1;
      font-weight: 300;
      font-size: 12px;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      padding-right: var(--padding);
    }
    .info-content {
      flex: 4;
      font-weight: 300;
    }
  }
}
.g2 {
  flex: 1;
}
.skills {
  flex: 1;
  .skills-item {
    width: 49%;
    height: 50%;
    display: inline-flex;
    align-items: center;
    font-weight: 300;
    font-size: 12px;
    padding-left: var(--padding);
    box-sizing: border-box;
    .skills-icon {
      font-size: 36px;
      color: var(--sub-color2);
      margin-right: var(--margin);
    }
  }
}
</style>
