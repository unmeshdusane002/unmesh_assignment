$(document).ready(function(){

	/*$(".tab").click(function() {
			$(".tab").removeClass("active");
			$(".tab").children().removeClass("active");
			$(this).addClass("active");
			$(this).children().addClass("active");
			$(".tabContent").removeClass("active");
			var activeContentTab = $(this).find("a").attr("href");
			$(activeContentTab).addClass("active"); 
					
		});*/


    $('.tabContent').hide();
    $('.middleTab a').bind('click',function(e){
	  $('.middleTab a.active ').removeClass('active');
	  $('.tabContent:visible').hide();
	  $(this.hash).show();
	  $(this).addClass('active');
	   e.preventDefault();
  }).filter(':first').click();


   $('.tab-section').hide();
    $('.tabs a').bind('click', function(e){
        $('.tabs a.current').removeClass('current');
        $('.tab-section:visible').hide();
        $(this.hash).show();
        $(this).addClass('current');
        e.preventDefault();
   	 }).filter(':first').click();

   
  
	
});




