$(function(){
    $('.gnb_btn').click(function(){
         $('.gnb').slideToggle();
    });//메뉴보이기/감추기
    
    $(window).resize(function(){
       if($(this).width() > 767) {
          $('.gnb').show();		 
       }else {
          $('.gnb').hide();
       }
    });//모바일에서 보이기/감추기
});