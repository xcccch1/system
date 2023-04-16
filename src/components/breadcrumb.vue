<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="item.path" v-for="(item,index) in breadcrumbList" :key="index">{{item.breadcrumb}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  data() {
    return {
      breadcrumbList: [],
    };
  },
  mounted() {
    this.generateBreadcrumb();
  },
  methods: {
    generateBreadcrumb() {
      // 获取当前路由信息
      const matched = this.$route.matched;
      // 初始化面包屑导航数据
      const breadcrumbList = [];
      // 遍历路由信息，生成面包屑导航数据
      matched.forEach((item) => {
        const { meta, name, path } = item;
        if (meta.breadcrumb && meta.breadcrumb !== "首页") {
          breadcrumbList.push({
            name,
            path,
            breadcrumb:meta.breadcrumb
          });
        }
      });
      // 保存面包屑导航数据
      this.breadcrumbList = breadcrumbList;
    }
  },
  watch:{
    $route(){
      this.generateBreadcrumb()
 	}
    }
};
</script>

<style lang="less" scoped>
.el-breadcrumb {
  margin-bottom: 5px;
}
</style>