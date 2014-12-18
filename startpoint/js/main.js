
$(document).ready(function(){

	var audioPlayer = document.getElementById("myaudio");
	var audioSrc = document.getElementById('audio-src');
	var defaultVolume = 0.3;
	var lights = true; //lights start on.

	if(audioPlayer !== null){
	 audioPlayer.volume = defaultVolume;
	 audioPlayer.load();
     audioPlayer.play();
	$( "#now-playing" ).text( "Now Playing: " + "track-1.mp3");
	
	 alert("audio player initialized");
	 $( "#current-volume" ).text( "Volume: " + audioPlayer.volume * 10);
		
	}
	
	//event handlers below //
	$(".navbar li, .container li").hover(function(){
		$(this).addClass("active");
		},function(){
		$(this).removeClass("active");
	});
	
	//page content controls
	
	//TIPS: use body-content:first??
	//use the on complete provided on the fadeto function to remove the element from the screen after fading
	// IF BODY-OUTPUT 1ST CHILD HAS CLASS CONTENT AND IS NOT ALREADY ON LANDING CONTENT,
	//{ REMOVE IT AND PUT LANDING CONTENT }
	//.body-output .content  // hide?
	
	//code works but should be refactored
	// add fadeable class
	
	function HideContents(){
		$("#landing-content").fadeOut( 1000, function() {
			$("#landing-content").addClass("hide");

		});
		$("#contact-content").fadeOut( 1000, function() {
			$("#contact-content").addClass("hide");
	
		});
		$("#about-content").fadeOut( 1000, function() {
			$("#about-content").addClass("hide");
	
		});
		$("#notepad-content").fadeOut( 1000, function() {
			$("#about-content").addClass("hide");
	
		});
		$("#pomodoro-content").fadeOut( 1000, function() {
			$("#about-content").addClass("hide");
	
		});
	}
	
	$("#home-button").click(function( ) {
		HideContents();
		$("#landing-content").fadeIn(1000, function(){ 
			$("#landing-content").removeClass("hide");
		});
	});
	
	$("#about-button").click(function( ) {
		HideContents();		
		$("#about-content").fadeIn(1000, function(){ 
			$("#about-content").removeClass("hide");
		});
	});
	
	$("#contact-button").click(function( ) {
		HideContents();		
		$("#contact-content").fadeIn(1000, function(){ 
			$("#contact-content").removeClass("hide");
		});

	});
	
	
	
	$("#lights-button").click(function( ) {
		// change background to black and dim page content
		if(lights === true){
			$("#mod-this").addClass("darken");
			$(".jumbotron").addClass("dim");
			lights = false; // set ligths flag to off
		}
		else{
			$("#mod-this").removeClass("darken");
			$(".jumbotron").removeClass("dim");
			lights = true; //set lights flag to on
		}
	});
	
	$("#pomodoro-button").click(function( ) {
		HideContents();		
		$("#pomodoro-content").fadeIn(1000, function(){ 
			$("#pomodoro-content").removeClass("hide");
		});
	});
	$("#notepad-button").click(function( ) {
		HideContents();		
		$("#notepad-content").fadeIn(1000, function(){ 
			$("#notepad-content").removeClass("hide");
		});
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

	// tracklist stuff below
	var songlist = ["track-1.mp3",
	                "track-2.mp3",
	                "track-3.mp3",
	                "track-4.mp3"];

	function ChangeSong(songChoice){
		audioPlayer.setAttribute('src', 'audio/' + songChoice);
		audioPlayer.load();
        audioPlayer.play();
		$( "#now-playing" ).text( "Now Playing: " + songChoice);
	}

	$("#song-1-button").click(function(){
		ChangeSong(songlist[0]);
	});

	$("#song-2-button").click(function(){
		ChangeSong(songlist[1]);
	});
	
	$("#song-3-button").click(function(){
		ChangeSong(songlist[2]);
	});
	
	$("#song-4-button").click(function(){
		ChangeSong(songlist[3]);
	});

});

