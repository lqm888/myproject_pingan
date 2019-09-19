define(["jquery"],function ($){
    $('.loginbar_r ul li').eq(1).on('mouseover',function (){
        $('.qrcode').show();
    });
    $('.loginbar_r ul li').eq(1).on('mouseout',function (){
        $('.qrcode').hide();
    });
    
    $('.loginbar_r ul li').eq(3).on('mouseover',function (){
        $('.webmap').show();
    });
    $('.loginbar_r ul li').eq(3).on('mouseout',function (){
        $('.webmap').hide();
    });
    
    $('.wealthbox').on('mouseenter',function (){
        $('.wealth').show();
    });
    $('.wealthbox').on('mouseleave',function (){
        $('.wealth').hide();
    });
    
    $('.insurbox').on('mouseenter',function (){
        $('.insur').show();
    });
    $('.insurbox').on('mouseleave',function (){
        $('.insur').hide();
    });
    
    $('.header_r ul').on('mouseenter','a',function (){
        $(this).css('color','#f36c28');
    });
    $('.header_r ul').on('mouseleave','a',function (){
        $(this).css('color','#171717');
    });
    
    $('.search input').on('focus',function (){
        $(this).css('backgroundColor','#eee');
    });
    $('.search input').on('blur',function (){
        $(this).css('backgroundColor','#fff');
    });

    // return {
    //     publichead: publichead
    // }
});

// var publichead = (function (){
//     $('.loginbar_r ul li').eq(1).on('mouseover',function (){
//         $('.qrcode').show();
//     });
//     $('.loginbar_r ul li').eq(1).on('mouseout',function (){
//         $('.qrcode').hide();
//     });
    
//     $('.loginbar_r ul li').eq(3).on('mouseover',function (){
//         $('.webmap').show();
//     });
//     $('.loginbar_r ul li').eq(3).on('mouseout',function (){
//         $('.webmap').hide();
//     });
    
//     $('.wealthbox').on('mouseenter',function (){
//         $('.wealth').show();
//     });
//     $('.wealthbox').on('mouseleave',function (){
//         $('.wealth').hide();
//     });
    
//     $('.insurbox').on('mouseenter',function (){
//         $('.insur').show();
//     });
//     $('.insurbox').on('mouseleave',function (){
//         $('.insur').hide();
//     });
    
//     $('.header_r ul').on('mouseenter','a',function (){
//         $(this).css('color','#f36c28');
//     });
//     $('.header_r ul').on('mouseleave','a',function (){
//         $(this).css('color','#171717');
//     });
    
//     $('.search input').on('focus',function (){
//         $(this).css('backgroundColor','#eee');
//     });
//     $('.search input').on('blur',function (){
//         $(this).css('backgroundColor','#fff');
//     });
// })();

