<template>
  <div>
    <el-row type="flex" class="row-bg" justify="space-between" style="height: 200px;">
      <el-col :span="5">
        <div style="background-color: #e9eef3;padding: 20px;">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xinxi"></use>
          </svg>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="space-between" style="height: 400px;">
      <el-col :span="16">
        <div ref="main" style="background-color: #e9eef3;padding: 20px;"></div>
      </el-col>
      <el-col :span="7">
        <div ref="radio" style="background-color: #e9eef3;padding: 20px;"></div>
      </el-col>
    </el-row>
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
div {
  height: 100%;
}

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
  