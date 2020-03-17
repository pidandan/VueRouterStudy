<template>
  <div id="app">
    <div class="routerDiv">
      <div class="routerItem">
        <router-link to="/">首页</router-link>
      </div>
      <div class="routerItem">
        <router-link to="/hi">Hi页面</router-link>
      </div>

      <div class="routerItem">
        <router-link to="/goSon1/abc">重定向</router-link>
      </div>

      <div class="routerItem">
        <router-link to="/hei">别名</router-link>
      </div>

      <div class="routerItem">
        <router-link to="/hi/son1/123">Hi的子路由1</router-link>
      </div>

      <div class="routerItem">
        <router-link :to="{ name: 'son2', params: { userId: 123 } }"
          >Hi的子路由2</router-link
        >
      </div>
    </div>
    <div class="routerView">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #ffffff;
}
.routerDiv {
  height: 80px;
  width: 100%;
  background: rosybrown;
  display: flex;
}
.routerItem {
  padding: 10px;
  line-height: 80px;
  text-align: center;
}
.routerView {
  height: calc(100% - 80px);
  width: 100%;
}
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
