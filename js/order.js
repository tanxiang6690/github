$(function() {
	// 动态的设置订单列表（order-item-list）的高度
	var maxH = $('.order-item-list').outerHeight();
	$('.order-item-list div').css({
		height: maxH
	});

	function getW(ele1, ele2) {
		var autoW = ele1.outerWidth();
		ele2.css({
			width: autoW
		});
	}

	// 动态的设置order-title li的宽度
	getW($('.order-item-list .money'), $('.order-title li').eq(1));
	getW($('.order-item-list .is-urgent'), $('.order-title li').eq(2));
	getW($('.order-item-list .order-status'), $('.order-title li').eq(3));
	getW($('.order-item-list .order-paper'), $('.order-title li').eq(4));
	getW($('.order-item-list .check-result'), $('.order-title li').eq(5));
	getW($('.order-item-list .check-report'), $('.order-title li').eq(6));

	// 分页组件的调用
	$('.M-box2').pagination({
		coping: true,
		homePage: '首页',
		endPage: '末页',
		prevContent: '上页',
		nextContent: '下页'
	});

	function getTabActiveH(obj) {
		return obj.outerHeight();
	}

	// 动态设置session-left的高度更具session-tab的最大高度。
	var result = getTabActiveH($('.sesstion-right .sesstion-tab.active'));
	var sesstionLeft = $('.sesstion-left');
	sesstionLeft.css({
		height: result
	});

	// tab切换
	$('.sesstion-left li').on('click', function() {
		var index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('.sesstion-right .sesstion-tab').eq(index).addClass('active').siblings().removeClass('active');
		result = getTabActiveH($('.sesstion-right .sesstion-tab.active'));
		sesstionLeft.css({
			height: result
		});
	})
})