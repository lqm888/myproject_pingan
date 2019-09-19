define(['jquery'],function ($){

        var index = 0;
        var ConverImg = {

            init: function (){
                this.$img = $('.banner img');
                this.$left = $('.left_r');
                this.$right = $('.right_r');
                this.$ball = $('.banner ul li');

                this.$img.eq(index).css('z-index',3);
                this.move(this.$img.eq(index),100);

                this.$ball.eq(index).css('background','#f36c28');
                this.$ball.eq(index).css('opacity','1');

                this.autoMove();
                this.ballMove();
                this.left();
                this.right();
            },

            move: function (dom,target){
                var opa = 20;
                dom.timer = null;
                dom.timer = setInterval(function (){
                    if(opa < target){
                        var speed = 5;
                    }else{
                        var speed = -5;
                    }
                    if (Math.abs(target-opa) < Math.abs(speed)){
                        dom.css('opacity',target/100);
                        clearInterval(dom.timer);
                    }else{
                        opa += speed;
                        dom.css('opacity',opa/100);
                    }
                },30)
            
            },

            ballMove: function (){
                $.each(this.$ball,function (i,item){
                    $(item).on('mouseenter',function (){
                        clearInterval(timer);
                        this.imgdown();
                        index = i;
                        this.imgup();
                        this.autoMove();
                    }.bind(this));
                }.bind(this));
            },

            left: function (){
                this.$left.on('click',function (){
                    clearInterval(timer);
                    this.imgdown();
                    index--;
                    if (index < 0){
                        index = this.$img.length-1;
                    }
                    this.imgup();
                    this.autoMove();
                }.bind(this));

            },

            right: function (){
                this.$right.on('click',function (){
                    clearInterval(timer);
                    this.imgdown();
                    index++;
                    if (index >= this.$img.length){
                        index = 0;
                    }
                    this.imgup();
                    this.autoMove();
                }.bind(this));

            },
            
            imgdown: function (){
                this.$img.eq(index).css('z-index',1);
                this.$img.eq(index).css('opacity',0.2);
                this.$ball.eq(index).css('background','#fff');
                this.$ball.eq(index).css('opacity','0.5');
            },

            imgup: function (){
                this.$img.eq(index).css('z-index',3);
                this.move(this.$img.eq(index),100);
                this.$ball.eq(index).css('background','#f36c28');
                this.$ball.eq(index).css('opacity','1');
            },

            autoMove: function (){
                timer = setInterval(function (){
                    this.imgdown();
                    index++;
                    
                    if (index >= this.$img.length){
                        index = 0;
                    }
                    this.imgup();
                }.bind(this),3000);
                
            }

        };

        
    return {
        ConverImg: ConverImg
    };
})