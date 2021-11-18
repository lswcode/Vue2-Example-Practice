<template>
  <div class="">
    <h1>使用install全局注册的组件</h1>
    <div v-for="(item ,index) in obj" :key="item.id" v-show="index<5">{{item.name}}</div>
    <!-- 在v-for中使用v-if会报错，应该改为v-show -->
    <!-- v-for="(item, index) in items" v-for还可以写第二个参数，表示当前项的索引 -->
  </div>
</template>

<script>
export default {
  name: "Global",
  components: {},
  props: {},
  data() {
    return {
      obj: [
        { id: 1, name: "小白" },
        { id: 2, name: "小红" },
        { id: 3, name: "小蓝" },
        { id: 4, name: "小白2" },
        { id: 5, name: "小红2" },
        { id: 6, name: "小蓝2" },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang='less' scoped>
</style>