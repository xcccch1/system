<template>
  <el-header class="header">
    <div class="logo">
      <router-link to="/home">
        <img src="@/assets/logo.png" alt="" />
        <span>后台管理系统</span>
      </router-link>
    </div>
    <div class="right">
      <div class="box">
        <i class="el-icon-s-tools"></i>
      </div>
      <div class="box">
        <el-dropdown trigger="click" class="menu">
          <span class="el-dropdown-link">
            <i class="el-icon-menu"></i>
          </span>
          <el-dropdown-menu slot="dropdown" class="menu_body">
            <el-dropdown-item v-for="item in menuList" :key="item.id">
              <el-image style="width: 40px; height: 40px" :src="item.path" fit="fit"></el-image>
              <span>{{ item.text }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="box">
        <i class="el-icon-question"></i>
        <el-tooltip class="item" effect="dark" content="帮助中心" placement="bottom">
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
    <el-drawer direction="rtl" title="我是标题" :visible.sync="drawer" :with-header="true">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="一致性 Consistency" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="可控 Controllability" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </el-collapse>
    </el-drawer>
  </el-header>
</template>

<script>
import { getHeaderMenuAPI } from "@/api/header";

export default {
  nmae: "Header",
  data() {
    return {
      drawer: false,
      menuList: [],
      activeName: '1'
    };
  },
  async mounted() {
    const { data: menu } = await getHeaderMenuAPI();
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
  min-width: 200px;
  height: 100%;

  img {
    height: 80%;
    vertical-align: middle;
  }

  span {
    font-size: 18px;
    font-weight: 800;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
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