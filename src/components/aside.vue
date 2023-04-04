<template>
  <el-aside :width="isCollapse ? 'fit-content' : '10vw'">
    <el-menu @open="handleOpen" @close="handleClose" active-text-color="#3370ff" unique-opened :collapse="isCollapse"
      :collapse-transition="true">
      <el-submenu :index="item.id + ''" v-for="item in menu" :key="item.id">
        <template slot="title">
          <i :class="iconobj[item.id]"></i>
          <span>{{ item.authName }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="secendMenu.id + ''" v-for="secendMenu in item.children" :key="secendMenu.id">{{
            secendMenu.authName }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="8" @click.native="isCollapse = !isCollapse">
        <template slot="title">
          <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
        </template>
      </el-submenu>
    </el-menu>
    {{ screenWidth }}
  </el-aside>
</template>

<script>
import { getMenuAPI } from "@/api/aside"
export default {
  name: "Aside",
  data() {
    return {
      menu: [],
      iconobj: {},
      isCollapse: true,
      iconArr: ["el-icon-user-solid", "el-icon-s-check", "el-icon-s-goods", "el-icon-s-order", "el-icon-s-marketing"],
      screenWidth: "",
      screenHeight: ""
    }
  },
  async created() {
    const { data: menu } = await getMenuAPI()
    this.menu = menu.data
    this.iconobj = this.icon(menu.data)
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
      const iconobj = {}
      menu.forEach((item, index) => {
        iconobj[item.id + ''] = this.iconArr[index]
      });
      return iconobj
    }
  }
}
</script>

<style lang="less" scoped>
.el-aside {
  padding: 10px;
  background-color: #f2f3f5;
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
  background-color: rgba(31, 35, 41, .08);
}

/deep/ .el-submenu__title:hover {
  background-color: rgba(31, 35, 41, .08);
}
</style>