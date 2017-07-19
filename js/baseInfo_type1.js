$(function(){
	// 兼容火狐、IE8   
	// 显示遮罩层的函数
	function showMask(e) {
		var winH = $(document).height(),
			winW = $(document).width();
		e.css("height", winH);
		e.css("width", winW);
		$('body').css({
			height: winH,
			width: winW,
			overflow: 'hidden' 
		});
		e.show();
	}
	
	// 隐藏遮罩层的函数
	function hideMask(e) {
		$('body').css({
			overflow: 'auto' 
		});
		e.hide();
	}
	/*
	 * 点击下一步时，调用弹出框显示的函数
	 * 弹出框显示之后，点击去人按钮，再次关闭弹出层
	 * */
	$('.next').on('click', function(){
		showMask($('.mask'));
		
		// 设置顶部面包屑导航的背景
		var obj = $('.press-tips li');
		obj.first().removeClass('active');
		obj.last().addClass('active');
		$('.return-pwd-item').eq(1).addClass('active').siblings().removeClass('active');
	});
	
	$('.mask button').on('click', function(){
		location.href = 'login.html';
	})
	
	$('.mask span').on('click', function(){
		hideMask($('.mask'));
	})
})
