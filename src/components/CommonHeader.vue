<template>
  <header>
    <div class="l-content">
      <el-button
        class="el-icon-menu"
        plain
        size="mini"
        @click="changeCollapse"
      ></el-button>
      <!-- 面包屑渲染start -->
      <el-breadcrumb separator="/" id="breadcol">
        <el-breadcrumb-item
          v-for="item in tabs"
          :key="item.path"
          :to="{ path: item.path }"
        >
          {{ item.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 面包屑渲染end -->
    </div>
    <div class="r-content">
      <el-dropdown trigger="click">
        <span><img :src="userImg" class="user" /></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>用户中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CommonHeader",
  data() {
    return {
      userImg: require("../assets/images/user.jpg"),
    };
  },
  methods: {
    changeCollapse() {
      this.$store.commit("changeCollapse");
    },
  },
  computed: {
    ...mapState({
      tabs: (state) => state.tab.tabsList,
    }),
  },
};
</script>

<style scoped lang="less">
header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  .l-content {
    display: flex;
    align-items: center;
    .el-button {
      margin-right: 20px;
    }
  }
  .r-content {
    .user {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  #breadcol {
    color: #fff;
  }
}
</style>