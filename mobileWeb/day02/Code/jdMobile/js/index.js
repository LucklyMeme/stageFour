// 功能: 倒计时
// 步骤:

// 1. 获取元素 spike-time  为了获取里面的span

var spikeTime = document.querySelector(".spike-time");
var span = spikeTime.querySelectorAll("span");

// 2. 设置一个倒计时的总时间(正常的应该是从服务器获取  但是因为此处没有 因此假设一个总时间)

var sumTime = 3 * 60 * 60;

// 3. 声明一个定时器

var timer = setInterval(function(){

// 4.让时间递减
sumTime --;
// 5.判断时间是否小于0  如果小于0 那么清除定时器

if(sumTime < 0 ){

  clearInterval(timer);

  return false;

}

// 6.转换时间 (要把总时间转换成小时 分钟 秒)

var h = Math.floor(sumTime/3600);

var m = Math.floor(sumTime%3600/60);

var s = Math.floor(sumTime%60);


// console.log(h,m,s);
// 7.因此要获取小时  分钟 秒的 十位数 个位数  值直接写到span中就可以了

span[0].innerHTML = Math.floor(h/10);
span[1].innerHTML = Math.floor(h%10);


span[3].innerHTML = Math.floor(m/10);
span[4].innerHTML = Math.floor(m%10);


span[6].innerHTML = Math.floor(s/10);
span[7].innerHTML = Math.floor(s%10);

},1000)


