export const myMinix = {
  data: function() {
    return {
      num: 0,
      message: "我是混入中定义的message"
    };
  },
  created() {
    window.console.log("混入对象的钩子被调用");
  },
  methods: {}
};
