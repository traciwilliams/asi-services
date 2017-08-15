
/*sicky nav*/
$(document).ready(function() {
	$('.js--process-section').waypoint(function(direction){
		if(direction == "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');	
		}
	});


	$('.js--scroll-to-process-section').click(function(){
		$('html,body').animate({scrollTop: $('.js--process-section').offset().top},1000);
	});

	$('.js--scroll-to-form-section').click(function(){
		$('html,body').animate({scrollTop: $('.js--form-section').offset().top},1000);
	});

	$('.process-section').click(function(){
		$('html,body').animate({scrollTop: $('.js--process-section').offset().top},1000);
	});
	
	$('.gears-section').click(function(){
		$('html,body').animate({scrollTop: $('.js--gears-section').offset().top},1000);
	});
	
	$('.careers-section').click(function(){
		$('html,body').animate({scrollTop: $('.js--careers-section').offset().top},1000);
	});

	$('.testimony-section').click(function(){
		$('html,body').animate({scrollTop: $('.js--testimony-section').offset().top},1000);
	});	

	$('.form-section').click(function(){
		$('html,body').animate({scrollTop: $('.js--form-section').offset().top},1000);
	});
	


	
















});