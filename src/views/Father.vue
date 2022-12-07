<template>
  <div class="">
    <h1>父组件Son</h1>
    <div @click="clickFun">测试封装方法--引用类型判断相等</div>
    <div @click="changeObj">点击修改import导入的对象</div>
    <router-link to="/test">点击跳转到Test</router-link>
    <hr>
    <Son :fatherData='text' ref="sonRef" @sendDataToFather="getDataFromSon" />
    <hr>
    <Brother>{{slotText}}</Brother>
    <hr>
    <Brother>
      <h1 slot="isOne">具名插槽内容1</h1>
      <div slot="isTwo">具名插槽内容2</div>
    </Brother>
    <!-- 写在子组件标签中的数据，会显示在子组件的slot中 -->
    <button @click="$router.push('/destory')">点击跳转到定时器销毁测试页面</button>
    <hr>
    <button @click="testFun1">window全局变量测试</button>
  </div>
</template>

<script>
import { isEqual } from "@/utils/utils.js";
import Son from "./Son.vue";
import Brother from "./Brother.vue";
import { myObj, myArr } from "@/export-test/test1.js";
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
      console.log("父组件Father中:", data);
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
    changeObj() {
      // myObj = {   // 报错， export暴露的变量，在另一个文件中imoprt导入后，不能直接使用等号=重新赋值，所以如果export的是基本数据类型，那就无法被修改
      //   name: 555,
      //   age: 9999,
      // };
      myObj.age = 5555; // 如果export的是对象/数组类型，可以修改对象内部的属性/数组中的元素，但不能使用等号=重新赋值整个变量
      myArr[3] = 77777;
      console.log("父组件中的myObj:", myObj);
      console.log("父组件中的myArr:", myArr);
      this.$refs.sonRef.logObj();
    },
    testFun1() {
      console.log(window.globalVal);
    },
  },
  created() {
    console.log("父组件中的myObj:", myObj);
    console.log("父组件中的myArr:", myArr);
  },
  mounted() {
    console.log(
      "使用this.$children[0].num获取子组件数据:",
      this.$children[1].num
    ); // 注意父组件访问到的是一个数组，因父组件可能有多个子组件，首先要确定子组件的下标
  },
};
</script>
<style lang='less' scoped>
</style>