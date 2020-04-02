<template>
  <div class="index">
    <el-tabs v-model="activeName" type="card" @tab-click="handleChangeTabs">
      <el-tab-pane label="学习" name="学习" />
      <el-tab-pane label="问题" name="问题" />
    </el-tabs>
    <div class="content">
      <div class="menu">
        <div class="menu-icon" :style="{ 'justify-content': this.isCollapse ? 'center' : '' }"><i class="el-icon-s-unfold" @click="handleIsCollapse"></i></div>
        <markDownMenu :isCollapse="isCollapse" :markDownList="markDownList" @handleFile="handleFile" />
      </div>
      <div class="markdown">
        <MarkdownPreview :initialValue="initialValue" theme="gitHub"></MarkdownPreview>
      </div>
    </div>
  </div>
</template>

<script>
import markDownMenu from './markDownMenu'
import { MarkdownPreview } from 'vue-meditor'
import studyList from './studyList'
import problemList from './problemList'
export default {
  name: 'index',
  components: {
    markDownMenu,
    MarkdownPreview
  },
  data () {
    return {
      activeName: '学习',
      isCollapse: false,
      initialValue: '',
      markDownList: studyList.reverse()
    }
  },
  props: {},
  watch: {},
  methods: {
    handleFile (data) {
      this.initialValue = data.file
    },
    handleIsCollapse () {
      this.isCollapse = !this.isCollapse
    },
    handleChangeTabs (e) {
      if (e.label === '学习') {
        this.markDownList = studyList.reverse()
      }
      if (e.label === '问题') {
        this.markDownList = problemList.reverse()
      }
      this.handleActiveMarkDown()
    },
    handleActiveMarkDown () {
      this.initialValue = this.markDownList[0].file
    }
  },
  computed: {},
  created () {
  },
  mounted () {
    this.handleActiveMarkDown()
  },
  destroyed () {
  }
}
</script>

<style lang="scss" scoped>
.index {
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  overflow: hidden;
  &:hover {
    box-shadow: var(--box-shadow-active);
  }
  .content {
    display: flex;
    overflow: scroll;
    .menu {
      .menu-icon {
        padding: var(--padding);
        display: flex;
        justify-content: flex-end;
        i {
          cursor: pointer;
        }
      }
    }
    .markdown {
      flex: 1;
    }
  }
}
</style>
