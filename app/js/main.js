$(function() {
	$(window).resize(function() {
		if ( $(window).width() < 767 ) {
			$('.header-desktop').hide();
			$('.header-mob').show();
		}
		if ( $(window).width() > 767 ) {
			$('.header-desktop').show();
			$('.header-mob').hide();
		}
	});

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

	$('.h-profil__corz').on('click', function() {
		$('.h-profilPopup').fadeToggle(100);
		$(document).click(function(event) {
			if ($(event.target).closest(".h-profilPopup").length) return;
				$('.h-profilPopup').fadeOut(100);
				event.stopPropagation();
			});
		return false;
	});

	$('.mob-menu__button').on('click', function() {
		$(this).parent().children('.mob-menu').slideToggle(300);
		$(document).click(function(event) {
			if ($(event.target).closest(".mob-menu").length) return;
				$('.mob-menu').slideUp(300);
				event.stopPropagation();
			});
		return false;
	});

	$('.mob-menu__link').on('click', function() {
		$(this).parent('.mob-menu__item-menu').children('.mob-menuSub').stop(false, true).slideToggle(300);
	});

	$('.mob-catalogmenu__button').on('click', function() {
		$(this).parent().children('.mob-catalogmenu').stop(false, true).slideToggle(300);
		$(document).click(function(event) {
			if ($(event.target).closest(".mob-catalogmenu").length) return;
				$('.mob-catalogmenu').slideUp(300);
				event.stopPropagation();
			});
		return false;
	});

	$('.mob-catalogmenu__link').on('click', function() {
		$(this).parent('.mob-catalogmenu__item-menu').children('.mob-catalogmenuSub').stop(false, true).slideToggle(300);
	});

	$('.h-catalog__item').hover(function() {
		$(this).children('.h-catalog-sub').stop(false, true).fadeIn(100);
	}, function() {
		$(this).children('.h-catalog-sub').stop(false, true).fadeOut(100);
	});

	$('.nohref').on('click', function() {
		return false;
	});

});