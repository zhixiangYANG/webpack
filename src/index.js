import Vue from "vue/dist/vue.esm";
import App from "./App.vue"; //引入的内容是组件的选项对象

new Vue({
  el: "#app",
  data: {
    msg: "hello"
  },

  template: `
    <div>
      <h1>Hello wolrd</h1>
      <p>我的天</p>
      <p>我的地</P>
      
      <App></App>
    </div>
  `,

  components: {
    App
  }

  /* render: h => {
    return h("div", null, "hello world");
  } */
});
