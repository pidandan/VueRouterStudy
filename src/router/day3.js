import Vue from "vue"; //引入Vue
import Router from "vue-router"; //引入vue-router
import Hello from "@/page/day3/HelloVue"; //引入根目录下的Hello.vue组件
import Hi from "@/page/day3/HiVue"; //引入根目录下的Hello.vue组件
import HiSon1Vue from "@/page/day3/HiSon1Vue";
import HiSon2Vue from "@/page/day3/HiSon2Vue";
import ErrorVue from "@/page/day3/ErrorVue";
Vue.use(Router); //Vue全局使用Router

export default new Router({
  routes: [
    {
      //每一个链接都是一个对象
      path: "/", //链接路径
      name: "home",
      component: Hello //对应的组件模板
    },
    //路由重定向传递值
    {
      path: "/goSon1/:id",
      redirect: "/hi/son1/:id"
    },
    {
      path: "/hi",
      component: Hi,
      alias: "/hei"
    },
    {
      //每一个链接都是一个对象
      path: "/hi", //链接路径
      component: Hi, //对应的组件模板
      children: [
        { path: "son1/:id", name: "son1", component: HiSon1Vue, props: true },
        { path: "son2", name: "son2", component: HiSon2Vue, props: true }
      ]
    },
    {
      path: "*",
      component: ErrorVue
    }
  ]
});
