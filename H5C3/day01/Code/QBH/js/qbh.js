$(function () {
  // 初始化部分
  $('#fullpage').fullpage({ // 调用函数
    // 设置每一屏颜色
    sectionsColor: ["#fadd67", "#78a1d0", "#ef674d", "#fed", "#d04759", "#84d9ed", "#8ac060", '#84d9ed'],
    // 显示小圆点
    navigation: true,
    // 设置小圆点的方向 左右
    navigationPosition: 'right',
    // 滚动的时间 默认是700ms
    scrollingSpeed: 1500,
    // 是否支持键盘滚动
    keyboardScrolling: true,
    // 滚动前的回调函数,接受index,nextIndex 和 direction 3个参数
    // index 是离开的“页面”的序号，从1开始计算；
    // nextIndex 是滚动到的“页面”的序号，从1开始计算；
    // direction 判断往上滚动还是往下滚动，值是 up 或 down。
    onLeave: function (index, nextIndex, direction) {
      switch (nextIndex) {
        case 2: 
          
      }
    }
  });

});