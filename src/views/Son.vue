<template>
  <div class="">
    <h1>子组件Son</h1>
    <div @click="clickFun">点击传递数据给父组件</div>
    <div @click="sendDataToBro">点击传递数据给Brother组件</div>
    <Global />
  </div>
</template>

<script>
import { useBus } from "@/utils/bus.js";
import { myObj, myArr } from "@/export-test/test1.js";
export default {
  name: "Son",
  components: {},
  props: ["fatherData"],
  data() {
    return {
      text: "这是子组件的数据",
      num: 9999999,
    };
  },
  computed: {},
  watch: {},
  methods: {
    clickFun() {
      console.log("子组件Son中：", this.fatherData);
      console.log("父组件的num：", this.$parent.num); // 直接使用this.$parent访问父组件数据
      this.$emit("sendDataToFather", this.text); // 第一个参数是父组件绑定的事件名，第二个参数就是传递的数据
    },
    sendDataToBro() {
      useBus.$emit("sendData", this.text); // 发送数据 第一个参数是自定义事件名，让兄弟组件监听，第二个参数是传递的数据
    },
    logObj() {
      console.log("这是Son.vue中的myObj:", myObj);
      console.log("这是Son.vue中的myArr:", myArr);
    },
  },
  created() {
    console.log("这是Son.vue中的myObj:", myObj);
    console.log("这是Son.vue中的myArr:", myArr);
  },
  mounted() {},
};
</script>
<style lang='less' scoped>
</style>