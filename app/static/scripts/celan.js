define(['jquery'],function(){
    var scroll = {
        top:0,
        timer:'',
        move:function(){
            var _this = this;
            clearInterval(this.timer);
            this.timer = setInterval(function(){
                var nowTop = $(window).scrollTop();
                var speed = (_this.top - nowTop)/5;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                
                if (Math.abs(nowTop - _this.top) <= Math.abs(speed)) {
                    _this.clean();
                    $(window).scrollTop(_this.top);
                } else {
                    $(window).scrollTop(nowTop + speed);
                }
            },20)
        },
        clean: function(){
            clearInterval(this.timer);
        },
        getoffet:function (dom){
            var l = 0;
            var t = 0;
            var bdl = dom.clientLeft;//元素左边框宽度
            var bdt = dom.clientTop;//元素上边框宽度
            while(dom){
                l = l + dom.offsetLeft + dom.clientLeft;
                t = t + dom.offsetTop + dom.clientTop;
                dom = dom.offsetParent;//指向最近的定位父级
            }
            return {left: l - bdl, top: t - bdt};
        }
    }
    return {
        moveTop : scroll
    }
})
