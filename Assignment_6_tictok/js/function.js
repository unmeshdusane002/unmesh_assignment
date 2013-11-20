$(document).ready(function(){

		var currentValue = "x"
		var cols=3;
		var rows=3;
		
       $(".initialBlock").hide();
       $(".btnClear").hide();

        for(var i=1; i<=cols*rows;++i)
		{
   	    	$("<div></div>").addClass("span2 btn innerBoxButton").attr("id",i).appendTo("div.ground");
        }
           
        
    	
    	function boxClick() // function for click of cross and circle
    	{
    		if(currentValue == "x"){
  				if($(this).hasClass("value")){
  				}
  				else{
  					$(this).html(currentValue);
    	            $(this).addClass("btn-primary value  "+ currentValue);
    	            currentValue = "o"
                }
             }
             else{
             	if($(this).hasClass("value")){
  				}
  				else{
		       		$(this).html(currentValue);
    	            $(this).addClass("btn-danger value  circleColor "+ currentValue);
    	            currentValue = "x"
                }
             }
             checkWinner(); 
    	}



        // function of alert box ok button
        $(".messageOk").click(function (){ 
            $('.winnerBox').hide(1000);
            $(".span2").html("").removeClass("value btn-primary btn-danger circleColor x o");
        });

        $(".winnerBoxMenu").click(function(){
            $('.winnerBox').hide();
            $(".span2").html("").removeClass("value btn-primary btn-danger circleColor x o").hide();
            $(".btnClear").hide();
            $(".startPage").fadeIn();
            $(".initialBlock").fadeIn();
        });
   
        // function called from boxClick function to chekc player is win or not
        function checkWinner()         {    

                    if( ($('#1').hasClass('x') && $('#2').hasClass('x') && $('#3').hasClass('x'))
                                         
                     || ($('#4').hasClass('x') && $('#5').hasClass('x') && $('#6').hasClass('x'))
                     || ($('#7').hasClass('x') && $('#8').hasClass('x') && $('#9').hasClass('x'))
                     || ($('#1').hasClass('x') && $('#4').hasClass('x') && $('#7').hasClass('x'))
                     || ($('#2').hasClass('x') && $('#5').hasClass('x') && $('#8').hasClass('x'))
                     || ($('#3').hasClass('x') && $('#6').hasClass('x') && $('#9').hasClass('x'))
                     || ($('#1').hasClass('x') && $('#5').hasClass('x') && $('#9').hasClass('x'))
                     || ($('#3').hasClass('x') && $('#5').hasClass('x') && $('#7').hasClass('x'))
                    )
                    {  
                        $('.winnerBox').fadeIn("slow");
                       $('.winnerBoxContent').html("Congrats! X win");
                        
                    }
                    else 
                    if( ($('#1').hasClass('o') && $('#2').hasClass('o') && $('#3').hasClass('o'))
                     || ($('#4').hasClass('o') && $('#5').hasClass('o') && $('#6').hasClass('o'))
                     || ($('#7').hasClass('o') && $('#8').hasClass('o') && $('#9').hasClass('o'))
                     || ($('#1').hasClass('o') && $('#4').hasClass('o') && $('#7').hasClass('o'))
                     || ($('#2').hasClass('o') && $('#5').hasClass('o') && $('#8').hasClass('o'))
                     || ($('#3').hasClass('o') && $('#6').hasClass('o') && $('#9').hasClass('o'))
                     || ($('#1').hasClass('o') && $('#5').hasClass('o') && $('#9').hasClass('o'))
                     || ($('#3').hasClass('o') && $('#5').hasClass('o') && $('#7').hasClass('o'))
                    )
                    {   
                             $('.winnerBox').fadeIn("500","swing");
                            $('.winnerBoxContent').html("Congrats! O win");
                        }
                    else
                    {
                        var numItems = $('div.value').length;
                        if(numItems==9)
                        {
                             $('.winnerBox').fadeIn();
                            $('.winnerBoxContent').html("Game tie");
                        }
                    }
    	}

    	// ClearAll button event  	
       $("div.btnClear").click(function(){
             $(".span2").html("");
             $(".span2").removeClass("value btn-primary btn-danger circleColor x o");
       });

       $(".span2").bind("click",boxClick); // cross or circle button event
     	

       // button play again event 
       $(".btnPlay").click(function(){
            $(".startPage").hide();
            $(".initialBlock").fadeIn();
            $(".btnClear").fadeIn();
            $(".span2").fadeIn();
       });
   		
       $(".btnExit").click(function(){
            alert("exit");
       });




    });