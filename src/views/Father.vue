<template>
  <div class="">
    <h1>父组件Son</h1>
    <div @click="clickFun">测试封装方法--引用类型判断相等</div>
    <hr>
    <Son :fatherData='text' @sendDataToFather="getDataFromSon" />
    <hr>
    <Brother>{{slotText}}</Brother>
    <hr>
    <Brother>
      <h1 slot="isOne">具名插槽内容1</h1>
      <div slot="isTwo">具名插槽内容2</div>
    </Brother>
    <!-- 写在子组件标签中的数据，会显示在子组件的slot中 -->
  </div>
</template>

<script>
import { isEqual } from "@/utils/utils.js";
import Son from "./Son.vue";
import Brother from "./Brother.vue";
export default {
  name: "Father",
  components: { Son, Brother },
  props: {},
  data() {
    return {
      text: "这是父组件的数据",
      num: 77777777,
      slotText: "这是父组件插槽中的数据",
    };
  },
  computed: {},
  watch: {},
  methods: {
    getDataFromSon(data) {
      console.log("父组件Father中：", data);
      console.log("子组件的num：", this.$children[0].num); // 注意父组件访问到的是一个数组，因父组件可能有多个子组件
    },
    clickFun() {
      const obj1 = {
        a: 200,
        b: {
          x: 100,
          y: 200,
        },
      };
      const obj2 = {
        a: 200,
        b: {
          x: 100,
          y: 200,
        },
      };
      const arr1 = [1, 2, 3, obj1];
      const arr2 = [1, 2, 3, obj2];

      console.log(isEqual(arr1, arr2)); // true
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang='less' scoped>
</style>