<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="content-container">
          <div class="title">用户授权</div>

          <div class="meta">
            <span>分类</span>/
            <span>时间等</span>
          </div>

          <el-divider></el-divider>

          <div class="content">
            这是文章内容
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
  padding: 20px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
</style>