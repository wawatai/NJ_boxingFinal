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

    //gBlock ??????
    $(".mainArea .pkTeam .team button").click(function(){
        $(".mainArea .pkTeam .team button")
        .removeClass("active");

        $(this)
        .addClass("active");

        $(".right")
        .addClass("active");

        $(".center .right .betTypeList li:first-child")
        .addClass("active");

        $(".right .betContent .betData")
        .addClass("display")
        .siblings().removeClass("display");
    })

    //right
    $(".center .right .closeRight").click(function(){
        $(".right")
        .removeClass("active");
    })

    $(".betDetail .bdContent .top i").click(function(){
        $(".right .betContent>div")
        .toggleClass("display");

        $(".center .right .betTypeList li")
        .removeClass("active");

        $(".mainArea .pkTeam .team button")
        .removeClass("active");
    })

    $(".right .betBlock .betContent .changeBtn").click(function(){
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

//myResult
$(function(){
    var n = $("footer").prop("scrollHeight");

    $(".myResult")
    .css("bottom",""+ n +"px");

    $(window).resize(function(){
        var n = $("footer").prop("scrollHeight");

        $(".myResult")
        .css("bottom",""+ n +"px");
    })
})

//textHide ??????????????????
$(document).on("click","table p",function(){
    var length = $(this).text().length;

    if ($(window).width() <= 500 && length > 3)
    {
        $(this)
        .toggleClass("active");
    }
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
})

//message
$(function(){
    $(".mailPage .messageBox li,.innerBox.mailPage.inner .backBtn").click(function(){
        $(".innerBox.mailPage")
        .toggleClass("display");

        $(this).find(".unread")
        .removeClass("display");
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

    //????????????
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

    //????????????
    $(".cancleBtn").click(function(){
        $(".filter")
        .addClass("display")
        .find(".jumpWindow.cancelBet")
        .addClass("display");
    })

    //????????????
    $(".callgameType").click(function(){
        $(".filter")
        .addClass("display")
        .find(".jumpWindow.chooseball")
        .addClass("display");
    })

    //????????????
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
    
    //????????????
    $(".jumpWindow.choosedate .content input").click(function(){
        var value = $(this).val();
        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");

        $(".betPage .mainArea .innerBox .selectNav .today").text(value);
    })
})