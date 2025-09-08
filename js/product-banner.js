var productTranslateX = 0;
var productMenuAllWidth = $("main .banner .bar .actions").width();
var productMenuWidth = $("main .banner .bar .actions .item").width();
var productWindowWidth = $(window).width();
var productSwiper = new Swiper('#product-swiper', {
	direction: 'horizontal',
	loop: true,
	autoplay: {
		delay: 1000
	}
});
productSwiper.on('slideChangeTransitionEnd', function(e) {
	var index = $('#product-swiper .swiper-slide-active').attr('data-swiper-slide-index');
	$("main .banner .bar .actions .item").each(function() {
		if($(this).data("index") === Number(index)){
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});
	if(Number(index) === 0){
		productTranslateX = 0;
	} else {
		if(productWindowWidth <= 767){
			if(Number(index) === 3 || Number(index) === 6 || Number(index) === 9){
				productTranslateX -= productMenuWidth * 3;
			}
		} else if(productWindowWidth >= 768 && productWindowWidth <= 1199){
			if(Number(index) === 4 || Number(index) === 8){
				productTranslateX -= productMenuWidth * 4;
			}
		} else {
			if(Number(index) === 5){
				productTranslateX -= productMenuWidth * 5;
			}
			if(Number(index) === 10){
				productTranslateX -= productMenuWidth * 2;
			}
		}
	}
	$("#product-swiper-menu").css("transform", `translateX(${ productTranslateX }px)`);
});
$("main .banner .bar .actions .item").click(function(e) {
	e.preventDefault();
	e.stopPropagation();
	$("main .banner .bar .actions .item").each(function() {
		$(this).removeClass("active");
	});
	$(this).addClass("active");
	productSwiper.slideTo($(this).data("index"), 500, false);
});
$("#product-swiper-prev").click(function(e) {
	e.preventDefault();
	e.stopPropagation();
	if(productTranslateX <= 0){
		productTranslateX += productMenuWidth;
		$("#product-swiper-menu").css("transform", `translateX(${ productTranslateX }px)`);
	}
});
$("#product-swiper-next").click(function(e) {
	e.preventDefault();
	e.stopPropagation();
	if(productWindowWidth <= 767){
		if(productTranslateX >= productMenuWidth * -9){
			productTranslateX -= productMenuWidth;
			$("#product-swiper-menu").css("transform", `translateX(${ productTranslateX }px)`);
		}
	} else if(productWindowWidth >= 768 && productWindowWidth <= 1199){
		if(productTranslateX >= productMenuWidth * -8){
			productTranslateX -= productMenuWidth;
			$("#product-swiper-menu").css("transform", `translateX(${ productTranslateX }px)`);
		}
	} else {
		if(productTranslateX >= productMenuWidth * -7){
			productTranslateX -= productMenuWidth;
			$("#product-swiper-menu").css("transform", `translateX(${ productTranslateX }px)`);
		}
	}
});