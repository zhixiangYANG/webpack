//Es MODULE
import $ from "jquery"; //ES6的模块引入方式
import utils from "./utils/index";
import "./styles/hello.css";
import "./styles/world.scss";
import "./styles/dashazhi.less";
import hhhPath from "./images/hhh.jpg";
import emmPath from "./images/emm.jpg";

console.log(utils);

function component() {
  /* var element = document.createElement("div");

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(["Hello", "webpack"],  " ");

  return element; */

  var element = $("<div></div>");
  element.html("hello webpack");
  return element[0];
}

document.body.appendChild(component());

let url = "http://www.baidu.com?name=zhangsan&age=18";

console.log(utils.getQuery(url));

let imgEl = document.createElement("img");
imgEl.src = hhhPath;

let imgEl2 = document.createElement("img");
imgEl2.src = emmPath;

document.body.appendChild(imgEl);
document.body.appendChild(imgEl2);
