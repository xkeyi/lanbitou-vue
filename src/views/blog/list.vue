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

      <el-col :xs="20" :sm="18" :md="18" :lg="18" :xl="18" style="overflow-x: auto;">
        <el-backtop :visibility-height="200">
          <i class="el-icon-caret-top"></i>
        </el-backtop>

        <div class="blog-item">
          <div class="title">Vue 3博客重构完成啦！接下来C语言和高数啦！加油啦！</div>
          <div class="date">2021-01-28 <i class="el-icon-time"></i></div>
          <div class="content">
            <img src="@/assets/blog2.png">
            <div class="text">通过将进一个月的时间！已经把博客使用Vue 3重构！完成了博客的重构及导航栏、全局提示、通知提醒框、空状态、无限滚动、按钮、头像、回到顶部、评论、音乐播放器、分页器、滑动条、Markdown预览、图片。其中图片样式来自Element,音乐播放器样式来自APlayer.其余的组件样式来自Ant Design of Vue</div>
          </div>
          <div class="tags">标签</div>
        </div>

        <div class="blog-item">
          <div class="title">Vue 3博客重构完成啦！接下来C语言和高数啦！加油啦！</div>
          <div class="date">2021-01-28 <i class="el-icon-time"></i></div>
          <div class="content">
            <img src="@/assets/blog1.jpg">
            <div class="text">通过将进一个月的时间！已经把博客使用Vue 3重构！完成了博客的重构及导航栏、全局提示、通知提醒框、空状态、无限滚动、按钮、头像、回到顶部、评论、音乐播放器、分页器、滑动条、Markdown预览、图片。其中图片样式来自Element,音乐播放器样式来自APlayer.其余的组件样式来自Ant Design of Vue</div>
          </div>
          <div class="tags">标签</div>
        </div>

        <div class="blog-item">
          <div class="title">Vue 3博客重构完成啦！接下来C语言和高数啦！加油啦！</div>
          <div class="date">2021-01-28 <i class="el-icon-time"></i></div>
          <div class="content">
            <img src="@/assets/blog3.jpeg">
            <div class="text">通过将进一个月的时间！已经把博客使用Vue 3重构！完成了博客的重构及导航栏、全局提示、通知提醒框、空状态、无限滚动、按钮、头像、回到顶部、评论、音乐播放器、分页器、滑动条、Markdown预览、图片。其中图片样式来自Element,音乐播放器样式来自APlayer.其余的组件样式来自Ant Design of Vue</div>
          </div>
          <div class="tags">标签</div>
        </div>
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
.blog-item {
  background-color: #fff;
  margin-bottom: 15px;
  border-radius: 30px;
  padding: 20px;
}
.blog-item:hover {
  /*box-shadow: 0 0 25px 5px rgb(46 58 89 / 10%);*/
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
.blog-item .title {
  color: #336a99;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
}
.blog-item .date {
  text-align: right;
  color: #bebebe;
}
.blog-item .content {
  display: flex;
  border-bottom: 1px solid #fafafa;
  padding: 5px 0px;
  margin-bottom: 5px;
}
.blog-item img {
  width: 220px;
  border-radius: 25px;
  margin-right: 20px;
}
.blog-item .text {
  color: #636b6f;
  line-height: 24px;
}
.blog-item .tags {
  color: #bababa;
}
</style>