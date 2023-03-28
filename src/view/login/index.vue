<template>
  <div class="login_container">
    <div class="loginbox">
      <div class="test">
        <!-- <el-image :src="require('@/assets/img/loginbox_img.jpg')" fit="cover"></el-image> -->
      </div>
      <div style="width: 50%;">
        <h1 class="title">后台管理系统</h1>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item prop="username">
            <el-input placeholder="用户名" prefix-icon="el-icon-user" type="text" v-model="ruleForm.username"
              autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input placeholder="密码" prefix-icon="el-icon-key" type="password" v-model="ruleForm.pass"
              autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { getmessagesAPI } from "@/api/getmessages";

export default {
  name: "Login",
  data() {
    return {
      ruleForm: {
        username: "",
        pass: "",
      },
      rules: {
        username: [{ validator: this.validateUsername, trigger: "change" }],
        pass: [{ validator: this.validatePass, trigger: "change" }],
      },
    };
  },
  async created() {
    const res = await getmessagesAPI().catch((err) => {
      console.log(err);
    });
    console.log(res);
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          return false;
        }
      });
    },
    validateUsername(rule, value, callback) {
      if (value == "") {
        callback(new Error("请输入用户名"));
      }
      callback();
    },
    // 密码校验
    validatePass(rule, value, callback) {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
      callback();
    },
  },
};
</script>

<style lang="less" scoped>
.title {
  font-size: 24px;
  font-weight: 600;
}

.login_container {
  position: relative;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  height: 100%;
  // background-color: #2b4b6b;
  background-image: url("@/assets/img/login_background_img.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 0;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
}

.loginbox {
  display: flex;
  width: 900px;
  height: 500px;
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  box-sizing: border-box;
  box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  background-image: url(@/assets/img/login_background_img.jpg);
  background-size: cover;
  position: absolute;
  left: 45%;
  top: 50%;
  transform: translateY(-50%);
}

.test {
  flex: 1;

}
</style>