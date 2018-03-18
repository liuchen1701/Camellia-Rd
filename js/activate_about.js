function about() {
		var landing = document.getElementById("landing-about");
		var landing_height = landing.clientHeight;

//    var about = document.getElementById("about");
//    var about_height = about.offsetTop;
	
		var navbar = document.getElementsByClassName("navbar")[0];
		var nav_height = navbar.clientHeight;

    var current_height = $(window).scrollTop();

//    console.log("landing@:\t" + landing_height + "\nnav@:\t" + nav_height + "\npage@:\t" + current_height);

    if(current_height >= landing_height - nav_height) {
        var about_button = document.getElementsByClassName("button-to-about")[0];
        var about_button_r = document.getElementsByClassName("button-to-about-row")[0];
        about_button.classList.add("live-page");
        about_button_r.classList.add("live-page");
    } else {
        var about_button = document.getElementsByClassName("button-to-about")[0];
        var about_button_r = document.getElementsByClassName("button-to-about-row")[0];
        about_button.classList.remove("live-page");
        about_button_r.classList.remove("live-page");
    }
}

$(window).scroll(about);