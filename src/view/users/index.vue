<template>
  <div>
    <div>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input
            placeholder="请输入用户名"
            clearable
            v-model="queryinfo.query"
            @clear="clear"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="loaduserlist"
            >
            </el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="dialogFormVisible = true"
            >添加用户</el-button
          >
        </el-col>
      </el-row>
    </div>
    <!-- 表单 -->
    <div style="margin-top: 20px">
      <el-table
        :data="userlist"
        style="width: 100%"
        :header-cell-style="{ 'text-align': 'center' }"
        :cell-style="{ 'text-align': 'center' }"
      >
        <el-table-column prop="id" label="id"> </el-table-column>
        <el-table-column prop="role_name" label="角色"> </el-table-column>
        <el-table-column prop="username" label="用户名"> </el-table-column>
        <el-table-column prop="mobile" label="手机号码"> </el-table-column>
        <el-table-column prop="email" label="邮箱"> </el-table-column>
        <el-table-column prop="create_time" label="创建时间"> </el-table-column>
        <el-table-column label="登陆状态">
          <template slot-scope="scope">
            <div
              class="loginstatus"
              :style="`background-color:${
                scope.row.mg_state ? 'green' : 'red'
              }`"
            ></div>
          </template>
        </el-table-column>
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
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 添加用户弹框 -->
    <div>
      <el-dialog
        title="添加用户"
        :visible.sync="dialogFormVisible"
        @close="resetform"
      >
        <el-form :model="form" :rules="rules" ref="ruleform">
          <el-form-item
            label="用户名"
            :label-width="formLabelWidth"
            prop="username"
          >
            <el-input
              type="text"
              v-model="form.username"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="密码"
            :label-width="formLabelWidth"
            prop="password"
          >
            <el-input
              type="password"
              v-model="form.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="确认密码"
            :label-width="formLabelWidth"
            prop="checkpassword"
          >
            <el-input
              type="password"
              v-model="form.checkpassword"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="手机号码"
            :label-width="formLabelWidth"
            prop="phonenumber"
          >
            <el-input
              type="tel"
              v-model="form.phonenumber"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
            <el-input
              type="email"
              v-model="form.email"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitForm('ruleform')"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </div>
    <!-- 修改用户弹框 -->
    <div>
      <el-dialog title="修改用户信息" :visible.sync="dialogFormVisible2" @close="editDialogClosed">
        <el-form :model="editform" :rules="editformRules" ref="editformRef">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input
              type="text"
              v-model="editform.username"
              :disabled="true"
            ></el-input>
          </el-form-item>
          <el-form-item label="手机号码" :label-width="formLabelWidth" >
            <el-input type="tel" v-model="editform.mobile"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" :label-width="formLabelWidth">
            <el-input type="email" v-model="editform.email"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible2 = false">取 消</el-button>
          <el-button type="primary" @click="editUserInfo"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </div>
    <!-- 分页 -->
    <div style="margin-top: 20px">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryinfo.pagenum"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="queryinfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalpage"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {
  getUserInfoAPI,
  removeUserAPI,
  addUserAPI,
  searchuserAPI,
  changeUserAPI
} from "@/api/users.js";
export default {
  name: "Users",
  data() {
    return {
      // 请求数据
      queryinfo: {
        query: "",
        pagenum: 1,
        pagesize: 10,
      },
      userlist: [],
      dialogFormVisible: false,
      dialogFormVisible2: false,
      form: {
        username: "",
        password: "",
        checkpassword: "",
        email: "",
        phonenumber: "",
      },
      formLabelWidth: "120px",
      // 校验规则
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [
          { required: true, validator: this.validatePass, trigger: "blur" },
        ],
        checkpassword: [
          { required: true, validator: this.validatePass2, trigger: "blur" },
        ],
      },
      totalpage: null,
      // 修改用用户信息查询到用户信息
      editform: {},
      editformRules: {
        email: [{ required: true, message: "请输入用户邮箱", trigger: "blur" }],
        phonenumber: [
          { required: true, message: "请输入用户手机号码", trigger: "blur" },
        ],
      },
    };
  },
  created() {
    this.loaduserlist();
  },
  methods: {
    // 初始化用户列表
    async loaduserlist() {
      const { data: res } = await getUserInfoAPI(this.queryinfo);
      res.data.users.forEach((element, index) => {
        res.data.users[index].create_time = this.time(element.create_time);
      });
      this.userlist = res.data.users;
      this.totalpage = res.data.total;
    },
    // 删除用户
    async removeuser(id) {
      const confirmresult = await this.$confirm(
        "此操作将删除该用户, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((error) => error);
      if (confirmresult == "confirm") {
        const { data: res } = await removeUserAPI(id);
        this.$message.success(res.meta.msg);
      }
      this.loaduserlist();
    },
    // 添加用户表单密码校验
    validatePass(rule, value, callback) {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.form.password !== "") {
          this.$refs.ruleform.validateField("checkpassword");
        }
      }
      callback();
    },
    validatePass2(rule, value, callback) {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致"));
      }
      callback();
    },
    // 表单提交前验证
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const { data: res } = await addUserAPI(this.form);
          this.$message.success(res.meta.msg);
          this.dialogFormVisible = false;
          this.clear();
        } else {
          this.$message.error("请填写正确信息!");
          return false;
        }
      });
    },
    // 修改用户信息
    async changeuser(id) {
      const { data: res } = await searchuserAPI(id);
      this.editform = res.data;
      this.dialogFormVisible2 = true;
    },
    // 分页
    handleSizeChange(val) {
      this.queryinfo.pagesize = val;
      this.loaduserlist();
    },
    handleCurrentChange(val) {
      this.queryinfo.pagenum = val;
      this.loaduserlist();
    },
    clear() {
      console.log(1);
      this.queryinfo.query = "";
      this.loaduserlist();
    },
    // 重置表单
    resetform() {
      this.$refs.ruleform.resetFields();
    },
    // 监听修改用户信息对话框关闭
    editDialogClosed(){
      this.$refs.editformRef.resetFields()
    },
    // 修改用户信息提交
    editUserInfo(){
      this.$refs.editformRef.validate(async valid=>{
        if(!valid) return
        // 不为false通过校验 发起请求修改信息
        const {data:res} = await changeUserAPI(this.editform.id,{email:this.editform.email,mobile:this.editform.mobile})
        if(res.meta.status !== 200){
          this.$message.error(res.meta.msg)
        }
        this.$message.success(res.meta.msg)
        this.loaduserlist()
        this.dialogFormVisible2 = false
      })
    },
    // 格式化时间
    time(time) {
      const date = new Date(time);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();
      return [
        year,
        "-",
        month,
        "-",
        day,
        " ",
        hour,
        ":",
        minute,
        ":",
        second,
      ].join("");
    },
  },
};
</script>

<style lang="less" scoped>
.el-col-8 {
  min-width: 350px;
}

.cell {
  position: relative;
  & div {
    position: absolute;
    left: 50%;
    height: 50%;
    width: 7px;
    height: 7px;
    border-radius: 7px;
  }
}
</style>