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
            console.log(json);
            for(var i=0; i<json.length; i++){
                var $newLi = $('<li>'+
                '<a href="#">'+
                    '<img src="'+json[i].url+'" alt="">'+
                '</a>'+
                '</li>');
                $newLi.find("a img").eq(0).attr("backgroundImage="+json[i].url);
                $(".imgWarp ul").append($newLi);
            }
            worker.terminate();
        }
    }else{
        alert('不支持多线程');
    }

})
