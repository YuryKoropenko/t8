$(function() {
	$('.p-slider').owlCarousel({
		loop:true,
		margin:0,
		responsiveClass:true,
		items:1,
		nav:true,
		autoplay:true,
		autoplayTimeout:8000,
		autoplayHoverPause:false
	});

	$('.selectmenu').selectmenu();

	$('.p-morebtn__hidden').on('click', function() {
		$('.page__p-text').removeClass('page__p-text-hide');
		$(this).parent().parent().parent().hide();
		return false;
	});
});