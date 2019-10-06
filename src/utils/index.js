//公共js方法文件

//解析url地址上的参数
const getQuery = url => {
  let url2 = url || window.location.href;
  let result = {};
  let str = url.split("?")[1];
  let arr = str.split("&");
  arr.forEach(item => {
    let key = item.split("=")[0];
    let value = item.split("=")[1];
    result[key] = value;
  });
  return result;
};

//es6 默认暴露
export default {
  getQuery
};
