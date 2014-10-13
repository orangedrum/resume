$(document).ready(function(){
	//header stick
	$(window).scroll(function(){
		if ($(this).scrollTop() > 1){
			$('header').addClass("sticky");
		}else{
			$('header').removeClass("sticky");
		}
	});

	//styleswap
	$('.styleswap').on('click', '.css-check', function(){
		var id = $(this).attr("id");
		if($(".css-check").is(':checked')){
	    	$("#switch_style").attr("href", "styles/css/styles.css");
	    	$(".after").css("display", "none");
	    	$(".before").css("display", "block");

	    	$(".tillafter").css("display", "block");
	    }else{
	    	$("#switch_style").attr("href", "styles/css/switch.css");
	    	$(".after").css("display", "block");
	    	$(".before").css("display", "none");
	    }
	});
});