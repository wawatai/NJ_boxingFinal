//header
$(function(){
    $("header .checkBox .title").click(function(){
        $(this).next()
        .toggleClass("display");
    })

    $("header .checkBox label").on("change",function(){
        $(this)
        .addClass("active")
        .parent().siblings().find("label").removeClass("active");

        var n = $(this).next().text();
        $(this).parent().prevAll(".innerTitle")
        .text(""+ n +"");

        $("header .checkBox .title span")
        .text(""+ n +"");

            $("header .checkBox ul")
            .removeClass("display");
    })

    $("header .checkBox li").on("click",function(){
        $(this).find("label")
        .change();

        $("header .checkBox ul")
        .removeClass("display");
    })

    $(".rwd_TOPNav").click(function(){
        $(this)
        .children().toggleClass("display");

        $("main .center .left")
        .toggleClass("active");
    })
})

//time
function currentTime() {
    now = new Date();
    yy = now.getFullYear();
    mm = now.getMonth() + 1;
    dd = now.getDate();
    h = now.getHours();
    m = now.getMinutes();
    s = now.getSeconds();
    var curTime = document.getElementsByClassName('time');
    curTime[0].innerHTML = h+' : '+m+' : '+s;
    setTimeout('currentTime()',1000);

    if(h < 10)
    {
        curTime[0].innerHTML = '0'+h+' : '+m+' : '+s;
    }
    if(m < 10)
    {
        curTime[0].innerHTML = h+' : 0'+m+' : '+s;
    }
    if(s < 10)
    {
        curTime[0].innerHTML = h+' : '+m+' : 0'+s;
    }
}

