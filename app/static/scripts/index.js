// 轮播图
require.config({
    baseUrl: "../static/scripts",
    paths: {
        'aj':'ajax',
        'jquery':['http://libs.baidu.com/jquery/2.0.3/jquery','jquery'],
    }
});
// require(['aj','jquery'],function(aj,$){
//     var timer1 = '';
//     var num = 0;
//     console.log(aj['a']);
//     console.log(aj['jso']);
// })

require(['jquery'],function($){
    if(typeof Worker !== undefined){
        // alert("支持多线程");
        var worker = new Worker('../static/scripts/worker.js');
        worker.postMessage("ajax");
        worker.onmessage = function(event){
            var json = JSON.parse(event.data);
            ;
            for(var i=0; i<json.length; i++){
                var $newLi = $('<li>'+
                '<a href="#">'+
                    '<img src="'+json[i].url+'" alt="">'+
                '</a>'+
                '</li>');
                $newLi.find("a").eq(0).css("backgroundImage","url("+json[i].url+")");
                $(".imgWarp ul").append($newLi);

                $(".mid .navlist").append($("<span></span>"));
            }
            worker.terminate();

            $(".imgWarp ul").find("li").eq(0).show().siblings().hide();
            $(".mid .navlist").find("span").eq(0).addClass("active").siblings().removeClass("active");
            autoMove();

            $(".navlist span").on("mouseover",function(){
                $(".imgWarp ul").find("li").eq($(this).index()).fadeIn().siblings().fadeOut();
                $(".mid .navlist").find("span").eq($(this).index()).addClass("active").siblings().removeClass("active");
            })
        }
    }else{
        alert('不支持多线程');
    }

    
})



function autoMove(){
    var num = 0;
    timer1 = setInterval(function(){
        num++;
        if(num >= $(".imgWarp li").length){
            num = 0;
        }
        $(".imgWarp ul").find("li").eq(num).fadeIn().siblings().fadeOut();
        $(".mid .navlist").find("span").eq(num).addClass("active").siblings().removeClass("active");
    },2000)
}

