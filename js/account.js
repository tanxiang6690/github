$(function() {
	
	// 兼容火狐、IE8   
	// 显示遮罩层的函数
	function showMask(e) {
		var winH = $(window).height(),
			winW = $(window).width();
		e.css("height", winH);
		e.css("width", winW);
		$('body').css({
			height: winH,
			width: winW
			//overflow: 'hidden' 
		});
		e.show();
	}
	
	// 隐藏遮罩层的函数
	function hideMask(e) {
		e.hide();
	}
	
	// 点击显示遮罩层
	$('.change-pw').on('click', function() {
		var obj = $('.mask.safe');
		showMask(obj);
		$('.sure.safe').slideDown();
	});
	
	// 点击隐藏遮罩层
	$('.close, .msg-button').on('click', function(){
		var obj = $('.mask.safe');
		hideMask(obj);
	});
		
	// 确认修改密码时的弹框
	$('.sub-sure').on('click', function() {
		var obj = $('.mask.sure-newpwd');
		showMask(obj);
		var sure = $('.sure.sure-newpwd');
		sure.slideDown();
		$('.close, button').on('click', function() {
			sure.slideUp();
			hideMask(obj);
		})
	});
	
})
/**********************************************************************************************************/
function getTabActiveH(obj){
	return obj.outerHeight();
}
$(function(){
	// sesstion-tab的切换
	var tab = $('.sesstion-right .sesstion-tab');
	var sesstionLeft = $('.sesstion-left');
	// 动态的给session-right设置高度。
	var result = getTabActiveH($('.sesstion-right .sesstion-tab.active'));
	console.log(sesstionLeft)
	sesstionLeft.css({
		height: result
	});
	$('.sesstion-left .op-item').on('click', function(){
		var index = $(this).index() - 2;
		// 给自己添加样式
		$(this).addClass('active').siblings().removeClass('active')
		// 切换
		tab.eq(index).addClass('active').siblings().removeClass('active');
		result = getTabActiveH($('.sesstion-right .sesstion-tab.active'));
		console.log(result)
	})
})

/******************************************************************************************************/
