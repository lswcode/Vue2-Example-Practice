<template>
  <div class="">
    <h1>这是language组件</h1>
    <!-- language前面不需要加this -->
    <button @click="language=changeLang('zh')">中文</button>
    <button @click="language=changeLang('en')">English</button>
    <h2>{{language.name}}</h2>
    <h3>{{language.city}}</h3>
  </div>
</template>

<script>
// import { zh } from "@/language/zh.js";
// import { en } from "@/language/en.js";
// 这是在单独页面中配置中英文，一般情况下中英文选项应该是整个网站一致的，这个如果在每个网页中都要进行语言配置和判断比较麻烦，应该统一处理
// 1 可以使用中英文插件vue-i18n进行全局配置
// 2 可以使用Vuex进行全局语言配置，在Vuex中导入并配置一次，在其它页面中使用Vuex中的数据，当中英文切换时，修改Vuex中的语言选择即可
import { changeLang } from "@/language/changeLang.js"; // 当前还是单独每个页面都导入语言组件，可以直接将这一步写在Vuex内
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      language: {}, // 可以将这个写在Vuex内，模板直接使用VueX中的数据即可
    };
  },
  computed: {},
  watch: {},
  methods: {
    changeLang, // 使用export导入的函数不能直接在模板中使用，需要在methods中注册
  },
  created() {
    this.language = changeLang(this.$store.language); // 实际上应该所有页面保持同个语言状态，所以应该将语言状态写在VueX中作为全局共享配置
  },
  mounted() {},
};
</script>
<style lang='less' scoped>
</style>