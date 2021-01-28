<template>
  <div class="topnav">
    <div class="container top-container">
      <div class="logo">
        <router-link to="/">
          <!-- <i class="el-icon-edit logo-icon"></i> -->
          <img src="@/assets/logo-mountain.png" style="width: 40px;">
        </router-link>
        <el-divider direction="vertical"></el-divider>
        <router-link to="/">
          <span class="logo-title">Alps</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data () {
    return {

    }
  }
};
</script>

<style scoped>
.topnav {
  display: flex;
  flex: 0 0 60px;
  height: 60px;
  border: none;
  border-bottom: 1px solid #d3e0e9;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
  margin-bottom: 40px;
  margin-top: 0;
  border-color: #e7e7e7;
  background-color: #fff;
  border-top: 4px solid #368cda;
}
.top-container {
  display: flex;
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;
  font-size: 18px;
}
.logo-icon {
  font-size: 30px;
  color: #368cda;
}
.logo-title {
  font-size: 18px;
  font-weight: bold;
  color: #368cda;
}
</style>