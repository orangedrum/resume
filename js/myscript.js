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

	


	//scrollorama
    var scrollorama = $.scrollorama({ blocks:'.resume-scroll'; enablePin:false });

    // assign function to add behavior for onBlockChange event
	scrollorama.onBlockChange(function() {
		var i = scrollorama.blockIndex;
		$('#console')
			.css('display','block')
			.text('onBlockChange | blockIndex:'+i+' | current block: '+scrollorama.settings.blocks.eq(i).attr('id'));
	});

    scrollorama.animate('.resume-scroll h2',{ duration: 900, property:'zoom', end: 8 });

});