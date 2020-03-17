import Vue from "vue";

/** 全局注册*/
Vue.directive("focus", {
  /**
   * 当被绑定元素插入到DOM时 */
  inserted(e) {
    e.focus();
  }
});
Vue.directive("test", {
  /**
   * 当被绑定元素插入到DOM时 */
  inserted(e) {
    window.console.log(e);
  }
});
