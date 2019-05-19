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
		this.currentImg = this.imageArray[0]; // start with first one

		/*
		methods:
		- move left - subtract one from index, reassign currentImg to images[newIndex]
		- move right - add one to index, reassign currentImg to images[newIndex]
		
		- isAtStart - does images.indexOf(currentImg) == 0
			- if true and moving left, call wrapLeft
		- isAtEnd - does images.indexOf(currentImg) == images.length - 1
			- if true and moving right, call wrapRight
		
		- wrapLeft - change currentImg from first index to last index
		- wrapRight - change currentImg from last index to first
		*/

		
	}
}