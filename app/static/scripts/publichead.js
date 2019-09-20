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
    console.log(localStorage.getItem("islogin"))
    if(localStorage.getItem("islogin")){
        if(localStorage.getItem("islogin") == 1){
            $(".welcome_r .login").hide();
            $(".welcome_r .islogin").show();
            $(".welcome_r .islogin .un").html(localStorage.getItem("username"));
        }else{
            $(".welcome_r .login").show();
            $(".welcome_r .islogin").hide();
            $(".welcome_r .islogin .un").html('');
        }
    }
    $(".welcome_r .islogin .signOut").on("click",function(){
        localStorage.setItem("islogin","0");
        $(".welcome_r .login").show();
        $(".welcome_r .islogin").hide();
    })
});
