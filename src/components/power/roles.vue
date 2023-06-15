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
          <el-row
            :class="['bdbottom', index == 0 ? 'bdtop' : '', 'vcenter']"
            v-for="(item, index) in scope.row.children"
            :key="item.id"
          >
            <!-- 一级权限 -->
            <el-col :span="5">
              <el-tag
                :closable="true"
                @close="removeById(scope.row, item.id)"
                >{{ item.authName }}</el-tag
              >
              <i class="el-icon-caret-right"></i>
            </el-col>
            <!-- 二级权限 -->
            <el-col :span="19">
              <el-row
                :class="[index1 == 0 ? '' : 'bdtop', 'vcenter']"
                v-for="(item1, index1) in item.children"
                :key="item1.id"
              >
                <el-col :span="6">
                  <el-tag
                    type="success"
                    :closable="true"
                    @close="removeById(scope.row, item1.id)"
                    >{{ item1.authName }}</el-tag
                  >
                  <i class="el-icon-caret-right"></i>
                </el-col>
                <el-col :span="18">
                  <el-row v-for="item2 in item1.children" :key="item2.id">
                    <el-col :span="24">
                      <el-tag
                        type="warning"
                        :closable="true"
                        @close="removeById(scope.row, item2.id)"
                        >{{ item2.authName }}</el-tag
                      >
                      <i class="el-icon-caret-right"></i>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
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
            @click.native.prevent="setright(scope.row, roleList)"
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
        <el-form-item label="角色描述" label-width="120px" prop="roledes">
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
    <el-dialog title="分配角色权限" :visible.sync="setrightishow">
      <div class="test">
        <el-tree
          :data="rightlist"
          show-checkbox
          node-key="id"
          :props="defaultProps"
          accordion
          :default-checked-keys="[101,106]"
        >
        </el-tree>
      </div>
      <div slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  getRolesListAPI,
  addRoleAPI,
  removeroleAPI,
  searchroleAPI,
  changeroleAPI,
  removeRoleRightAPI,
} from "@/api/roles";
import { getRightListAPI } from "@/api/rights";


export default {
  name: "Roles",
  data() {
    return {
      // 角色列表
      roleList: [],
      // 各弹出框表单的显示
      addroleisshow: false,
      changeroleisshow: false,
      setrightishow: false,
      // 各表单数据
      addroleform: {},
      changeroleform: {},
      defaultProps: {
          children: 'children',
          label: 'authName'
        },
      rightlist:[]
    };
  },
  async created() {
    this.getRolesList();
    const {data:res} = await getRightListAPI("tree")
    this.rightlist = res.data
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
      const confirmresult = await this.$confirm(
        "此操作将删除该角色, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "error",
        }
      ).catch((e) => e);
      if (confirmresult !== "confirm") return;
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
    // 移除标签
    async removeById(role, rightid) {
      const confirmresult = await this.$confirm(
        "此操作将移除该角色权限, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((e) => e);
      if (confirmresult !== "confirm") return;
      const { data: res } = await removeRoleRightAPI(role.id, rightid);
      if (res.meta.status !== 200) return this.$message.error("移除权限失败!");
      this.$message.success("移除成功");
      role.children = res.data;
    },
    // 打开分配角色弹框
    setright(a,b) {
      this.setrightishow = true;
    },
  },
};
</script>

<style lang="less" scoped>
.el-tag {
  margin: 7px;
}

.bdtop {
  border-top: 1px solid #eee;
}

.bdbottom {
  border-bottom: 1px solid #eee;
}

.vcenter {
  display: flex;
  align-items: center;
  justify-content: center;
}

.test {
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  transition: 0.3s;
}
</style>