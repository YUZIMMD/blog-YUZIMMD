/** 前端知识清单列表 */
<template>
  <div id="basic">
    <!-- 头部 -->
    <div class="list-head">
      <div class="title">
        前端知识清单列表
        <i class="el-icon-s-grid listBtn" @click="showMenu = !showMenu"></i>
      </div>
    </div>
    <div class="flexBox">
      <!-- 侧边栏 -->
      <el-menu
        :default-active="active"
        class="list-menu"
        @open="handleOpen"
        @close="handleClose"
        v-if="showMenu"
      >
        <template v-for="(item, index) in treeData">
          <el-submenu :index="item.name" :key="index" v-if="item.children">
            <template slot="title">
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item
              :index="item1.name"
              v-for="(item1, index1) in item.children"
              :key="index1"
              @click="clickMenu(item.name, item1.name)"
              >{{ item1.name }}</el-menu-item
            >
          </el-submenu>
          <el-menu-item
            :index="item.name"
            v-else
            :key="index"
            @click="clickMenu(item.name)"
          >
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </template>
      </el-menu>
      <!-- 主体内容 -->
      <div class="flexItem">
        <div class="mainBox">
          <mavon-editor
            :value="details.content"
            :subfield="false"
            :defaultOpen="'preview'"
            :toolbarsFlag="false"
            :editable="false"
            :scrollStyle="true"
            :ishljs="true"
            :boxShadow="false"
          ></mavon-editor>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      treeData: [],
      details: {},
      active: '',
      showMenu: true
    }
  },
  methods: {
    handleClose() {},
    handleOpen() {},
    getSide() {
      this.$http('get', '/fontList/queryfontAction').then(res => {
        this.treeData = res.result[0].children
        // 首次进入页面先判断是否有缓存，如果没有调用菜单第一条的详情
        let storageData = sessionStorage.getItem('menuActive')
        console.log('111', storageData)
        if (storageData) {
          let storageDataO = JSON.parse(storageData)
          this.clickMenu(storageDataO.Fname, storageDataO.name)
          return false
        }
        this.clickMenu(
          this.treeData[0].children[0].fname,
          this.treeData[0].children[0].name
        )
      })
    },
    clickMenu(Fname, name) {
      let kinds = name ? Fname + ',' + name : Fname
      this.$http('get', '/font/queryOneFontByKindsAction', {
        kinds: kinds
      }).then(res => {
        if (res.code == 200) {
          this.active = name
          // 将当前menu保存在sessionstorage中
          sessionStorage.setItem(
            'menuActive',
            JSON.stringify({ Fname: Fname, name: name })
          )
          console.log(JSON.stringify({ Fname: Fname, name: name }))
          this.details = res.info
          if (this.details.length == 0) {
            this.details.content = '努力学习中。。。'
            return false
          }
        }
      })
    }
  },
  created() {},
  mounted() {
    this.getSide()
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #fff;
}
#basic {
  height: 100%;
  .list-head {
    height: 49px;
    border-bottom: 1px solid #e6e6e6;
    .title {
      width: 200px;
      line-height: 49px;
      font-size: 18px;
      padding-left: 20px;
      font-weight: bold;
    }
    .listBtn {
      display: none;
    }
  }
  .flexBox {
    display: flex;
    height: calc(100% - 50px);
    .list-menu {
      height: 100%;
      overflow-y: scroll;
      overflow-x: hidden;
      width: 200px;
      padding-left: 10px;
      background-color: transparent;
      .is-active .el-submenu__title span,
      .el-menu-item.is-active {
        color: #d24c63;
        font-size: 16px;
        font-weight: bold;
      }
      .el-menu-item.is-active {
        font-size: 14px;
      }
      .el-menu-item:focus,
      .el-menu-item:hover {
        background-color: transparent;
      }
    }
    .flexItem {
      flex: 1;
      overflow-y: scroll;
      .mainBox {
        max-width: 80%;
        margin: 0 auto;
        padding: 2rem 2.5rem;
        /deep/ .v-show-content {
          background-color: #fff !important;
        }
        /deep/ .v-note-wrapper {
          border: none !important;
        }
      }
    }
  }
}
@media screen and (max-width: 500px) {
  #basic {
    height: 100%;
    .list-head {
      .listBtn {
        display: inline-block;
        color: #d24c63;
      }
    }
    .flexBox {
      display: flex;
      height: calc(100% - 50px);
      .list-menu {
        position: absolute;
        z-index: 10000;
        background-color: #fff;
      }
      .flexItem {
        .mainBox {
          max-width: 98%;
          padding: 0;
        }
      }
    }
  }
}
</style>
