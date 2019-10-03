//Es MODULE
import $ from "jquery"; //ES6的模块引入方式

function component() {
  /* var element = document.createElement("div");

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element; */

  var element = $("<div></div>");
  element.html("hello webpack");
  return element[0];
}

document.body.appendChild(component());
