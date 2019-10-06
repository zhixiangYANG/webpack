import Vue from "vue";

new Vue({
  el: "#app",
  data: {
    msg: "hello"
  },

  render: h => {
    return h("div", null, "hello world");
  }
});
