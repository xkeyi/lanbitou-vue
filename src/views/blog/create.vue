<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="content-container">
          <div class="title">创建博文</div>

          <div class="form-operate">
            <div class="form-item">
              <div class="form-select">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
              
              <div class="form-select">
                <el-select v-model="value1" multiple placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>

            <div class="form-btns">
              <el-button type="danger">保存</el-button>
            </div>
          </div>
          
          <v-md-editor v-model="text" height="500px" @change="changeTest(text, html)"></v-md-editor>
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
      markdown: '### 标题',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      value1: []
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
  padding: 30px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
.title {
  margin: 10px 0 40px;
  color: #636b6f;
  font-size: 20px;
  text-align: center;
}
.form-operate {
  display: flex;
  align-items: center;
  font-size: 0px;
}
.form-operate .form-item {
  flex: 0 0 50%;
}
.form-operate .form-btns {
  flex: 0 0 50%;
  text-align: right;
}
.form-select {
  margin: 10px 0;
}
.el-select {
  width: 100%;
}
</style>