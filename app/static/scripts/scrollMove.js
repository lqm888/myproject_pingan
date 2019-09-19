define(['jquery'],function (){
    function scrollMove(target){
            
        timer = setInterval(function() {
            var nowTop = $(document.documentElement).scrollTop();
            if ( nowTop < target ){
                var speed = Math.ceil((target - nowTop) / 10);
            } else {
                var speed = Math.floor((target - nowTop) / 10);
            }
            
            
            if (Math.abs(target - nowTop) <= Math.abs(speed)){
                $(document.documentElement).scrollTop(target);
                
                clearInterval(timer);
            } else {
                $(document.documentElement).scrollTop(nowTop + speed);
            }

        }, 20);
    }


    return {
        scrollMove: scrollMove
    }



})