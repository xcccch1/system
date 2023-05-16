<template>
  <div>
    <el-dialog title="添加角色" :visible.sync="dialogFormVisible" @close="resetform">
      <el-form :model="form" :rules="rules" ref="ruleform">
        <el-form-item label="角色名称" :label-width="formLabelWidth" prop="username">
          <el-input type="text" v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleform')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  props: ["dialogFormVisible"],
  data() {
    return {
      form: {
        username: "",
        password: "",
        checkpassword: "",
        email: "",
        phonenumber: "",
      },
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
      formLabelWidth: "120px"
    }
  },
  methods: {
    closedialog() {
      this.$emit('close', false)
    },
    // 重置表单
    resetform() {
      this.$refs.ruleform.resetFields();
    },
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
    }
  }
};
</script>

<style></style>