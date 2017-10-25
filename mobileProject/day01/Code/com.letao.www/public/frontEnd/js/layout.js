mui.init({
  subpages: [
    {
      url: './index.html',
      id: 'index.html',
      styles: {
        top: '44px',
        bottom: '50px',
      }
    }
  ]
});

mui(".lt-tool").on('tap', '.mui-tab-item', function (ev) {
  // console.log(mui(this)[0].classList[1]);
  var toolName = mui(this)[0].classList[1];
  var iframe = document.querySelector('iframe');

  // console.log(iframe.src);
  // console.log(indexPage);

  switch (toolName) {
    case 'lt-tool-home':
      iframe.src = './index.html';
      iframe.id = 'index.html',
      iframe.name = 'index.html'
      break;
    case 'lt-tool-sort':
      iframe.src = './sort.html';
      iframe.id = 'sort.html',
        iframe.name = 'sort.html'
      break;
    case 'lt-tool-cart':
      iframe.src = './cart.html';
      iframe.id = 'cart',
        iframe.name = 'cart.html'
      break;
    case 'lt-tool-user':
      iframe.src = 'user.html';
      iframe.id = 'user.html',
        iframe.name = 'user.html'
      break;
    default:
      iframe.src = './index.html';
      iframe.id = 'index.html',
        iframe.name = 'index.html'
      break;
  }
})



