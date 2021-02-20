<template>
  <div :id="id" class="main-editor">
    <link rel="stylesheet" href="/editormd/css/editormd.min.css">
    <textarea v-model="content" style="display:none;"></textarea>
  </div>
</template>

<script>
  if (typeof window !== 'undefined') {
    var $s = require('scriptjs');
  }
  export default {
    name: 'Editor',
    props: {
      width: '',
      content:{
        type: String,
        default: '  '
      },
      type: {
        type:String,
        default: 'editor'
      },
      id: {
        type: String,
        default: 'editor-md'
      },
      editorPath: {
        type: String,
        default: '/editormd/',
      },
      editorConfig: {
        type: Object,
        default() {
          return {
            width: this.width,
            height: 380,
            path: '/editormd/lib/',
            codeFold: true,
            saveHTMLToTextarea: true,
            searchReplace: true,
            htmlDecode: 'style,script,iframe|on*',
            emoji: true,
            onchange : ()=>{
              this.$emit('change',this.instance.getPreviewedHTML(),this.instance.getMarkdown())
            }
          };
        },
      },
    },
    data() {
      return {
        instance: null,
      };
    },
    mounted() {
      //加载依赖
      $s([
        `${this.editorPath}/jquery.min.js`,
        `${this.editorPath}/lib/marked.min.js`,
        `${this.editorPath}/lib/prettify.min.js`,
        `${this.editorPath}/lib/raphael.min.js`,
        `${this.editorPath}/lib/underscore.min.js`,
      ], () => {
        $s(`${this.editorPath}editormd.min.js`, () => {
         this.$nextTick((editorMD = window.editormd) => {
            if (editorMD) {
              //type等于editor是编辑，否则展示数据
              if (this.type == 'editor'){
                this.instance = editorMD(this.id, this.editorConfig);
              } else {
                this.instance = editorMD.markdownToHTML(this.id, this.editorConfig)
              }
            }
          });
        });
      });

    }
  };
</script>

<style>
  .linenums {
    white-space: nowrap;
    margin-top: 0;
    margin-bottom: 0;
  }
  .editormd .CodeMirror pre {
    font-size: 14px;
    padding: 0 33px;
  }
</style>