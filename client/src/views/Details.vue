/** 首页 */
<template>
  <div class="index">
    <div class="content">
      <div class="title">{{detalis.title}}</div>
      <div class="tags">标签：{{detalis.tags}}</div>
      <div v-html="detalis.content"></div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      detalis: {}
    };
  },
  methods: {
    init() {
      this.$http(
        "get",
        "/font/queryfontOneAction?id=" + this.$route.query.id
      ).then(data => {
        this.detalis = data.info;
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="less" scoped>
.index {
  background-color: #f9f3f3;
  overflow-x: hidden;
//   color: #ffffff;
  min-height: 100%;
  .content {
    width: 80%;
    margin: 0 auto;
    max-width: 1400px;
    min-width: 1000px;
    .title {
      text-align: center;
      font-size: 24px;
      margin-top: 50px;
    }
    .tags{
        text-align: center;
        margin: 10px;
    }
  }
}
</style>>
