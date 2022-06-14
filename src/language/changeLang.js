import { zh } from "@/language/zh.js";
import { en } from "@/language/en.js";
import store from "@/store/index.js";

export const changeLang = (lang) => {
  if (lang == "zh") {
    store.state.language = "zh";
    return zh;
  } else {
    store.state.language = "en";
    return en;
  }
};
