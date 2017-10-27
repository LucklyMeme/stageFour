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
  var headerBack = document.querySelector('.lt-header .lt-header-back');
  var iFrame = document.querySelector('iframe');
  var muiTitle = document.querySelector('h1.mui-title')

  switch (toolName) {
    case 'lt-tool-home':
      iFrame.src = './index.html';
      iFrame.id = 'index.html';
      iFrame.name = 'index.html';
      break;
    case 'lt-tool-sort':
      iFrame.src = './sort.html';
      iFrame.id = 'sort.html';
      iFrame.name = 'sort.html';
      break;
    case 'lt-tool-cart':
      iFrame.src = './cart.html';
      iFrame.id = 'cart';
      iFrame.name = 'cart.html';
      break;
    case 'lt-tool-user':
      iFrame.src = 'user.html';
      iFrame.id = 'user.html';
      iFrame.name = 'user.html';
      muiTitle.innerHTML = '个人中心';
      headerBack.style.display = 'block';
      break;
    default:
      iFrame.src = './index.html';
      iFrame.id = 'index.html';
      iFrame.name = 'index.html';
      break;
  }


})




// headerBack.onclick = function(){
//   iFrame.src = './index.html';
//   iFrame.id = 'index.html';
//   iFrame.name = 'index.html';
// } 
mui('.lt-header').on('tap', '.lt-header .lt-header-back', function () {
  var iFrame = document.querySelector('iframe');
  iFrame.src = './index.html';
  iFrame.id = 'index.html';
  iFrame.name = 'index.html';
  $(this).hide();
})