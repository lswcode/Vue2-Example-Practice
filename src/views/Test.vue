<template>
  <div class="">
    <h1>这是Text组件</h1>
  </div>
</template>

<script>
import { myObj, myArr } from "@/export-test/test1.js";
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    console.log("这是Test中的myObj:", myObj); // 如果多个组件都导入了同个文件中export暴露的变量，只要在其中一个组件中修改了这个变量，其它组件中的变量值都会变化，直到页面刷新/重新加载
    console.log("这是Test中的myArr:", myArr);
    // 即: export暴露的对象，如果在其它文件中被修改，那么原数据也会被修改，其它文件再次导入时，得到的就是修改后的对象
  },
  mounted() {},
};
</script>
<style lang='less' scoped>
</style>