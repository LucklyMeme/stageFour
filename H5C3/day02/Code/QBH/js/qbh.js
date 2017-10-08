$(document).ready(function () {
  //   $(".qbh-list .qbh-list-search-finish")没有运动
  var flag = false;
  // $(".qbh-buy .qbh-buy-rotate-sofa") 没有运动
  var flag1 = false;
  var flag2 = false;
  $('#fullpage').fullpage({
    sectionsColor: ['#fadd67', '#84a2d4', '#ef674d', '#ffeedd', '#d04759', '#84d9ed', '#4fdded', '#fff'],
    navigation: true,
    // 滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算// 
    afterLoad: function (anchorLink, index) {
      if(index == 1) {
        $(".down").fadeIn();
      }
      // console.log(anchorLink,index);
      if (index == 2 && flag == false) {
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
            }, 1000, function () {
              //   $(".qbh-list .qbh-list-search-finish")运动完了
              flag = true;
            });
            $(".qbh-list .qbh-list-sofas").show().animate({
              "height": 218
            },1000)
            $(".qbh-list .qbh-list-wordb").animate({
              "opacity": 1
            },function(){
              $(".down").fadeIn();
            })
          })
        })
      }

      if (index == 8) {
        // 获取鼠标的位置
        $(document).mousemove(function (ev) {
          // console.log(ev.pageX,ev.pageY);
          var mX = ev.pageX;
          var mY = ev.pageY+10;

          $(".qbh-shopping  .qbh-shopping-hands ").css({
            left: mX,
            top: mY
          })
        })

        $(".qbh-shopping  .qbh-shopping-start-shopping").mouseover(function(){
          $(".qbh-shopping .qhb-shopping-dong").show();
        })
      }
    },
    // 滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：index 是离开的“页面”的序号，从1开始计算；
    // nextIndex 是滚动到的“页面”的序号，从1开始计算；
    // direction 判断往上滚动还是往下滚动，值是 up 或 down。
    onLeave: function (index, nextIndex, direction) {
      // 只要出现离开该页面就把 继续向下隐藏
      $(".down").fadeOut();
      // console.log(index,nextIndex,direction);
      var wHeight = $(window).height();
      if (index == 2 && nextIndex == 3 && flag == true) {
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
          },function(){
            $(".down").fadeIn();
          })
        })
      }

      // 第三屏和第四屏动画
      if (index == 3 && nextIndex == 4 && flag1 == false) {
        $(".qbh-list .qbh-list-sofa-pic").hide();
        //  让沙发从第三屏掉到第四屏
        $(".qbh-buy .qbh-buy-rotate-sofa").show().animate({
          "bottom": -((wHeight - 250) + 50),
          "right": 260
        }, 1000, function () {
          flag1 = true;
          $(".qbh-buy .qbh-buy-sofa-pic").show();
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
              },function(){
                $(".down").fadeIn();
              })
            })
          })
        });
      }

      // 第五屏动画
      if (index == 4) {
        $(".qbh-payment .qbh-payment-hands").show().animate({
          "bottom": 0
        }, 1000, function () {
          $('.qbh-payment .qbh-payment-mouse-end').animate({
            "opacity": 1
          }, 10, function () {
            // 让顶部隐藏的沙发显示并掉入银行卡
            $(".qbh-payment .qbh-payment-rotate-sofa-start").show().animate({
              "bottom": 245
            }, 800, function () {
              $(".qbh-payment .qbh-payment-rotate-sofa-end").animate({
                "bottom": 70
              }, 500)

              $(".qbh-payment .qbh-payment-bill").animate({
                "bottom": 380
              }, 500,function(){
                $(".down").fadeIn();
              })
            })
          })

        })
      }

      // 第五屏到第六屏的动画
      if (index == 5 && nextIndex == 6 && flag2 == false) {
        $(".qbh-payment .qbh-payment-rotate-sofa-continue").show().animate({
          "bottom": -243,
          "width": 80
        }, 900)
        $(".qbh-delivery .qbh-delivery-box ").show().animate({
          "left": 317,
          "bottom": 435
        }, 800, function () {
          $(".qbh-payment .qbh-payment-rotate-sofa-continue").hide()
          $(".qbh-delivery .qbh-delivery-box ").animate({
            "left": 485,
            "bottom": 56,
            "width": 40
          }, 800, function () {
            $(".qbh-delivery .qbh-delivery-box ").hide();
            $(".qbh-delivery").animate({
              "backgroundPositionX": '100%'
            }, 2000, function () {
              flag2 = true;
              $(".qbh-delivery .qbh-delivery-font-end").animate({
                "opacity": 1
              })
              $(".qbh-delivery .qbh-delivery-deliveryman").animate({
                "width": 252,
                "bottom": 117
              }, 1000, function () {
                $(".qbh-delivery .qbh-delivery-deliveryman").animate({
                  "right": 600
                }, 1000, function () {
                  $(".qbh-delivery .qbh-delivery-shouhuo").show();
                  $(".qbh-delivery .qbh-delivery-door").show();

                  $(".qbh-delivery .qbh-delivery-buyer").animate({
                    "width": 87
                  },function(){
                    $(".down").fadeIn();
                  })
                })
              })
            })
            $(".qbh-delivery .qbh-delivery-shangjia").animate({
              "opacity": 1
            }, 800)

            $(".qbh-delivery .qbh-delivery-truck-font").animate({
              "opacity": 1
            }, 1500)
          })
        })
      }

      // 第六屏到第七屏动画
      if (index == 6 && nextIndex == 7) {

        $(".qbh-appraise .qbh-appraise-star").animate({
          "width": 100
        }, 1500, function () {

          $(".qbh-appraise .qbh-appraise-haoping").show().animate({
            "left": 395
          }, 1000, function () {
            $(".qbh-appraise .qbh-appraise-haoping").animate({
              "width": 72
            }, 500,function(){
              $(".down").fadeIn();
            })
          })
        })
      }
    }
  });
});

