$(document).ready(function(){
	
	$("#seattle-native").hover(function() {
		$("#pic-seattle").show();
		$("#pic-berkeley").hide();
		$("#pic-surf").hide();
		$("#pic-tennis").hide();
		$("#pic-cs").hide();
	})

	$("#berkeley").hover(function() {
		$("#pic-berkeley").show();
		$("#pic-seattle").hide();
		$("#pic-surf").hide();
		$("#pic-tennis").hide();
		$("#pic-cs").hide();
	})

	$("#cs").hover(function() {
		$("#pic-cs").show();
		$("#pic-berkeley").hide();
		$("#pic-seattle").hide();
		$("#pic-surf").hide();
		$("#pic-tennis").hide();
	})
	$("#surf").hover(function() {
		$("#pic-surf").show();
		$("#pic-berkeley").hide();
		$("#pic-seattle").hide();
		$("#pic-tennis").hide();
		$("#pic-cs").hide();
	})
	
	$("#tennis").hover(function() {
		$("#pic-tennis").show();
		$("#pic-seattle").hide();
		$("#pic-berkeley").hide();
		$("#pic-surf").hide();
		$("#pic-cs").hide();
	})
	$("#background").hover(function() {
		$("#pic-seattle").hide();
		$("#pic-berkeley").hide();
		$("#pic-surf").hide();
		$("#pic-tennis").hide();
		$("#pic-cs").hide();
		$("#home").css("color", "white");
		$("#aboutme").css("color", "white");
		$("#resume").css("color", "white");
		$("#contact").css("color", "white");
		$("#link").text("Contact me");

	})

	$("#link").click(function() {
		$("#modal-container").show();
	})
	$("#link").hover(function() {
		$("#link").text("Send me a message!");
	})

	$("#button").click(function() {
		$("#modal-container").hide();
	})
	$("#button1").click(function() {
		$("#modal-container").hide();
	})

	$("#modal-overlay").click(function() {
		$("#modal-container").hide();
	})

	$("#home").hover(function() {
		$("#home").css("color", "#BEECFA");
		$("#aboutme").css("color", "white");
		$("#resume").css("color", "white");
		$("#contact").css("color", "white");
	})
	$("#aboutme").hover(function() {
		$("#aboutme").css("color", "#BEECFA");
		$("#home").css("color", "white");
		$("#resume").css("color", "white");
		$("#contact").css("color", "white");
	})
	$("#resume").hover(function() {
		$("#resume").css("color", "#BEECFA");
		$("#aboutme").css("color", "white");
		$("#home").css("color", "white");
		$("#contact").css("color", "white");
	})
	$("#contact").hover(function() {
		$("#contact").css("color", "#BEECFA");
		$("#aboutme").css("color", "white");
		$("#resume").css("color", "white");
		$("#home").css("color", "white");
	})
	
});