import { createApp } from 'vue'
import App from './App.vue'
import http from './utils/http'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import VMdPreview from '@kangc/v-md-editor/lib/preview';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-php';

VueMarkdownEditor.use(vuepressTheme);
VMdPreview.use(vuepressTheme);

const app = createApp(App);

app.config.globalProperties.$http = http;

app.use(router);
app.use(ElementPlus);
app.use(VueMarkdownEditor);
app.use(VMdPreview);

app.mount('#app')
