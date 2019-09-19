define(['jquery','scrollMove'], function($, s) {

    var timer;

    $('.fixed1').on('mouseenter',function (){
        $(this).find('.fixopen').show();
    });
    
    $('.fixed1').on('mouseleave',function (){
        $(this).find('.fixopen').hide();
    });

    $('.fixed2').on('mouseenter',function (){
        $(this).find('p').css('visibility','visible');
        $(this).find('i').css('visibility','hidden');
    });

    $('.fixed2').on('mouseleave',function (){
        $(this).find('p').css('visibility','hidden');
        $(this).find('i').css('visibility','visible');
    });

    $('.fixed3').on('mouseenter',function (){
        $(this).find('p').css('visibility','visible');
        $(this).find('i').css('visibility','hidden');
    });

    $('.fixed3').on('mouseleave',function (){
        $(this).find('p').css('visibility','hidden');
        $(this).find('i').css('visibility','visible');
    });

    $('.fixed3').on('click',function (){
        clearInterval(timer);
        s.scrollMove(0);
    });
    
});