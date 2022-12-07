import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// -----------------------------------------------------------------
// import Global from "./utils/Global.vue"; // 全局注册组件方法1
import Global from "./utils/install"; // 全局注册组件方法2

// Vue.component("Global", Global); // 全局注册组件方法1
Vue.use(Global); // // 全局注册组件方法2，Vue.use会自动调用插件中的install函数，本质上和第一种是一样的
// ---------------------------------------------------------------
Vue.config.productionTip = false;

window.globalVal = {
  id: 7777,
  uname: "小白",
};
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
