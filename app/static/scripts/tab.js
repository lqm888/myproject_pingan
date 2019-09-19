$('.head').load('./publichead.html',function(){
    $.getScript('../static/scripts/publichead.js');
});
$('.footer').load('./footer.html');
$(function(){
	$(".tabNav li").bind('click',function() {
		if (!$(this).hasClass('curr')) {
            var index = $(this).index();
            $(this).addClass('curr').siblings().removeClass('curr');
            $('.tabCont').children().eq(index).slideDown('500').siblings().slideUp('500');
        }
	});
})