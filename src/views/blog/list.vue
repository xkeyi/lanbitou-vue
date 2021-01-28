<template>
  <div>
    <el-row :gutter="20">
      <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="6">
        <div class="side-nav">
          <el-affix target=".side-nav" :offset="100">
            <CateSide></CateSide>
            <TagSide></TagSide>
          </el-affix>
        </div>
      </el-col>

      <el-col :xs="20" :sm="18" :md="18" :lg="18" :xl="18">
        <div style="height: 500px;">这是多行文字</div>
        <div style="height: 500px;">这是多行文字</div>
        <div style="height: 500px;">这是多行文字</div>
        <div style="height: 500px;">这是多行文字</div>
      </el-col>
  </el-row>
  </div>
</template>

<script>
import CateSide from '@/components/navbar/cate-side.vue'
import TagSide from '@/components/navbar/tag-side.vue'

export default {
  name: "BolgList",
  data () {
    return {

    }
  },
  components: {
    CateSide, TagSide
  }
};
</script>

<style scoped>
.side-nav {
  position: relative;
  height: 100%;
}
</style>