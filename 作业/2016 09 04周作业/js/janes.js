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
	//news
	$('.main>.right>.rt>.rt-r>.news>ul .cur').mouseover(function(e){
		// var $this = $(this);
		// if ($(#mytip).length === 0) {
		// 	this.mytitle = $this.attr('title');
		// 	$this.attr('title','');
		// 	$(body).append('<span id="mytip">'+this.mytitle+'</span>');
		// }
		// $('#mytip').css({
		// 	left:( e.pageX + 10 )+ 'px',
		// 	top:(e.pageY + 20 )+'px'
		// }).show();
		var left= (e.pageX - $('.rt-r').offsetLeft-$(this).next().offsetLeft)+'px';
		var top=( (e.pageY-$('rt-r').offsetLeft - $(this).next().offsetLeft) + 'px');
		$(this).next().css({'left':left,'top':top}).show('1000');
	}).mouseout(function(e){
		var $this = $(this);
		if (true) {}

	});

	//下banner
	$('.liButton').click(function(){
		var index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('.right>ul>img').css({'left':( 30+ (index-1)*55 )+'px'});
		$('.show .box1').animate({'left':-780*(index-1)+'px'},500);
	});
	$('.show .box1 .inner1').hover(function(){
	   $(this).find('.inner1indicator').show();
	   $(this).siblings().find('.inner1indicator').hide();
	},function(){
		 $(this).find('.inner1indicator').hide();
	});
});