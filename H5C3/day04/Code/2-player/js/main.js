// 1.视频的播放与暂停 播放按钮的变化
// 2.总时间的显示
// 3.当前时间的显示
// 4.进度条的显示
// 5.跳跃播放
// 6.全屏播放

    // 获取元素
    var video = document.querySelector("video");
    var playBtn = document.querySelector(".play-btn");
    var durationTime = document.querySelector(".duration-time");
    var current = document.querySelector(".current-time");
    var progressBar = document.querySelector(".progress-bar");
    var progress = document.querySelector(".progress");
    var fullpageBtn = document.querySelector(".fullscreen")
    // 1.视频的播放与暂停 播放按钮的变化

    // 1.获取元素 video 按钮
    // 2.给按钮添加点击事件
    playBtn.onclick = function () {
        // 3.判断视频的播放状态(获取视频的状态) paused属性可以获取视频实在暂停状态
        if (video.paused) {
            // 4.如果是暂停状态 让其播放  出现暂停按钮  play()方法是让视频进行播放的方法
            video.play();
            document.querySelector(".play-btn i").classList.toggle("fa-pause");
        } else {
            // 5.如果是播放状态 让其暂停 出现播放按钮   pause()方法是让视频暂停的方法
            video.pause();
            document.querySelector(".play-btn i").classList.toggle("fa-pause");
        }
    }


    // 函数的节流
    // var flag = true;
    // if(flag == true) {
    //   video.play();
    //   flag = false;
    // }else {
    //   video.pause();
    //   flag=true;
    // }

    // 2.总时间的显示

    // 1.获取元素
    // 2.判断一下视频是否可以播放 oncanplay事件 当视频可以播放的时候 触发该事件
    video.oncanplay = function () {
        // 3.获取总时间  duration属性可以获取视频的总时间 1570.32  00:26:10
        // console.log(video.duration);
        // 4.把以秒为单位的总时间转换成小时 分钟 秒
        var h = Math.floor(video.duration / 3600);
        var m = Math.floor(video.duration / 60 - (h * 60));
        var s = Math.floor(video.duration % 60);
        // 5.判断转换好的数据大小是否小于10  如果小于10 加0
        h = h > 9 ? h : '0' + h;
        m = m > 9 ? m : '0' + m;
        s = s > 9 ? s : '0' + s;
        // 6.把处理好的结果放到duration-time span中
        durationTime.innerHTML = h + ':' + m + ":" + s;
    }



    // 3.当前时间的显示

    // 1.获取元素
    // 2.不断更新当前时间显示到页面上 事件:ontimeupdate 当视频不断的播放 该事件不断的触发
    video.ontimeupdate = function () {
        // console.log(video.currentTime); currentTime是以秒为单位的


        // 3.获取当前时间   属性:currentTime 该属性可以获取当前视频的播放进度
        // 4.把当前时间分成小时分钟秒
        var h = Math.floor(video.currentTime / 3600);
        var m = Math.floor(video.currentTime / 60 - (h * 60));
        var s = Math.floor(video.currentTime % 60);
        // 5.判断转换好的数据大小是否大于9  如果大于9 不加0
        h = h > 9 ? h : '0' + h;
        m = m > 9 ? m : '0' + m;
        s = s > 9 ? s : '0' + s;
        // 6.把处理好的结果放到span中
        current.innerHTML = h + ':' + m + ":" + s;


        // 4.进度条的显示

        // 1.获取进度条
        // 2.计算:进度条的宽度= 当前时间/总时间*100+‘%’
        progressBar.style.width = video.currentTime / video.duration * 100 + "%";
    }



    // 5.跳跃播放

    // 思路:视频的当前时间= progress的点击的X轴的位置/progress的宽度*视频的总时间

    // 1.获取progress元素
    // 2.点击progress元素获取x轴点击的位置
    progress.onclick = function (e) {
        // 2.获取x轴点击的位置
        // console.log(e);
        var xoffset = e.offsetX;
        console.log(xoffset);
        // 3.获取progress的总宽度
        var progressWidth = this.offsetWidth;
        // console.log(progressWidth);
        // 4.按照思路进行计算
        video.currentTime = xoffset / progressWidth * video.duration;
    }


    // 全屏播放
    fullpageBtn.onclick = function () {
        video.webkitRequestFullScreen();
    }



