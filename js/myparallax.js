(function($){

	//setting up variables
	$window = $(window);
	$slide = $('.homeslide');
	$body = $('body');

	//adding fade in
	$body.imagesLoaded(function(){
		setTimeout(function(){
			//resize sections
			adjustWindow();
			//fade in sections
			$body.removeClass('loading').addClass('loaded');
		}, 800);
	});

	function adjustWindow(){
		//Initialize Skrollr
		var s = skrollr.init();

		//Get window size
		winH = $window.height();

		//Keep minium height 550
		if(winH <= 550){
			winH = 550;
		}

		//Resize slides
		$slide.height(winH);

		//Refresh Skrollr after a resize
		s.refresh($('.section1'));
	}
})(jQuery);