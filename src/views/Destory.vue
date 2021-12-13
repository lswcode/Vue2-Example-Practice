<template>
  <div>
    <div>测试定时器在组件销毁后，是否依旧存在</div>
    <button @click="clickFun">点击开启定时器</button>
    <button @click="$router.push('/')">点击跳转</button>
  </div>

</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      timer: null,
    };
  },
  computed: {},
  watch: {},
  methods: {
    clickFun() {
      this.timer = setInterval(() => {
        console.log("hello");
      }, 2000);
      // Vue/React中的定时器，尤其是setInterval，应该在组件销毁前的生命周期中进行清除
      // 因为变量或方法只要还在被引用，就不会被垃圾回收机制清除，而定时器是属于全局对象window的方法
      // 实际上是: window.setInterval( ()=>{ },2000 ) window只是被省略了
      // Vue/React实例的销毁并不能清除window对象上的定时器方法
      // 只要不手动清除，就一直会被window所引用
    },
  },
  created() {},
  mounted() {},
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>
<style lang='less' scoped>
</style>