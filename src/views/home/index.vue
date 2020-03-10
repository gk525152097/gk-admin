<template>
  <div class="index">
    <el-row :gutter="12" style="width: 100%; flex-wrap: wrap;" type="flex">
      <el-col :sm="24" :md="6">
        <div class="box-item header-icon">
          <img :src="defaultSettings.logoImg" alt="" />
        </div>
      </el-col>
      <el-col :sm="24" :md="18" style="display: flex;">
        <div class="box-item user-info">
          <el-row :gutter="12" style="width: 100%">
            <el-col :xs="24" :sm="12" :md="8">
              <div class="info-item"><span class="title">姓名</span><span class="info-content shenglue">韦相龙</span></div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8">
              <div class="info-item"><span class="title">年龄</span><span class="info-content shenglue">25</span></div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8">
              <div class="info-item"><span class="title">学历</span><span class="info-content shenglue">本科</span></div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8">
              <div class="info-item"><span class="title">毕业院校</span><span class="info-content shenglue">南京信息工程大学</span></div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8">
              <div class="info-item"><span class="title">手机号码</span><span class="info-content shenglue">15150891853</span></div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8">
              <div class="info-item"><span class="title">微信</span><span class="info-content shenglue">gk19950218</span></div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8">
              <div class="info-item"><span class="title">邮箱</span><span class="info-content shenglue">441766186@qq.com</span></div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8">
              <div class="info-item"><span class="title">求职意向</span><span class="info-content shenglue">前端工程师</span></div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div class="box-item">
      <div class="item-title">技能方向</div>
      <div class="item-content">
        <div class="g2">
          <g2Bar :data="bar"></g2Bar>
        </div>
        <div class="skills">
          <div class="skills-item"><i class="el-icon-crop skills-icon" />切图：基础切图、色彩处理、像素处理</div>
          <div class="skills-item"><i class="el-icon-notebook-2 skills-icon" />服务器：前端代码手动部署</div>
          <div class="skills-item"><i class="el-icon-document skills-icon" />文档：需求文档整理、项目评估报告</div>
          <div class="skills-item"><i class="el-icon-paperclip skills-icon" />项目管理工具：软件项目生命周期、软件质量度量</div>
        </div>
      </div>
    </div>
    <div class="box-item">
      <div class="item-title">工作经历</div>
      <el-timeline>
        <el-timeline-item v-for="(item, index) in history" :timestamp="item.time" :key="index" placement="top">
          <el-card>
            <h4>{{item.title}}</h4>
            <p>{{item.detail}}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
import defaultSettings from '../../defaultSettings'
import g2Pie from './g2Pie'
import g2Bar from './g2Bar'
export default {
  name: 'index',
  components: {
    g2Pie,
    g2Bar
  },
  data () {
    return {
      defaultSettings,
      userInfo: {},
      history: [
        {time: '2019/2/1', title: '订餐dome项目', detail: '智慧楼宇小程序功能独立。主要进行了小程序基础结构规划和逻辑处理。'},
        {time: '2019/12/1', title: '智慧楼宇项目-小程序', detail: '需求需要进行小程序开发，因原小程序开发人员工作量过大，故接手小程序开发，维护原小程序功能并持续开发新功能。'},
        {time: '2019/9/1', title: '智慧楼宇项目开发', detail: '演示dome的结果。进行正常的项目开发。'},
        {
          time: '2019/8/1',
          title: '园区系统演示dome、公众号开发',
          detail: '8月份开始使用vue框架开发园区系统演示dome，从中发现了vue框架的问题并修改优化；' +
            '并参加了基础公众号开发，实现地图接入、用户登陆、数据查询等功能。'
        },
        {
          time: '2019/5/1',
          title: 'vue前端框架搭建',
          detail: '前充电桩项目交付后空档时间，使用vue搭建前端框架为之后的项目打造合适的基础前端框架。' +
            '框架主要实现系统模块管理：菜单管理、功能点管理、角色管理、权限管理。' +
            '框架能力：动态路由、页面拦截、请求封装、自动化部署。'
        },
        {
          time: '2018/11/1',
          title: '实践react项目',
          detail: '入职培训结束后加入物联网应用事业部，并参与充电桩项目。' +
            '项目使用springboot和ant-desion-pro等技术，初次实现前后端分离项目。' +
            '本人在其中作为新前端技术开发人员，主要负责ant-design-pro框架研究和使用；并使用此框架开发相关功能' +
            '实现了项目需求。'
        },
        {
          time: '2018/7/1',
          title: '毕业-入职',
          detail: '6月从南京信息工程大学毕业，入职中电鸿信信息科技有限公司。作为校招生进行相关素质培训，并参与dome项目。dome项目为oa系统项目原型，使用java、jsp等技术'
        }
      ],
      data: [
        { type: 'css', value: 20 },
        { type: 'html', value: 15 },
        { type: 'js', value: 22 },
        { type: 'node', value: 10 },
        { type: 'vue', value: 23 },
        { type: 'react', value: 10 },
        { type: '小程序', value: 15 }
      ],
      bar: [
        { year: 'css', sales: 84 },
        { year: 'html', sales: 88 },
        { year: 'js', sales: 82 },
        { year: 'node', sales: 68 },
        { year: 'vue', sales: 89 },
        { year: 'react', sales: 60 },
        { year: '小程序', sales: 76 }
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
    padding: var(--padding);
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
