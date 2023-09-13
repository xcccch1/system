<template>
  <div>
    <!-- 4个盒子 -->
    <el-row type="flex" class="row-bg tablist" justify="space-between">
      <el-col
        :span="5"
        class="tablist-item"
        v-for="(item, index) in tablist"
        :key="index"
      >
        <svg class="icon" aria-hidden="true" style="font-size: 5rem">
          <use :xlink:href="item.icon"></use>
        </svg>
        <div>
          <h2 style="margin: 0; color: rgba(0, 0, 0, 0.45)">
            {{ item.title }}
          </h2>
          <span style="font-size: 20px; font-weight: 600">{{
            initNum(item.number)
          }}</span>
        </div>
      </el-col>
    </el-row>
    <div style="display: flex; flex-direction: column; height: 80%">
      <el-row
        type="flex"
        class="row-bg"
        justify="space-between"
        style="height: 50%"
      >
        <el-col :span="16">
          <div class="box"></div>
        </el-col>
        <el-col :span="7">
          <div class="box"></div>
        </el-col>
      </el-row>
      <!-- 底部echart -->
      <el-row
        type="flex"
        class="row-bg"
        justify="space-between"
        style="height: 50%"
      >
        <el-col :span="16">
          <div ref="bar" class="box"></div>
        </el-col>
        <el-col :span="7">
          <div ref="radio" class="box"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
  
<script>
import { mainoption, radiooption } from "@/echarts/home.js";
import { getTabListAPI,getEchartOptionAPI } from "@/api/home";

export default {
  name: "Home",
  data() {
    return {
      tablist: [],
      echartOption:{}
    };
  },
  async created() {
    const { data: res } = await getTabListAPI();
    this.tablist = res;
  },
  mounted() {
    this.echarts()
  },
  beforeDestroy() {
    // 在组件销毁前解绑resize事件
    // window.removeEventListener("resize", ()=>{
    //   this.barecharts
    // });
  },
  methods: {
    async echarts() {
      const {data:option} = await getEchartOptionAPI();
      console.log(option);
      const barechart = this.$echarts.init(this.$refs.bar);
      const radioechart = this.$echarts.init(this.$refs.radio);
      barechart.setOption(option.barOption);
      radioechart.setOption(option.radioOption);
      window.addEventListener("resize", function () {
        barechart.resize();
        radioechart.resize();
      });
    },
    initNum(num) {
      if (typeof num !== "number") return;
      let newArr = [];
      const numArr = num.toString().split("").reverse();
      numArr.forEach((item, index) => {
        if (((index % 3) - 1 == -1) & (index !== 0)) {
          newArr.push(",");
          newArr.push(item);
        } else {
          newArr.push(item);
        }
      });
      const result = newArr.reverse().join("");
      return result;
    },
  },
};
</script>
  
<style lang="less" scoped>
.test {
  width: 100%;
  height: 33%;
  background-color: aqua;
}
.box {
  height: 100%;
  background-color: #f2f3f5;
  padding: 20px;
  // border-radius: 20px;
}

.tablist {
  height: 18%;
  min-height: 105px;
}

.tablist-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f3f5;
  border-radius: 20px;
  padding: 20px;
  transition: all 0.5s;
  min-width: 275px;

  & div {
    height: fit-content;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
}

.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 20px;
}

// .row-bg {
//   padding: 10px 0;
//   background-color: #f9fafc;
// }
</style>
  