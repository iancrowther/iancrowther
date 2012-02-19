$(document).ready(function () {

	/* PLACEHOLDER FOR FORMS ------------- */
	/* Remove this and jquery.placeholder.min.js if you don't need :) */
	$('input, textarea').placeholder();

	/* UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE6/7/8 SUPPORT AND ARE USING .block-grids */
//	$('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'left'});
//	$('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'left'});
//	$('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'left'});
//	$('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'left'});

	$('#portfolio').orbit({
		captions: true, 			 		// do you want captions?
		captionAnimation: 'fade', 		 	// fade, slideOpen, none
		captionAnimationSpeed: 800, 	 	// if so how quickly should they animate in
		fluid: true                         // or set a aspect ratio for content slides (ex: '4x3') 
	});
});
