$(document).ready(function(){
	
	var currentValue = "x"
	var cols=3;
	var rows=3;
	var id;

	$(".initialBlock").hide();
    $(".btnClear").hide();
    for(var i=1; i<=cols*rows;++i)
	{
   	   	$("<div></div>").addClass("span2 btn innerBoxButton").attr("id",i).appendTo("div.ground");
    }

	$(".btnPlay").click(function(){
		$(".startPage").hide();
        $(".initialBlock").fadeIn();
        $(".btnClear").fadeIn();
        $(".span2").fadeIn();
	});

	$(".span2").bind("click",boxClick); // cross or circle button event

	function boxClick()
	{
			id=$(this).attr("id");
	
			if(currentValue == "x"){
  				if($(this).hasClass("value")){
  				}
  				else{
  					$(this).html(currentValue);
    	            $(this).addClass("btn-primary value  "+ currentValue);
    	            currentValue = "o";
    	            CPUSide();
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
	}

	function CPUSideClick()
	{
		alert("still in progress...project is not completed yet");
		switch(id)
		{
			case "1": 
					if($("#1").hasClass("x") & $("#2").hasClass("x"))
					{
						$("#3").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x";
					}else
					if($("#2").hasClass("x") & $("#3").hasClass("x"))
					{
						$("#1").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x";
					}else
					if($("#1").hasClass("x") & $("#3").hasClass("x"))
					{
						$("#2").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x";
					}else
					if($("#1").hasClass("x") & $("#4").hasClass("x"))
					{
						$("#7").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#4").hasClass("x") & $("#7").hasClass("x"))
					{
						$("#1").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#1").hasClass("x") & $("#7").hasClass("x"))
					{
						$("#4").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
						CPUSideClick();
					break;
		}

	}
	function CPUSide()
	{
		switch(id)
		{
			case "1": 
					if($("#1").hasClass("x") & $("#2").hasClass("x"))
					{
						$("#3").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x";
					}else
					if($("#2").hasClass("x") & $("#3").hasClass("x"))
					{
						$("#1").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x";
					}else
					if($("#1").hasClass("x") & $("#3").hasClass("x"))
					{
						$("#2").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x";
					}else
					if($("#1").hasClass("x") & $("#4").hasClass("x"))
					{
						$("#7").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#4").hasClass("x") & $("#7").hasClass("x"))
					{
						$("#1").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#1").hasClass("x") & $("#7").hasClass("x"))
					{
						$("#4").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
						CPUSideClick();
					break;
			case "2":
					if($("#1").hasClass("x") & $("#2").hasClass("x"))
					{
						$("#3").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x";
					}else
					if($("#2").hasClass("x") & $("#3").hasClass("x"))
					{
						$("#1").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x";
					}else
					if($("#1").hasClass("x") & $("#3").hasClass("x"))
					{
						$("#2").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x";
					}else
					if($("#2").hasClass("x") & $("#5").hasClass("x"))
					{
						$("#8").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#2").hasClass("x") & $("#8").hasClass("x"))
					{
						$("#5").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#5").hasClass("x") & $("#8").hasClass("x"))
					{
						$("#1").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}
					break;
			case "3": 
					if($("#1").hasClass("x") & $("#2").hasClass("x"))
					{
						$("#3").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x";
					}else
					if($("#2").hasClass("x") & $("#3").hasClass("x"))
					{
						$("#1").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x";
					}else
					if($("#1").hasClass("x") & $("#3").hasClass("x"))
					{
						$("#2").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x";
					}else
					if($("#3").hasClass("x") & $("#6").hasClass("x"))
					{
						$("#9").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#3").hasClass("x") & $("#9").hasClass("x"))
					{
						$("#6").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#6").hasClass("x") & $("#9").hasClass("x"))
					{
						$("#3").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}
					break;	
			case "4": 
					if($("#1").hasClass("x") & $("#4").hasClass("x"))
					{
						$("#7").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x";
					}else
					if($("#4").hasClass("x") & $("#7").hasClass("x"))
					{
						$("#1").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x";
					}else
					if($("#1").hasClass("x") & $("#7").hasClass("x"))
					{
						$("#4").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x";
					}else
					if($("#4").hasClass("x") & $("#5").hasClass("x"))
					{
						$("#6").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#4").hasClass("x") & $("#6").hasClass("x"))
					{
						$("#5").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#5").hasClass("x") & $("#6").hasClass("x"))
					{
						$("#4").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}
					break;	
			 case "5": 
					if($("#4").hasClass("x") & $("#5").hasClass("x"))
					{
						$("#6").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#4").hasClass("x") & $("#6").hasClass("x"))
					{
						$("#5").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#5").hasClass("x") & $("#6").hasClass("x"))
					{
						$("#4").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#2").hasClass("x") & $("#5").hasClass("x"))
					{
						$("#8").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#2").hasClass("x") & $("#8").hasClass("x"))
					{
						$("#5").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#5").hasClass("x") & $("#8").hasClass("x"))
					{
						$("#2").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}
					break;
			case "6": 
					if($("#4").hasClass("x") & $("#5").hasClass("x"))
					{
						$("#6").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#4").hasClass("x") & $("#6").hasClass("x"))
					{
						$("#5").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#5").hasClass("x") & $("#6").hasClass("x"))
					{
						$("#4").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#3").hasClass("x") & $("#6").hasClass("x"))
					{
						$("#9").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#6").hasClass("x") & $("#9").hasClass("x"))
					{
						$("#3").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#3").hasClass("x") & $("#9").hasClass("x"))
					{
						$("#6").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}
					break;
			case "7":
					if($("#1").hasClass("x") & $("#4").hasClass("x"))
					{
						$("#7").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x";
					}else
					if($("#4").hasClass("x") & $("#7").hasClass("x"))
					{
						$("#1").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x";
					}else
					if($("#1").hasClass("x") & $("#7").hasClass("x"))
					{
						$("#4").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x";
					}else
					if($("#7").hasClass("x") & $("#8").hasClass("x"))
					{
						$("#9").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#7").hasClass("x") & $("#9").hasClass("x"))
					{
						$("#8").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#8").hasClass("x") & $("#9").hasClass("x"))
					{
						$("#7").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}
					break;
			case "8": 
					if($("#7").hasClass("x") & $("#8").hasClass("x"))
					{
						$("#9").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#7").hasClass("x") & $("#9").hasClass("x"))
					{
						$("#8").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#8").hasClass("x") & $("#9").hasClass("x"))
					{
						$("#7").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#2").hasClass("x") & $("#5").hasClass("x"))
					{
						$("#8").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#2").hasClass("x") & $("#8").hasClass("x"))
					{
						$("#5").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#5").hasClass("x") & $("#8").hasClass("x"))
					{
						$("#2").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}
					break;
			case "9": 
					if($("#3").hasClass("x") & $("#6").hasClass("x"))
					{
						$("#9").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#3").hasClass("x") & $("#9").hasClass("x"))
					{
						$("#6").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#6").hasClass("x") & $("#9").hasClass("x"))
					{
						$("#3").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#7").hasClass("x") & $("#8").hasClass("x"))
					{
						$("#9").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#8").hasClass("x") & $("#9").hasClass("x"))
					{
						$("#7").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}else
					if($("#7").hasClass("x") & $("#9").hasClass("x"))
					{
						$("#8").html(currentValue);
						$(this).addClass("btn-danger value  circleColor "+ currentValue);
    	    			currentValue = "x"
					}
					break;
		}
	}

});