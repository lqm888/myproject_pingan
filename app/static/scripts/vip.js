$(".four1").hover(
    function () {
        $(this).find(".icon").removeClass("f").addClass("f1").next().addClass('on');
    },
    function () {
        $(this).find(".icon").removeClass("f1").addClass("f").next().removeClass('on');
    }
);
$(".four2").hover(
    function () {
        $(this).find(".icon").removeClass("s").addClass("s1").next().addClass('on');
    },
    function () {
        $(this).find(".icon").removeClass("s1").addClass("s").next().removeClass('on');
    }
);
$(".four3").hover(
    function () {
        $(this).find(".icon").removeClass("t").addClass("t1").next().addClass('on');
    },
    function () {
        $(this).find(".icon").removeClass("t1").addClass("t").next().removeClass('on');
    }
);
$(".four4").hover(
    function () {
        $(this).find(".icon").removeClass("fo").addClass("fo1").next().addClass('on');
    },
    function () {
        $(this).find(".icon").removeClass("fo1").addClass("fo").next().removeClass('on');
    }
);

var lis = $(".five");
lis.hover(function () {
        $(this).find(".s").css('display', 'none');
        $(this).find(".h").css('display', 'block');
        $(this).find(".tit").addClass('on');
    },
    function () {
        $(this).find(".s").css('display', 'block');
        $(this).find(".h").css('display', 'none');
        $(this).find(".tit").removeClass('on');
    });

// var sec = $(".second-nav");
// console.log(sec);
// sec.prev().hover(function(){
//     console.log($(this));
//     $(this).next().css({'display':'block','z-index':'2'});
// },function(){
//     $(this).next().css('display', 'none');
// });
var close = $(".close");
close.click(function(){
    $(this).parent().css({'display':'none'});

});
var show = $(".show");
show.mouseover(function(){
    $(this).find(".second-nav").css('display', 'block');
    $(this).siblings().find(".second-nav").css('display', 'none');

});


