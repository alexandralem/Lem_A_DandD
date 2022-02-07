(() => {
	// collect the buttons at the bottom of the page
	let bottomNav = document.querySelectorAll("#buttonHolder img"),
			gameBoard = document.querySelector(".puzzle-board");

	/* bottomNav collects all of the image elements into an array-like container that looks like this
	[
		<img src="images/topLeft0.jpg" class="puzzle-image" alt="top left">
		<img src="images/topRight0.jpg" class="puzzle-image" alt="top right">
		<img src="images/bottomLeft0.jpg" class="puzzle-image" alt="bottom left">
		<img src="images/bottomRight0.jpg" class="puzzle-image" alt="bottom right">
	]
	*/

	// add event handing here

	function changeBgImg () {
		// debugger;
		// the "this" keyword refers to the element that triggers this function (the nav button we click with the custom data attribute of bgref)
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`
	}

	bottomNav.forEach(thumb => thumb.addEventListener("click", changeBgImg));

})();
