$(function(){

	// isotope JS 
	var grid = $('.grid');
	var gridItem = $('.grid-item');
	var gridItemWidth = gridItem.width();
	var all = $('.grid-item a');
	var g1 = $('.g1 a');
	var g2 = $('.g2 a');

	grid.isotope({			 
	  itemSelector: '.grid-item',			
	  masonry: {
	    columnWidth: gridItemWidth
	  }
	});

	// All lightBox Start
	all.lightBox({
    overlayBgColor: '#333',
    overlayOpacity: 0.6
  });

	// Filter Sort Setting
	$('#m1').click(function(){
		grid.isotope({ filter: '.grid-item' });

		all.lightBox({
	    overlayBgColor: '#333',
	    overlayOpacity: 0.6
	  });

	  event.preventDefault();
	});

	$('#m2').click(function(){
		grid.isotope({ filter: '.g1' });

		g1.lightBox({
	    overlayBgColor: '#333',
	    overlayOpacity: 0.6
	  });

	  event.preventDefault();
	});

	$('#m3').click(function(){
		grid.isotope({ filter: '.g2' });

		g2.lightBox({
	    overlayBgColor: '#333',
	    overlayOpacity: 0.6
	  });

	  event.preventDefault();
	});


	// lightBox JS
	// var galleryItem = $('.grid-item a');

	// galleryItem.lightBox({
 //      overlayBgColor: '#333',
 //      overlayOpacity: 0.6
 //  });


});