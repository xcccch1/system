<template>
  <el-header class="header">
    <div class="logo">
      <router-link to="/home">
        <img src="@/assets/logo.png" alt="" />
        <span>后台管理系统</span>
      </router-link>
    </div>
    <div class="right">
      <div class="box"></div>
      <div class="box">
        <el-dropdown trigger="click" class="menu">
          <span class="el-dropdown-link">
            <i class="el-icon-menu"></i>
          </span>
          <el-dropdown-menu slot="dropdown" class="menu_body">
            <el-dropdown-item v-for="item in menuList" :key="item.id">
              <el-image
                style="width: 40px; height: 40px"
                :src="item.path"
                fit="fit"
              ></el-image>
              <span>{{item.text}}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="box">
        <i class="el-icon-question"></i>
        <el-tooltip
          class="item"
          effect="dark"
          content="帮助中心"
          placement="bottom"
        >
          <el-button></el-button>
        </el-tooltip>
      </div>
      <div @click="drawer = true" class="box">
        <i class="el-icon-message-solid"></i>
      </div>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link info">
          <div class="headerImg">admin</div>
          admin<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <div class="dropdown-menu-header">
            <div class="headerImg">admin</div>
            <p>admin</p>
            <p>管理员</p>
          </div>
          <el-divider></el-divider>
          <el-menu index="1" @select="handleSelect" :router="true">
            <el-submenu index="1-1" mode="vertical" :collapse="true">
              <template slot="title">切换账号</template>
              <el-menu-item index="/home">
                <div class="headerImg">admin</div>
                <span>admin</span>
              </el-menu-item>
              <el-menu-item index="/login">添加账号</el-menu-item>
            </el-submenu>
            <el-menu-item class="logout" index="/login">退出登录</el-menu-item>
          </el-menu>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-drawer
      direction="rtl"
      title="我是标题"
      :visible.sync="drawer"
      :with-header="false"
    >
      <span>我来啦!</span>
    </el-drawer>
  </el-header>
</template>

<script>
import { getMenuAPI } from "@/api/header";

export default {
  nmae: "Header",
  data() {
    return {
      drawer: false,
      menuList:[]
    };
  },
  async mounted() {
      const {data:menu} = await getMenuAPI();
      // this.menuList = menu;
      this.menuList = menu
  },
  methods: {
    handleSelect(keyPath) {
      if (keyPath == "/login") return sessionStorage.clear();
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  padding: 0;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(31, 35, 41, 0);
}
.logo {
  width: 200px;
  height: 100%;
  text-align: center;
  img {
    width: 60px;
    height: 100%;
    vertical-align: middle;
  }
  span {
    font-size: 18px;
    font-weight: 800;
  }
  a {
    display: inline-block;
    width: 100%;
    height: 100%;
    color: #333;
  }
}
.right {
  width: fit-content;
  margin-right: 20px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.box {
  position: relative;
  width: 28px;
  height: 28px;
  margin-left: 10px;
  border-radius: 5px;
  padding: 2px;
  cursor: pointer;
  &:hover {
    background-color: rgba(31, 35, 41, 0.1);
  }
  i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
  }
}

.info {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  height: 50px;
  margin: 0 20px;
  padding: 0 10px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: rgba(31, 35, 41, 0.1);
  }
}
.headerImg {
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: rgb(46, 106, 224);
  color: aliceblue;
  font-size: 12px;
  border-radius: 50%;
  margin: 0 10px;
  overflow: hidden;
}

.el-dropdown-menu {
  width: 200px;
}
.dropdown-menu-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  div {
    margin: 5px 0;
    width: 60px;
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    font-weight: 700;
  }
  p {
    font-weight: 600;
  }
  & p:nth-child(3) {
    font-size: 12px;
    color: rgb(157, 157, 157);
  }
}

.el-divider {
  margin: 5px 0;
}

/deep/ .el-submenu__title {
  font-size: 15px;
  &:hover {
    background-color: rgba(31, 35, 41, 0.1);
  }
}

.el-menu-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  &:hover {
    background-color: rgba(31, 35, 41, 0.1);
  }
}

.logout {
  color: #f54a45;
}

.el-tooltip {
  width: 100%;
  height: 100%;
  background: none;
  margin: 0;
  padding: 0;
  border: none;
  &:hover {
    background: none;
  }
  i {
    font-size: 18px;
  }
}

.menu {
  width: 100%;
  height: 100%;
}

.menu_body {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 280px;
  height: 200px;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>