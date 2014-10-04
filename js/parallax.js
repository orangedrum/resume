//http://andyshora.com/parallax.html
var parallaxElements = [];
		var windowHeight = 0;

		$(document).ready(function() {

			$('.twitter-share-button-placeholder').bind('mouseover', function() {
				enableShareButton($(this));
			});

			if (Modernizr.touch) {
				enableShareButton($('.twitter-share-button-placeholder'));
			}

			windowHeight = $(window).height();
			$('html,body').scrollTop(1); // auto scroll to top

			// touch event check stolen from Modernizr
			var touchSupported = (('ontouchstart' in window) ||
									window.DocumentTouch && document instanceof DocumentTouch);

			// if touch events are supported, tie our animation to the position to these events as well
			if (touchSupported) {

				$(window)
					.bind('touchmove', function(e) {
						var val = e.currentTarget.scrollY;
						parallax(val);
					});
			}

			$(window)
				.bind('scroll', function(e) {
					var val = $(this).scrollTop();
					parallax(val);
				});


			// update vars used in parallax calculations on window resize
			$(window).resize(function() {
				windowHeight = $(this).height();

				for (var id in parallaxElements) {
					parallaxElements[id].initialOffsetY = $(parallaxElements[id].elm).offset().top;
					parallaxElements[id].height = $(parallaxElements[id].elm).height();
				}
			});


			// get parallax elements straight away as they wont change
			// this will minimise DOM interactions on scroll events
			$('.parallax').each(function(){

				$elm = $(this);
				var id = $elm.data('id');

				// use data-id as key
				parallaxElements[id] = {
					id: $elm.data('id'),
					start: $elm.data('start'),
					stop: $elm.data('stop'),
					speed: $elm.data('speed'),
					elm: $elm[0],
					initialOffsetY: $elm.offset().top,
					height: $elm.height(),
					width: $elm.outerWidth()
				};

			});


			window._gaq = [['_setAccount','UA-17716290-10'],['_trackPageview'],['_trackPageLoadTime']];
			Modernizr.load({
			load: ('https:' == location.protocol ? '//ssl' : '//www') + '.google-analytics.com/ga.js'
			});

			prettyPrint();
		});

		function parallax(scrollTop) {

			if (scrollTop===undefined) return;

			// update UI
			$('#scroll-top').html('scroll top: ' + scrollTop);

			for (var id in parallaxElements) {

				// distance of element from top of viewport
				var viewportOffsetTop = parallaxElements[id].initialOffsetY - scrollTop;

				// distance of element from bottom of viewport
				var viewportOffsetBottom = windowHeight - viewportOffsetTop;

				// update UI
				$('#offset-bottom').html('viewport bottom offset: ' + viewportOffsetBottom);

				if ((viewportOffsetBottom >= parallaxElements[id].start) && (viewportOffsetBottom <= parallaxElements[id].stop)) {
					// element is now active, fix the position so when we scroll it stays fixed

					var speedMultiplier = parallaxElements[id].speed || 1;
					var pos = (windowHeight - parallaxElements[id].start);

					$(parallaxElements[id].elm)
						.css({
							position: 'fixed',
							top: pos+'px',
							left: '50%',
							marginLeft: -(parallaxElements[id].width/2) +'px'
						})
						.find('.content').html(parallaxElements[id].elm.style.position);

				} else if (viewportOffsetBottom > parallaxElements[id].stop) {
					// scrolled past the stop value, make position relative again

					$(parallaxElements[id].elm)
						.css({
							position: 'relative',
							top: (parallaxElements[id].stop-parallaxElements[id].start)+'px',
							left: 'auto',
							marginLeft: 'auto'
						})
						.find('.content').html(parallaxElements[id].elm.style.position);

				} else if (viewportOffsetBottom < parallaxElements[id].start) {
					// scrolled up back past the start value, reset position

					$(parallaxElements[id].elm)
						.css({
							position: 'relative',
							top: 0,
							left: 'auto',
							marginLeft: 'auto'
						})
						.find('.content').html(parallaxElements[id].elm.style.position);

				}
			}
		}

		function enableShareButton(elm) {

				elm.addClass('twitter-share-button')
					.removeClass('twitter-share-button-placeholder')
					.attr('href', 'https://twitter.com/share')
					.unbind('click');

				!function(d,s,id){
					var js,
					fjs=d.getElementsByTagName(s)[0],
					p=/^http:/.test(d.location)?'http':'https';

					if(!d.getElementById(id)){
						js=d.createElement(s);
						js.id=id;
						js.src=p+'://platform.twitter.com/widgets.js';
						fjs.parentNode.insertBefore(js,fjs);
					}
				}(document, 'script', 'twitter-wjs');

		}
		function revealEmail() {
			alert('andyshora' + '@gmail.com');
		}