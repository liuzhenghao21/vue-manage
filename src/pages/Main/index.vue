<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <common-aside />
    </el-aside>
    <el-container>
      <el-header>
        <common-header />
      </el-header>
      <common-tags />
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "@/components/CommonAside.vue";
import CommonHeader from "@/components/CommonHeader.vue";
import CommonTags from "@/components/CommonTags.vue";
export default {
  name: "MyMain",
  components: { CommonAside, CommonHeader, CommonTags },
};
</script>

<style scoped lang="less">
.el-header {
  background: #000;
}
.el-main {
  margin-top: -20px;
}
.el-card__body {
  padding: 14px;
}
</style>