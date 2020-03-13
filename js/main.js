/* ========================================================================= */
/*	Preloader
/* ========================================================================= */

jQuery(window).load(function(){
	$("#preloader").fadeOut("slow");
});

$(document).ready(function(){
	var swiperContainer=new Swiper('#slider .swiper-container',{
		pagination: '.swiper-pagination',
		slidesPerView:'auto',
		centeredSlides:true,
		effect:'coverflow',
		speed:1200,
		loop:!0,
		autoplay:3e3,
		lazyLoading: true,
		keyboardControl: true,
		paginationClickable:true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		coverflow:{
		  slideShadows:true
		}
	  });

	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */

	jQuery('#nav').singlePageNav({
		offset: jQuery('#nav').outerHeight(),
		filter: ':not(.external)',
		speed: 2000,
		currentClass: 'current',
		easing: 'easeInOutExpo',
		updateHash: true,
		beforeStart: function() {
			console.log('begin scrolling');
		},
		onComplete: function() {
			console.log('done scrolling');
		}
	});
	
	/* ========================================================================= */
	/*	Fix Slider Height
	/* ========================================================================= */	

	$("#works, #testimonial").owlCarousel({	 
		navigation : true,
		pagination : false,
		slideSpeed : 700,
		paginationSpeed : 400,
		singleItem:true,
		navigationText: ["<i class='fa fa-angle-left fa-lg'></i>","<i class='fa fa-angle-right fa-lg'></i>"]
	});
	
	/* ========================================================================= */
	/*	Featured Project Lightbox
	/* ========================================================================= */

	$(".fancybox").fancybox({
		padding: 0,

		openEffect : 'elastic',
		openSpeed  : 650,

		closeEffect : 'elastic',
		closeSpeed  : 550,

		closeClick : true,
			
		beforeShow: function () {
			this.title = $(this.element).attr('title');
			this.title = '<h3>' + this.title + '</h3>' + '<p>' + $(this.element).parents('.portfolio-item').find('img').attr('alt') + '</p>';
		},
		
		helpers : {
			title : { 
				type: 'inside' 
			},
			overlay : {
				css : {
					'background' : 'rgba(0,0,0,0.8)'
				}
			}
		}
	});
	
});

var wow = new WOW ({
	offset:       75,          // distance to the element when triggering the animation (default is 0)
	mobile:       false,       // trigger animations on mobile devices (default is true)
});

wow.init();