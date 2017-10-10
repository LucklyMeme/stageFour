## 网络状态检测

  > 为什么需要网络状态检测

    在原生APP中,比如QQ,它可以检测QQ是处于在线还是离线状态,但是在网页中,或者web app中,没有检测网络状态的能力,因此在HTML5中出现了网络状态检测API

  > 网络状态检测的事件

    1.online 在线
      window.addEventListener('online',function(){})
    2.offline 离线
      window.addEventListener('offline',function(){})

## 多媒体
  > 属性
    duration：返回当前音频/视频的长度（以秒计） 
    paused：设置或返回音频/视频是否暂停 
    currentTime：设置或返回音频/视频中的当前播放位置（以秒计）
    ended：返回音频/视频的播放是否已结束

  > 事件
    oncanplay：当文件就绪可以开始播放时运行的脚本（缓冲已足够开始时）。
    ontimeupdate： 当播放位置改变时（比如当用户快进到媒介中一个不同的位置时）运行的脚本。 
    onended：当媒介已到达结尾时运行的脚本（可发送类似“感谢观看”之类的消息）。

  > 方法
    play()：开始播放音频/视频 
    pause()：暂停当前播放的音频/视频

  > 视频全屏时去除掉默认的控制条

    video::-webkit-media-controls-enclosure {
      /*禁用播放器控制栏的样式*/
      display: none !important;
    }

  > 视频全屏时显示自定义的控制条

     z-index必须大于2147483647
     
## WebStorage API
  > 什么是WebStorage 

    所谓的WebStorage指的是客户端存储,在这里指的是浏览器端存储,比如在网站上自动登陆这些功能,其实就是把一些少量的数据存储在浏览器等客户端中,这样可以减少没必要的请求到服务器,降低服务器的压力,给用户提供更好的体验.
  
  > WebStorage的三种存储方式(务必要记住)

    cookie: 广泛使用 存储量4kb左右 会在浏览器和服务器间传递  一般由服务器端创建 可以设置存储时间(默认和session一样) cookie不容易操作

    session(会话)Storage: H5新增 存储量5M左右 只会在浏览器存储数据 只会由浏览器端创建 存储时间是打开浏览器开始关闭浏览器消失  方法简洁明了 容易操作

    local(本地)Storage: H5新增 存储量5M左右 只会在浏览器存储数据 只会由浏览器端创建 永久存储除非手动删除 方法简介明了 容易操作

  > sessionStorage

    添加数据: window.sessionStorage.setItem(key,value);
    获取数据: window.sessionStorage.getItem(key);
    移除数据: window.sessionStorage.removeItem(key);
    清除数据: window.sessionStorage.clear();
    获取key:  window.sessionStorage.key(n从0开始);

    应用场景: 存储一些少量临时的数据
  > localStorage

    添加数据: window.localStorage.setItem(key,value);
    获取数据: window.localStorage.getItem(key);
    移除数据: window.localStorage.removeItem(key);
    清除数据: window.localStorage.clear();
    获取key:  window.localStorage.key(n);

    应用场景: 网页换肤 京东购物车

## 拖拽

  > 为什么需要拖拽

    在写邮件的时候,我们经常会碰到诸如拖拽上传这样的需求,那么就需要用到拖拽

  > 拖拽元素和目标元素

    拖拽元素: 除了img标签,其他标签想要成为拖拽元素,必须给标签设置draggable="true"
    目标元素: 拖拽元素被拖拽到的目标

  > 拖拽元素的事件

    dragstart 当用户开始拖动一个元素或者一个选择文本的时候 dragstart 事件就会触发。
    drag      当用户完成dragstart之后,拖动一个元素的过程中,drag 事件会一直触发
    dragend   当用户结束拖动一个元素的时候,dragend事件就会触发

  > 目标元素的事件

    dragenter 当用户拖动一个元素,进入目标元素边缘范围的时候,dragenter 事件就会触发
    dragover  当用户拖动一个元素,进入目标元素且在目标元素范围内,dragover事件就会触发
    drop      当用户拖动一个元素被拖拽释放到一个有效的目标元素时,drop事件会触发

  > 传递数据
    ev.dataTransfer.setData(type,data) 设置拖动数据
    ev.dataTransfer.getData(type) 获取拖动数据
    ev.dataTransfer.files 本地文件列表

