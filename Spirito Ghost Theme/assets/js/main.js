

function articleHeaderFadeIn() {
	$('#headerImage').css({'opacity':'0'});
    //alert("pinogino");
    $('#headerImage').animate({'opacity':'1'}, 1000);
}


function setHeaderParallax() {

	$(window).scroll(function() {
		
		var vel = 6;
		var e = $(window).scrollTop()/vel;
		var	t = "50% " + ( 50 - e ) + "%";

		$("#headerImage").css( {backgroundPosition:t} );
	});
}



$(document).ready(function() {
	
	articleHeaderFadeIn();
	setHeaderParallax();

});


