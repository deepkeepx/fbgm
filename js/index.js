var floor1Swiper = new Swiper('#floor1-swiper', {
	direction: 'horizontal',
	loop: true,
	autoplay: {
		delay: 3000
	}
});

var floor2Swiper = new Swiper('#floor2-swiper', {
	direction: 'horizontal',
	loop: true,
	autoplay: {
		delay: 3000
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
});

var floor5TranslateY = 0;
var floor5MenuHeight = $("main .floor5 .menu .item").height();
var floor5Swiper = new Swiper('#floor5-swiper', {
	direction: 'horizontal',
	loop: true,
	autoplay: {
		delay: 30000
	}
});
floor5Swiper.on('slideChangeTransitionEnd', function(e) {
	var index = $('#floor5-swiper .swiper-slide-active').attr('data-swiper-slide-index');
	$("main .floor5 .menu .item").each(function() {
		if($(this).data("index") === Number(index)){
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});
	if(Number(index) === 0){
		floor5TranslateY = 0;
	}
	if(Number(index) === 5){
		floor5TranslateY -= floor5MenuHeight * 5;
	}
	if(Number(index) === 10){
		floor5TranslateY -= floor5MenuHeight * 2;
	}
	$("#floor5-menu").css("transform", `translateY(${ floor5TranslateY }px)`);
});
$("main .floor5 .menu .item").click(function(e) {
	e.preventDefault();
	e.stopPropagation();
	$("main .floor5 .menu .item").each(function() {
		$(this).removeClass("active");
	});
	$(this).addClass("active");
	floor5Swiper.slideTo($(this).data("index"), 500, false);
});
$("#floor5-menu-prev").click(function(e) {
	e.preventDefault();
	e.stopPropagation();
	if(floor5TranslateY !== 0){
		floor5TranslateY += floor5MenuHeight;
		$("#floor5-menu").css("transform", `translateY(${ floor5TranslateY }px)`);
	}
});
$("#floor5-menu-next").click(function(e) {
	e.preventDefault();
	e.stopPropagation();
	if(floor5TranslateY !== floor5MenuHeight * -7){
		floor5TranslateY -= floor5MenuHeight;
		$("#floor5-menu").css("transform", `translateY(${ floor5TranslateY }px)`);
	}
});

$("#floor5-swiper .swiper-slide .left .btn").click(function(e) {
	e.preventDefault();
	e.stopPropagation();
	window.open("product" + $(this).data("index") + ".html");
});


$(".floor2-scroll").click(function(e) {
	e.preventDefault();
	e.stopPropagation();
	$('html, body').animate({
		scrollTop: $('main .floor4').offset().top
	}, 200);
});