## 文件读取
  
  > 为什么需要文件读取
    在很久以前,前端并没有读物文件内容的能力,在很多时候,预览文件内容变得比较困难,在HTML5中新增了文件读取API
  
  > 文件读取的过程

    1. 实例化FileReader对象

    2. 使用FileReader对象的读取文件的方法准备读取文件
        readAsDataURL();   result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容.
        readAsText();      result属性中将包含一个字符串以表示所读取的文件内容.
    3. 等待读取操作完成(事件)
        onload 当读取操作成功完成时调用

    4. 通过result属性获取文件内容



  > 什么是WebStorage 

    所谓的WebStorage指的是客户端存储,在这里指的是浏览器端存储,比如在网站上自动登陆这些功能,其实就是把一些少量的数据存储在浏览器等客户端中,这样可以减少没必要的请求到服务器,降低服务器的压力,给用户提供更好的体验.
  
  > WebStorage的三种存储方式(务必要记住)

    cookie: 广泛使用 存储量4kb左右 会在浏览器和服务器间传递  一般由服务器端创建 可以设置存储时间(默认和session一样) cookie不容易操作

    session(会话)Storage: H5新增 存储量5M左右 只会在浏览器存储数据 只会由浏览器端创建 存储时间是打开浏览器开始关闭浏览器消失  方法简洁明了 容易操作

    local(本地)Storage: H5新增 存储量5M左右 只会在浏览器存储数据 只会由浏览器端创建 永久存储除非手动删除 方法简介明了 容易操作

  > sessionStorage

    添加数据: window.sessionStorage.setItem(key,value);
    获取数据: window.sessionStorage.getItem(key);
    移除数据: window.sessionStorage.removeItem(key);
    清除数据: window.sessionStorage.clear();
    获取key:  window.sessionStorage.key(n从0开始);

    应用场景: 存储一些少量临时的数据
  > localStorage

    添加数据: window.localStorage.setItem(key,value);
    获取数据: window.localStorage.getItem(key);
    移除数据: window.localStorage.removeItem(key);
    清除数据: window.localStorage.clear();
    获取key:  window.localStorage.key(n);

    应用场景: 网页换肤 京东购物车



  > 属性
    duration：返回当前音频/视频的长度（以秒计） 
    paused：设置或返回音频/视频是否暂停 
    currentTime：设置或返回音频/视频中的当前播放位置（以秒计）
    ended：返回音频/视频的播放是否已结束
  > 事件
    oncanplay：当文件就绪可以开始播放时运行的脚本（缓冲已足够开始时）。
    ontimeupdate： 当播放位置改变时（比如当用户快进到媒介中一个不同的位置时）运行的脚本。 
    onended：当媒介已到达结尾时运行的脚本（可发送类似“感谢观看”之类的消息）。
  > 方法
    play()：开始播放音频/视频 
    pause()：暂停当前播放的音频/视频

  > 视频全屏时去除掉默认的控制条

    video::-webkit-media-controls-enclosure {
      /*禁用播放器控制栏的样式*/
      display: none !important;
    }

  > 视频全屏时显示自定义的控制条

     z-index必须大于2147483647

## 地理定位
  Geolocation 可以使得Web应用程序给用户提供的地理位置信息.地理定位是隐私信息 获取地理定位信息的时候 浏览器会询问你是否允许 如果不允许 那么就禁止  否则允许

  > 获取一次地理位置的方法(回调)

    navigator.geolocation.getCurrentPosition(成功时的回调,失败时的回调,参数设置);

    成功时回调:
    function(position) {
      // position.coords  {
      //  latitude            纬度   latitude 23.13188
      //  longitude           经度   longitude 113.421895
      //  altitude            高度(海拔)
      //  accuracy            精确度
      //  altitude Accuracy   海拔精确度
      //  heading             行进方向
      //  speed               地面速度
      // } 
    }

    失败时回调:
    function(error) {
      // erroe.code :
      // 0:不包括其他错误编号中的错误
      // 1:用户拒绝浏览器获取位置信息
      // 2:尝试获取用户信息，但失败了
      // 3:设置了timeout值，获取位置超时了

    }

    参数设置: 
      {
        enableHighAcuracy 更精确的查找 默认false
        timeout: 获取位置允许最长时间 默认:infinity
      }

  > 实时获取地理位置的方法(回调)

    获取地理位置信息:
    watchID = navigator.geolocation.watchPosition(成功时的回调,失败时的回调,参数设置);
    清除获取
    navigator.geolocation.clearWatch(watchID);

  > 获取地理位置信息的几种方法

    1.GPS  特别精确 但是花的时间比较长
    2.wifi定位 比较精确 在农村比较难以实现
    3.IP定位  最不精确
    4.手机信号(4G) 非常精确   安卓  iOS不行(权限的问题)
    5.浏览器定位  非常不精确