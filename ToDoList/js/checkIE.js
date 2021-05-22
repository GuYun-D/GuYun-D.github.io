var edition = ''

function IEVersion() {
  // 取得浏览器的userAgent字符串
  var userAgent = navigator.userAgent;
  // 判断是否为小于IE11的浏览器
  var isLessIE11 = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
  // 判断是否为IE的Edge浏览器
  var isEdge = userAgent.indexOf('Edge') > -1 && !isLessIE11;
  // 判断是否为IE11浏览器
  var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;
  if (isLessIE11) {
    var IEReg = new RegExp('MSIE (\\d+\\.\\d+);');
    // 正则表达式匹配浏览器的userAgent字符串中MSIE后的数字部分，，这一步不可省略！！！
    IEReg.test(userAgent);
    // 取正则表达式中第一个小括号里匹配到的值
    var IEVersionNum = parseFloat(RegExp['$1']);
    if (IEVersionNum === 7) {
      // IE7
      return edition = 7
    } else if (IEVersionNum === 8) {
      // IE8
      return edition = 8
    } else if (IEVersionNum === 9) {
      // IE9
      return edition = 9
    } else if (IEVersionNum === 10) {
      // IE10
      return edition = 10
    } else {
      // IE版本<7
      return edition = 6
    }
  } else if (isEdge) {
    // edge
    return 'edge'
  } else if (isIE11) {
    // IE11
    return edition = 11
  } else {
    // 不是ie浏览器
    return edition = -1
  }
}

console.log(IEVersion());

if (IEVersion() === -1 || IEVersion === "edge") {
  console.log("我不是ie");
} else {
  console.log("执行了");
  document.write(
    "<div class= 'browser-happy'>" +
    "<div class='content'> " +
    "  <p>本站不支持IE11及以下浏览器访问！</p>" +
    "  <a href='https://browsehappy.com/'>立即更新或使用edge浏览器</a>" +
    "</div>" +
    "</div>"
  )
}