$(function(){
	$('.inner-register h1').on('click', function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.register-tab .tab').eq($(this).index()).addClass('active').siblings().removeClass('active');
	})
})
