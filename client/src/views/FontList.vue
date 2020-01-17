/** 首页 */
<template>
  <div class="index">
    <div class="content">
     21312321
    </div>
  </div>
</template>

<script>

export default {
  name:'fontList',
  data() {
    return {
      detalis: {}
    };
  },
  methods: {
    init() {
      
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
