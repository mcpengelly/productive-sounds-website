
$(document).ready(function(){
	$(".navbar li, .container li").hover(function(){
	  $(this).addClass("active");
	  },function(){
	  $(this).removeClass("active");
	});
	
	$("#volume-up-button").click(function(){
		$("#now-playing-audio").volume += 0.1;
	});
	$("#volume-down-button").click(function(){
		$("#now-playing-audio").volume -= 0.1;
	});
	$("#mute-button").click(function(){
		$("#now-playing-audio").mute;
	});
	

});

