
$(document).ready(function(){

	var audioPlayer = document.getElementById('myaudio');
	var audioSrc = document.getElementById('audio-src');
	var defaultVolume = 0.5;


	if(audioPlayer != null){
		alert("audio player present")
		audioPlayer.volume = defaultVolume;
	}
	
	//event handlers below //
	$(".navbar li, .container li").hover(function(){
		$(this).addClass("active");
		},function(){
		$(this).removeClass("active");
	});
	
	//audio button controls //
	$("#volume-up-button").click(function( ) {
		audioPlayer.volume += 0.1;
	});

	$("#volume-down-button").click(function(){
		audioPlayer.volume -= 0.1;
	});

	$("#pause-button").click(function(){
		audioPlayer.pause();
	});
	
	$("#play-button").click(function(){
		audioPlayer.play();
	});

	$("#mute-button").click(function(){
		audioPlayer.mute();
	});

	$("#stop-button").click(function(){
		audioPlayer.pause();
		audioPlayer.currentTime = 0;
	});

	
	//not functional atm
	$("#song-1-button").click(function(){
		audioSrc.src = "audio/track-1.mp3";
	});

	$("#song-2-button").click(function(){
		audioSrc.src = "audio/track-2.mp3";
	});

});

