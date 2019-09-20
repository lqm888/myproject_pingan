// 轮播图
require.config({
    baseUrl: "../static/scripts",
    paths: {
        'aj':'ajax',
        'jquery':['http://libs.baidu.com/jquery/2.0.3/jquery','jquery'],
        'banner':"banner",
        'celan': 'celan',
        'publichead':'publichead',
        'dk':'dk'
    }
});

require(['jquery'],function($){
    $(".header").load('./publichead.html',function(){
        // $.getScript("../static/scripts/publichead.js")
        require(['publichead']);
    })
})

require(['jquery'],function($){
    $("#footer").load('./footer.html');
})

require(['jquery','banner'],function($,move){
    if(typeof Worker !== undefined){
        // alert("支持多线程");
        var worker = new Worker('../static/scripts/worker.js');
        worker.postMessage("ajax");
        worker.onmessage = function(event){
            var json = JSON.parse(event.data);
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

            // autoMove();
            move["move"].num = 0;
            move["move"].init();

            $(".navlist span").on("mouseover",function(){
                move["move"].num = $(this).index();
                move["move"].change();
            });
            $(".navlist span").on("mouseout",function(){
                move["move"].num = $(this).index();
                move["move"].auto();
            });

            $(".imgWarp .left").on("click",function(){
                move["move"].toleft();
            })

            $(".imgWarp .right").on("click",function(){
                move["move"].toright();
            })
        }
    }else{
        alert('不支持多线程');
    }
})

require(['jquery','dk'],function(){

})

require(['jquery','celan'],function($,mtop){
    $(".nav_cebian").on("click","li",function(){
        if($(this).attr("to")){
            var tag = '.' + $(this).attr("to");
            var dom = document.querySelector(tag);
            var totop = mtop['moveTop'].getoffet(dom).top;
            mtop['moveTop'].top = totop;
            mtop['moveTop'].move();
        }
    })
})
