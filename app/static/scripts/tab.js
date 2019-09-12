$(function(){
	// var tabIndex = getRequestMini('tabIndex') - 0;
    // if (!isNaN(tabIndex) && tabIndex < $(".tabNav li").length) {
    //     $(".tabNav li").eq(tabIndex).addClass('curr').siblings().removeClass('curr');
    //     $('.tabCont').children().eq(tabIndex).show().siblings().hide();
    // }

	$(".tabNav li").bind('click',function() {
		if (!$(this).hasClass('curr')) {
            var index = $(this).index();
            $(this).addClass('curr').siblings().removeClass('curr');
            $('.tabCont').children().eq(index).slideDown('500').siblings().slideUp('500');
        }
	});

    // function getRequestMini(name) {
    //     return (location.search.match(new RegExp('[&?]' + name + '=([^&]*)', 'i')) || [''])[0].split('=')[1];
    // }
})