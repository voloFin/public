'use-strict';

/*var animatedNav = function() {
    $(window).stop().on("scroll", function() {
        var scrollLocation = $(window).scrollTop();
        var gridPos = $("#main").position();
        var gridTop = gridPos.top;
        if (scrollLocation + 80 >= gridTop) {
            $(".top-nav").addClass("light");
            $(".page-link").addClass("dark");
            $(".volo").attr("src","images/logo-dark.png");
        }
        else {
            $(".top-nav").removeClass("light");
            $(".page-link").removeClass("dark");
            $(".volo").attr("src","images/logo-light.png");
        };
    });
};*/

var clickableButton = function() {
    $(document.body).on("mousedown", ".clickable", function() {
       $(this).css("box-shadow", "none");
    });
    $(document.body).on("mouseup", ".clickable", function() {
       $(this).css("box-shadow", "0 .2em .5em rgba(0,0,0,.26)");
    });
};

$(document).ready(function() {
    /*animatedNav();*/
    clickableButton();
});