import Vue from "vue"; //引入Vue
import Router from "vue-router"; //引入vue-router
import Hello from "@/page/day1/HelloVue"; //引入根目录下的Hello.vue组件
import Hi from "@/page/day1/HiVue"; //引入根目录下的Hello.vue组件
import HiSon1Vue from "@/page/day1/HiSon1Vue";
import HiSon2Vue from "@/page/day1/HiSon2Vue";
Vue.use(Router); //Vue全局使用Router

export default new Router({
  routes: [
    //配置路由，这里是个数组
    {
      //每一个链接都是一个对象
      path: "/", //链接路径
      component: Hello //对应的组件模板
    },
    {
      //每一个链接都是一个对象
      path: "/hi", //链接路径
      component: Hi, //对应的组件模板
      children: [
        { path: "son1", component: HiSon1Vue },
        { path: "son2", component: HiSon2Vue }
      ]
    }
  ]
});
