export function rgb() {
  //rgb颜色随机
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var rgb = "rgba(" + r + "," + g + "," + b + ",1)";
  return rgb;
}
