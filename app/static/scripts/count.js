define(['jquery'],function (){
    $('.selday').on('click','span',function (){
        $(this).addClass('on').siblings().removeClass('on');

    });

    $('.reset').on('click',function (){
        $.each($('.count input'),function (index,item){
            $(item).val('');
        });
    })

    $('.submit').on('click',function (){


        var m = $('.count input').eq(0).val();
        var y = $('.count input').eq(1).val();
        var d = $('.count input').eq(2).val();

        if (m == ''){
            $('.prompt').show().text('投资金额不能为空');
            return false;
        }

        if (isNaN(m)){
            $('.prompt').show().text('请输入正确的投资金额');
            return false;
        }

        if (y == ''){
            $('.prompt').show().text('预期收益率不能为空');
            return false;
        }

        if (isNaN(y)){
            $('.prompt').show().text('请输入正确的预期收益率');
            return false;
        }

        if (d == ''){
            $('.prompt').show().text('投资天数不能为空');
            return false;
        }

        if (isNaN(d)){
            $('.prompt').show().text('请输入正确的投资天数');
            return false;
        }


        var m = parseInt(m);
        var y = parseInt(y);
        var d = parseInt(d);
        var b = parseInt($('.on').text());
        
        
        $('.result .res').eq(0).text($('.count input').eq(0).val() + '元');
        $('.result .res').eq(1).text($('.count input').eq(1).val() + '%');
        $('.result .res').eq(2).text($('.count input').eq(2).val() + '天');
        $('.result .res').eq(3).text($('.on').text() + '天');
        $('.result .res').eq(4).text(((d/b)*m*(y/100)).toFixed(2) + '元');
        $('.result .res').eq(5).text(((d/b)*m*(y/100) + m).toFixed(2) + '元');

        $('.result').show();
        $('.count').hide();
        
        
    });

    $('.count input').on('focus',function (){
        $('.prompt').hide();

    });


    $('.back').on('click',function (){
        $.each($('.count input'),function (index,item){
            $(item).val('');
        });
        
        $('.count').show();
        $('.result').hide();
        
    });



})