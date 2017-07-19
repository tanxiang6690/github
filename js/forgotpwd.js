$(function(){
	// 找回密码页面的点击下一步
	$('.first-next').on('click', function(){
		// 设置顶部面包屑导航的背景
		var obj = $('.press-tips li');
		obj.first().removeClass('active');
		obj.last().addClass('active');
		$('.return-pwd-item').eq(1).addClass('active').siblings().removeClass('active');
	})
})
