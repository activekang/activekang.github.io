$(function(){

	// 상단 네비게이션 고정
	$(window).scroll(function(){

		var scrollPos = $(window).scrollTop();
		// console.log(scrollPos);
		
		if(scrollPos>20){
			$('#navi').addClass('fixed');
		}else{
			$('#navi').removeClass('fixed');
		}

	});


	// 상단 네비게이션 스크롤 이동
	var menuItem = $('#gnb a');

	menuItem.click(function(){
		var el = $(this).attr('href');
		var elWrapped = $(el);

		scrollToDiv(elWrapped, 50);
	});

	// 스크롤 이동 함수
	function scrollToDiv(element, navHeight){
		var offset = element.offset();
		var offsetTop = offset.top;
		var totalScroll = offsetTop-navHeight;

		$('html, body').animate({scrollTop : totalScroll}, 600);

	}

});