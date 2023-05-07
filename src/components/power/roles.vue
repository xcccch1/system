<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-button type="primary" @click="showdialog" >添加角色</el-button>
      </el-col>
    </el-row>
    <el-table :data="roleList" border stripe style="width: 100%">
      <el-table-column type="expand" label=""> </el-table-column>
      <el-table-column type="index" label="#"> </el-table-column>
      <el-table-column prop="roleName" label="角色名称"> </el-table-column>
      <el-table-column prop="roleDesc" label="角色描述"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            plain
            @click.native.prevent="changeuser(scope.row.id, userlist)"
            size="small"
            icon="el-icon-edit"
          ></el-button>
          <el-button
            type="danger"
            plain
            @click.native.prevent="removeuser(scope.row.id, userlist)"
            size="small"
            icon="el-icon-delete-solid"
          ></el-button>
          <el-button
            type="warning"
            plain
            @click.native.prevent="removeuser(scope.row.id, userlist)"
            size="small"
            icon="el-icon-s-tools"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <Dialog :dialogFormVisible="isshow" @close="closedialog"></Dialog>
  </div>
</template>

<script>
import { getRolesListAPI } from "@/api/roles";
import Dialog from '@/components/dialog'

export default {
  name: "Roles",
  data() {
    return {
      roleList: [],
      isshow:false
    };
  },
  components:{
    Dialog
  },
  created() {
    this.getRolesList();
  },
  methods: {
    async getRolesList() {
      const { data: res } = await getRolesListAPI();
      this.roleList = res.data;
    },
    showdialog(){
      this.isshow = true
    },
    closedialog(){
      this.isshow = false
    }
  },
};
</script>

<style lang="less" scoped>
</style>