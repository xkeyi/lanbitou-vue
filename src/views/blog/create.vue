<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="content-container">
          添加文章页面
          <v-md-editor v-model="text" height="400px" @change="changeTest(text, html)"></v-md-editor>

          <!-- <v-md-preview :text="markdown"></v-md-preview> -->
        </div>
      </el-col>
  </el-row>
  </div>
</template>

<script>
// import VueMarkdownEditor, { xss } from '@kangc/v-md-editor';

export default {
  name: "BolgCreate",
  data () {
    return {
      text: '',
      html: '',
      markdown: '### 标题'
    }
  },
  methods: {
    changeTest(text, html) {
      console.log(text);
      console.log(html);
      // const html1 = xss.process(VueMarkdownEditor.themeConfig.markdownParser.render(text));
      // console.log(html1)
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