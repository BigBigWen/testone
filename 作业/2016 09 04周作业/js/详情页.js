//小星星 亮晶晶
$('.startli span').mousemove(function(e){
	var index = $('.startli span').index( $(this) );
	$('.start').addClass('hover'+index);
}).mouseout(function(e){
	var index =$('.startli span').index($(this));
	$('.start').removeClass('hover'+index);
}).click(function(e){
	var index = $('.startli span').index($(this));
	$('.start').attr('class','start').addClass('click'+index);
});


	$(function(){
		$(".jqzoom").imagezoom({
			xzoom: 310,//Big框的宽度
			yzoom: 310,//Big框的长度
			offset: 15//出现的Big框距离Small框的距离
		});
	})
