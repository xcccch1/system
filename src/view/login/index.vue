<template>
  <div class="login_container">
    <transition name="el-fade-in-linear">
      <div class="loginbox" v-show="show">
        <div class="loginImg">
          <!-- <el-image :src="require('@/assets/img/loginbox_img.jpg')" fit="cover"></el-image> -->
        </div>
        <div class="loginform">
          <h1 class="title">后台管理系统</h1>
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <el-form-item prop="username">
              <el-input autofocus="true" placeholder="用户名" prefix-icon="el-icon-user" type="text"
                v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="pass">
              <el-input placeholder="密码" prefix-icon="el-icon-key" type="password" :show-password="true"
                v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button round plain type="primary" @click="submitForm('ruleForm')">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { loginAPI } from "@/api/login";

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
      show: false
    };
  },
  created() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const logininfo = {
            username: this.ruleForm.username,
            password: this.ruleForm.pass,
          };
          loginAPI(logininfo)
            .then((res) => {    
              this.isLogin(res)
            })
            .catch((err) => {
              this.$message({
                type:"error",
                message:err.message,
              })
            });
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
    // 判断登录弹出消息
    isLogin(res){
      if(res.data.meta.status == 200){
        sessionStorage.setItem("token",res.data.data.token)
        this.$message({
            type: 'success',
            message: res.data.meta.msg,
          });
        this.$router.push({
          path:"/home"
        })
        }else{
        this.$message({
            type: 'error',
            message: res.data.meta.msg
          });
      }
    }
  },
  mounted() {
    this.show = true;
  },
};
</script>

<style lang="less" scoped>
.title {
  font-size: 24px;
  font-weight: 600;
}

.login_container {
  // position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
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
  border-radius: 50px;
  text-align: center;
  box-sizing: border-box;
  box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  // background-image: url(@/assets/img/login_background_img.jpg);
  // background-size: cover;
  position: absolute;
  left: 45%;
  top: 50%;
  transform: translateY(-50%);
  transition: all ease-in 0.5s;
}

.loginImg {
  flex: 1;
  background-image: url(@/assets/img/login_background_img.jpg);
  background-size: cover;
}

.loginform {
  width: 50%;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  padding: 0 50px;
  background-color: #f0f8ff;

  h1 {
    margin: 40px 0;
  }
}

.el-input /deep/ .el-input__inner {
  height: 50px;
  border-radius: 50px;
  padding-left: 40px;
}

/deep/ .el-input__icon {
  width: 40px;
}

@media screen and(max-width:1660px) {
  .loginbox {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all ease-out 0.5s;
  }
}

@media screen and (max-width: 500px) {
  .login_container {
    background-position: -80px 0;
    background-size: cover;
  }

  .loginbox {
    width: 350px;
  }

  .loginform {
    width: 100%;
    background-color: rgba(237, 237, 237, 0.4);
  }

  .loginImg {
    display: none;
  }
}
</style>