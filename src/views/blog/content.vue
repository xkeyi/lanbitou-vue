<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="content-container">
          <div class="title">用户授权</div>

          <div class="meta">
            <span>分类</span>
            <el-divider direction="vertical"></el-divider>
            <span>时间等</span>
          </div>

          <el-divider></el-divider>

          <div class="content">
            <v-md-preview :text="markdown"></v-md-preview>
          </div>
        </div>
      </el-col>
  </el-row>
  </div>
</template>

<script>

export default {
  name: "BolgContent",
  data () {
    return {
      markdown: '### 标题'
    }
  }
};
</script>

<style scoped>
.content-container {
  min-height: 600px;
  background-color: #fff;
  margin-bottom: 15px;
  border-radius: 30px;
  padding: 30px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
.title {
  /*color: #636b6f;*/
  font-size: 20px;
  margin-bottom: 10px;
}
.meta {
  color: #636b6f;
  font-size: 14px;
}
.v-md-editor-preview {
  padding: 0px;
}
</style>