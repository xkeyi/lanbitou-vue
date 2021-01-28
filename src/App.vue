<template>
  <Header></Header>

  <div class="container main-container">
    <router-view></router-view>
  </div>

  <Footer></Footer>

</template>

<script>
import Header from './components/navbar/header.vue'
import Footer from './components/navbar/footer.vue'

export default {
  name: 'App',
  components: {
    Header, Footer
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #f6f8f9;
}
a {
  text-decoration: none;
}
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.main-container {
  flex: 1;
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
</style>
