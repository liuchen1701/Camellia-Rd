$(document).ready(function () {
	//Navigation menu slider
	$('#nav-expander').on('click', function (e) {
		e.preventDefault();
		$('body').toggleClass('nav-expanded');
	});
	$('#nav-close').on('click', function (e) {
		e.preventDefault();
		$('body').removeClass('nav-expanded');
	});
});