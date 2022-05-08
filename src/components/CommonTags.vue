<template>
  <div class="tags">
    <el-tag
      v-for="(tag, index) in tags"
      :key="tag.name"
      size="small"
      :closable="tag.name !== 'home'"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      @click="changeMenu(tag)"
      @close="handleClose(tag, index)"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "CommonTags",
  data() {
    return {};
  },

  methods: {
    ...mapMutations({
      close: "closeTag",
    }),
    //   面包屑对应的tag跳转路由
    changeMenu(tag) {
      this.$router.push({ name: tag.name });
    },
    // tag删除与跳转逻辑
    handleClose(tag, index) {
      const length = this.tags.length - 1;
      this.close(tag);
      // 判断是否与当前路由一致
      if (tag.name !== this.$route.name) {
        return;
      }

      if (index === length) {
        this.$router.push({
          name: this.tags[index - 1].name,
        });
        console.log(this.tags);
      } else {
        this.$router.push({
          name: this.tags[index].name,
        });
      }
    },
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
};
</script>

<style scoped lang="less">
.tags {
  z-index: 1;
  margin: 10px 0 0 10px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>