
$(document).ready(function(){

	var audioPlayer = document.getElementById("myaudio");
	var audioSrc = document.getElementById('audio-src');
	var defaultVolume = 0.3;
	var lights = true; //lights start on.

	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

	//init: fade out all page content other then landing content
	$("#about-content").fadeOut("fast");
	$("#contact-content").fadeOut("fast");
	$("#pomodoro-content").fadeOut("fast");
	$("#notepad-content").fadeOut("fast");


	$("#timer-button").click(function(){
		var minutes = 25;
		var seconds = 60;
		var countdown = seconds * minutes;
		var display = document.getElementById('timer-display');

		function timerTick(){
			countdown--;
			display.innerHTML = "Time remaining: " + Math.round(countdown/60);
		}

		var timer = setInterval(timerTick, 1000);

		function stopMsgUpdate(){
			clearInterval(timer);
		}

		setTimeout(stopMsgUpdate, 1000 * countdown);
	});

	//if audioPlayer isnt null initialize it.
	if(audioPlayer !== null){
	  audioPlayer.volume = defaultVolume;
	  audioPlayer.load();
      audioPlayer.play();
	  $( "#now-playing" ).text( "Now Playing: " + "track-1.mp3");

	  alert("audio player initialized");
	  $( "#current-volume" ).text( "Volume: " + audioPlayer.volume * 10);
	}

	//hover events for all list item clickables within container and navbar below //

	$("#song-list li").hover(function(){
		$(this).addClass("active");
		},function(){
		$(this).removeClass("active");
	});

	//code works but should be refactored to be made more modular.
	//could use e.preventDefault to prevent the page from moving to top of page when a anchor tag is clicked

	//PAGE CONTENT BUTTONS
	$("#home-button").click(function( ) {
		//find whatever content is currently displaying fade it out then fade in landing content.
		$("#body-output").find(".active").fadeOut("slow", function(){
			$(this).removeClass("active");
			$("#landing-content").fadeIn("slow");
			$("#landing-content").addClass("active");
		});

	});

	$("#about-button").click(function( ) {
		//find whatever content is currently displaying fade it out then fade in about content.
		$("#body-output").find(".active").fadeOut("slow", function(){
			$(this).removeClass("active");
			$("#about-content").fadeIn("slow");
			$("#about-content").addClass("active");
		});

	});

	$("#contact-button").click(function( ) {
		//find whatever content is currently displaying fade it out then fade in about content. use active as indicator of which body content is displaying
		$("#body-output").find(".active").fadeOut("slow", function(){
			$(this).removeClass("active");
			$("#contact-content").fadeIn("slow");
			$("#contact-content").addClass("active");
		});
	});

	$("#pomodoro-button").click(function( ) {
		$("#body-output").find(".active").fadeOut("slow", function(){
			$(this).removeClass("active");
			$("#pomodoro-content").fadeIn("slow");
			$("#pomodoro-content").addClass("active");
		});
	});
	$("#notepad-button").click(function( ) {
		$("#body-output").find(".active").fadeOut("slow", function(){
			$(this).removeClass("active");
			$("#notepad-content").fadeIn("slow");
			$("#notepad-content").addClass("active");
		});
	});

	$("#lights-button").click(function( ) {
		// change background to black and dim page content
		//if lights are on turn them off else turn them back on.
		if(lights === true){
			$(this).addClass("active");
			$("#mod-this").addClass("darken");
			$(".jumbotron").addClass("dim");
			$(".list-group-item").addClass("dim-2");
			lights = false; // set ligths flag to off
		}
		else{
			$(this).removeClass("active");
			$("#mod-this").removeClass("darken");
			$(".jumbotron").removeClass("dim");
			$(".list-group-item").removeClass("dim-2");
			lights = true; //set lights flag to on
		}
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
		$( "#current-volume" ).text( "Volume: " + Math.floor(audioPlayer.volume * 10));
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
			$(this).addClass("active");
			audioPlayer.muted = true;
			//add indication that were muted
		}
		else{ // else unmute it
			$(this).removeClass("active");
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

	//song selection button event handlers
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

