$(document).ready(function () {
  $('#fullpage').fullpage({
    sectionsColor: ['#fadd67', '#84a2d4', '#ef674d', '#ffeedd', '#d04759', '#84d9ed', '#4fdded', '#fff'],
    navigation: true,
    // 滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算// 
    afterLoad: function (anchorLink, index) {
      // console.log(anchorLink,index);
      if (index == 2) {
        // 让 .qbh-list-search显示并且移动到电脑的中心
        $(".qbh-list .qbh-list-search").show().animate({
          "right": 383
        }, 1000, function () {
          $('.qbh-list .qbh-list-search-font').animate({
            "opacity": 1
          }, 1000, function () {
            $('.qbh-list .qbh-list-search').hide();
            $(".qbh-list .qbh-list-search-finish").show().animate({
              "bottom": 449,
              "right": 250,
              "height": 30,
              "left": 'none'
            });
            $(".qbh-list .qbh-list-sofas").show().animate({
              "height": 218
            })
            $(".qbh-list .qbh-list-wordb").animate({
              "opacity": 1
            })
          })
        })
      }
    },
    // 滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：index 是离开的“页面”的序号，从1开始计算；
    // nextIndex 是滚动到的“页面”的序号，从1开始计算；
    // direction 判断往上滚动还是往下滚动，值是 up 或 down。
    onLeave: function (index, nextIndex, direction) {
      // console.log(index,nextIndex,direction);
      var wHeight = $(window).height();
      if (index == 2 && nextIndex == 3) {
        $(".qbh-list .qbh-list-sofa-pic").show().animate({
          // 掉下去的沙发的定位(bottom) = -(浏览器的高度-250)
          "bottom": -(wHeight - 250),
          "right": 518,
          "width": 204
        }, 1000, function () {
          $(".qbh-buy .qbh-buy-choose-end").animate({
            "opacity": 1
          })
          $(".qbh-buy .qbh-buy-add-cart-end").animate({
            "opacity": 1
          })
        })
      }

      // 第三屏和第四屏动画
      if (index == 3 && nextIndex == 4) {
        $(".qbh-list .qbh-list-sofa-pic").hide();
        $(".qbh-buy .qbh-buy-rotate-sofa").show().animate({
          "bottom": -((wHeight - 250) + 50),
          "right": 260
        }, 1000, function () {
          $(".qbh-buy .qbh-buy-rotate-sofa").hide();
          $(".qbh-info .qbh-info-rotate-sofa ").show();
          $(".qbh-info .qbh-info-cart-box").animate({
            "left": 2000
          }, 1500, function () {
            $(".qbh-info .qbh-info-address").animate({
              "opacity": 1
            }, 1000, function () {
              $(".qbh-info .qbh-info-wordb").animate({
                "opacity": 1
              })
              $(".qbh-info .qbh-info-address-font ").animate({
                "opacity": 1
              })
            })
          })
        });
      }

      // 第五屏动画
      if (index == 4 && nextIndex == 5) {
        $(".qbh-payment .qbh-payment-hands").animate({
          "bottom": 0
        }, 2000, function () {
          $('.qbh-payment .qbh-payment-mouse-end').animate({
            "opacity": 1
          }, 500, function () {
            $(".qbh-payment .qbh-payment-sofa-start").show().animate({
              "bottom": 230
            }, 500, function () {
              $(".qbh-payment .qbh-payment-sofa-end").show();
              $(".qbh-payment .qbh-payment-bill").animate({
                "bottom": 360
              })
            })
          })
        })
      }

      // 第六屏动画
      if (index == 5 && nextIndex == 6) {
        $(".qbh-payment .qbh-payment-sofa-end-continue").show().animate({
          "bottom": -240,
          "width": 80
        }, 1100)
        $(".qbh-delivery  .qbh-delivery-box").show().animate({
          "bottom": 440,
          "left": 318
        }, 1300, function () {
          $(".qbh-payment .qbh-payment-sofa-end-continue").hide();
          $(".qbh-delivery  .qbh-delivery-box").animate({
            "bottom": 37,
            "left": 559
          }, 1000, function () {
            $(".qbh-delivery  .qbh-delivery-box").hide()
            $(".qbh-delivery").animate({
              "backgroundPositionX": '100%'
            }, 2000,function(){
              $(".qbh-delivery .qbh-delivery-deliveryman").show().animate({
                "height":'200%'
              },500,function(){
                $(".qbh-delivery .qbh-delivery-deliveryman").animate({
                  "right": -120
                },800)
              })
            })
          })
        })


      }
    }
  });
});