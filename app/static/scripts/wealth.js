require.config({
    baseUrl: '../static/scripts',
    paths: {
        jquery: 'jquery',
        publichead: 'publichead',
        ConverImg: 'ConverImg',
        scrollMove: 'scrollMove',
        count: 'count',
        fixed: 'fixed'

    }
});

require(['jquery','ConverImg','scrollMove','count','fixed'],function ($,c,s,count){
    $('#head').load('./publichead.html',function (){
        require(['publichead']);
    });

    $('#foot').load('./footer.html');
    

    c.ConverImg.init();
  
    $(function (){
    
        $('.group-left').eq(1).css('background','url(../static/images/068_r.jpg) no-repeat 0 0');
        $('.group-left').eq(2).css('background','url(../static/images/071_r.jpg) no-repeat 0 0');
        $('.group-left').eq(3).css('background','url(../static/images/072_r.jpg) no-repeat 0 0');
        $('.right2').eq(1).css('background','url(../static/images/070_r.png) no-repeat 258px 20px');
        $('.group-left').eq(0).css('borderRight','none');
        $('.group-left').eq(3).css('borderRight','none');


        $('.group-bot li').on('mouseenter',function (){
            $(this).find('a').css('transform','translateY(-10px)');
            $(this).find('a').css('backgroundColor','#fff');
        });

        $('.group-bot li').on('mouseleave',function (){
            $(this).find('a').css('transform','translateY(0)');
            $(this).find('a').css('backgroundColor','#f1f0f0');
        });

        $('.content-nav').on('click','a',function (){
            clearInterval(timer);
            var target = $(this).attr('top');
            s.scrollMove(parseInt(target));

        });


    });

});