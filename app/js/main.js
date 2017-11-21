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

	$('.p-inst-sl').owlCarousel({
		loop:true,
		margin:0,
		responsiveClass:true,
		items:1,
		nav:true,
		autoplay:true,
		autoplayTimeout:8000,
		autoplayHoverPause:false
	});

	$('.p-trigers__slider').owlCarousel({
		loop:true,
		margin:0,
		responsiveClass:true,
		items:1,
		nav:true
	});

	$('.p-morebtn__hidden').on('click', function() {
		$('.page__p-text').removeClass('page__p-text-hide');
		$('.page__p-text').css({
			'max-height': '100%'
		});
		$(this).parent().parent().parent().hide();
		return false;
	});

	$('.h-profil__corz').on('click', function() {
		$('.h-profilPopup').fadeToggle(100);
		$(document).click(function(event) {
			if ($(event.target).closest(".h-profilPopup").length) return;
				$('.h-profilPopup').stop(false, true).fadeOut(100);
				event.stopPropagation();
			});
		return false;
	});

	$('.h-search__loop').on('click', function() {
		$('.h-search').stop(false, true).slideToggle(300);
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

	$('.mob-search').on('click', function() {
		$(this).parent().children('.mob-search__window').stop(false, true).slideToggle(300);
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

	$('.p-item__more-on').on('click', function() {
		$(this).hide();
		$(this).parent().parent('.p-item__bottom').stop(false, true).addClass('p-item__bottom-active');
		$(this).parent().children('.p-item__more-off').show();
		return false;
	});

	$('.p-item__more-off').on('click', function() {
		$(this).hide();
		$(this).parent().parent('.p-item__bottom').stop(false, true).removeClass('p-item__bottom-active');
		$(this).parent().children('.p-item__more-on').show();
		return false;
	});

	$('.page__p-cat').hover(function() {
		$(this).children('.p-cat__submenu').stop(false, true).fadeIn(100);
	}, function() {
		$(this).children('.p-cat__submenu').stop(false, true).fadeOut(100);
	});

	$('.p-tov__item-1 .p-tov__sub-title').on('click', function() {
		$('.p-tov__item-2 .p-tov__sub-title').removeClass('p-tov__sub-title-active');
		$('.p-tov__item-3 .p-tov__sub-title').removeClass('p-tov__sub-title-active');
		$(this).toggleClass('p-tov__sub-title-active');
		$('.p-tov__item-2 .p-tov__sub-title').parent().children('.p-tov__sub-description').slideUp(300);
		$('.p-tov__item-3 .p-tov__sub-title').parent().children('.p-tov__sub-description').slideUp(300);
		$(this).parent().children('.p-tov__sub-description').slideToggle(300);
	});
	$('.p-tov__item-2 .p-tov__sub-title').on('click', function() {
		$('.p-tov__item-1 .p-tov__sub-title').removeClass('p-tov__sub-title-active');
		$('.p-tov__item-3 .p-tov__sub-title').removeClass('p-tov__sub-title-active');
		$(this).toggleClass('p-tov__sub-title-active');
		$('.p-tov__item-1 .p-tov__sub-title').parent().children('.p-tov__sub-description').slideUp(300);
		$('.p-tov__item-3 .p-tov__sub-title').parent().children('.p-tov__sub-description').slideUp(300);
		$(this).parent().children('.p-tov__sub-description').slideToggle(300);
	});
	$('.p-tov__item-3 .p-tov__sub-title').on('click', function() {
		$('.p-tov__item-1 .p-tov__sub-title').removeClass('p-tov__sub-title-active');
		$('.p-tov__item-2 .p-tov__sub-title').removeClass('p-tov__sub-title-active');
		$(this).toggleClass('p-tov__sub-title-active');
		$('.p-tov__item-1 .p-tov__sub-title').parent().children('.p-tov__sub-description').slideUp(300);
		$('.p-tov__item-2 .p-tov__sub-title').parent().children('.p-tov__sub-description').slideUp(300);
		$(this).parent().children('.p-tov__sub-description').slideToggle(300);
	});

	$('.selectmenu').selectmenu();
	$('.p-tov__img-fancybox').fancybox();

	$('.nohref').on('click', function() {
		return false;
	});

	if ( $(window).width() < 1199 ) {
		$('.h-schedule__description-val1').text('ПБ - СБ');
		$('.h-schedule__description-val2').text('ВС');
	}

});