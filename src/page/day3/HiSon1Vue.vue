<template>
  <div>
    <h2>{{ msg }}</h2>
    <h2>跳转传递的值{{ id }}</h2>
    <h2>另一种取值方式{{ $route.params.id }}</h2>
  </div>
</template>
<script>
export default {
  name: "HiSon1Vue",
  data: function() {
    return {
      msg: "大家好,我是Hi组件的大儿子"
    };
  },
  props: ["id"]
};
</script>
<style lang="scss"></style>
