$(function() {
	// 企业法人营业执照及组织机构代码证证件类型
	$('.tab input').on('click', function() {
		var index = $(this).index();
		$(this).siblings('input').removeAttr('checked');
		if (index == 0) {
			$('.file-tab').eq(1).removeClass('active')
			$('.file-tab').eq(0).addClass('active');
		}
		
		if (index == 2) {
			$('.file-tab').eq(0).removeClass('active')
			$('.file-tab').eq(1).addClass('active');
		}
	});
})