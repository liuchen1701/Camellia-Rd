function onResize(e) {
	var width = e.target.outerWidth;
	var container = document.getElementById("menu-container");
		
	if (width < 768) {
		container.className = "container-fluid";
	} else {
		container.className = "container";
	}
}

window.addEventListener("resize", onResize);