define(['jquery'], function($) {

    $(".dk .listWarp .zy").on("click",'div',function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
    $(".dk .listWarp .countNow").on("click",function(){
        var val = $('.dk .income .inc').val() * 1;
        console.log(val);
        if(val){
            $(".dk .listWarp .count").hide();
            $(".dk .listWarp .count_after").show();
            $('.count_after .limit strong').html(val);
        }else{
            $("option[value=0]").attr("selected")
            $(".dk .listWarp .count .tips").show();
            setTimeout(function(){
                $(".dk .listWarp .count .tips").hide();
            },500)
        }
    })

    $(".dk .listWarp .again").on("click",function(){
        $(".dk .listWarp .count_after").hide();
        $(".dk .listWarp .count").show();
    })



    return{

    }
});