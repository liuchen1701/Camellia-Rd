$(document).ready(function () {
	//Navigation menu slider
	$('#nav-expander').on('click', function (e) {
		e.preventDefault();
		$('body').toggleClass('nav-expanded');
		console.log("hi");
	});
	$('#nav-close').on('click', function (e) {
		e.preventDefault();
		$('body').removeClass('nav-expanded');
		console.log("bye");
	});
});