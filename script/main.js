(() => {
	// collect the buttons at the bottom of the page
	let bottomNav = document.querySelectorAll("#buttonHolder img"),
			gameBoard = document.querySelector(".puzzle-board"),
			puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
			dropZones = document.querySelectorAll(".drop-zone");

	const puzzlePaths = ["topLeft", "topRight", "bottomLeft", "bottomRight"]

	/* bottomNav collects all of the image elements into an array-like container that looks like this
	[
		<img src="images/topLeft0.jpg" class="puzzle-image" alt="top left">
		<img src="images/topRight0.jpg" class="puzzle-image" alt="top right">
		<img src="images/bottomLeft0.jpg" class="puzzle-image" alt="bottom left">
		<img src="images/bottomRight0.jpg" class="puzzle-image" alt="bottom right">
	]
	*/

	// add event handing here

	function changeImgSet () {
		// debugger;
		// the "this" keyword refers to the element that triggers this function (the nav button we click with the custom data attribute of bgref)
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;
		//loop through all of the small draggable images and change their src attribute with js
		puzzlePaths.forEach((img, index) => {
			puzzlePieces[index].src = `images/${img + this.dataset.bgref}.jpg`
		});// update each image's src one at a time)
	}

	function dragStarted(event) {
		console.log('started dragging a piece');
		// use the setData method of the drag event to store a reference to the current element
		event.dataTransfer.setData('currentItem', event.target.id);
	}

	function allowDragOver(event) {
		// turn off the default browser behaviour -> we want toa llow a dragover
		event.preventDefault();
		console.log('dragged over me');
		// retrieve the dragged element using dataTransfer object
		// this was set in the drag event using the set data method
		let droppedEl = event.dataTransfer.getData('currentItem');
		console.log(droppedEl);

		// appendChild is a built-in js function that adds an element to another as a child
		// move the dragged element into the dropzone
		// appendChild is a built-in js function that adds an element to another as a child
		this.appendChild(document.querySelector(`#${droppedEl}`));

	}

	function allowDrop(event) {
		// turn off the default browser behaviour -> follow our instructions instead of what a browser would normally do on drop
		event.preventDefault();
		console.log('dropped on me');
	}

	bottomNav.forEach(thumb => thumb.addEventListener("click", changeImgSet));

	// listen for the dragstarted event on the puzzlePieces
	puzzlePieces.forEach(piece => piece.addEventListener("dragstart", dragStarted));

	// add event handling for the drop zones (drag over and drop)
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", allowDragOver);
		zone.addEventListener("drop", allowDrop);
	});

})();
