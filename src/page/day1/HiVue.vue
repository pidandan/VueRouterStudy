<template>
  <div class="hi">
    <h2>{{ msg }}{{ $route.params.username }}</h2>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "HioVue",
  data: function() {
    return {
      msg: "hi,我是Hi组件"
    };
  }
};
</script>
<style lang="scss">
.hi {
  height: 300px;
  width: 100%;
  background: red;
}
</style>
