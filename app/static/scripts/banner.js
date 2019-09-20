define(['jquery'],function($){
    var bannermove = {
        num : 0,
        timer1:'',
        init: function(){
            this.change();
            this.auto();
        },
        auto: function (){
            var _this = this;
            this.clean();
            this.timer1 = setInterval(function(){
                _this.num++;
                if(_this.num >= $(".imgWarp li").length){
                    _this.num = 0;
                }
                $(".imgWarp ul").find("li").eq(_this.num).fadeIn().siblings().fadeOut();
                $(".mid .navlist").find("span").eq(_this.num).addClass("active").siblings().removeClass("active");
            },2000);
        },
        clean:function(){
            clearInterval(this.timer1);
        },
        change:function(fn){
            this.clean();
            $(".imgWarp ul").find("li").eq(this.num).stop(true,true);
            $(".imgWarp ul").find("li").eq(this.num).siblings().stop(true,true);
            $(".imgWarp ul").find("li").eq(this.num).fadeIn().siblings().fadeOut();
            $(".mid .navlist").find("span").eq(this.num).addClass("active").siblings().removeClass("active");
            if(fn){
                fn();
            }
        },
        toleft:function(){
            this.clean();
            this.num = this.num - 1;
            if(this.num < 0){
                this.num = $(".imgWarp ul").find("li").length - 1;
            }
            this.init();
        },
        toright:function(){
            this.clean();
            this.num = this.num + 1;
            if(this.num >= $(".imgWarp ul").find("li").length){
                this.num = 0;
            }
            this.init();
        }
    }
    return {    
        'move':bannermove
    }
})
