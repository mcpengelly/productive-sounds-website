
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
	
	$("#song-1-button").click(function(){
		$("audio-src").html('id="audio-src" src="audio/track-1.mp3" type="audio/mpeg"');
	
	});
	$("#song-2-button").click(function(){
		$("audio-src").html('id="audio-src" src="audio/track-2.mp3" type="audio/mpeg"');
	
	});
});

