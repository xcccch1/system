<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-button type="primary" @click="showdialog">添加角色</el-button>
      </el-col>
    </el-row>
    <el-table :data="roleList" border stripe style="width: 100%">
      <el-table-column type="expand" label="">
        <template slot-scope="scope">
          <pre>
            {{ scope.row }} 
          </pre>
        </template>
      </el-table-column>
      <el-table-column type="index" label="#"> </el-table-column>
      <el-table-column prop="roleName" label="角色名称"> </el-table-column>
      <el-table-column prop="roleDesc" label="角色描述"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            plain
            @click.native.prevent="changerole(scope.row.id, roleList)"
            size="small"
            icon="el-icon-edit"
          ></el-button>
          <el-button
            type="danger"
            plain
            @click.native.prevent="removerole(scope.row.id, roleList)"
            size="small"
            icon="el-icon-delete-solid"
          ></el-button>
          <el-button
            type="warning"
            plain
            @click.native.prevent="changepower(scope.row.id, roleList)"
            size="small"
            icon="el-icon-s-tools"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 添加角色弹框 -->
    <el-dialog
      title="添加角色"
      :visible.sync="addroleisshow"
      @close="resetaddroleform"
    >
      <el-form :model="addroleform" ref="addroleform">
        <el-form-item label="角色名称" label-width="120px" prop="role">
          <el-input
            type="text"
            v-model="addroleform.role"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="角色名称" label-width="120px" prop="roledes">
          <el-input
            type="text"
            v-model="addroleform.roledes"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addroleisshow = false">取 消</el-button>
        <el-button type="primary" @click="submitRoleForm('addroleform')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <!-- 编辑角色弹框 -->
    <el-dialog title="编辑角色" :visible.sync="changeroleisshow">
      <el-form :model="changeroleform" ref="changeroleform">
        <el-form-item label="角色名称" label-width="120px">
          <el-input
            type="text"
            v-model="changeroleform.roleName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="角色描述" label-width="120px">
          <el-input
            type="text"
            v-model="changeroleform.roleDesc"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="changeroleisshow = false">取 消</el-button>
        <el-button type="primary" @click="submitChangeRoleForm"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <!-- 编辑 -->
  </div>
</template>

<script>
import {
  getRolesListAPI,
  addRoleAPI,
  removeroleAPI,
  searchroleAPI,
  changeroleAPI,
} from "@/api/roles";

export default {
  name: "Roles",
  data() {
    return {
      roleList: [],
      addroleisshow: false,
      changeroleisshow: false,
      addroleform: {},
      changeroleform: {},
    };
  },
  created() {
    this.getRolesList();
  },
  methods: {
    // 获取角色列表
    async getRolesList() {
      const { data: res } = await getRolesListAPI();
      if (res.meta.status !== 200)
        return this.$message.error("获取角色列表失败");
      this.roleList = res.data;
    },
    // 打开添加角色弹框
    showdialog() {
      this.addroleisshow = true;
    },
    // 关闭添加角色弹框
    closedialog() {
      this.addroleisshow = false;
    },
    // 打开修改角色弹框
    async changerole(id) {
      const { data: res } = await searchroleAPI(id);
      this.changeroleform = res.data;
      this.changeroleisshow = true;
    },
    // 提交修改角色表单
    async submitChangeRoleForm() {
      const { data: res } = await changeroleAPI(this.changeroleform.roleId, {
        roleName: this.changeroleform.roleName,
        roleDesc: this.changeroleform.roleDesc,
      });
      res.meta.status == 200
        ? this.$message.success("修改角色成功")
        : this.$message.error("修改角色失败");
      this.getRolesList();
      this.changeroleisshow = false;
    },
    // 提交添加角色表单
    async submitRoleForm() {
      const { data: res } = await addRoleAPI({
        roleName: this.addroleform.role,
        roleDesc: this.addroleform.roledes,
      });
      res.meta.status == 200
        ? this.$message.error("添加角色失败")
        : this.$message.success("添加角色成功");
      this.getRolesList();
      this.addroleisshow = false;
    },
    // 删除角色
    async removerole(id) {
      const { data: res } = await removeroleAPI(id);
      res.meta.status == 200
        ? this.$message.success("删除角色成功")
        : this.$message.error("删除角色失败");
      this.getRolesList();
    },
    // 重置表单
    resetaddroleform() {
      this.$refs.addroleform.resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
</style>