         // visual slider
         var now_img, next_img;//선언

         function fade_change(){
             now_img = $(".viewer img:eq(0)");
             next_img = $(".viewer img:eq(1)");
             next_img.addClass("active").css("opacity",0).animate({"opacity":1},1000, function(){
                 $(".viewer").append(now_img);		
                 now_img.removeClass("active");
             });
         }
         // 순환 
         var timer = setInterval("fade_change()",3000);
         
$(function(){

         $(".viewer").hover(function(){// mouse enter
             clearInterval(timer);
         },function(){				 	 // mouse leave
             timer = setInterval("fade_change()",3000);
         });
});