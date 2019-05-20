class Carousel {
	constructor(carousElement){
		this.carousElement = carousElement;

		/* elements: 
		- left btn
		- right btn
		- current img
		- images array */
		
		this.leftBtn = this.carousElement.querySelector('.left-button');
		this.rightBtn = this.carousElement.querySelector('.right-button');
		this.imageArray = this.carousElement.querySelectorAll('img');
		this.hideImages();
		// set this.currentImg and this.currentIndex to that of the first image
		this.setCurrentImgIndexTo(0);
	}

	/*
	class methods:
	- move left - subtract one from index, reassign currentImg to images[newIndex]
	- move right - add one to index, reassign currentImg to images[newIndex]
	
	- isAtStart - does images.indexOf(currentImg) == 0
		- if true and moving left, call wrapLeft
	- isAtEnd - does images.indexOf(currentImg) == images.length - 1
		- if true and moving right, call wrapRight
	
	- wrapLeft - change currentImg from first index to last index
	- wrapRight - change currentImg from last index to first
	*/

	hideImages() {
		let arr = Array.from(this.imageArray);

		arr.forEach((imge) => {
			imge.style.display = "none"
		});
	}

	set currentImg(img) {
		this.hideImages();
		this._currentImg = img;
		this._currentImg.style.display = "flex";
	}

	setCurrentImgIndexTo(newIndex) {
		// always update currentIndex simultaneously with currentImg
		this.currentImg = this.imageArray[newIndex];
		this.currentIndex = newIndex;
	}
	
	isAtStart() {
		return (this.currentIndex === 0);
	}
	
	isAtEnd() {
		return (this.currentIndex === this.imageArray.length - 1);
	}
	
	moveLeft(){
		if (this.isAtStart() === false) {
			// if not at start, move left 1
			setCurrentImgIndexTo(this.currentIndex - 1)
		} else if (this.isAtStart() === true) {
			// if at start, move to end
			setCurrentImgIndexTo(this.imageArray.length - 1)
		}
	}

	moveRight(){
		if (this.isAtEnd() === false) {
			// if not at end, move right 1
			setCurrentImgIndexTo(this.currentIndex + 1)
		} else if (this.isAtEnd() === true) {
			// if at end, move to start
			setCurrentImgIndexTo(0)
		}
	}
}

let carouselElement = document.querySelector('.carousel');
let carousel = new Carousel(carouselElement);