//mainArea
$(function(){
    //Swiper
    var swiper = new Swiper('.swiper', {
        autoHeight: true,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        slidesPerView: 1,
        breakpoints: {
            1000: {
                slidesPerView: 1,
                spaceBetween: 0,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });

    var swiper02 = new Swiper('.swiper02', {
        autoHeight: true,
        slidesPerView: "auto",
        spaceBetween: 10,
        freeMode: true,
        navigation: {
            nextEl: '.swiper-button-next02',
            prevEl: '.swiper-button-prev02',
          },
    });
 
    //gameTypeBox
    $(".gameTypeBox").click(function(){
        $(this)
        .addClass("active")
        .closest(".swiper-slide")
        .siblings()
        .find(".gameTypeBox")
        .removeClass("active");
    })

    //gBlock 投注
    $(".pkTeam .team button").click(function(){
        $(this)
        .addClass("active")
        .closest(".team")
        .siblings()
        .find("button")
        .removeClass("active");

        $(".center .right .betTypeList li:first-child")
        .addClass("active");

        $(".center .right .betBlock .betContent .noData")
        .removeClass("display")
        .next()
        .addClass("display");
    })

    //right
    $(".center .right .closeRight").click(function(){
        $(this)
        .closest(".right")
        .removeClass("active");
    })

    $(".right .betBlock .betContent .betDetail .bdContent .top i").click(function(){
        $(this)
        .closest(".betDetail")
        .remove();

        if( $(".right .betBlock .betContent .betData .bdOuter").length() == 0 )
        {
            $(this)
            .closest(".betData")
            .removeClass("active")
            .next()
            .addClass("active");
        }
    })

    $(".right .betBlock .betContent .changeBtn").click(function(){
        $(this)
        .toggleClass("active");
    })

    var ww = $(window).innerWidth();

    if(ww < 1024)
    {
        var wh = $(window).innerHeight();

        $(".left")
        .css("height",""+ (wh - 90) +"");

        $(window).resize(function(){
            var wh = $(window).innerHeight();

            $(".left")
            .css("height",""+ (wh - 90) +"");
        })
    }

    $(window).resize(function(){
        var ww = $(window).innerWidth();

        if(ww < 1024)
        {
            var wh = $(window).innerHeight();

            $(".left")
            .css("height",""+ (wh - 90) +"");

            $(window).resize(function(){
                var wh = $(window).innerHeight();

                $(".left")
                .css("height",""+ (wh - 90) +"");
            })
        }
    })
})

//gameDetail
$(function(){
    $(".center .gameDetail .info_content .infoBlock").click(function(){
        $(this)
        .toggleClass("active");
    })
})

//betPage
$(function(){
    $(".betPage table th").click(function(){
        $(this)
        .closest("table")
        .toggleClass("active");
    })

    $(".betPage .history_bet .dataNum").click(function(){
        $(this).closest("li")
        .toggleClass("active");
    })

    $(".betPage .selectNav select").change(function(){
        $(".betPage .betBox")
        .toggleClass("display");
    })
})

//textHide 按了字會展開
$(document).on("click","table p",function(){
    var length = $(this).text().length;

    if ($(window).width() <= 500 && length > 3)
    {
        $(this)
        .toggleClass("active");
    }
})

//memberPage
$(function(){
    $(".myPage .rewrad_btn button").click(function(){
        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");

        if ($(this).index() == 0) {
            $(".reward_stauts span").text('使用中');
        }
        else {
            $(".reward_stauts span").text('未使用');
        }
    })

    $(".myPage .userOther .submitBtn").click(function(){
        $(this)
        .closest(".userOther")
        .toggleClass("edit")
        .find(".submitBtn")
        .toggleClass("display");
    })
})

//memberSetting
$(function(){
    $(".userSetting .mainArea .switchBtn").click(function(){
        $(this)
        .toggleClass("active");
    })

    $(".userSetting .mainArea .btnBox input").click(function(){
        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
    })
})

//footer
$(function(){
    $("footer .lang>.flag").click(function(){
        $("footer .checkBox")
        .toggleClass("display");
    })

    $("footer .checkBox label").on("change",function(){
        $(this)
        .addClass("active")
        .parent().siblings().find("label").removeClass("active");

        $("footer .checkBox")
        .removeClass("display");
    })

    $("footer .checkBox li").on("click",function(){
        $(this).find("label")
        .change();

        $("footer .checkBox")
        .removeClass("display");
    })

    //rwd 手機版
    $("footer .mobileFooter li a").click(function(){
        $(this).parent()
        .addClass("active")
        .siblings()
        .removeClass("active");
    })
})

//message
$(function(){
    $(".messagePage .messageBox li,.messagePage .innerBox.inner .backBtn").click(function(){
        $(".messagePage .innerBox")
        .toggleClass("display");

        $(this).find(".unread")
        .removeClass("display");

        if ($(window).innerWidth() > 501)
        {
            $(".messagePage .innerBox.inner.display .topLine button")
            .css("display","block")
            .css("top","85px")
            .css("left","unset")
            .css("right","52px")
            .css("transform","translateY(0)");
        }

        else {
            $(".messagePage .innerBox.inner.display .topLine button")
            .css({
                "top" : "50%",
                "left" : "0",
                "right" : "unset",
                "transform" : "translateY(-50%)"
            });
        }
    })

    $(window).resize(function(){
        
        if ($(window).innerWidth() > 501)
        {
            $(".messagePage .innerBox.inner.display .topLine button")
            .css("top","85px")
            .css("left","unset")
            .css("right","52px")
            .css("transform","translateY(0)");
        }
        else {
            $(".messagePage .innerBox.inner.display .topLine button")
            .css({
                "top" : "50%",
                "left" : "0",
                "right" : "unset",
                "transform" : "translateY(-50%)"
            });
        }
    })
})

//jumpWindow 
$(function(){
    $(".filter .jumpWindow .jwTitle .closeIC").click(function(){
        $(this)
        .closest(".jumpWindow")
        .removeClass("display");

        $(".filter")
        .removeClass("display");
    })

    $(".filter .jumpWindow .closeWindow").click(function(){
        $(this)
        .closest(".jumpWindow")
        .removeClass("display");

        $(".filter")
        .removeClass("display");
    })

    $(".filter .jumpWindow .submitBtn").click(function(){
        $(this)
        .closest(".jumpWindow")
        .removeClass("display");

        $(".filter")
        .removeClass("display");
    })

    //請先登入
    var child = $("main:not(.inMain)").children();
    $("main:not(.inMain)").click().click(function(child){
        $(".filter")
        .addClass("display")
        .find(".jumpWindow.plsLogIn")
        .addClass("display");
    })
    $("footer.unlog .mobileFooter:not(:first-child)").click().click(function(child){
        $(".filter")
        .addClass("display")
        .find(".jumpWindow.plsLogIn")
        .addClass("display");
    })

    //撤銷投注
    $(".cancleBtn").click(function(){
        $(".filter")
        .addClass("display")
        .find(".jumpWindow.cancelBet")
        .addClass("display");
    })

    //投注結果
    $(".callgameType").click(function(){
        $(".filter")
        .addClass("display")
        .find(".jumpWindow.chooseball")
        .addClass("display");
    })

    //選擇球種
    $(".jumpWindow.chooseball .content input").click(function(){
        var value = $(this).val();
        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");

        $(".betPage .mainArea .innerBox .selectNav .gameType p").text(value);
    })

    $(".calldate").click(function(){
        $(".filter")
        .addClass("display")
        .find(".jumpWindow.choosedate")
        .addClass("display");
    })
    
    //選擇日期
    $(".jumpWindow.choosedate .content input").click(function(){
        var value = $(this).val();
        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");

        $(".betPage .mainArea .innerBox .selectNav .today").text(value);
    })
})