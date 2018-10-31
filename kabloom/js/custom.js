jQuery(document).ready(function(){
	$('#myModal').modal('show');
	$(window).scroll(function(){
		if( $(this).scrollTop() > 200 ) {
			$('.top-icon').fadeIn();
		} else {
			$('.top-icon').fadeOut();
		}
	});
	$('.top-icon').on('click',function(e){
		event.preventDefault()
		$('html, body').animate({scrollTop : 0}, 1000);
		return false;
	});
	if( screen.width < 768 ){
		jQuery('.accordion-head').on('click',function(){
			jQuery('.accordion-body').addClass("collapse");
			if (jQuery(".accordion-body").hasClass("collapse"))
			{
			 jQuery(this).next(".accordion-body").removeClass("collapse");
			jQuery(this).next(".accordion-body").addClass("expand");
			}
			jQuery('.accordion-head').not(this).next('.accordion-body.collapse').slideUp(700);
			jQuery(this).next('.accordion-body.expand').slideToggle(700);
			jQuery(".accordion-head").not(this).removeClass("minus");
			jQuery(this).toggleClass("minus");
		});
	}		
});
