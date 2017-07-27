$(function() {
	var tab = $('.tab'),

		userType = $('.tab .user_type');

	// 动态的设置tab的高度

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
})