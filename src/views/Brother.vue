<template>
  <div class="">
    <h1>兄弟组件A</h1>
    <div>{{received}}</div>
    <slot></slot>
    <!-- 父组件中写在子组件标签内的数据会显示在slot标签占位的地方 -->
    <slot name="isOne"></slot>
    <slot name="isTwo"></slot>
  </div>
</template>

<script>
import { useBus } from "@/utils/bus.js";
export default {
  name: "Brother",
  components: {},
  props: {},
  data() {
    return {
      text: "Brother组件中的数据",
      received: "",
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {
    // 这个函数必须要在通信组件的数据传递前调用，用来监听数据的传递，所以写在mounted中
    useBus.$on("sendData", (data) => {
      // 第一个参数是$on绑定的事件名，第二个参数是一个函数，参数就是接收到的数据
      this.received = data;
    });
  },
};
</script>
<style lang='less' scoped>
</style>