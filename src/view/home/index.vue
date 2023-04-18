<template>
  <div>
    <el-row :gutter="20">
      <div style="height: 200px;">
        <el-col :span="18">
          <div ref="main" style="height: 400px;background-color: #e9eef3;">
          </div>
        </el-col>
        <el-col :span="6">
          <div ref="radio" style="height: 400px;background-color: #e9eef3;padding: 20px;"></div>
        </el-col>
      </div>
    </el-row>
    <el-row>
      <el-col>
      </el-col>
    </el-row>
  </div>
</template>
  
<script>
import {mainoption} from "@/echarts/main"
import {radiooption} from "@/echarts/radio"
import {getGoodsAPI} from "@/api/home"

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
  