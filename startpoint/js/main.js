
$(document).ready(function(){

	var audioPlayer = document.getElementById("myaudio");
	var audioSrc = document.getElementById('audio-src');
	var defaultVolume = 0.3;
	var lights = true; //lights start on.

	
	if(audioPlayer !== null){
	 audioPlayer.load();
	 audioPlayer.volume = defaultVolume;	
	 audioPlayer.play();
	 alert("audio player initialized");
	 $( "#now-playing" ).text( "Now Playing: Track 1");
	 $( "#current-volume" ).text( "Volume: " + audioPlayer.volume * 10);
		
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
		// change background to black and dim page content
		if(lights === true){
			$("#surround-this").addClass("darken");
			$(".jumbotron").addClass("dim");
			lights = false; // set ligths flag to off
		}
		else{
			$("#surround-this").removeClass("darken");
			$(".jumbotron").removeClass("dim");
			lights = true; //set lights flag to on
		}
	});
	$("#pomodoro-button").click(function( ) {
		
	});
	$("#notepad-button").click(function( ) {
		
	});
	
	//audio button controls //
	$("#volume-up-button").click(function( ) {
		audioPlayer.volume += 0.1;
		//display volume * 10,userfriendly volume indicator
		$( "#current-volume" ).text( "Volume: " + Math.round(audioPlayer.volume * 10));
	});

	$("#volume-down-button").click(function(){
		audioPlayer.volume -= 0.1;
		//display volume * 10, userfriendly volume indicator
		$( "#current-volume" ).text( "Volume: " + Math.round(audioPlayer.volume * 10));
	});

	$("#pause-button").click(function(){
		audioPlayer.pause();
	});
	
	$("#play-button").click(function(){
		audioPlayer.play();
	});

	$("#mute-button").click(function(){
	//if audio is not muted when clicked, mute it
		if(audioPlayer.muted === false){
			audioPlayer.muted = true;
			//add indication that were muted
		}
		else{ // else unmute it
			audioPlayer.muted = false;
		}	
		
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

	});
	$("#song-3-button").click(function(){

	});
	$("#song-4-button").click(function(){

	});

});

