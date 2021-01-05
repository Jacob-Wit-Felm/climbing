function domcofiguration() {
	document.getElementById('themeswitch').onclick = function() {
		console.log("nerd")
		console.log("theme change");
		theme = document.getElementById('theme');
		console.log(theme)
		console.log(theme.href)
		console.log(theme.href == "css/style.css")
		if (theme.href == "file:///home/witfelm/Documents/Programming/climbing/css/style.css") {
			theme.href = "file:///home/witfelm/Documents/Programming/climbing/css/dark.css";
		} else {
			theme.href = "file:///home/witfelm/Documents/Programming/climbing/css/style.css";
		}
	}
}

window.addEventListener("DOMContentLoaded", function(){
	domcofiguration()
});
