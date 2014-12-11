
$(document).ready(function(){

	var audioPlayer = document.getElementById("myaudio");
	var audioSrc = document.getElementById('audio-src');
	var defaultVolume = 0.5;

	
	if(audioPlayer != null){
		audioPlayer.load();
		audioPlayer.volume = defaultVolume;	
		audioPlayer.play();
		alert("audio player initialized")
		
	}
	
	//event handlers below //
	$(".navbar li, .container li").hover(function(){
		$(this).addClass("active");
		},function(){
		$(this).removeClass("active");
	});
	
	//page content controls
	$("#home-button").click(function( ) {
		$("#about-content").addClass("hide");
		$("#landing-content").removeClass("hide");
	});
	$("#about-button").click(function( ) {
		$("#landing-content").addClass("hide");
		$("#about-content").removeClass("hide");
	});
	$("#contact-button").click(function( ) {

	});
	$("#lights-button").click(function( ) {
		
	});
	$("#pomodoro-button").click(function( ) {
		
	});
	$("#notepad-button").click(function( ) {
		
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

	var song1 = "audio/track-1.mp3";
	var song2 = "audio/track-2.mp3";
	
	//not functional atm
	$("#song-1-button").click(function(){
		audioPlayer.pause();
		audioSrc.attr('src', song1);
		audioSrc.load();
		audioPlayer.play();
	});

	$("#song-2-button").click(function(){
		audioPlayer.pause();
		audioSrc.attr('src', song2);
		audioSrc.load();
		audioPlayer.play();
	});

});

