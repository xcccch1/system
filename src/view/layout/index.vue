<template>
  <el-container style="flex-direction:column">
    <Header></Header>
    <el-container style="height: calc(100vh - 60px);">
      <Aside></Aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from "@/components/header.vue"
import Aside from "@/components/aside.vue"

export default {
  components:{
    Header,
    Aside
  },
  data() {
    return {};
  }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>