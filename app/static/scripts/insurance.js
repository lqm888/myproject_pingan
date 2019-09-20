require.config({
    baseUrl: '../static/scripts',
    paths: {
        jquery: "jquery",
        publichead: "publichead",
        ConverImg: 'ConverImg',
        fixed: 'fixed'
    }
});

require(['jquery','ConverImg','fixed'],function ($,c){
    $('#head').load('./publichead.html',function (){
        require(["publichead"]);
    });

    $('#foot').load('./footer.html');

    c.ConverImg.init();


    $('.aside-left ul').on('mouseenter','li',function (){
        $(this).find('.safe').show();
        $(this).find('i').parent().css('color','#f36c34');
        $(this).addClass('show');
        $(this).find('i').css('backgroundPositionX','-21px');
        
    });
    $('.aside-left ul').on('mouseleave','li',function (){
        $(this).find('.safe').hide();
        $(this).find('i').parent().css('color','#fff');
        $(this).removeClass('show');
        $(this).find('i').css('backgroundPositionX','0');
    });
    


    $(function (){

        // function move(dom,target){
        //     var t = parseInt(dom.css('top'));
        //     dom.timer = null;
        //     dom.timer = setInterval(function (){
        //         console.log(t);
                
        //         if(t < target){
        //             var speed = 10;
        //         }else{
        //             var speed = -10;
        //         }
        //         if (Math.abs(target-t) < Math.abs(speed)){
        //             dom.css('top',target + 'px');
        //             clearInterval(dom.timer);
        //         }else{
        //             t += speed;
        //             dom.css('top',t + 'px');
        //         }
        //     },10);
        
        // };

        // $('.group ul').on('mouseenter','li',function (){
            
        //     move($(this).find('.mask-title'),276);
        //     move($(this).find('.mask-con'),0);
        // });

        // $('.group ul').on('mouseleave','li',function (){
            
        //     move($(this).find('.mask-title'),196);
        //     move($(this).find('.mask-con'),276);
        // });


        $('.group ul').on('mouseenter','li',function (){
            
            $(this).find('.mask-title').animate({top: 276} , {duration:300,queue:false});
            $(this).find('.mask-con').animate({top: 0} , {duration:300,queue:false});
        });

        $('.group ul').on('mouseleave','li',function (){
            
            $(this).find('.mask-title').animate({top: 196} , {duration:300,queue:false});
            $(this).find('.mask-con').animate({top: 276} , {duration:300,queue:false});
        });


        $('.groupimg').on('mouseenter','img',function (){

            var index = $(this).index();

            $.each($('.group1'),function (i,item){
                if (i == index){
                    $('.group1').eq(i).addClass('groupshow');
                }else{
                    $('.group1').eq(i).removeClass('groupshow');
                }
            });
            
        });

        $('.topic-left').on('mouseenter',function (){
            $(this).find('img').css('transform','scale3d(1.1,1.1,1)');

        }).siblings().on('mouseenter',function (){
            $(this).find('img').css('transform','scale3d(1.1,1.1,1)');

        });

        $('.topic-left').on('mouseleave',function (){
            $(this).find('img').css('transform','scale3d(1,1,1)');

        }).siblings().on('mouseleave',function (){
            $(this).find('img').css('transform','scale3d(1,1,1)');

        });

        

    });
});