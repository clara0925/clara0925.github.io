/**
 * Created by Clara on 2017/6/1.
 */
window.addEventListener("load", function() {
    var preAnimation = document.getElementById("preAnimation");
    document.body.removeChild(preAnimation);
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 400) {
        $("header").css({ background: "#ABD0CE" });
    } else if ($(document).scrollTop() < 400) {
        $("header").css({ background: "#9d9a95" });
    }
});

$(document).ready(function() {
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

$(document).ready(function() {
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
