<template>
  <el-aside :width="$store.state.isCollapse ? '88px' : '10vw'">
    <el-menu
      @open="handleOpen"
      @close="handleClose"
      active-text-color="#3370ff"
      unique-opened
      :default-active="$route.path"
      :collapse="$store.state.isCollapse"
      :collapse-transition="false"
      router
    >
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu :index="'/'+item.path" v-for="item in menu" :key="item.id">
        <template slot="title">
          <i :class="iconobj[item.id]"></i>
          <span>{{ item.authName }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            :index="'/'+secendMenu.path"
            v-for="secendMenu in item.children"
            :key="secendMenu.id"
          >
            {{ secendMenu.authName }}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item @click.native="changeIsCollapse" class="Collapse">
        <i
          :class="
            $store.state.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'
          "
        ></i>
      </el-menu-item>
    </el-menu>
    <!-- {{ screenWidth }}
    {{ $store.state.isCollapse }} -->
  </el-aside>
</template>

<script>
import { getMenuAPI } from "@/api/aside";
export default {
  name: "Aside",
  data() {
    return {
      menu: [],
      iconobj: {},
      iconArr: [
        "el-icon-user-solid",
        "el-icon-s-check",
        "el-icon-s-goods",
        "el-icon-s-order",
        "el-icon-s-marketing",
      ],
      screenWidth: null,
      screenHeight: null,
    };
  },
  async created() {
    const { data: menu } = await getMenuAPI();
    this.menu = menu.data;
    this.iconobj = this.icon(menu.data);
    console.log(this.$route.path);
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth;
        this.screenHeight = document.body.clientHeight;
      })();
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    icon(menu) {
      const iconobj = {};
      menu.forEach((item, index) => {
        iconobj[item.id + ""] = this.iconArr[index];
      });
      return iconobj;
    },
    changeIsCollapse() {
      this.$store.commit("CHANGEISCOLLAPSE");
    },
  },
  watch: {
    screenWidth: {
      handler(val) {
        if (val < 1500) {
          this.$store.commit("CHANGEISCOLLAPSE", false);
        } else {
          this.$store.commit("CHANGEISCOLLAPSE", true);
        }
      },
    }
  },
};
</script>

<style lang="less" scoped>
.el-aside {
  min-width: 87.16px;
  padding: 10px;
  background-color: #f2f3f5;
  transition: width 0.5s;
  -webkit-transition: width 0.5s;
  -moz-transition: width 0.5s;
  -webkit-transition: width 0.5s;
  -o-transition: width 0.5s;
}

/deep/ .el-menu {
  overflow: hidden;
  background-color: #f2f3f5;
  border: none;
}

/deep/.el-submenu__title {
  min-width: 170px;
}

/deep/ .el-menu-item-group__title {
  display: none;
}

/deep/ .el-menu-item:hover {
  background-color: rgba(31, 35, 41, 0.08);
}

/deep/ .el-submenu__title:hover {
  background-color: rgba(31, 35, 41, 0.08);
}
</style>