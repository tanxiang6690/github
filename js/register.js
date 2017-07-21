$(function() {
	$('.register_btn').click(function() {
		var select_type = $("#select_type option:selected").val();
		if(select_type == 'type_1') {
			location.href = "baseInfo_type1.html";
		};
		if(select_type == 'type_2') {
			location.href = "baseInfo_type2.html";
		}
	})
});
