$(function(){
	$('.msub').hide();//서브메뉴  모두감추기

	$('.title').click(function(){
		$('.msub').hide();
		$(this).next().show();	
	});
});