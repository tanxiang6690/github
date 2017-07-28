$(function() {
	/*
	 * tab切换部分
	 * */
	var tab = $('.tab'),

		userType = $('.tab .user_type');

	// 初始化tab的高度

	tab.css({
		minHeight: userType.eq(0).outerHeight()
	});

	$('.right input[name="tao-can"]').on('click', function() {
		// 保存input的下标
		var index = $(this).index(),
			title = $('.title');
		// index == 2时，重置index的值
		if(index == 0) {
			index = 0;
			title.html('套餐检测（<span>推荐</span>）')
		} else {
			index = 1;
			title.html('自定义套餐')
		}

		// 动态的设置tab的高度
		tab.css({
			minHeight: userType.eq(index).outerHeight()
		})

		// 控制tab的切换
		userType.eq(index).addClass('active').siblings().removeClass('active');
	});

	/*
	 * 上传企业标准时后面对号图标的更换
	 * 
	 * */
	$('.right.upload i.float-r').hover(function(){
		$(this).removeClass('icon-duihao').addClass('icon-close').css({
			transition: 'all .6s ease',
			color: '#666'
		});
	}, function(){
		$(this).removeClass('icon-close').addClass('icon-duihao').css('color', '#28e428');
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/**/
})