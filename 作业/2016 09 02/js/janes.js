$(function(){
	//点击换肤
	$('ul.top-right>li').click(function(){
		$(this).css({backgroundPositionY:'-15px'}).siblings().css({backgroundPositionY:'0'});
		var index=$(this).index()+1;
		$('link').eq(1).attr({'href':'CSS/bg'+index+'.css'});
	});
	// banner
	var count = $('.right>.rt>.banner>ul>li').index();
	var bannerTimer = setInterval(imgRun,1000);
	$('div.banner>ul>li').hover(function(e){
		clearInterval(bannerTimer)
		count = $(this).index();
		$('.imgbox img').eq(count).show().siblings().hide();
		$(this).addClass('bannerActive').siblings().removeClass('bannerActive');
		}
		,function(e){
			bannerTimer = setInterval(imgRun,1000);
		}
		);
	function imgRun(){
		if(count==5){
			count=0;
			// $('div.imgbox').html('');
		}
		$('div.imgbox img').eq(count).fadeIn().siblings().fadeOut();
		//$('div.imgbox').append('<img src="images/ads/'+(count+1)+'.jpg" alt="">');
		$('div.banner>ul>li').eq(count).addClass('bannerActive').siblings().removeClass('bannerActive');
		count++;
	}
});