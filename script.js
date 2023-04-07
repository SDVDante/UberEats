"use strict";

$(document).ready(function () {

    $(function () {
        $("#anchor").hide();

        $(window).scroll(function () {
            if ($(this).scrollTop() > 750) {
                $("#anchor").fadeIn();
            } else {
                $("#anchor").fadeOut();
            }
        });

        $("#anchor").click(function () {
            $("body,html").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    });
});

$(".title-menu").not(":first").hide();
$(".navbar-items .navbar-items__item").click(function () {
    $(".navbar-items .navbar-items__item").removeClass("active").eq($(this).index()).addClass("active");
    $(".title-menu").hide().eq($(this).index()).fadeIn();
}).eq(0).addClass("active");