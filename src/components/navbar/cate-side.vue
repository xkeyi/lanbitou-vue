<template>
  <div class="catagory-side-nav">
    <div class="category-item active">全部文章</div>
    <div class="category-item" v-for="category in catagories" :key="category">
      {{ category.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CateSide",
  data () {
    return {
      catagories: [
        {id: 1, name: "PHP"},
        {id: 2, name: "Laravel"},
        {id: 3, name: "Go"},
        {id: 4, name: "CSS"}
      ]
    }
  }
};
</script>

<style scoped>
.catagory-side-nav {
  height: auto;
  background-color: #fff;
  margin-bottom: 15px;
  border-radius: 20px;
  padding: 30px;
}
.catagory-side-nav:hover {
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
.category-item {
  margin: 5px;
  border-radius: 15px;
  font-size: 15px;
  color: #636b6f;
  padding: 5px 0px;
  text-align: center;
  border-bottom: 1px solid #fafafa;
  cursor: pointer;
}
.category-item.active{
  background: linear-gradient(180deg,#dcf4ff,#f4fcff);
}
.category-item:hover {
  background: linear-gradient(180deg,#fff0ce,#fffcf6);
}
</style>