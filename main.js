const menu = document.getElementById("menu");
const menuButton = document.getElementById("menu-btn");
const menuButtonClose = document.getElementById("menu-btn-close");

menuButton.addEventListener("click", () => {
	menu.style.display = "flex";
	menuButton.style.display = "none";
	menuButtonClose.style.display = "block";
});

menuButtonClose.addEventListener("click", () => {
	menu.style.display = "none";
	menuButton.style.display = "block";
	menuButtonClose.style.display = "none";
});

function hideMenuOnResize() {
	if (window.innerWidth > 1100) {
		menuButton.style.display = "none";
		menuButtonClose.style.display = "none";
	}
}

window.addEventListener("resize", hideMenuOnResize);
