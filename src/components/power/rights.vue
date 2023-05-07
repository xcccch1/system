<template>
  <div>
    <el-table
    :data="rightlist"
    height="100%"
    border
    stripe
    style="width: 100%">
    <el-table-column
      label="#"
      type="index">
    </el-table-column>
    <el-table-column
      prop="authName"
      label="权限名称">
    </el-table-column>
    <el-table-column
      prop="path"
      label="路径">
    </el-table-column>
    <el-table-column
      prop="level"
      label="权限等级">
      <template slot-scope="scope">
        <el-tag :type="['','success','warning'][scope.row.level]">
          {{['一级权限','二级权限','三级权限'][scope.row.level]}}
        </el-tag>  
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import {getRightListAPI} from "@/api/rights"

export default {
    name:"Rights",
    data() {
        return {
            rightlist:[]
        }
    },
    async created(){
      const {data:res} = await getRightListAPI()
      if(res.meta.status!==200) return this.$message.error(res.meta.msg)
      this.rightlist = res.data
    }
}
</script>

<style>

</style>