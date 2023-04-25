<template>
  <div>
    <!-- 4个盒子 -->
    <el-row type="flex" class="row-bg tablist" justify="space-between">
      <el-col :span="5" class="tablist-item" v-for="(item,index) in tablist" :key="index">
        <div>
          <svg class="icon" aria-hidden="true" style="font-size: 108px;">
            <use :xlink:href="item.icon"></use>
          </svg>
        </div>
        <div>
          <h2 style="margin: 0;color: rgba(0,0,0,.45);">{{ item.title }}</h2>
          <span style="font-size: 20px;font-weight: 600;">{{item.number}}</span>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="space-between" style="height: 400px;">
      <el-col :span="16">
        <div class="box"></div>
      </el-col>
      <el-col :span="7">
        <div class="box"></div>
      </el-col>
    </el-row>
    <!-- 底部echart -->
    <el-row type="flex" class="row-bg" justify="space-between" style="height: 400px;">
      <el-col :span="16">
        <div ref="main" class="box"></div>
      </el-col>
      <el-col :span="7">
        <div ref="radio" class="box"></div>
      </el-col>
    </el-row>
  </div>
</template>
  
<script>
import { mainoption, radiooption } from "@/echarts/home.js"
import { getTabListAPI } from "@/api/home";

export default {
  name: "Home",
  data() {
    return {
      tablist:[]
    };
  },
  async created() {
    const {data:res} = await getTabListAPI()
    this.tablist = res
  },
  mounted() {
     this.mainecharts()
  },
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
    // a(b){
    //   let num = b.toString()
    //   const newnum =  num.split('')
    //   newnum.forEach((element,index)=>{
    //     console.log(element);
    //     // if(index%3 == 0){
    //     //   num = newnum.splice(index-1,0,",")
    //     // }
    //   })
    // }
  }
}
</script>
  
<style lang="less" scoped>
.box {
  height: 100%;
  background-color: #e9eef3;
  padding: 20px;
  // border-radius: 20px;
}

.tablist {
  height: 200px;
}

.tablist-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e9eef3;
  border-radius: 20px;
  padding: 20px;
  transition: all 0.5s;
  & div{
    height: fit-content;
  }
  &:hover{
    transform: translateY(-10px);
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
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

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

// .row-bg {
//   padding: 10px 0;
//   background-color: #f9fafc;
// }
</style>
  