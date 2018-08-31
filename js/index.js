window.onload = function() {
	$(".actOne").addClass("actOnego")
	var win = $(window); 
	var sc = $(document); 
	$(window).scroll(function() {
		if(sc.scrollTop() > $(".actTwo").offset().top - 300) {
			$(".actTwo").addClass("actTwogo")
		}
		if(sc.scrollTop() > $(".actTwos").offset().top - 300) {
			$(".actTwos").addClass("actTwogo")
		}
		if(sc.scrollTop() > $(".actThree").offset().top - 300) {
			$(".actThree").addClass("actThreego")
		}
		if(sc.scrollTop() > $(".actFour").offset().top - $('.actFour').height()-100) {
			$(".actFour").addClass("actFourgo")
		}
	});

}

