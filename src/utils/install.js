import Global from "./Global.vue"; // 全局注册组件
export default {
  install(Vue) {
    // install方法第一个参数是vue的构造器，第二个参数是可选的选项对象
    Vue.component("Global", Global);
  },
};
