<template>
  <div>
    <h2>{{ msg }}</h2>
    <h3>{{ $route.params.userId }}</h3>
    <h4>{{ userId }}</h4>
  </div>
</template>
<script>
export default {
  name: "HiSon2Vue",
  data: function() {
    return {
      msg: "大家好,我是Hi组件的二儿子"
    };
  },
  props: ["userId"]
};
</script>
<style lang="scss"></style>
