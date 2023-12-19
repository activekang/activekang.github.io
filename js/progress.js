	     $(function(){
			 function progressBar(target,value){//target="progress0"
				  var target = "#" + target;
				  //console.log(target+"/"+value);
				  var total_w = $(".progress").width();
				  //console.log(total_w)
				  var now_w = (total_w*value)/100;
				  //console.log(target + " .progress .bar")
				  $(target + " .progress .bar").animate({width:now_w},1000,"swing");
			  
				  
			 }
			 var v=[];
			 var pn=0;
			 $(".pro .bar_txt").text(function(index,value){
				  v[index] = value;
				  return value + "%";
			 })
			 var progress = setInterval(function(){
				progressBar("progress"+pn,v[pn]); 
				pn++;
				if(pn > $(".pro .bar_txt").length-1){
				  clearInterval(progress);
				}
			 },250)		
			 
	     })