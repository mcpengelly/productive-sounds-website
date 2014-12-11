
$(document).ready(function(){

	var audioPlayer = $("#now-playing-audio");
	var audioSrc = $("#audio-src");
	
	$(".navbar li, .container li").hover(function(){
	  $(this).addClass("active");
	  },function(){
	  $(this).removeClass("active");
	});
	
	$("#play-button").click(function(){
		audioPlayer.play;
	});
	
	$("#pause-button").click(function(){
		audioPlayer.pause;
	});
	
	$("#mute-button").click(function(){
		audioPlayer.mute;
	});
	
	$("#volume-up-button").click(function(){
		audioPlayer.volume += 0.1;
	});
	
	$("#volume-down-button").click(function(){
		audioPlayer.volume -= 0.1;
	});
	
	$("#song-1-button").click(function(){
		audioSrc.html('id="audio-src" src="audio/track-1.mp3" type="audio/mpeg"');
	
	});
	$("#song-2-button").click(function(){
		$("#audio-src").html('id="audio-src" src="audio/track-2.mp3" type="audio/mpeg"');
	
	});
});

