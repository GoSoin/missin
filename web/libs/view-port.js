(function(doc, win) {
  let docEl = doc.documentElement,
  // 重置事件类型   orientationchage：移动设备翻转，resize：窗口调整大小
  resizeEvt = 'orientationchage' in window ? 'orientationchage' : 'resize',
  // 重置计算
  recalc = function() {
    // 页面打开时屏幕的真实宽度
    let clientWidth = docEl.clientWidth;
    // 异常退出
    if(!clientWidth)  {
      return;
    }
    // 预设值屏幕宽度值：375，预设font-size值：50
    docEl.style.fontSize = 50 * (clientWidth / 375) + 'px';
  };
  // 异常退出
  if(!doc.addEventListener) {
    return;
  }
  // 重置事件类型触发
  win.addEventListener(resizeEvt, recalc, false);
  // 会话历史被执行时触发，包括后退/前进或load事件触发后初始化页面时触发
  doc.addEventListener('pageshow', recalc, false);
  // 初始化HTML文档已完全加载和解析时触发，无需等待样式表、图像和子框架完成加载
  doc.addEventListener('DOMContentLoaded', recalc, false);
  // dom加载完成或屏幕方向变化时，重新计算
})(document, window);