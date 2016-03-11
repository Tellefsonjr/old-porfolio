$(function() {
	$.scrollify({
		section:".panel"
	});

	$(".scroll,.scroll-btn").click(function(e) {
		e.preventDefault();

		$.scrollify.next();
	});


});
$("#dojo_btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#dojo_gram_feature").offset().top},
        'slow');
});
