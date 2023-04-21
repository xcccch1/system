<template>
  <div>
    <el-row type="flex" class="row-bg" align="middle">
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
    <!-- <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="10">
        <div class="grid-content bg-purple" ></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="16">
        <div ref="main" style="height: 400px;background-color: #e9eef3;"></div>
      </el-col>
      <el-col :span="7">
        <div ref="radio" style="height: 400px;background-color: #e9eef3;padding: 20px;"></div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="space-around">
    </el-row> -->
    <!-- <div class="container">
      <div class="box"><img src="@/assets/logo.png" style="width: 100%;height: 100%;" alt=""></div>
    </div> -->
  </div>
</template>
  
<script>
import { mainoption, radiooption } from "@/echarts/home.js"


export default {
  name: "Home",
  data() {
    return {};
  },
  async created() {
  },
  mounted() { this.mainecharts() },
  methods: {
    mainecharts() {
      const mainechart = this.$echarts.init(this.$refs.main)
      const radioechart = this.$echarts.init(this.$refs.radio)
      mainechart.setOption(mainoption)
      radioechart.setOption(radiooption)
      window.addEventListener("resize", function () {
        mainechart.resize();
        radioechart.resize()
      });
    }
  }
}
</script>
  
<style lang="less" scoped>
.container {
  width: 200px;
  height: 200px;
  position: relative;
  top: 20px;
  perspective: 700px;
  transform-style: preserve-3d;
}

.box {
  position: absolute;
  width: 200px;
  height: 200px;
  transition: all 0.5s;
  // transform-origin:bottom  ;
}

.box:hover {
  // transform: rotateY(-30deg);
  transform: rotateX(40deg);
  // transform: skew(-10deg,-5deg); 
  // transform: skewY(-10deg);  
  // transform: rotate3d(0.5,2,1,-30deg);
  // transform: rotateX(10deg);
}

.el-row {
  margin-bottom: 20px;
  height: 400px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
  