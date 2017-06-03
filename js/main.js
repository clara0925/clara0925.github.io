/**
 * Created by Clara on 2017/6/1.
 */
//页面加载缓冲
window.addEventListener("load", function() {
    var preAnimation = document.getElementById("preAnimation");
    document.body.removeChild(preAnimation);
});

//banner文字
$(function(){
    $(".banner-text-container").animate({left: 150,opacity:1},1500);
});

//滚动事件
$(window).scroll(function() {
    if ($(document).scrollTop() > 690) {
        $("header").css({ background: "#ABD0CE" }).show("slow");
    } else if ($(document).scrollTop() < 690) {
        $("header").css({ background: "#9d9a95" }).show("slow");
    }
});

//定位导航
$(function() {
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        var currentItemId = "";

        $(".scroll-item").each(function() {
            var itemTop = $(this).offset().top;
            if (top > itemTop - 600) {
                currentItemId = "#" + $(this).attr("id");
            } else {
                return false;
            }
        });
        var cur = $("nav").find(".current");
        if (currentItemId && cur.attr("href") != currentItemId) {
            cur.removeClass("current");
            $("nav").find("[href='" + currentItemId + "']").addClass("current");
        }
    });
});

$(function() {
    $(".work-describe").hide();
    $(".work a").hover(
        function() {
            $(this).find(".work-describe").fadeIn().animate(350);
            $(this).find(".work-describe p").slideDown();
            $(this)
                .find("img")
                .stop()
                .animate(
                    {
                        height: "336px",
                        width: "420px",
                        marginLeft: "-35px",
                        marginTop: "-35px"
                    },
                    350
                );
        },
        function() {
            $(this).find(".work-describe").fadeOut().animate(200);
            $(this).find(".work-describe p").slideUp().animate(400);
            $(this)
                .find("img")
                .stop()
                .animate(
                    { height: "280px", width: "350px", marginLeft: "0", marginTop: "0" },
                    200
                );
        }
    );
});

//作品动效
$(window).scroll(function() {
    var delay = 0;
    if ($(document).scrollTop() > 300) {
        $("#pot-2").find("a").each(function(){
            $(this)
                .delay(delay).animate(
                {paddingTop: "100px",
                 opacity: 1
                },400,"swing");
            delay += 200;
        })
    }
});