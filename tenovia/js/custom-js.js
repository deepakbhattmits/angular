jQuery(document).ready(function(){
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
	$("#owl-demo").owlCarousel({
	items:1,
	loop:true,
    margin:10,
    responsiveClass:true,
	autoplay: 500,
	autoplayHoverPause: true, // Stops autoplay
    slideSpeed: 200,
    responsive:{
        0:{
            items:1,
            nav:true,
			navText: [
                "<span class='arrow-left fa fa-chevron-left fa-2x'></span>",
                "<span class='arrow-right fa fa-chevron-right fa-2x'></span>"
            ],
			slideBy: 1 // <!-- HERE
        },
        600:{
            items:3,
            nav:false,
			slideBy: 2 // <!-- HERE
        },
        1000:{
            items:6,
            nav:true,
			navText: [
                "<span class='arrow-left fa fa-chevron-left fa-2x'></span>",
                "<span class='arrow-right fa fa-chevron-right fa-2x'></span>"
            ],
			slideBy: 4 // <!-- HERE
        }
    }
  });
  jQuery('.mbl-icon-nav').on('click', function(){
	 var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  });

});
