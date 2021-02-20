<template>
  <div class="tag-side-nav">
    <div class="tag-item active">php</div>
    <div class="tag-item">lavel</div>
    <div class="tag-item">git</div>
    <div class="tag-item">vue</div>
    <div class="tag-item">css</div>
    <div class="tag-item active">jquery</div>
    <div class="tag-item">go</div>
    <div class="tag-item">macos</div>
    <div class="tag-item">mysql</div>
  </div>
</template>

<script>
export default {
  name: "TagSide",
  data () {
    return {

    }
  }
};
</script>

<style scoped>
.tag-side-nav {
  height: 200px;
  background-color: #fff;
  margin-bottom: 15px;
  border-radius: 20px;
  padding: 30px;
}
.tag-side-nav:hover {
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
.tag-item {
  display: inline-block;
  color: #636b6f;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 15px;
  background: linear-gradient(180deg,#dcf4ff,#f4fcff);
  cursor: pointer;
}
.tag-item:hover {
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
.tag-item.active {
  background: linear-gradient(180deg,#fff0ce,#fffcf6);
}
</style>